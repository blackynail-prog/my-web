# 금쪽간호 랜딩페이지

> 간호대학생의 실습 경험을 배움으로 연결하는 교육 플랫폼 — 금쪽간호

## 프로젝트 개요
- **이름**: 금쪽간호 (Gumjok Nursing)
- **목표**: 간호대학생을 위한 교육 플랫폼 랜딩페이지
- **기술 스택**: Hono + Cloudflare Pages + TypeScript + Vite
- **원본 도메인**: https://mskim.online

## 주요 기능

| 섹션 | 설명 |
|------|------|
| Hero | 배지·타이틀·프로필 사진(profile2.jpg) |
| Pain | 6가지 간호대학생 고민 카드 |
| About/강사 소개 | 스토리 → 사진(profile.png) → Notion 스타일 프로필 카드 |
| Belief | 다크 배경, 3가지 핵심 가치 카드 |
| Curriculum | 4개 카테고리 아코디언 (총 16개 세부 항목) |
| How it Works | 4단계 스텝 박스 |
| Proof Strip | 후기·줌스터디·운영방식·전략 수치 |
| Reviews | 1기 수강생 후기 2개 + 2기 예고 카드 |
| CTA | 라이브클래스·2기 참여 카드 + 희소성 바 |
| Footer | 사업자 정보, 링크 |
| Floating CTA 바 | 모바일용 라이브클래스 + 카톡 상담 버튼 |

## 파일 구조

```
webapp/
├── src/
│   └── index.tsx          # Hono 메인 앱 (SSR HTML 렌더링)
├── public/
│   ├── static/
│   │   ├── styles.css     # 전체 CSS (Notion 스타일 디자인 시스템)
│   │   └── app.js         # 프론트엔드 JS (스크롤 애니메이션, 아코디언 등)
│   └── images/            # 이미지 파일 (직접 업로드 필요)
│       ├── logo.png
│       ├── profile.png
│       ├── profile2.jpg
│       └── books.jpg
├── dist/                  # 빌드 결과물 (자동 생성)
├── ecosystem.config.cjs   # PM2 설정
├── vite.config.ts         # Vite 빌드 설정
├── wrangler.jsonc         # Cloudflare 설정
└── package.json
```

## 이미지 설정

현재 이미지가 없을 경우 원본 사이트(`https://mskim.online`)에서 자동으로 fallback됩니다.
실제 이미지를 사용하려면 `public/images/` 폴더에 다음 파일을 추가하세요:

- `logo.png` — 브랜드 로고
- `profile.png` — 강사 소개 섹션용 프로필 사진
- `profile2.jpg` — Hero 섹션용 프로필 사진
- `books.jpg` — 저서 3권 커버 이미지

## 앵커 링크

| 경로 | 내용 |
|------|------|
| `#top` | Hero 섹션 |
| `#pain` | 간호대학생의 현실 |
| `#about` | 강사 소개 |
| `#curriculum` | 커리큘럼 |
| `#how` | 진행 방법 |
| `#reviews` | 수강생 후기 |
| `#cta` | 지금 시작하기 |

## 외부 링크

| 링크 | URL |
|------|-----|
| 카카오채널 | https://pf.kakao.com/_mqkuX |
| 인스타그램 | https://www.instagram.com/sop.mskim |
| 라이브클래스 | https://live-nursing.liveklass.com |

## 개발 & 실행

```bash
# 빌드
npm run build

# 로컬 개발 (PM2)
pm2 start ecosystem.config.cjs

# 배포
npm run deploy
```

## 강사 정보

- **이름**: 김민수
- **소속**: 금쪽간호 대표, 前 서울여자간호대학교 조교수
- **학력**: 가톨릭대 간호학 학사 · 한양대 간호학 석사 · 한양대 간호학 박사수료
- **임상경력**: 권역외상센터 외상프로그램매니저, 권역응급의료센터 간호사
- **저서**: 핵심기본술기 가이드북 / 성인간호학 / 비판적 사고와 간호과정 제2판

## 배포 정보

- **플랫폼**: Cloudflare Pages
- **상태**: 개발 중
- **마지막 업데이트**: 2026-04-10

---

© 2025 금쪽간호 (트리아지)
