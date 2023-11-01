"use strict";

/*HEADER*/
window.onload = function () {
  scrollFunction()
};
window.onscroll = function () {
  scrollFunction()
};


function scrollFunction() {
  var header = document.getElementById('header');

  if (document.documentElement.scrollTop > 70) {
    if (!header.classList.contains('navbar-fixed')) {
      header.classList.add('navbar-fixed');
      document.getElementsByTagName('body')[0].style.marginTop = '70px';
      header.style.display = 'none';
      setTimeout(function () {
        header.style.display = 'block';
      }, 40);
    }
  } else {
    if (header.classList.contains('navbar-fixed')) {
      header.classList.remove('navbar-fixed');
      document.getElementsByTagName('body')[0].style.marginTop = '0';
    }
  }
}

function menuToggle() {
  document.getElementById('menu').classList.toggle('show');

}

document.getElementById('toggleBtn').addEventListener('click', menuToggle);



/*welcome area*/

var imageSlideIndex = 1;

showImageSlides(imageSlideIndex);

//이미지 슬라이드 타이머 
function imageSlideTimer() {
  plusImageSlides(1);
}
var imageTimer = setInterval(imageSlideTimer, 5000); //초설정


function plusImageSlides(n) {
  clearInterval(imageTimer);
  imageTimer = setInterval(imageSlideTimer, 5000);
  showImageSlides(imageSlideIndex += n);
}

function currentImageSlide(n) {
  clearInterval(imageTimer);
  imageTimer = setInterval(imageSlideTimer, 5000);
  showImageSlides(imageSlideIndex = n);


}

function showImageSlides(n) {
  var i;
  var slides = document.getElementsByClassName('image-slide');
  var dots = document.getElementsByClassName('dot');
  if (n > slides.length) {
    imageSlideIndex = 1
  }
  if (n < 1) {
    imageSlideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[imageSlideIndex - 1].style.display = 'block';
  dots[imageSlideIndex - 1].className += ' active';
}
//옆으로 누르기 했을때 넘어가는 터치리스너
document.getElementById('imagePrev').addEventListener('click', plusImageSlides.bind(null, -1));
document.getElementById('imageNext').addEventListener('click', plusImageSlides.bind(null, 1));
//닷 누르기 했을때 넘어가는 터치리스너 
document.getElementById('firstDot').addEventListener('click', currentImageSlide.bind(null, 1));
document.getElementById('secondDot').addEventListener('click', currentImageSlide.bind(null, 2));
document.getElementById('thirdDot').addEventListener('click', currentImageSlide.bind(null, 3));
document.getElementById('forthDot').addEventListener('click', currentImageSlide.bind(null, 4));
document.getElementById('fifthDot').addEventListener('click', currentImageSlide.bind(null, 5));
document.getElementById('sixthDot').addEventListener('click', currentImageSlide.bind(null, 6));
document.getElementById('seventhDot').addEventListener('click', currentImageSlide.bind(null, 7));

/* PORTFOLIO SECTION */

  filterSelection('all');
  function filterSelection(id) {
    var listItem, filterItem, i;
    listItem = document.getElementsByClassName('listItem');
    filterItem = document.getElementsByClassName('filterItem');
  
    for (i = 0; i < listItem.length; i++) {
      removeClass(listItem[i], 'active');
    }
  
    addClass(document.getElementById(id), 'active');
  
    if (id === 'all') {
      let categories = {};
  
      for (i = 0; i < filterItem.length; i++) {
        removeClass(filterItem[i], 'show');
        filterItem[i].style.display = 'none'; // 우선 모두 숨김 처리
  
        filterItem[i].classList.forEach(className => {
          if (className !== 'filterItem' && className !== 'listItem') {
            categories[className] = (categories[className] || 0) + 1;
  
            if (categories[className] <= 4) {
              addClass(filterItem[i], 'show');
              filterItem[i].style.display = ''; // 기존 스타일로 복원
            }
          }
        });
      }
    } else {
      for (i = 0, count = 0; i < filterItem.length; i++) {
        removeClass(filterItem[i], 'show');
        filterItem[i].style.display = ''; // 기존 스타일로 복원
    
        if (filterItem[i].classList.contains(id)) {
          if (count < 4) {
            addClass(filterItem[i], 'show');
            count++;
          } else {
            filterItem[i].style.display = 'none'; // 5번째부터 숨김 처리
          }
        } else {
          filterItem[i].style.display = 'none'; // 해당 카테고리가 아닌 경우 숨김 처리
        }
      }
    }
  }
  
  function addClass(element, name) {
    var arr = element.className.split(" ");
    if (arr.indexOf(name) === -1) {
      element.className += " " + name;
    }
  }
  
  function removeClass(element, name) {
    var arr = element.className.split(" ");
    var index = arr.indexOf(name);
    if (index > -1) {
      arr.splice(index, 1);
      element.className = arr.join(" ");
    }
  }
  
  
  document.getElementById('all').addEventListener('click', function(){
    filterSelection('all');
    document.getElementById('sub-enterprise').style.display = 'block';
    document.getElementById('sub-product').style.display = 'block';
    document.getElementById('sub-vlog').style.display = 'block';
  });


  document.getElementById('enterprise').addEventListener('click', function(){
    filterSelection('enterprise');
    document.getElementById('sub-enterprise').style.display = 'block';
    document.getElementById('sub-product').style.display = 'none';
    document.getElementById('sub-vlog').style.display = 'none';
  });
  
  
  document.getElementById('product').addEventListener('click', function(){
    filterSelection('product');
    document.getElementById('sub-enterprise').style.display = 'none';
    document.getElementById('sub-product').style.display = 'block';
    document.getElementById('sub-vlog').style.display = 'none';
  });
  
  document.getElementById('vlog').addEventListener('click', function(){
    filterSelection('vlog');
    document.getElementById('sub-enterprise').style.display = 'none';
    document.getElementById('sub-product').style.display = 'none';
    document.getElementById('sub-vlog').style.display = 'block';
  });
  


/* 모달 (팝업 버튼 눌렀을때) */

function viewPortfolio(event) {
  var polyNode = event.target;

  if (polyNode.tagName.toLowerCase() == 'i') {
    polyNode = polyNode.parentNode;
  }

  var overlayNode = polyNode;
  var imageNode = overlayNode.nextElementSibling;
  var itemNode = overlayNode.parentNode;
  var mainNode = itemNode.nextElementSibling;
  var subNode = mainNode.nextElementSibling;
  var textNode = subNode.nextElementSibling;

  console.log(imageNode);

  // document.getElementById('modalImage').src= imageNode.src;
  document.getElementById('modalMain').innerHTML = mainNode.innerHTML;
  document.getElementById('modalSub').innerHTML = subNode.innerHTML;
  document.getElementById('modalText').innerHTML = textNode.innerHTML;
    
  document.getElementById('portfolioModal').style.display='block';
}

document.getElementById('modalClose').addEventListener('click',function(){
  document.getElementById('portfolioModal').style.display='none';
});


var filterItems = document.getElementsByClassName('overlay');

for (var i = 0; i < filterItems.length; i++) {
  filterItems[i].addEventListener('click', viewPortfolio);
}



/*NAVBAR ANCHOR */
function moveTo(id) {
  if (id == 'brand') {
    window.scrollTo(0, 0);
  } else {
    window.scrollTo(0, document.getElementById(id).offsetTop - 70);
  }
  document.getElementById('menu').classList.remove('show');

}


document.getElementById('navbarHome').addEventListener('click', moveTo.bind(null, 'brand'));
document.getElementById('navbarService').addEventListener('click', moveTo.bind(null, 'service'));
document.getElementById('navbarPrice').addEventListener('click', moveTo.bind(null, 'price'));
document.getElementById('navbarPortfolio').addEventListener('click', moveTo.bind(null, 'portfolio'));
document.getElementById('navbarContact').addEventListener('click', moveTo.bind(null, 'contact'));


/** 포트폴리오 더보기 눌렀을때  */
document.getElementById('main_more_enterprise').addEventListener('click', function() {
  window.location.href = './portfolio.html';
});

document.getElementById('main_more_product').addEventListener('click', function() {
  window.location.href = './portfolio.html';
});

document.getElementById('main_more_vlog').addEventListener('click', function() {
  window.location.href = './portfolio.html';
});


