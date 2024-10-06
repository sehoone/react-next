# react=next
> react, nextJS project

### 1. 기본 구성 환경 
- node v20.12.0
- pnpm 9.0.6
- react 18
- next 14.2.14
- eslint 8

### 2. 개발 환경
- Visual Studio Code 1.87.2
- plugins: ES7+ React/Redux/React-Native snippets
- plugins: ESLint
- plugins: Tailwind CSS IntelliSense
- plugins: Typescript React code snippets
- plugins: Auto Close Tag
- plugins: Git History

### 3. 설치
```sh
cd react-next
pnpm i

```

### 4. project 설정
```js
// .vscode/settings.json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  "eslint.format.enable": true,
  "editor.tabSize": 2,
  "editor.wordWrapColumn": 100,
  "editor.formatOnSave": true
}
```

### 5. 서버실행
- Front Server
```sh
pnpm dev
```

### 6. Source Structure

```
- .vscode
  - settings.json : 현재 프로젝트 내에서 사용되는 에디터 설정
├── react-next               # root
  ├── public                 # Contains static assets and index.html
  ├── app                    # Source Directory
    ├── font                 # 글자 font
    ├── types                # global or lib type정의
    ├── utils                # 유틸
    ├── views                # views
       ├── 업무              # 업무별 패키지 생성
          ├── components     # 업무별 Components
    ├── layout.tsx           # 
    ├── page.tsx             # 
  ├── .env.*                 # 환경변수
  ├── eslintrc.js            # eslintrc.js
  ├── .gitignore             # gitignore
  ├── package.json           # package.json
  ├── pnpm-lock.yaml         # package-lock.json
  ├── README.md              # README.md
  ├── tsconfig.json          # 타입스크립트 설정
  ├── next.config.mjs        # Webpack Config
  ...

```
