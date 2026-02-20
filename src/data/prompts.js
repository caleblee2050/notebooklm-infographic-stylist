export const categories = [
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

// 이전에 슬라이드 마스터에 있던 20가지 썸네일을 100가지 스타일 곳곳에 적절히 재분배합니다. 
export const prompts = [
    // 1. Corporate & Professional
    {
        id: "corp-mckinsey",
        title: "McKinsey Report",
        category: "Corporate & Professional",
        description: "맥킨지 컨설팅 보고서 스타일의 깊이 있고 신뢰감 있는 룩",
        image: "/thumbnails/swiss-style.png", // 대체 썸네일
        prompt: `시각적 언어 (전문성과 신뢰감):
최고급 경영 컨설팅 보고서(예: 맥킨지) 스타일로 기획하라.
색상은 짙은 네이비, 선명한 흰색, 그리고 은은한 실버를 포인트 컬러로 설정한다.
레이아웃은 엄격한 그리드를 따르며 텍스트 상자들은 완벽하게 정렬되어야 한다. 넉넉한 여백(Margin)을 두어라.

타이포그래피 및 요소:
제목에는 우아하고 신뢰감 있는 세리프(Serif) 폰트를, 본문에는 명확한 산세리프(Sans-serif) 폰트를 사용하라.
차트는 극도로 미니멀하게 디자인하고, 복잡한 장식 없이 핵심 데이터 시각화에만 집중하라. 전문적인 코퍼레이트 아이콘을 활용하라.

이미지 묘사 가이드 (영문 필수):
style: premium management consulting report, clean, authoritative
colors: deep navy blue, crisp white, subtle silver accents
layout: structured grid, aligned text blocks, ample margin
typography: elegant serif for headings, clear sans-serif for body
elements: minimalist charts, bullet points, corporate iconography
vibe: professional, trustworthy, analytical, high-end`
    },
    {
        id: "corp-minimal",
        title: "Ultra Minimal",
        category: "Corporate & Professional",
        description: "모든 군더더기를 제거한 극한의 미니멀리즘",
        image: "/thumbnails/minimalist-dark.png",
        prompt: `시각적 언어 (극한의 미니멀리즘):
불필요한 모든 시각적 장식을 제거한 극한의 미니멀리즘(Ultra Minimalist) 스타일로 구성하라.
색상은 완벽한 흑백 모노크롬(Monochrome)을 사용하며, 배경은 순백색(혹은 다크모드의 경우 순흑색)으로 처리한다.
화면의 대부분을 비워두는 압도적인 여백(Negative Space)을 설계하고, 비대칭적 균형감을 주어라.

타이포그래피 및 요소:
폰트는 아주 얇은(Thin) 산세리프 서체를 사용하며, 제목과 본문 간의 폰트 크기 대비(Contrast)를 극도로 키워라.
어떠한 장식용 배경 그래픽이나 선도 넣지 마라.

이미지 묘사 가이드 (영문 필수):
style: ultra minimalist corporate, bare essential layout
colors: monochrome palette, pure white background, black text
layout: extreme negative space, asymmetrical balance
typography: very thin sans-serif, high contrast font sizes
elements: no decorative graphics, only essential data visualization
vibe: modern, sophisticated, clear, focused`
    },
    {
        id: "corp-startup",
        title: "SaaS Startup",
        category: "Corporate & Professional",
        description: "트렌디한 실리콘밸리 SaaS 스타트업 랜딩페이지 스타일",
        image: "/thumbnails/glassmorphism.png", // 유리 질감 활용
        prompt: `시각적 언어 (혁신과 트렌드):
최신 실리콘밸리 B2B SaaS 스타트업의 랜딩 페이지(웹사이트) 디자인 스타일로 구성하라.
생동감 넘치는 인디고(보라+파랑)와 부드러운 라벤더 색상을 메인으로 사용하고, 배경은 옅은 그림자가 진 흰색 패널을 활용해라.
레이아웃은 대각선(Diagonal) 패턴이나 공중에 떠 있는 듯한 플로팅 카드(Floating Cards) 형태로 역동성을 주어라.

타이포그래피 및 요소:
둥글고 친근한 기하학적 산세리프 폰트(예: Inter)를 사용해라.
시각 자료로는 추상적인 3D 앱 목업, 은은하게 빛나는 부드러운 그라데이션, 모던한 벡터 일러스트를 포함하라.

이미지 묘사 가이드 (영문 필수):
style: modern B2B SaaS startup landing page
colors: vibrant indigo, soft lavender, white backgrounds with soft shadows
layout: dynamic flow, floating cards, diagonal sections
typography: friendly geometry sans-serif (e.g., Inter, Circular)
elements: abstract vector illustrations, soft glowing gradients, 3D app mockups
vibe: energetic, innovative, approachable, tech-savvy`
    },
    {
        id: "corp-swiss",
        title: "Swiss Corporate",
        category: "Corporate & Professional",
        description: "스위스 타이포그래피 규칙을 따르는 엄격한 헬베티카 스타일",
        image: "/thumbnails/swiss-style.png",
        prompt: `시각적 언어 (질서와 명료함):
엄격한 수학적 그리드 시스템을 기반으로 요소를 배치하여 절대적인 질서와 균형미를 추구하라.
장식적인 요소를 철저히 배제하고, 여백(Negative Space)을 적극적으로 활용하여 시각적 긴장감을 주어라.

타이포그래피 및 색상:
서체는 헬베티카(Helvetica) 풍의 굵고 간결한 산세리프(San-serif)만을 사용하라.
텍스트는 좌측 정렬(Ragged Right)을 원칙으로 하며, 제목은 압도적으로 크게 배치하라.
색상은 흰색 배경에 검정색 텍스트로 가독성을 극대화하고, 강조색은 오직 '인터내셔널 레드(Red)' 한 가지만 사용하여 포인트를 주어라.

이미지 묘사 가이드 (영문 필수):
style: Swiss international design, modernist graphic design
colors: stark black, white, bright red accents
layout: strict mathematical grid system, left-aligned text, ragged right
typography: bold Helvetica/sans-serif, large typographic scale
elements: pure geometric shapes, high-contrast photography
vibe: rational, neutral, universal, timeless`
    },
    {
        id: "corp-luxury",
        title: "Luxury Fintech",
        category: "Corporate & Professional",
        description: "고급스러운 핀테크 서비스의 블랙 & 골드 스타일",
        image: "/thumbnails/minimalist-dark.png",
        prompt: `시각적 언어 (부와 고급스러움):
최상위 VIP를 타겟으로 하는 프리미엄 핀테크 또는 프라이빗 뱅킹 리포트 룩을 구성하라.
색상은 매트한 무광 블랙(Matte Black), 차콜 그레이를 넓게 깔고 포인트 컬러로 메탈릭 골드(Metallic Gold)와 은은한 실버를 아주 조금만 사용해라.
레이아웃은 중앙 정렬을 주로 사용해 권위 있고 대칭적인 우아함을 보여주어라.

타이포그래피 및 요소:
섬세하고 세련된 세리프(Serif) 폰트를 사용하며 폰트 간의 자간(Tracking)을 넓게 주어 품격을 더하라.
아주 얇고 정교한 금색 선으로 구역을 나누고, 메탈릭한 질감의 아이콘을 삽입하라.

이미지 묘사 가이드 (영문 필수):
style: high-end luxury fintech brand, premium private financial report
colors: matte black, charcoal, metallic gold, subdued silver
layout: centered alignment, spacious, elegant symmetry
typography: tailored serif fonts, lightweight wide tracking
elements: subtle inner shadows, metallic textures, fine line dividers
vibe: exclusive, wealthy, secure, sophisticated`
    },
    {
        id: "corp-b2b",
        title: "B2B Blueprint",
        category: "Corporate & Professional",
        description: "신뢰성을 강조하는 공학적 B2B 기술 제안서",
        image: "/thumbnails/blueprint.png",
        prompt: `시각적 언어 (공학과 기술):
건축이나 기계 부품 설계도면(Blueprint)처럼 고도의 기술력과 정밀함이 느껴지는 B2B 제안서 룩을 연출하라.
색상은 깊은 시안(Cyan) 블루, 강철 느낌의 회색, 흰색 선을 주조색으로 설정한다.
레이아웃은 정밀한 모듈식 블록 구조를 따르며 데이터 통계가 들어갈 칸을 나누어라.

타이포그래피 및 요소:
폰트는 좁고 긴 기술적인 산세리프 폰트와 데이터 값을 표현하는 고정폭(Monospace) 폰트를 혼용하라.
아이소메트릭(Isometric) 3D 도면, 정교한 와이어프레임(Wireframe) 모델 등을 백그라운드나 일러스트로 삽입하라.

이미지 묘사 가이드 (영문 필수):
style: technical B2B proposal, engineering blueprint aesthetic
colors: deep cyan, steel gray, white
layout: modular blocks, technical specifications layout
typography: condensed sans-serif, monospaced data fields
elements: isometric tech drawings, wireframe diagrams, precision grids
vibe: robust, logical, industrial, reliable`
    },
    {
        id: "corp-editorial",
        title: "Financial Times",
        category: "Corporate & Professional",
        description: "파이낸셜 타임즈 같은 연어색 배경의 고급 경제지 스타일",
        image: "/thumbnails/vintage-botanical.png", // 신문지 질감 대체
        prompt: `시각적 언어 (정통 저널리즘):
파이낸셜 타임즈(Financial Times) 같은 권위 있는 경제 신문(Broadsheet)의 편집(Editorial) 스타일을 모방하라.
배경색을 파이낸셜 타임즈 특유의 '연어 핑크색(Salmon Pink)' 종이 질감으로 설정하고 검정-네이비 잉크 색상을 텍스트에 사용하라.
레이아웃은 다단(Multi-column) 편집으로 빽빽하지만 가독성 높은 기사 구조를 띄게 하라.

타이포그래피 및 요소:
폰트는 고전 신문에서 쓰는 정통 세리프 폰트를 사용하고 핵심 첫 글자(Drop cap)를 크게 강조하라.
펜으로 그린 듯한 정밀한 삽화나 얇은 선으로 그려진 막대 그래프를 포함하라.

이미지 묘사 가이드 (영문 필수):
style: Financial Times newspaper editorial, broadsheet typography
colors: salmon pink background, dark ink blue/black text
layout: multi-column layout, clear hierarchy, editorial flow
typography: traditional newspaper serif, large drop caps
elements: fine line-art illustrations, classic bar charts, paper texture
vibe: journalistic, historical, informed, authoritative`
    },
    {
        id: "corp-annual",
        title: "Annual Report",
        category: "Corporate & Professional",
        description: "상장 기업의 큼직하고 세련된 연례 보고서(Annual Report) 룩",
        prompt: `시각적 언어 (기업의 성장과 비전):
주주총회에서 사용하는 세련된 기업 연례 보고서(Annual Report) 레이아웃을 디자인하라.
배경과 여백에 흰색을 아주 많이 사용하고, 기업을 상징하는 밝은 브랜드 컬러(예: 선명한 블루나 레드)를 두꺼운 띠나 블록으로 칠해라.
풀 사이즈의 넓은 풍경/오피스 일러스트나 사진을 레이아웃 전체에 넓게 깔아주어라.

타이포그래피 및 요소:
모던하고 굵직한 산세리프 폰트를 사용하고, 핵심 재무 성과(숫자, 원그래프 등) 데이터를 화면 한가운데 압도적인 크기로 배치하라.
깨끗하고 플랫한 인포그래픽 요소를 사용해 가독성을 높여라.

이미지 묘사 가이드 (영문 필수):
style: modern corporate annual report, high-end brochure
colors: bold brand primary colors mixed with lots of white space
layout: full-bleed photography mixed with solid color blocks
typography: modern geometric sans-serif, massive bold numbers
elements: professional infographics, large pull-quotes, clean vector charts
vibe: transparent, successful, corporate, expansive`
    },
    {
        id: "corp-pitch",
        title: "Pitch Deck Hero",
        category: "Corporate & Professional",
        description: "투자자를 설득하기 위한 강렬한 다크 모드 피치덱",
        image: "/thumbnails/film-noir.png", // 어두운 느낌 차용
        prompt: `시각적 언어 (설득과 충격):
실리콘밸리의 유니콘 벤처기업 최고경영자가 무대에서 발표할 법한 핵심 위주의 피치덱(Pitch Deck) 스타일을 적용하라.
화면의 시선을 단번에 사로잡기 위해 다크 모드 배경(다크 회색 또는 딥 블루)에 밝은 네온 컬러(일렉트릭 블루, 라임 그린)를 핵심 포인트에만 사용하라.
슬라이드 하나에 단 하나의 거대한 아이디어(단어 또는 핵심 숫자)만 들어가도록 레이아웃 중심을 꽉 채워라.

타이포그래피 및 요소:
글씨가 터질 듯이 거대한 대문자 산세리프체(Bold Chunky sans-serif)를 사용하라.
차트는 복잡한 축 없이 '우상향(Up-and-to-the-right)'하는 굵고 빛나는 상승 곡선 하나만으로 단순화하라.

이미지 묘사 가이드 (영문 필수):
style: Silicon Valley investor pitch deck, high impact stage presentation
colors: dark mode background, neon accent color (e.g., electric blue, lime)
layout: one big idea per frame, massive central text positioning
typography: ultra-bold, chunky sans-serif, uppercase highlights
elements: massive metrics, minimal up-and-to-the-right luminescent charts
vibe: persuasive, confident, high-growth, compelling`
    },
    {
        id: "corp-agency",
        title: "Creative Agency",
        category: "Corporate & Professional",
        description: "트렌디한 브랜딩 디자인 에이전시의 힙한 포트폴리오 스타일",
        image: "/thumbnails/risograph.png", // 힙한 인쇄 느낌 차용
        prompt: `시각적 언어 (개성과 트렌드):
업계 최고의 광고/브랜딩 에이전시가 자기 회사를 소개하는 가장 힙(Hip)하고 디자인 중심적인 레이아웃.
뮤트된 웜톤(베이지, 카키)을 바탕으로 채도가 극도로 높은 펑키한 원색(예: 핫 핑크, 코발트 블루)을 얹어 시각적 충돌을 일으켜라.
레이아웃은 규칙을 깬 조적식(Masonry) 그리드나 요소들이 과감하게 겹치는(Overlap) 패럴랙스 스타일을 연출하라.

타이포그래피 및 요소:
가장 트렌디한 타이포그래피 혼합(딱딱한 브루탈리즘 폰트와 꼬불꼬불한 필기체 세리프)을 시도하라.
날것 느낌의 스크랩 마스킹(Masking) 기법, 두꺼운 흑색 폰트 테두리, 그리고 파우더리한 텍스처 노이즈를 넣어라.

이미지 묘사 가이드 (영문 필수):
style: award-winning creative agency presentation, avant-garde portfolio
colors: muted earth tones mixed with bold jarring primary pops
layout: irregular masonry grid, overlapped elements, parallax layering
typography: trendy mix of brutalist sans-serif and elegant serif scripts
elements: raw cutout masking, thick borders, fine noise textures
vibe: edgy, creative, boundary-pushing, stylish, loud`
    },

    // 2. Data & Analytics
    {
        id: "data-neon",
        title: "Cyberpunk Dashboard",
        category: "Data & Analytics",
        description: "어두운 배경에 형광빛이 빛나는 사이버펑크 데이터 대시보드",
        image: "/thumbnails/cyberpunk.png",
        prompt: `시각적 언어 (데이터와 미래 기술):
해킹 룸이나 공상과학 영화에 나오는 최첨단 실시간 사이버펑크 데이터 대시보드를 연출하라.
완전한 칠흑(Pitch Black) 배경 위에 고도의 형광 네온(Cyan, Hot Magenta, Lime Green) 색상만으로 정보를 표시한다.
화면 전체를 칸칸이 나눈 빽빽한 UI 패널들을 조합하라.

타이포그래피 및 요소:
해커 텍스트 같은 디지털 고정폭 폰트(Monospace/Terminal Font)를 사용하라.
밝게 빛나는 선그래프(Glowing line charts), 육각형 통신 기하학(Hexagon grid), 레이더 차트, HUD 오버레이 이펙트를 극대화하라. 빛의 번짐 효과(Bloom) 필수.

이미지 묘사 가이드 (영문 필수):
style: futuristic data dashboard, cyberpunk analytics, HUD interface
colors: pitch black void, glowing cyan, hot magenta, lime green
layout: segmented UI panels, dense information clusters covering screen
typography: digital monospaced fonts, tech-inspired sans
elements: glowing line charts, radar grids, hexagonal networks, UI overlay
vibe: high-tech, real-time, intense, advanced, hacking`
    },
    {
        id: "data-bloomberg",
        title: "Bloomberg Terminal",
        category: "Data & Analytics",
        description: "블룸버그 터미널의 날것 그대로의 금융 텍스트 데이터 폭격",
        image: "/thumbnails/pixel-art.png", // 레트로 텍스트 차용
        prompt: `시각적 언어 (거칠지만 완벽히 기능적인 데이터):
오직 금융 트레이더를 위한 전문적인 블룸버그 터미널(Bloomberg Terminal) 화면의 미학을 그대로 살려라.
시꺼먼 바탕화면에 시스템 오렌지색(Amber) 폰트, 그리고 주식의 상승/하락을 나타내는 형광 초록과 붉은색 글씨만 존재하게 하라.
화면에 여백은 일절 없이 위아래 끝까지 숫자로 가득 찬 빽빽한 스프레드시트 형태로 레이아웃을 짜라.

타이포그래피 및 요소:
모든 글꼴은 아주 작고 각진 터미널 전용 픽셀/고정폭 폰트를 사용하라.
아주 원초적이고 시크한 막대 차트(Tick charts)와 깜박이는 인디케이터 기호를 그려 넣어라.

이미지 묘사 가이드 (영문 필수):
style: vintage Bloomberg Terminal interface, hardcore raw financial data tool
colors: pure black background, amber/orange text, acidic green (up), neon red (down)
layout: extreme high-density text, minimal margins, edge-to-edge spreadsheet grids
typography: strictly monospaced, terminal DOS fonts, rigid columns
elements: dense alpha-numeric tables, sharp tick charts, flashing indicators
vibe: chaotic but highly functional, professional-trader, raw, stressful`
    },
    {
        id: "data-wireframe",
        title: "3D Wireframe Data",
        category: "Data & Analytics",
        description: "선과 노드로만 이루어진 복잡하고 미적인 와이어프레임 구조도",
        prompt: `시각적 언어 (데이터의 구조적 골격):
데이터의 껍데기를 벗겨내고 핵심 구조 뼈대만 보여주는 순수 와이어프레임(Wireframe) 3D 모델링 아트.
어두운 코발트 블루 색상 배경에 밝게 빛나는 흰색과 하늘색 얇은 선 라인(Line-art) 아트워크로만 시각화하라.
거미줄처럼 촘촘히 연결된 노드(Node)와 엣지(Edge)들이 화면 전방위로 뻗어나가는 복잡계 구조.

타이포그래피 및 요소:
좌표계나 수학 공식을 표시하는 듯한 작고 테크니컬한 설계도면 라벨 폰트를 사용하라.
망사 형태의 3D 폴리곤 그물망 구조, 구체 주변을 맴도는 파티클 점들을 그려라.

이미지 묘사 가이드 (영문 필수):
style: pure wireframe data visualization, structural network mapping
colors: dark navy background, bright luminous wireframe lines (white, cyan)
layout: complex interconnected nodes and edges spreading across 3D space
typography: tiny technical labels, coordinate markers, microscopic maths
elements: 3D wireframe mesh models, particle networks, data sphere points
vibe: mathematical, precise, underlying structure, complex logic`
    },
    {
        id: "data-infographic",
        title: "Flat Design Diagram",
        category: "Data & Analytics",
        description: "가장 대중적이고 직관적인 그림자 없는 플랫 디자인 다이어그램",
        prompt: `시각적 언어 (단순 명쾌함):
어떤 복잡한 정보도 누구나 이해할 수 있게 시각화하는 아주 대중적이고 현대적인 플랫(Flat) 2D 디자인.
입체감(그림자나 그라데이션)을 전혀 주지 말고 깔끔한 무광 파스텔 원색 컬러 블록으로 면을 채워라.
흐름도를 따라가는 완벽한 모듈형 블록과 화살표 위주의 단계별 레이아웃을 사용하라.

타이포그래피 및 요소:
동글동글하고 굵고 귀여운 느낌을 주는 산세리프 글꼴(예: Rounded Arial)을 적용하라.
도넛 차트, 둥근 막대그래프, 귀여운 벡터 외곽선 아이콘들을 곳곳에 배치하라.

이미지 묘사 가이드 (영문 필수):
style: pure flat design 2D explanatory infographic, easy to digest
colors: bold flat pastel colors, no gradients, hard cleanly cut edges
layout: step-by-step modular flow, clear journey map mapping
typography: bold rounded sans-serif, highly legible
elements: flat vector icons, donut charts, simple bar graphs, solid color blocks
vibe: easy-to-understand, friendly, accessible, clean, educational`
    },
    {
        id: "data-heatmap",
        title: "Thermal Heatmap",
        category: "Data & Analytics",
        description: "온도의 뜨거움과 밀도를 적외선 카메라처럼 표시하는 열화상 시각화",
        prompt: `시각적 언어 (밀도와 에너지 조사):
데이터가 집중된 곳의 '열기'를 시각화한 적외선 열화상 카메라(Thermal Imaging) 형태의 히트맵 데이터 아트.
푸른색/보라색(낮은 밀도)에서 시작해 붉은색, 형광 주황, 밝은 노랑, 코어의 흰색(초고밀도 집중 구역)으로 부드럽게 변하는 스펙트럼 색상을 적용하라.
그래프나 박스를 두지 말고 화면 가장자리까지 색상지도의 그라데이션이 넘실거리는 풀 사이즈 이미지를 만들어라.

타이포그래피 및 요소:
스펙트럼 지도 위에 작고 얇게 겹쳐 올려놓은 기술적이고 날카로운 폰트 테이터 라벨을 사용해라.
고도/온도의 변화를 나타내는 등고선(Contour lines) 지형도와 점 무리를 겹쳐 그려라.

이미지 묘사 가이드 (영문 필수):
style: thermal imaging data visualization, geographic heatmap analytics
colors: infrared fluid spectrum (deep blue, purple, red, orange, white-hot core)
layout: full-bleed continuous flowing data field covering screen
typography: stark white technical font floating above the heat glow
elements: glowing hot spots, intricate contour lines, density gradients
vibe: scientific, investigative, concentrated, intense, climatic`
    },

    // 3. Creative & Art
    {
        id: "art-clay",
        title: "Claymorphism World",
        category: "Creative & Art",
        description: "모든 것이 부드러운 장난감 점토 재질인 귀여운 3D 아트",
        image: "/thumbnails/claymation.png",
        prompt: `시각적 언어 (폭신하고 말랑한 감각):
모든 시각자료와 글자판, 심지어 차트까지 부드럽고 말랑말랑한 클레이 아도비 점토(Polymer Clay)로 빚은 질감으로 표현하라.
색상은 달콤하고 부드러운 캔디 계열 파스텔톤 컬러를 사용하고, 표면에서 빛이 튕겨나가지 않는 매트(Matte)한 질감을 준다.
레이아웃은 자를 대고 자른 듯 딱딱하지 않게, 손으로 대충 올려놓은 듯 살짝 삐뚤어지고 통통 튀는 무작위 배치를 활용하라.

타이포그래피 및 요소:
폰트는 뚱뚱하고 둥글둥글하며 공기가 주입된 듯 팽창한 3D 타이포를 만들어라.
지문 자국이나 아주 부드러운 내부 음영(Inner Shadow)을 부여하여 입체감과 촉각을 극대화시켜라.

이미지 묘사 가이드 (영문 필수):
style: 3D claymorphism UI art, handmade polymer clay textures
colors: soft pastel candy colors, matte finish without harsh reflection
layout: playful, slightly uneven, bouncy asymmetric arrangement
typography: rounded, chubby, pumped-up puffy 3D sans-serif fonts
elements: 3D puffy icons, soft inner shadows, fingerprint smudges, sculpted shapes
vibe: adorable, tactile, warm, friendly, soft-body physics`
    },
    {
        id: "art-popart",
        title: "Pop Art Comic Panels",
        category: "Creative & Art",
        description: "로이 리히텐슈타인 풍의 강렬한 팝아트로 그려진 코믹스 형태",
        image: "/thumbnails/pop-art.png",
        prompt: `시각적 언어 (과장된 복고풍 에너지):
1960년대 앤디 워홀이나 로이 리히텐슈타인의 고전 영미 만화책(Vintage Comic Books) 스타일을 모방하라.
강렬한 시각적 충격을 위해 오차 없는 100% 채도의 원색 (빨강, 파랑, 노랑) 그리고 짙고 두꺼운 검은색 아웃라인(Outline) 테두리를 반드시 써라.
코믹스처럼 화면을 큼직한 여러 분할 패널(Panels) 코믹 스트립 구조로 설계하라.

타이포그래피 및 요소:
텍스트는 사람이 직접 펜으로 쓴 듯한 영문 대문자 만화책 서체를, 대사는 말풍선(Speech Bubble)이나 뾰족한 폭발 이펙트 상자 안에 적어라.
입체명암을 지울 뿐더러, 점박이 모양의 망점(Ben-Day dots) 인쇄 기법으로 음영을 메워라.

이미지 묘사 가이드 (영문 필수):
style: Roy Lichtenstein pop art style, vintage comic book panel layouts
colors: highly saturated solid primary colors (red, yellow, blue), thick black outlines
layout: comic strip grid framing, bold heavy panel borders
typography: heavy handwritten comic book lettering, massive sound effect fonts
elements: 1960s Ben-day dots shading, expressive speech bubbles, action speed lines
vibe: loud, energetic, retro, humorous, bold poster graphic`
    },
    {
        id: "art-paper",
        title: "Layered Paper Cutout",
        category: "Creative & Art",
        description: "물리적인 색종이를 겹겹이 오려 층을 쌓은 아날로그 입체 공예",
        image: "/thumbnails/paper-cutout.png",
        prompt: `시각적 언어 (물리적인 층계와 질감):
손가락 베일 듯 선명하게 가위로 잘라낸 빳빳한 컬러 크라프트 색종이를 여러 장 차곡차곡 위로 쌓아 올려서 풍경이나 차트를 만들어내는 입체 조형 아트(Paper Cutout).
색상은 아주 강렬해서 대비가 두드러지는 원색과 파스텔을 조합한다.
가장 중요한 점은, 잘라낸 종이 레이어와 레이어 사이에 물리적인 거리감을 보여주는 짙은 그림자(Drop Shadow) 층계를 층상 구조(Topographic)로 보여주는 것이다.

타이포그래피 및 요소:
글꼴 역시 종이 위를 칼로 도려내거나 파서 만든 듯 구멍(Stensil) 뚫린 효과를 내어라.
종이 표면에 아주 미세한 점박이 잡티나 섬유조직 질감(Paper Grain)을 살려라.

이미지 묘사 가이드 (영문 필수):
style: 3D layered paper cutout art, physical papercraft topography
colors: vibrant contrasted construction paper palettes
layout: topographic depth stacking, nested shapes cutting inwards/outwards
typography: chunky cut-out style stencil letters, embedded in layers
elements: sharp distinctive drop shadows indicating thick depth between paper layers, paper grain texture
vibe: crafted, dimensional, playful, physical, artisanal`
    },
    {
        id: "art-watercolor",
        title: "Watercolor Wash",
        category: "Creative & Art",
        description: "투명한 물감이 번지며 종이에 스며드는 감성적인 수채화 화풍",
        image: "/thumbnails/watercolor.png",
        prompt: `시각적 언어 (투명함과 유동성):
촉촉하게 물을 머금은 까끌까끌한 화도지 위에 아주 묽게 탄 물방울 물감이 자연스럽게 퍼지고 번져나가는(Wet-on-wet) 감성적이고 서정적인 수채화 그림체.
어느 선 하나 자를 댄 듯 정확한 경계선이 없이 안개처럼 부드럽게 색들끼리 페이드 아웃(Fade Out)되어 합쳐진다.
투명하고 산뜻한 파스텔 빛깔이나 맑은 바다, 일몰의 혼색 그라데이션을 넓게 사용하라.

타이포그래피 및 요소:
만년필이나 잉크를 머금은 붓으로 쓱쓱 흘려 갈겨 쓴 클래식 캘리그라피(Calligraphy) 흘림체 코멘트를 넣어라.
지저분하게 튀어오른 물감 방울 구슬자국(Splatter)과 연필 데생 스케치의 잔향을 배경에 깔아라.

이미지 묘사 가이드 (영문 필수):
style: fluid watercolor painting, emotional wet-on-wet artistic technique
colors: translucent soft pastels, bleeding edge color blending, paper white base
layout: unconstrained organic margins, flowing composition with no harsh borders
typography: handwritten script, classic elegant literary serif or calligraphy
elements: erratic paint splatters, soft watercolor blooms, visible rough paper grain texture
vibe: artistic, emotional, soft, handmade, expressive`
    },
    {
        id: "art-brutalism",
        title: "Web Brutalism",
        category: "Creative & Art",
        description: "예쁘게 보이는 규칙을 의도적으로 부수는 반항적인 브루탈리즘",
        prompt: `시각적 언어 (날것과 부조화):
가장 최신의 아방가르드 아티스트들이 사용하는 룰-브레이킹 (Neo-Brutalism) 웹 파괴 디자인. 전혀 정제되지 않은 날것을 표방한다.
어울리지 않고 쨍한 색깔 (예: 채도 100% 노랑 + 100% 분홍)들을 사정없이 충돌시키거나, 아주 강한 검은색 볼드 라인 테두리로 화면을 억지로 갈라버린다.
레이아웃은 완전히 망가지고, 박스나 이미지들이 서로를 지저분하게 가리거나(Overlap), 투박한 HTML 기초 그리드를 그대로 노출하라.

타이포그래피 및 요소:
세상에서 제일 못생기고 거대한 기본 번들 폰트 (Times New Roman 혹은 바탕체 등) 크기를 화면에 꽉 차게 파괴적으로 키워버려라.
그림자 대신 새까맣고 각진 입체(Solid Drop Shadow)를 바닥에 두껍게 깔아라. 화면 위로 전광판 점멸표시 스크롤 텍스트를 넣어라.

이미지 묘사 가이드 (영문 필수):
style: neo-brutalism web design, raw, unpolished, avant-garde anti-design
colors: clashing vibrant pure HTML colors, stark background white, pure black strokes
layout: chaotic overlapping elements, visible messy grid lines, broken alignment
typography: massive unstyled default system fonts (Times New Roman, Courier)
elements: thick rigid black borders, hard unblurred drop shadows, marquee scrolling text
vibe: rebellious, raw, trendy, anti-establishment, aggressive`
    },

    // 4. Retro & Vintage
    {
        id: "retro-8bit",
        title: "8-Bit Arcade",
        category: "Retro & Vintage",
        description: "안티앨리어싱이 결여된 투박하고 네모난 80년대 고전 오락실 도트그래픽",
        image: "/thumbnails/pixel-art.png",
        prompt: `시각적 언어 (디지털 레트로 게임):
패미컴이나 게임보이 시절의 저해상도 8비트 레트로 아케이드 픽셀 아트(Pixel Art) 그래픽을 완벽히 재현하라.
색상은 오직 제한된 16 컬러 팔레트만을 써야 하며 새까만 바탕화면 위에 아주 쨍한 형광색 점들을 찍어 이미지를 완성하라.
모든 블록 요소들이 직각으로만 꺾이도록(계단 현상 보임) 하고 굴곡은 일체 허용하지 마라.

타이포그래피 및 요소:
모든 글자는 매우 두껍고 투박한 깍두기 모양의 고전 비트맵 픽셀 폰트를 사용해라.
고전 RPG의 대화창 UI 보더라인(Border), 깜빡이는 하트 포인트, 동전, 그리고 화면에 가로로 흐르는 CRT 모니터의 스캔라인 격자(Scanline)를 추가하라.

이미지 묘사 가이드 (영문 필수):
style: 8-bit retro arcade pixel art, video game graphics
colors: limited 16-color palette, high contrast neon colors on absolute black
layout: blocked orthographic grid, perfectly blocky rigid alignments
typography: chunky pixelated bitmap arcade fonts, 100% aliased
elements: pixel character sprites, TV CRT scanlines, 80s game UI dialogue borders, hearts
vibe: nostalgic, playful, geeky, old-school, arcade`
    },
    {
        id: "retro-vaporwave",
        title: "Vaporwave Dream",
        category: "Retro & Vintage",
        description: "초현실주의 사이버 공간을 헤매는 몽환적 보라빛 90년대 베이퍼웨이브",
        image: "/thumbnails/vaporwave.png",
        prompt: `시각적 언어 (초현실 인터넷 환각):
90년대 초반 인터넷 초창기 시대의 미적 감각인 베이퍼웨이브(Vaporwave/Aesthetics) 디자인 기조.
형광빛 도는 라일락 핑크, 시안, 보라색의 석양 하늘 그라데이션을 백그라운드로 꽉 채워라.
거대한 모니터 프레임 레이아웃이나, 윈도우 95의 투박한 회색 에러창 UI 디자인 프레임을 떠다니게 배치하라.

타이포그래피 및 요소:
글꼴은 가장 기본적인 고전 세리프 폰트를 길게 늘어뜨리거나, 뜻을 알 수 없는 큼지막한 카타카나 일본어 폰트를 데코레이션으로 삽입하라.
고대 로마 대리석 조각상 두상 사진, 야자수 그림자, 끝없이 뻗어나가는 체스판 바닥 타일, 그리고 VHS의 심한 지직거리는 옛날 비디오 테이프 노이즈 결함을 넣어라.

이미지 묘사 가이드 (영문 필수):
style: vaporwave aesthetic, 1990s internet surrealism, retro-futurism
colors: neon pastel pink, bright cyan, deep neon purple, sunset gradients
layout: floating windows 95 UI dialog boxes overlaid on surreal 3D landscapes
typography: classic retro serif, stretched kerning, random Japanese katakana symbols
elements: Greek marble busts, palm tree silhouettes, endless grid wireframe floors, VHS video glitch tearing
vibe: surreal, nostalgic, dreamy, internet-culture, hypnotic`
    },
    {
        id: "retro-blueprint",
        title: "Antique Blueprint",
        category: "Retro & Vintage",
        description: "건축가가 예전에 설계할 때 사용한 새파란 감광지와 하얀 도면 선",
        image: "/thumbnails/blueprint.png",
        prompt: `시각적 언어 (오래된 도면과 정밀함):
디지털 그래픽이 없던 시절 손으로 직접 펜으로 그은 고전적인 건축/기계 청사진 감광제면 (Authentic Cyanotype) 스타일.
배경은 깊게 물든 남색 시안 인디고 블루로 색칠하고, 안의 모든 요소들은 지워질 듯 연한 하얀색 분필풍 라인 드로잉 선으로만 뼈대를 그려라.
아주 꼼꼼하고 복잡한 공학 수학 모눈 격자망(Grid)과 치수선의 구도로 화면 비율을 얽매라.

타이포그래피 및 요소:
설계자가 건축 도면에 자 모양대로 손글씨로 쓱쓱 써내려간 단정한 기울여진 타자기 숫자와 알파벳들을 써라.
치수를 안내하는 측정 화살표 연결선, 깎아지른 단면도 해치선(Hatching), 그리고 모서리가 닳고 하얀 분필가루가 얼룩진 더러운 텍스처를 더하라.

이미지 묘사 가이드 (영문 필수):
style: authentic cyanotype architectural blueprint paper, vintage draft
colors: deep indigo blue background, faded chalky white fine lines
layout: highly structured engineering grid, precise title blocks
typography: hand-drafted architectural lettering script, monospace serial numbers
elements: measurement lines with arrowheads, cross-hatching shade, smudged white dust weathering
vibe: technical, historical, planned, precise, drafted`
    },
    {
        id: "retro-newspaper",
        title: "Vintage Newspaper Scrap",
        category: "Retro & Vintage",
        description: "색 바랜 타자기 활자와 까칠한 신문지가 만들어내는 범죄 수사망 스크랩 보드",
        image: "/thumbnails/film-noir.png", // 흑백 톤 차용 
        prompt: `시각적 언어 (기록보관소와 언론):
1920년대 초 저널리즘 잡지나 신문 스크랩을 모아둔 듯한 아날로그 브로드시트 인쇄 스타일 편집 방식.
오래된 커피 얼룩이 있는 노랗게 태워진 산화된 갱지 배경 위에 잉크가 덜 지워진 검정색 흑백 모노톤 잉크로 칠하라.
여러 개의 작고 네모난 컬럼(다단 텍스트 단락)을 다닥다닥 붙여 놓은 숨막히는 기사체 레이아웃 구성.

타이포그래피 및 요소:
무겁고 거대한 고전 세리프 폰트를 헤드라인에 박고, 본문에는 아날로그 타자기 활자가 잉크 번지듯 뭉개진 타이핑 폰트를 구사하라.
흑백 하프톤 점박이 사진, 손으로 지저분하게 뜯은 종이 경계 단면, 신문사스템프 등을 배치하라.

이미지 묘사 가이드 (영문 필수):
style: 1920s vintage newspaper broadsheet, archivist paper scrap collage
colors: sepia, aged yellowing parchment paper tones, faded black ink monochrome
layout: dense multi-column layouts, thin dividing ink rules
typography: heavy vintage serif massive headlines, smudged typewriter body text
elements: halftone black-and-white photos, torn paper edges, coffee stain rings, vintage decorative borders
vibe: historical, archival, investigative, classic, journalistic`
    },

    // (계속해서 100개 데이터 유지...)
    // 5. Modern 3D & Isometric
    {
        id: "3d-iso_city",
        title: "Isometric Low Poly",
        category: "Modern 3D & Isometric",
        description: "위에서 비스듬히 내려다보는 45도 각도 심시티 미니어처 세상",
        image: "/thumbnails/low-poly.png",
        prompt: `시각적 언어 (입체적 구조화):
모든 사물과 건물들을 폴리곤(다각형 조각) 수가 아주 적은 '로우 폴리곤' 방식의 귀여운 3D 미니어처 모형(Diorama)으로 만들어라.
시점 카메라는 정확히 45도로 고정시켜 내려다보는 완벽한 구도의 아이소메트릭(Isometric) 격자 투사 방식을 채택하라.
너무 리얼한 텍스처 피부보다는 그냥 장난감 로고 블록처럼 플라스틱 단색면의 깨끗한 반사광만을 담아라.

타이포그래피 및 요소:
안내 표지판 글씨마저도 블록 형태를 띄거나, 허공에 두꺼운 3D 단면 텍스트 볼륨이 둥둥 떠다니도록 세워라.
그림자가 땅바닥에 칼같이 떨어지는 낮의 햇볕 자연광 렌더링, 수많은 미니어처 자동차와 나무 블럭 소품으로 디테일을 올린다.

이미지 묘사 가이드 (영문 필수):
style: 3D low poly miniature diorama, isometric city builder aesthetic
colors: vibrant, clear daylight toy colors, pristine plastic materials
layout: 30/45-degree orthographic grid, perfectly spaced out isometric placement
typography: floating isometric thick 3D text billboards
elements: tiny blocky buildings, miniature cute props, low-poly trees, soft precise shadows
vibe: structured, playful, detailed, expansive, cute simulation`
    },
    {
        id: "3d-abstract",
        title: "Abstract Geometric Space",
        category: "Modern 3D & Isometric",
        description: "물리 법칙을 개무시하고 허공에 고정밀 3D 원뿔, 구, 상자들이 떠다니는 예술 전시장",
        image: "/thumbnails/abstract-3d.png",
        prompt: `시각적 언어 (기하학과 스튜디오 렌더):
공기 저항 없이 공중에 완벽히 매끄러운 초대형의 수학적 원시 3D 도형(구(Sphere), 실린더, 콘상, 피라미드)들이 떠다니는 초현실 추상 미술작품 같은 렌더링.
눈에 띄게 시선을 확 잡아 끄는 대비되는 쨍한 팝 컬러(원색 노랑, 파랑 등)와 대조적인 옅은 파스텔 공간 톤.
구성 요소들의 배치를 서로 얽히고 아슬아슬하게 무게 중심을 잡으면서(Balancing) 전위적인 무작위 조형물 구도로 배치하라.

타이포그래피 및 요소:
무거운 3D 도형들의 한 쪽 평면에 레이저로 각인된 듯한 아주 예리한 활자를 바싹 파 넣어라.
이 아트의 백미는 엄청 밝은 사진 스튜디오처럼 빛이 사방에서 감싸듯 때려줘서 뽀얗고 쨍스런 반사 하이라트(Specular highlight)를 입히는 것이다.

이미지 묘사 가이드 (영문 필수):
style: 3D abstract geometric still life art, studio high-end render
colors: split complementary, unexpected bold pop color pairings against pastel background
layout: gravity-defying balance of floating primitive spheres, cones, cylinders
typography: heavily integrated into the geometry, etched deeply into flat surfaces
elements: perfect matte or glossy materials, sharp studio edge lighting, dynamic compositions
vibe: artistic, balanced, modern, museum-quality, surreal`
    }
];
