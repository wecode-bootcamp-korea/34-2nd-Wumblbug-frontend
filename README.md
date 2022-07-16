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

## []

-

### Login

## []

-

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

-

---

## 💡 느낀점

- 박보현:

- 박희주:

- 백광현: 기존 텀블벅 사이트를 그대로 클론 코딩 하는것이 아닌 새롭게 리모델링을 한 프로젝트라 굉장히 흥미롭게 진행한 프로젝트였습니다.  프로젝트 전반적으로는 1차 프로젝트의 경험을 바탕으로 매일 오전standing meeting을 통하여 진행상황 및 계획에 대해 원활한 정보 교환으로 어려움이 없었습니다. 하나 아쉬운 점은 POST의 프로젝트 올리기 기능과 백엔드, 같이 연결되어 있는 상세페이지의 데이터관련 실수가 있어 프로젝트 올리기 기능으로 메인페이지에 올라온 새 글이 상세페이지에선 thumbnail 등 화면에 보여주지 못하는 부분이 있어 아쉬웠습니다. 이 경험을 통해 프론트엔드끼리 뿐만이 아닌 백엔드와의 커뮤니케이션을 더 세세하게 진행해야한다고 느꼇습니다.


- 홍희윤:
