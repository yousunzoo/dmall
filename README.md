# 📌 동아제약 공식몰 랜딩 페이지 클론코딩

동아제약 공식몰 클론 코딩 프로젝트.
HTML, CSS 만을 활용하여 해당 홈페이지의 UI를 그대로 구현해보는 프로젝트입니다.

기존 홈페이지의 div들을 시멘틱 태그로 대신하였고, BEM 방법론을 도입해보았습니다.

Parcel bundler와 SCSS를 사용하였습니다.

🔹 제작 기간 : 2022년 12월 22일 ~
🔹 개인 프로젝트

➡️[동아제약 공식몰](https://dmall.co.kr/)

## 사용한 기술

- HTML
- CSS

## 결과물

## 페이지 구조

### header

- header\_\_top
  - header\_\_logo
  - header\_\_search
  - header\_\_member-menu
  - header\_\_member-menu-icon
- header\_\_bottom
  - header\_\_all-btn
  - header\_\_gnb-menu
    - gnb-menu li에 `:hover`되었을 때의 스타일 구현

### main

#### mainCont

= mainCont\_\_visual

- mainCont\_\_prd-recommend
  - 각 상품 li에 `:hover`되었을 때 opacity 조절
- mainCont\_\_banner01
- mainCont\_\_product
  - mainCont\_\_product-new
  - mainCont\_\_product-special
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
  - 클릭 시 올라오는 리스트 구현
  - 맥락 상 select 태그가 맞는 것처럼 보이나, select를 디자인하는데에는 한계가 있어 main-menu, sub-menu 형식으로 구현
- footer\_\_info

### #toTop

- 클릭시 페이지 최상단으로 이동
