# wanted-pre-onboarding-challenge-fe-27

> [원티드 프리온보딩 프론트엔드 챌린지 11월](https://www.wanted.co.kr/events/pre_challenge_fe_27)에 참여하며 Todo App을 구현한 프로젝트입니다.

## 🖥️ 프로젝트 구현 화면

🔗 [배포 링크](https://hayeonbaek-todo.vercel.app/)

- (추가) 이미지 첨부

## ⏳ 프로젝트 실행 방법

1. 레포지토리 클론 후 디렉토리로 이동

```bash
git clone https://github.com/bhy304/wanted-pre-onboarding-challenge-fe-27

cd wanted-pre-onboarding-challenge-fe-27
```

2. 의존성 라이브러리 설치

```bash
npm install
# or
yarn install
```

3. 개발 서버 실행

```bash
yarn dev # http://localhost:5173 접속
```

4. 프로젝트가 실행되면 브라우저에서 http://localhost:5173 로 접속

### ⚙️ 기술 스택

> (추가) 해당 기술 스택을 선택한 이유 등에 대해 간단하게 설명하기

- (필수) React, Vite, React Router v6, React 함수 컴포넌트(Hooks)
- [React-Hook-Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
- [Shadcn/ui](https://github.com/shadcn-ui/ui)

## ✅ Todo App 구현 과제 요구 사항

### 1️⃣ Login / SignUp

- /auth 경로에 로그인 / 회원가입 기능을 개발합니다
  - 로그인, 회원가입을 별도의 경로로 분리해도 무방합니다
  - [x] 최소한 이메일, 비밀번호 input, 제출 button을 갖도록 구성해주세요
- 이메일과 비밀번호의 유효성을 확인합니다
  - [x] 이메일 조건 : 최소 `@`, `.` 포함
  - [x] 비밀번호 조건 : 8자 이상 입력
  - [x] 이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화 되도록 해주세요
- 로그인 API를 호출하고, 올바른 응답을 받았을 때 루트 경로로 이동시켜주세요
  - [ ] 응답으로 받은 토큰은 로컬 스토리지에 저장해주세요
  - [ ] 다음 번에 로그인 시 토큰이 존재한다면 루트 경로로 리다이렉트 시켜주세요
  - [ ] 어떤 경우든 토큰이 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리다이렉트 시켜주세요

### 2️⃣ Todo List

- Todo List API를 호출하여 Todo List CRUD 기능을 구현해주세요
  - [ ] 목록 / 상세 영역으로 나누어 구현해주세요
  - [ ] Todo 목록을 볼 수 있습니다.
  - [ ] Todo 추가 버튼을 클릭하면 할 일이 추가 됩니다.
  - [ ] Todo 수정 버튼을 클릭하면 수정 모드를 활성화하고, 수정 내용을 제출하거나 취소할 수 있습니다.
  - [ ] Todo 삭제 버튼을 클릭하면 해당 Todo를 삭제할 수 있습니다.
- 한 화면 내에서 Todo List와 개별 Todo의 상세를 확인할 수 있도록 해주세요.
  - [ ] 새로고침을 했을 때 현재 상태가 유지되어야 합니다.
  - [ ] 개별 Todo를 조회 순서에 따라 페이지 뒤로가기를 통하여 조회할 수 있도록 해주세요.
- 한 페이지 내에서 새로고침 없이 데이터가 정합성을 갖추도록 구현해주세요
  - [ ] 수정되는 Todo의 내용이 목록에서도 실시간으로 반영되어야 합니다

### \*️⃣ 과제 참고 사항

1. 로컬 서버를 실행했을 때 생성되는 `db/db.json`이 DB 역할을 하게 됩니다. 해당 파일을 삭제하면 DB는 초기화 됩니다.
2. 로그인 / 회원 가입 기능은 유저를 DB에 추가하고 JWT 토큰을 응답으로 돌려줄 뿐, 실제 유저별로 Todo 목록을 관계 지어 관리하지는 않습니다. (모든 유저가 하나의 Todo를 가짐)
3. 로그아웃은 클라이언트 단에서 localStorage에 저장된 token을 삭제하는 방식으로 간단히 구현해주세요.

### (추가) 폴더 구조 설명

```bash

```

- 폴더를 구분한 기준에 대하여 설명하기

### (추가) 프로젝트를 진행하며 느낀점 혹은 배운점 등
