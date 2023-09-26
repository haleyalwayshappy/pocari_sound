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

var initialDisplayCount = 4;  // 처음에 보여줄 요소의 개수
var moreItems;  // 추가로 보여줄 요소들

function toggleVisibility() {
  for (var i = initialDisplayCount; i < moreItems.length; i++) {
    if (moreItems[i].style.display === 'none') {
      moreItems[i].style.display = 'inline-block';  // 더 보이기
    } else {
      moreItems[i].style.display = 'none';  // 숨기기
    }
  }
}

filterSelection('all');

function filterSelection(id) {
  var x, i;
  x = document.getElementsByClassName('listItem');
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], 'active');
  }

  addClass(document.getElementById(id), 'active');

  if(filterItems > initialDisplayCount){
    // 4개의 화면만 보여주기 
  }
  x = document.getElementsByClassName('filterItem');
  if (id == 'all') id = '';
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], 'show');
    if (x[i].className.indexOf(id) > -1) {
      addClass(x[i], 'show');
    }
  }
}

function addClass(element, name) {
  if (element.className.indexOf(name) == -1) {
    element.className += " " + name;
  }
}

function removeClass(element, name) {
  var arr;
  arr = element.className.split(" ");
  while (arr.indexOf(name) > -1) {
    arr.splice(arr.indexOf(name), 1);
  }
  element.className = arr.join(" ");
}

function hideElements(element) {

  var subEnterpriseElements = document.querySelector('.sub-enterprise');
  var subProductElements = document.querySelector('.sub-product');
  var subVlogElements = document.querySelector('.sub-vlog');

  subEnterpriseElements.style.display = 'display';
  subProductElements.style.display = 'display';
  subVlogElements.style.display = 'display';

  console.log(element);
// console.log("subEnterpriseElements", subEnterpriseElements.className);
// console.log("subVlogElements", subVlogElements.className);
// console.log("subProductElements", subProductElements.className);

  if(element == subEnterpriseElements.className) {
    subEnterpriseElements.style.display = 'display';
    subProductElements.style.display = 'none';
    subVlogElements.style.display = 'none';
  }else if(element == subProductElements.className) {
    subEnterpriseElements.style.display = 'none';
    subProductElements.style.display = 'display';
    subVlogElements.style.display = 'none';
  }else if(element == subVlogElements.className) {
    subEnterpriseElements.style.display = 'none';
    subProductElements.style.display = 'none';
    subVlogElements.style.display = 'display';
  }else{
    subEnterpriseElements.style.display = 'display';
    subProductElements.style.display = 'display';
    subVlogElements.style.display = 'display';
  
  }



}

var subEnterpriseElements = document.querySelector('.sub-enterprise');
var subProductElements = document.querySelector('.sub-product');
var subVlogElements = document.querySelector('.sub-vlog');

document.getElementById('all').addEventListener('click', function() {
  filterSelection('all');
  subEnterpriseElements.style.display = 'display';
  subProductElements.style.display = 'display';
  subVlogElements.style.display = 'display';
  
});
document.getElementById('enterprise').addEventListener('click', function() {
  filterSelection('enterprise');
  subEnterpriseElements.style.display = 'display';
  subProductElements.style.display = 'none';
  subVlogElements.style.display = 'hide';
  // hideElements('sub-container sub-enterprise');
  
});

document.getElementById('product').addEventListener('click', function() {
  filterSelection('product');
  subEnterpriseElements.style.display = 'hide';
  subProductElements.style.display = 'hide';
  subVlogElements.style.display = 'display';
  // hideElements('sub-container sub-product');

 });

document.getElementById('vlog').addEventListener('click', function() {
  filterSelection('vlog');
  subEnterpriseElements.style.display = 'hide';
  subProductElements.style.display = 'hide';
  subVlogElements.style.display = 'display';
  // hideElements('sub-container sub-vlog');
 
});



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