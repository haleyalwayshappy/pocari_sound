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
  
  document.getElementById('all').addEventListener('click', filterSelection.bind(null, 'all'));
  document.getElementById('enterprise').addEventListener('click', filterSelection.bind(null, 'enterprise'));
  document.getElementById('product').addEventListener('click', filterSelection.bind(null, 'product'));
  document.getElementById('vlog').addEventListener('click', filterSelection.bind(null, 'vlog'));
  
  
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
  function moveTo(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({behavior: 'smooth'});
  }
  
  document.getElementById('navbarHome').addEventListener('click', function() {
    moveTo('brand');
});

document.getElementById('navbarService').addEventListener('click', function() {
    moveTo('service');
});

document.getElementById('navbarPrice').addEventListener('click', function() {
    moveTo('price');
});

document.getElementById('navbarPortfolio').addEventListener('click', function() {
    // 'portfolio.html'로 이동하려면 해당 페이지로 이동하는 코드를 사용해야 합니다.
    window.location.href = 'portfolio.html';
});

document.getElementById('navbarContact').addEventListener('click', function() {
    moveTo('contact');
});