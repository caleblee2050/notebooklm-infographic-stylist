import fs from 'fs';
import path from 'path';
import https from 'https';

const categories = [
    "Corporate & Professional",
    "Data & Analytics",
    "Creative & Art",
    "Retro & Vintage",
    "Modern 3D & Isometric",
    "Nature & Organic",
    "Futuristic & Sci-Fi",
    "Educational & Academic",
    "Typography Focused",
    "Infotainment & Fun"
];

// 간단히 각 카테고리별로 연관된 키워드를 지정합니다.
const categoryKeywords = {
    "Corporate & Professional": "business,office,corporate,modern,architecture",
    "Data & Analytics": "data,technology,network,neon,dashboard",
    "Creative & Art": "art,colorful,painting,abstract,creative",
    "Retro & Vintage": "vintage,retro,old,classic,nostalgic",
    "Modern 3D & Isometric": "geometry,3d,abstract,render,shapes",
    "Nature & Organic": "nature,forest,ocean,mountain,landscape",
    "Futuristic & Sci-Fi": "scifi,future,cyberpunk,space,galaxy",
    "Educational & Academic": "school,library,books,education,study",
    "Typography Focused": "typography,text,letters,sign,poster",
    "Infotainment & Fun": "fun,game,puzzle,toy,colorful"
};

const THUMBNAIL_DIR = path.join(process.cwd(), 'public', 'thumbnails', 'generated');

if (!fs.existsSync(THUMBNAIL_DIR)) {
    fs.mkdirSync(THUMBNAIL_DIR, { recursive: true });
}

const promptsFile = path.join(process.cwd(), 'src', 'data', 'prompts.js');
let promptsContent = fs.readFileSync(promptsFile, 'utf8');

const downloadImage = (url, filepath) => {
    return new Promise((resolve, reject) => {
        https.get(url, (response) => {
            // Handle redirects
            if (response.statusCode === 301 || response.statusCode === 302) {
                return downloadImage(response.headers.location, filepath).then(resolve).catch(reject);
            }

            if (response.statusCode !== 200) {
                reject(new Error(`Failed to get '${url}' (${response.statusCode})`));
                return;
            }
            const file = fs.createWriteStream(filepath);
            response.pipe(file);
            file.on('finish', () => {
                file.close(resolve);
            });
        }).on('error', (err) => {
            fs.unlink(filepath, () => reject(err));
        });
    });
};

async function generateThumbnails() {
    console.log('Generating 100 premium placeholder thumbnails...');

    // Extract all prompt IDs from prompts.js
    const idRegex = /id:\s*"([^"]+)"/g;
    let match;
    let count = 0;

    // Since we might be modifying the string while iterating, let's collect all IDs first
    const allIds = [];
    while ((match = idRegex.exec(promptsContent)) !== null) {
        allIds.push(match[1]);
    }

    for (const id of allIds) {
        // Check if image already exists
        const blockRegexStr = `(id:\\s*"${id}"[\\s\\S]*?description:\\s*"[^"]+")(?:\\s*,\\s*image:\\s*"([^"]+)")?`;
        const blockRegex = new RegExp(blockRegexStr, 'g');

        // Determine category to pick a good random image
        const catRegex = new RegExp(`id:\\s*"${id}"[\\s\\S]*?category:\\s*"([^"]+)"`);
        const catMatch = promptsContent.match(catRegex);
        const category = catMatch ? catMatch[1] : "Creative & Art";

        const seed = id.replace(/[^a-zA-Z0-9]/g, '');
        const filename = `${id}.jpg`;
        const filepath = path.join(THUMBNAIL_DIR, filename);
        const publicPath = `/thumbnails/generated/${filename}`;
        const url = `https://picsum.photos/seed/${seed}/800/600`;

        try {
            // Find the specific block
            let currentMatch = blockRegex.exec(promptsContent);
            if (currentMatch) {
                const existingImage = currentMatch[2];

                if (existingImage && !existingImage.includes('generated')) {
                    console.log(`[${count + 1}/100] Skipped ${id} (Kept original image: ${existingImage})`);
                } else {
                    console.log(`[${count + 1}/100] Downloading thumbnail for: ${id}`);
                    await downloadImage(url, filepath);

                    if (!existingImage) {
                        promptsContent = promptsContent.replace(
                            currentMatch[0],
                            `${currentMatch[1]},\n    image: "${publicPath}"`
                        );
                    }
                }
            }
        } catch (e) {
            console.error(`Failed for ${id}:`, e.message);
        }
        count++;

        // Delay to prevent rate limiting
        await new Promise(r => setTimeout(r, 400));
    }

    fs.writeFileSync(promptsFile, promptsContent);
    console.log('\n✅ All 100 thumbnails generated and prompts.js updated!');
}

generateThumbnails();
