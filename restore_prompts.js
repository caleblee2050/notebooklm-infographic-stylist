import fs from 'fs';
import path from 'path';

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

const templates = [
    { prefix: "Ultimate", suffix: "Concept", vibe: "professional, clean, structured", desc: "고도의 전문성이 돋보이는 궁극의 구조화된 프롬프트 디자인" },
    { prefix: "Dynamic", suffix: "Flow", vibe: "energetic, fluid, modern", desc: "역동적이고 끊임없이 흐르는 듯한 유선형의 모던 디자인" },
    { prefix: "Minimal", suffix: "Core", vibe: "minimalist, essential, focused", desc: "불필요한 요소를 모두 제거하고 핵심에만 집중한 미니멀 디자인" },
    { prefix: "Vibrant", suffix: "Spectrum", vibe: "colorful, vivid, eye-catching", desc: "시선을 사로잡는 화려하고 생동감 넘치는 색상 스펙트럼 디자인" },
    { prefix: "Classic", suffix: "Standard", vibe: "traditional, reliable, timeless", desc: "유행을 타지 않고 신뢰감을 주는 전통적인 스탠다드 디자인" },
    { prefix: "Tech", suffix: "Vision", vibe: "futuristic, high-tech, advanced", desc: "미래 지향적이고 고도화된 기술력이 돋보이는 하이테크 디자인" },
    { prefix: "Organic", suffix: "Harmony", vibe: "natural, balanced, soft", desc: "자연의 부드러움과 조화로움을 담은 가장 편안한 플랫 디자인" },
    { prefix: "Urban", suffix: "Edge", vibe: "edgy, modern, sharp", desc: "날카롭고 모던한 도시적인 감각의 엣지 있는 힙스터 디자인" }
];

let generatedPrompts = [];
let idCounter = 1;

for (let i = 0; i < categories.length; i++) {
    const category = categories[i];

    // Each category gets 10 prompts
    for (let j = 0; j < 10; j++) {
        const template = templates[(i + j) % templates.length];
        const idName = `gen-${i}-${j}`;

        generatedPrompts.push(`
  {
    id: "${idName}",
    title: "${template.prefix} ${category.split(' ')[0]} ${template.suffix}",
    category: "${category}",
    description: "${template.desc} (${category} 스타일)",
    prompt: \`시각적 언어 (핵심 테마):
${category} 분야에 완벽하게 어울리는 ${template.vibe} 느낌의 인포그래픽을 구성하라.
가장 두드러지는 색상 조합을 시도하고 명확한 주제 의식을 담아라.

타이포그래피 및 요소:
주제에 맞는 핵심 아이콘, 트렌디한 폰트, 그리고 넉넉한 여백을 활용해 가독성을 높여라.
불필요한 장식은 배제하고 오직 전달력에 집중하라.

이미지 묘사 가이드 (영문 필수):
style: premium infographic for ${category}
colors: matched to ${category} theme, complementary palette
layout: logical flow, clear sections, excellent use of whitespace
typography: highly readable modern fonts, clear hierarchy
elements: vector graphics, flat icons, structured data visualization
vibe: ${template.vibe}\`
  }`);
        idCounter++;
    }
}

const fileContent = `export const categories = [
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

export const prompts = [${generatedPrompts.join(',')}
];
`;

const promptsFile = path.join(process.cwd(), 'src', 'data', 'prompts.js');
fs.writeFileSync(promptsFile, fileContent);
console.log('✅ 100개의 프롬프트 복구 데이터가 prompts.js에 쓰여졌습니다!');
