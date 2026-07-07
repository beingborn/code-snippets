# CodeSnippets

재사용 가능한 프론트엔드 코드 스니펫 모음입니다. 목적(Purpose) 기반으로 분류되어 있으며, 각 컴포넌트는 기술(Tech)별 구현을 제공합니다.

## 📁 폴더 구조

```
CodeSnippets/
├── ui-components/       # 재사용 가능한 UI 컴포넌트
│   └── tab/
│       ├── vanilla/     # Vanilla JS 구현
│       │   └── Tab.html
│       └── react/       # React 구현 (참조용 .md)
│           └── Tab.md
├── animations/          # 애니메이션 패턴
│   └── gsap_scroll_scale.html
├── patterns/            # HTML/CSS 마크업 패턴
│   └── picture-mediaquery.html
└── utilities/           # 유틸리티 함수 & 디버그 도구
    ├── chk-focus-element-when-focus.js
    └── disable-all-style.js
```

## 📖 각 폴더 설명

### `ui-components/`
브라우저에서 바로 사용 가능하거나 프로젝트에 쉽게 적용할 수 있는 UI 컴포넌트입니다.

- **vanilla/** — HTML + CSS + Vanilla JS로 구현된 버전 (브라우저에서 직접 실행 가능)
- **react/** — React 컴포넌트 (`.md` 파일에 코드 블록 + 사용 예시 포함)

**현재 항목:**
- `tab/` — 탭 UI 컴포넌트 (가로/세로 레이아웃 지원, 클래스 상속 기반)

### `animations/`
GSAP, CSS 등을 활용한 애니메이션 패턴입니다.

**현재 항목:**
- `gsap_scroll_scale.html` — 스크롤 시 요소 확대/축소 (모바일 반응형)

### `patterns/`
재사용 가능한 HTML/CSS 마크업 패턴입니다.

**현재 항목:**
- `picture-mediaquery.html` — 반응형 이미지 (picture + source 태그)

### `utilities/`
유틸리티 함수, 디버그 도구 등 작은 단위 코드입니다.

**현재 항목:**
- `chk-focus-element-when-focus.js` — 현재 포커스된 요소 확인
- `disable-all-style.js` — 페이지 모든 스타일 제거

## 🚀 사용 방법

### Vanilla 스니펫 (HTML)
1. 파일을 브라우저에서 직접 열거나
2. 코드를 복사하여 프로젝트에 적용

### React 스니펫 (.md)
1. 해당 `.md` 파일을 열어 코드 블록 확인
2. Props와 사용 예시를 참고하여 프로젝트에 적용
3. TypeScript 타입 정보 확인 가능

### 유틸리티 (JS)
브라우저 콘솔에 직접 붙여넣거나 프로젝트 스크립트에 포함

## 📝 파일 추가 시 가이드라인

### 새 UI 컴포넌트 추가
```
ui-components/[컴포넌트명]/
├── vanilla/[컴포넌트명].html
└── react/[컴포넌트명].md
```

### 새 애니메이션 추가
```
animations/[애니메이션명].html
```

### 새 패턴 추가
```
patterns/[패턴명].html
```

### 새 유틸리티 추가
```
utilities/[기능명].js
```

---

**마지막 구조 업데이트:** 2026-07-07
