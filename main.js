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

/* PORTFOLIO SECTION */
filterSelection('all');

function filterSelection(id) {
  var x, i;
  x = document.getElementsByClassName('listItem');
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], 'active');
  }

  addClass(document.getElementById(id), 'active');

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

document.getElementById('all').addEventListener('click', filterSelection.bind(null, 'all'));

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

document.getElementById('modalImage').src= imageNode.src;
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





//모달 페이지 포트폴리오 기능 (문제가 많아서 수정해야할것도 많은데 일단 디폴트 값으로)
/**
function viewPortfolio(event) {
  var polyNode = event.target;
  if (polyNode.tagName.toLowerCase() == 'i') {
    polyNode = polyNode.parentNode;
  }

  var overlayNode = polyNode;
  var itemNode = overlayNode.parentNode;
  var videoNode = itemNode.nextElementSibling;
  var mainNode = videoNode.nextElementSibling;
  var subNode = mainNode.nextElementSibling;
  var textNode = subNode.nextElementSibling;

// 동영상이 있을때는 모달 페이지에 동영상이 들어가고 동영상이 없으면 이미지만 출력되게 하는 코드를 작성해야함 


  document.getElementById('modalVideo').innerHTML= videoNode.innerHTML;
  document.getElementById('modalMain').innerHTML = mainNode.innerHTML;
  document.getElementById('modalSub').innerHTML = subNode.innerHTML;
  document.getElementById('modalText').innerHTML = textNode.innerHTML;
 
 
  document.getElementById('portfolioModal').style.display = 'block';

}
$('#modalClose').on('click', function(){ //레이어 닫을때
    $('#portfolioModal').hide();
    $('#modalVideo').empty();  
});
**/

// function viewPortfolio(event) {
//   var polyNode = event.target;

//   if (polyNode.tagName.toLowerCase() == 'i') {
//     polyNode = polyNode.parentNode;
//   }

//   var overlayNode = polyNode;
//   var videoNode = overlayNode.nextElementSibling;

//   var itemNode = overlayNode.parentNode;
//   var mainNode = itemNode.nextElementSibling;
//   var subNode = mainNode.nextElementSibling;
//   var textNode = subNode.nextElementSibling;

//   document.getElementById('modalVideo').src = videoNode.src;
//   document.getElementById('modalMain').innerHTML = mainNode.innerHTML;
//   document.getElementById('modalSub').innerHTML = subNode.innerHTML;
//   document.getElementById('modalText').innerHTML = textNode.innerHTML;

//  document.getElementById('portfolioModal').style.display='block';
// console.log(overlayNode);

//  $('#modalClose').on('click', function(){ //레이어 닫을때
//   $('#portfolioModal').hide();
//   $('#modalVideo').empty();  
// });

// }



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