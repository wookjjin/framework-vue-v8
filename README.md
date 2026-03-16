# 🚀 Vue Framework Vite v8

최신 Vue 3 생태계의 정수만을 모은 고성능 관리자 웹 프레임워크입니다. **Vite 8**, **Tailwind v4**, **Vue Router v5**를 기반으로 하며, 강력한 타입 안정성과 개발 생산성을 목표로 설계되었습니다.


---

## 🚀 Getting Started

**Package Manager**: `pnpm` (v10 이상 권장)

**Node**: 22.21.1 (LTS 권장)

```bash
# 의존성 설치
pnpm install

# 로컬 개발 서버 실행
pnpm dev

# 배포용 빌드
pnpm build

# 빌드 결과물 미리보기
pnpm preview

# Lint 및 타입 체크
pnpm lint
pnpm build (vue-tsc 실행 포함)
```

---

## 🛠 Tech Stack

### Core
- **Vue 3.5+**: 최신 반응성 엔진 및 Composition API (SFC)
- **Vite 8**: 차세대 고속 번들러 및 빌드 도구

### State & Data
- **Pinia & Persistedstate**: 전역 상태 관리 및 브라우저 저장소 연동
- **Axios**: HTTP 클라이언트 (Custom Instance 기반)

### UI & UX
- **Tailwind CSS v4**: `@tailwindcss/vite` 기반의 고성능 CSS 프레임워크
- **Vue Flow**: 노드 기반 워크플로우 및 데이터 시각화
- **VueUse**: 실용적인 Vue Composition Utilities 모음

### Routing & SEO
- **Vue Router v5**: 공식 Vite 플러그인을 통한 파일 시스템 기반 라우팅
- **Unhead**: 선언적 메타 태그 관리

---

## 🏗 Architecture Principles

본 프레임워크는 유지보수와 확장을 위해 다음과 같은 계층 구조를 따릅니다.

### 1. Module Layer (`src/modules/`)
`axios` 인스턴스 설정, `pinia` 초기화 등 외부 라이브러리의 핵심 설정을 관리합니다. 공통 인터셉터나 전역 설정을 한곳에서 제어합니다.

### 2. Service Layer (`src/api/`)
모든 API 호출 로직을 도메인별 서비스 파일로 분리합니다. (예: `user.service.ts`)
컴포넌트에서 직접 `axios`를 호출하지 않고, 정의된 서비스 함수를 호출하여 비즈니스 로직과 데이터 통신부를 격리합니다.

---

## 📂 Project Structure

```text
.
├── .vscode/            # 팀 공통 VSCode 설정 (Extensions, Settings)
├── public/             # 정적 자원
├── src/
│   ├── assets/         # 이미지, 폰트, 전역 CSS (Tailwind entry 포함)
│   ├── components/     # 재사용 가능한 UI 컴포넌트
│   │   ├── base/       # Nuxt UI 기반 커스텀 베이스 컴포넌트
│   │   └── common/     # 레이아웃 구성용 공통 컴포넌트
│   ├── composables/    # VueUse 등 비즈니스 로직 재사용 (Composition API)
│   ├── layouts/        # 페이지 레이아웃 (Default, Empty, Admin 등)
│   ├── pages/          # vue-router 기반 페이지 컴포넌트
│   ├── stores/         # Pinia 상태 관리 (Persistedstate 활용)
│   ├── types/          # 공통 TypeScript 타입 정의
│   ├── utils/          # 순수 자바스크립트/타입스크립트 유틸리티 (Axios 인스턴스 등)
│   ├── App.vue
│   └── main.ts
├── .eslint.config.mjs  # @antfu/eslint-config 설정
├── tailwind.config.ts  # Tailwind CSS 4 설정
├── tsconfig.json       # @vue/tsconfig 기반 설정
└── vite.config.ts      # Vite 8 + @tailwindcss/vite 설정
```
---

## ⚙️ Development Rules

### 1. Alias 경로
`~/` 경로는 `src/` 폴더를 가리킵니다.

```ts
import { userService } from '~/api/user.service'
```

### 2. 자동화 도구

**File-based Routing**: vue-router/vite 플러그인이 src/pages 폴더 구조를 분석해 자동으로 라우트를 생성합니다.

**Auto Import**: ref, computed 등 Vue 핵심 API와 src/composables 내 함수들은 별도의 import 없이 즉시 사용 가능합니다.

**Component Auto-Registration**: src/components 내의 컴포넌트는 템플릿에서 즉시 사용할 수 있습니다.

### 3. API 서비스 작성 예시
서비스 레이어에서는 작성된 axios 인스턴스를 활용하여 데이터 통신을 수행합니다.

```ts
// src/api/user.service.ts

export const userService = {
  getUser: (id: number) => request.get(`/users/${id}`),
  getList: (params: UserParams) => request.get('/users', { params })
}
```

### 4. Naming Conventions
Components: PascalCase (예: BaseButton.vue)

Composables: camelCase 시작, use 접두사 사용 (예: useAuth.ts)

Stores: camelCase 시작, Store 접미사 사용 (예: userStore.ts)

### 5. State Management (Pinia)
상태 보존이 필요한 경우 persist: true 옵션을 사용하세요.
```ts
export const useUserStore = defineStore('user', {
  state: () => ({ name: '' }),
  persist: true
})
```

--- 

## ✨ Key Features

- **Runtime**: [Vue 3.5](https://vuejs.org/) (Composition API, `<script setup>`)
- **Build Tool**: [Vite 8](https://vitejs.dev/) (Next-gen bundling)
- **UI Framework**: [Nuxt UI 4](https://ui.nuxt.com/) & [Tailwind CSS 4](https://tailwindcss.com/)
- **State Management**: [Pinia 3](https://pinia.vuejs.org/) (+ Persistedstate)
- **Code Quality**: [@antfu/eslint-config](https://github.com/antfu/eslint-config) (Standardized Linting)
- **Package Manager**: [pnpm 10+](https://pnpm.io/)