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

## []

-

### Post

<img width="870" alt="스크린샷 2022-07-13 오후 5 57 19" src="https://user-images.githubusercontent.com/104307414/179174705-3485b610-bd7f-4882-9140-248597017d08.png">

## [Post - 중첩라우터]

- 탭의 url분리

  - path의 주소값을 바꿈으로써 '기본정보, 펀딩계획'페이지로 이동 가능하도록 구현

- 페이지내부에 Nav 고정화

  - 컨텐츠 이외의 UI는 고정, 컨텐츠 영역만 교체가능

## [Post - DatePicker]

- Ant Design library 사용

## [Post - formdata]

- 여러페이지에서 다양한 type(string, number, image)의 data를 하나로 묶어서 server로 전송
  - useState로 각각 페이지의 값을 하나로 모음
  - formData, axios로 한번에 전송

## 💡 느낀점

- 박보현:

- 박희주:

- 백광현:

- 홍희윤: 단순한 클론코딩이 아니라 기획부터 팀에서 설계하여 진행하여 더 의미있었던 프로젝트였던것 같습니다. 스타일드컴포넌트, 외부라이브러리,중첩라우터, formData, axios등 많은 기능들을 처음으로 써보면서 그만큼 많이 배우고 성장할 수 있는 기회가 되었습니다. 역할을 페이지단위로 잘랐지만 각각 기능들이 여러 페이지에 걸쳐서 상호연계되어있고, 그것이 프론트뿐만아니라 백엔드까지 모두 연결되어있다는 것을 알게 된 프로젝트였습니다. 그만큼 서로 상호작용과 소통이 얼마나 중요한 것인지를 깨닫게 되었습니다. 이번 프로젝트를 통해 배운점으로 바탕으로 더 좋은 페이지를 만들수있도록 노력하겠습니다. 함께해준 팀원들 너무 감사드립니다!
