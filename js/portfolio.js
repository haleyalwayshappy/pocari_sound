"use strict";

/*HEADER*/
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  var header = document.getElementById('header');

  if (document.documentElement.scrollTop > 70) {
    if (!header.classList.contains('navbar-fixed')) {
      header.classList.add('navbar-fixed');
      document.body.style.marginTop = '70px';
      header.style.display = 'none';
      setTimeout(function () {
        header.style.display = 'block';
      }, 40);
    }
  } else {
    if (header.classList.contains('navbar-fixed')) {
      header.classList.remove('navbar-fixed');
      document.body.style.marginTop = '0';
    }
  }
}

document.getElementById('toggleBtn').addEventListener('click', function() {
  document.getElementById('menu').classList.toggle('show');
});

/* PORTFOLIO SECTION */
function filterSelection(id) {
  var filterItem = document.getElementsByClassName('filterItem');
  
  // 각 필터 아이템에 대해 숨기기/보이기 처리
  for (let item of filterItem) {
    if (id === 'all' || item.classList.contains(id)) {
      item.style.display = '';
      addClass(item, 'show');
    } else {
      item.style.display = 'none';
      removeClass(item, 'show');
    }
  }
  
  // 카테고리 버튼의 활성화 처리
  let categoryBtns = document.getElementsByClassName('listItem');
  for (let btn of categoryBtns) {
    removeClass(btn, 'active');
  }
  addClass(document.getElementById(id), 'active');
}

function addClass(element, name) {
  let arr = element.className.split(" ");
  if (arr.indexOf(name) === -1) {
    element.className += " " + name;
  }
}

function removeClass(element, name) {
  let arr = element.className.split(" ");
  let index = arr.indexOf(name);
  if (index > -1) {
    arr.splice(index, 1);
    element.className = arr.join(" ");
  }
}

// 모든 카테고리 버튼에 대한 이벤트 리스너 설정
let categoryBtns = document.getElementsByClassName('listItem');
for (let btn of categoryBtns) {
  btn.addEventListener('click', function() {
    filterSelection(btn.id);
  });
}

/* 모달 (팝업 버튼 눌렀을때) */
function viewPortfolio(event) {
  // 모달 관련 코드 생략 (이미 존재하거나 필요에 따라 추가)
}

// 모달 닫기 버튼
document.getElementById('modalClose').addEventListener('click', function(){
  document.getElementById('portfolioModal').style.display = 'none';
});

// URL 매개변수 처리를 위한 로직
document.addEventListener('DOMContentLoaded', function() {
  let urlParams = new URLSearchParams(window.location.search);
  let category = urlParams.get('category');
  if (category) {
    filterSelection(category);
  }
});
