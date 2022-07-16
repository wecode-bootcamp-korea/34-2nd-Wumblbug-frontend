# Greeneeds

## 📌 목차

1. 프로젝트 개요
2. 구성원 및 구현기능
3. 협업툴
4. 기술 스택
5. 구현기능
6. 느낀점

---

## ✅ 결과물

![GREENEEDS(edit)](https://user-images.githubusercontent.com/97019802/179168222-4c1bd84c-592c-4d52-9fed-86ac5a9f41ca.gif)

## 🚀 프로젝트 개요

- [Tumblbug](https://tumblbug.com/)을 모티브로 팀원들이 함께 재구성한 프로젝트 입니다.

  ### 🗂 프로젝트 기획

  - 기존 웹사이트를 그대로 클론하는 것을 탈피해서 1차 Planning Meeting을 통해 구현하고자 하는 웹사이트를 리모델링
  - 기존 펀딩하고자 하는 카테고리의 종류가 방대해 규모를 축소하고자함
  - 펀딩만의 목적이 아닌 현대 사회에 대두되고 있는 환경문제 개선에 기여하고자 지속가능한 eco-friendly 상품 펀딩사이트로 변경
  - 수익의 5%를 환경보호 및 업사이클링 기여 단체에 기부하는 방식으로 기획

  ### ⛳️ 프로젝트 목표

  - React를 활용하여 SPA에 대한 이해도를 높인다.
  - 외부 라이브러리를 활용해 UI/UX의 질을 향상시킨다.
  - 소셜로그인 기능을 활용하기 위한 API의 요청을 어떻게 하는지 이해한다.

  ### 🗓 기간

  - 2022-7-4 ~ 2022-7-15

---

## 👩‍💻 구성원 및 구현 기능

- [박보현](https://github.com/v-park): Main, Carousel
- [박희주](https://github.com/hjpark625): Nav, Footer, Social-Login
- [백광현](https://github.com/ghbaekdev): Detail
- [홍희윤](https://github.com/namu2267): Post

---

## 🤝 협업툴

- Notion
- Trello
- Slack

---

## ⌨️ 기술 스택

|                                                   Language                                                    |                                                                                                                                                                                                                               Library                                                                                                                                                                                                                                |
| :-----------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=Javscript&logoColor=white"> | <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"> <br /> <img src="https://img.shields.io/badge/reactrouter-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white"> <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"> <img src="https://img.shields.io/badge/antdesign-0170FE?style=for-the-badge&logo=antdesign&logoColor=white"> |

---

## 🔧 구현기능

### Main

## []

-

### Nav, Footer

#### [Footer - 레이아웃 구성]

- 초기 기획단계에서 Footer에는 기능을 빼기로 결정해 styled-components를 활용해 기능없이 레이아웃만 구성

#### [Nav - 로그인 되었을 때 Nav기능 구현]

- Nav로그인이 되어 있지 않을때와 되어있을 때 구분 작업

  - `<Nav />`와 `<LoggendInNav />`로 컴포넌트 두 개로 나누어 작업
  - `localStorage.getItem('token')`을 활용해 로그인이 되어있는지 아닌지 여부 판단(Main.js에 명시)

    ```jsx
    // Main.js의 상단에 명시
    {
      !localStorage.getItem('token') ? <Nav /> : <LoggedInNav />;
    }
    ```

  - 그 후 user의 데이터를 받아와 user_nickname을 뽑아와 로그인 한 유저에 대해 이름을 표시

    ```jsx
    // userData가 통신을 통해 수신받을 때 렌더링하는 조건 추가
    // 데이터가 들어오기 전에 렌더링을 해버리면 없는상태만 유지
    {
      userData && <UserName>{userData.nickname}</UserName>;
    }
    ```

- ProfileOptionBlock이라는 컴포넌트를 만들어 로그인이 안돼있을 때는 Login페이지로 이동하고 로그인이 돼있을 때는 로그아웃을 시키는 기능을 구현

  - 로그인이 안돼있을 때

    ```jsx
    <GoToLogin
      onClick={() => {
        movePage('/login');
      }}
    >
      <ProfileIcon src="images/Nav/profileIcon.png" alt="profile" />
      <LoginButton>로그인/회원가입</LoginButton>
    </GoToLogin>
    ```

  - 로그인이 돼있을 때

    ```jsx
    // 로그아웃 기능을 하는 함수
    const onLogOut = () => {
      localStorage.removeItem('token');
    };

    // 로그아웃 버튼에 함수적용
    <LogoutButton
      onClick={() => {
        onLogOut();
      }}
    >
      로그아웃
    </LogoutButton>;
    ```

### Login

#### [Login - 환경 변수 제작 및 활용]

- .env라는 파일을 만들어 로그인 기능을 구현하기 위한 REST_API키값을 저장하고 .gitignore에 추가하여 commit, push되는 상황을 방지
  ![.env](https://user-images.githubusercontent.com/97019802/179177440-931d9292-775a-4da2-820e-7e4c7028ea02.png)
- 제작한 환경변수를 활용하여 KAKAO_AUTH_URL이라는 변수에 담아 활용

  ```js
  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;

  export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  ```

- 기존에는 a태그를 활용해서 KAKAO_AUTH_URL로 가려고 했으나 a태그의 특성상 마우스를 올렸을 때 URL이 그대로 노출되는 현상이 발생

  - 해당 문제를 해결하기 위해 button태그로 바꿔서 useNavigate를 활용해봤는데 useNavigate는 호스트 URL을 바꿔주지 못하고 그 뒤에 이어서 붙여버리는 문제가 발생
  - window객체를 활용해서 문제를 해결

    ```js
    const goToKakao = () => {
      window.open(KAKAO_AUTH_URL, '_self');
    };
    ```

### Detail

## []

-

### Post

## []

- ***

## 💡 느낀점

- 박보현:

- 박희주:

- 백광현:

- 홍희윤:
