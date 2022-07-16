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

|                                                   Language                                                    |                                                                                                                                                                                                                                 Library                                                                                                                                                                                                                                  |
| :-----------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=Javscript&logoColor=white"> | <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"> <br /> <img src="https://img.shields.io/badge/reactrouter-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white"><br /><img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"><img src="https://img.shields.io/badge/antdesign-0170FE?style=for-the-badge&logo=antdesign&logoColor=white"> |

---

## 🔧 구현기능

### Main

## [메인페이지 자동 캐러셀]

- Ant Design library 사용으로 메인 페이지 상단에 들어가는 autoplay 캐러셀 구현

## [등록순 & 좋아요순으로 정렬]

- 메인 페이지 제품을 sort 함수, new Date를 사용해 백엔드에서 받은 mock data key 값을 가져와 등록순, 좋아요 순으로 정렬

## [Main page 전체 상품 리스트업]

- 백엔드 URL 및 mock data를 map 함수를 이용해 백엔드 키값을 display

## [펀딩 모인 금액, 달성률, 남은 일수]

- .toLocaleString로 mock data를 사용해 필요 정보 표시

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

## [좋아요 버튼에 좋아요 카운트 표시 및 클릭시 하트 아이콘 변경 기능 구현]

- 기존 data state 외에 따로 state 사용하지 않고 data state에 isLike key 생성하여
불필요 state를 만들지 않음. 

## [소개, 예산, 후원하기 버튼 클릭시 해당 위치로 이동]

- react-scroll 라이브러리 사용하여 해당 버튼 클릭시 설정된 id가 있는 태그로 이동.

## [모인금액, 달성률 등 toLocaleString method 사용하여 정규식 구현]

- 해당 데이터 정규식 구현 및 조건문 및 변수선언으로 Error 방지 및 가독성 증가. 

## [옵션 체크박스 체크시 후원 버튼 활성화 기능 구현]
- 옵션 박스내 체크박스 state 활용하여 target.checked을 받아 조건문 활용하여 버튼 활성화/비활성화 구현
### Post

## []

- ***

## 💡 느낀점

- 박보현: merge하고 각자 작업하며 백엔드와 통신하면서 메인 페이지에 보여지는 thumbnail 사진과 상세페이지 세부 사항 image의 key 값이 일치되지 않아 포기해야 됐던 항목이 있어서 아쉬웠습니다. 앞으로는 merge를 하고 작업하는 시간을 충분히 확보하고 싶습니다. 1차 프로젝트 때 구현하지 않았던 새로운 기능을 구현해 볼 수 있는 기회가 있어 의미 있었고 라이브러리를 처음 사용하며 다양한 기능을 구현할 수 있는 장점도 경험했습니다. Daily Standup Meeting을 통해

- 박희주: Nav와 Footer는 큰 기능이 없어 예상보다 쉽게 끝냈고 카카오로그인 API를 사용하면서 소셜로그인이 어떤식으로 구동되는지 알게되어 유익했고 환경변수를 활용해 민감정보를 숨긴다는 개념을 처음 이해하게 되었음

- 백광현: 기존 텀블벅 사이트를 그대로 클론 코딩 하는것이 아닌 새롭게 리모델링을 한 프로젝트라 굉장히 흥미롭게 진행한 프로젝트였습니다.  프로젝트 전반적으로는 1차 프로젝트의 경험을 바탕으로 매일 오전standing meeting을 통하여 진행상황 및 계획에 대해 원활한 정보 교환으로 어려움이 없었습니다. 하나 아쉬운 점은 POST의 프로젝트 올리기 기능과 백엔드, 같이 연결되어 있는 상세페이지의 데이터관련 실수가 있어 프로젝트 올리기 기능으로 메인페이지에 올라온 새 글이 상세페이지에선 thumbnail 등 화면에 보여주지 못하는 부분이 있어 아쉬웠습니다. 이 경험을 통해 프론트엔드끼리 뿐만이 아닌 백엔드와의 커뮤니케이션을 더 세세하게 진행해야한다고 느꼇습니다.


- 홍희윤:
