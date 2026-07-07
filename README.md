# CodeSnippets

재사용 가능한 프론트엔드 코드 스니펫 모음입니다. 목적(Purpose) 기반으로 분류되어 있으며, 각 컴포넌트는 기술(Tech)별 구현을 제공합니다.

## 📁 폴더 구조

```
CodeSnippets/
├── ui-components/       # 재사용 가능한 UI 컴포넌트
│   ├── tab/vanilla/
│   ├── accordion/vanilla/
│   ├── dropdown/vanilla/
│   ├── modal/vanilla/
│   ├── sidebar/vanilla/
│   ├── tooltip/vanilla/
│   ├── progress/vanilla/
│   ├── datepicker/vanilla/
│   ├── file-upload/vanilla/
│   ├── form/vanilla/
│   ├── header/vanilla/
│   ├── list/vanilla/
│   ├── chart/vanilla/
│   └── [component]/react/   # React 구현 (참조용 .md)
├── animations/          # 애니메이션 패턴
│   ├── gsap_scroll_scale.html
│   ├── card-stacking-gsap/
│   ├── mouseover/
│   └── image-hover-effects/
├── patterns/            # HTML/CSS 마크업 패턴
│   ├── picture-mediaquery.html
│   ├── dl-search-input.html
│   ├── list-bullet.html
│   ├── list-mobile-only.html
│   ├── selector-sibling-divider.html
│   ├── icon-style.html
│   └── page-structure.html
└── utilities/           # 유틸리티 함수 & 디버그 도구
    ├── chk-focus-element-when-focus.js
    ├── disable-all-style.js
    ├── window-size-check.html
    └── screen-size-change.html
```

## 📖 각 폴더 설명

### `ui-components/`
브라우저에서 바로 사용 가능하거나 프로젝트에 쉽게 적용할 수 있는 UI 컴포넌트입니다.

- **vanilla/** — HTML + CSS + Vanilla JS로 구현된 버전 (브라우저에서 직접 실행 가능)
- **react/** — React 컴포넌트 (`.md` 파일에 코드 블록 + 사용 예시 포함)

**구성:**
- `tab/` — 탭 UI (접근성, 해시 URL 연결 등)
- `accordion/` — 아코디언 (jQuery)
- `dropdown/` — 드롭다운
- `modal/` — 모달 (심화, 데이터 속성)
- `sidebar/` — 사이드바 (토글, 구조)
- `tooltip/` — 툴팁
- `progress/` — 프로그레스 바 (스텝)
- `datepicker/` — 날짜 선택기 (캘린더)
- `file-upload/` — 파일 업로드 (단일/다중, 커스텀)
- `form/` — 폼 요소 (비밀번호 강도, 입력 받기, 숨겨진 필드)
- `header/` — 헤더 (GNB 2단 메뉴)
- `list/` — 리스트 (투두)
- `chart/` — 차트 (ECharts)

### `animations/`
GSAP, CSS 등을 활용한 애니메이션 패턴입니다.

**구성:**
- `gsap_scroll_scale.html` — 스크롤 시 요소 확대/축소 (모바일 반응형)
- `card-stacking-gsap/` — GSAP ScrollTrigger 기반 카드 적층 애니메이션
- `mouseover/` — 마우스오버 인터랙션 (순수 JS/CSS)
- `image-hover-effects/` — 이미지 호버 효과 (3가지 스타일)

### `patterns/`
재사용 가능한 HTML/CSS 마크업 패턴입니다.

**구성:**
- `picture-mediaquery.html` — 반응형 이미지 (picture + source 태그)
- `dl-search-input.html` — DL 태그 기반 검색창
- `list-bullet.html` — 불릿 리스트
- `list-mobile-only.html` — 모바일 전용 리스트
- `selector-sibling-divider.html` — 선택자 + 형제선택자 구분선
- `icon-style.html` — 아이콘 스타일
- `page-structure.html` — 페이지 구조 템플릿

### `utilities/`
유틸리티 함수, 디버그 도구 등 작은 단위 코드입니다.

**구성:**
- `chk-focus-element-when-focus.js` — 현재 포커스된 요소 콘솔 확인
- `disable-all-style.js` — 페이지 모든 스타일 제거 (개발/테스트용)
- `window-size-check.html` — 브라우저 창 크기 확인
- `screen-size-change.html` — 화면 크기 변경 감지

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

## 📚 출처

이 저장소는 다음 프로젝트에서 통합되었습니다:
- **CodeSnippets**: 목적 기반으로 재분류된 원본 저장소
- **GuideTemplate**: html-guide-template의 재사용 가능한 스니펫들 (포털 UI/학습자료 제외)

---

**마지막 업데이트:** 2026-07-07  
**통합:** GuideTemplate → CodeSnippets
