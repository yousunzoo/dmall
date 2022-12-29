# 📌 동아제약 공식몰 랜딩 페이지 클론코딩

동아제약 공식몰 클론 코딩 프로젝트.
HTML, CSS 만을 활용하여 해당 홈페이지의 UI를 그대로 구현해보는 프로젝트입니다.

기존 홈페이지의 div들을 시멘틱 태그로 대신하였고, BEM 방법론을 도입해보았습니다.

✔️ Parcel bundler와 SCSS를 사용하였습니다.<br>
✔️ 슬라이드 기능을 위해 Swiper.js를 사용하였습니다.
<br><br>
🔹 제작 기간 : 2022년 12월 22일 ~ 29일<br>
🔹 개인 프로젝트
<br><br>
➡️[동아제약 공식몰](https://dmall.co.kr/)<br>
➡️[클론코딩 결과물](https://warm-cupcake-dc13ac.netlify.app/)
<br><br><br><br>

## 🗒️ 페이지 구조

### header

- header\_\_top
  - header\_\_logo
  - header\_\_search
  - header\_\_member-menu
  - header\_\_member-menu-icon
- header\_\_bottom
  - header\_\_all-btn
  - header\_\_gnb-menu - gnb-menu li에 `:hover`되었을 때의 스타일 구현
    <br><br>

### main

#### mainCont

- mainCont\_\_visual

  - Swiper.js 사용

- mainCont\_\_prd-recommend
  - 각 상품 li에 `:hover`되었을 때 opacity 조절
- mainCont\_\_banner01
- mainCont\_\_product
  - mainCont\_\_product-new
  - mainCont\_\_product-special
    - Swiper.js 사용
- mainCont\_\_shopping-trend
  - 각 상품 li에 `:hover`되었을 때 opacity 조절
- mainCont\_\_event
- mainCont\_\_gift
- mainCont\_\_product-new
- mainCont\_\_banner02
- mainCont\_\_brand
- mainCont\_\_product-hot
- mainCont\_\_product-save
- mainCont\_\_product-delivery
- mainCont\_\_movie-box
  - mainCont\_\_youtube
  - mainCont\_\_intro
- mainCont\_\_inquiry
- mainCont\_\_board
  - mainCont\_\_notice
  - mainCont\_\_info

#### mainNav

- mainNav\_\_member-status
- mainNav\_\_member-service
- mainNav\_\_monthly-magazine
  - `position:sticky`를 사용해 mainNav 영역이 끝날 때까지 스크롤을 따라오는 기능 구현

### footer

- footer\_\_shop-util
- footer\_\_family-site
  - 클릭 시 올라오는 리스트 구현 (`transition` 속성 사용)
  - 패밀리 사이트 li에 tabindex를 주고, `:focus` 상태일 때의 디자인 구현
- footer\_\_info

### #toTop

- 클릭시 페이지 최상단으로 이동(`<a href="#wrap">`)
