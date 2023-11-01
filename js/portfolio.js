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


var initialDisplayCount = 5;  // 처음에 보여줄 요소의 개수
var moreItems;  // 추가로 보여줄 요소들

// function toggleVisibility(category) {
//   moreItems = document.getElementsByClassName(category);  // 추가
//   for (var i = initialDisplayCount; i < moreItems.length; i++) {
//     if (moreItems[i].style.display === 'none') {
//       moreItems[i].style.display = 'inline-block';  // 더 보이기
//     } else {
//       moreItems[i].style.display = 'none';  // 숨기기
//     }
//   }
// }
function toggleVisibility(category) {
  const items = document.getElementsByClassName(category);
  for (let i = initialDisplayCount; i < items.length; i++) {
    items[i].style.display = items[i].style.display === 'none' ? 'inline-block' : 'none';
  }
}


filterSelection('all');

function filterSelection(id) {
  var x, i;
  x = document.getElementsByClassName('filterItem');
  moreItems = document.getElementsByClassName(id);  // 추가

  for (i = 0; i < x.length; i++) {
    removeClass(x[i], 'show');
    x[i].style.display = 'none';  // 모든 요소를 숨김
  }

  for (i = 0; i < initialDisplayCount && i < moreItems.length; i++) {
    addClass(moreItems[i], 'show');
    moreItems[i].style.display = 'inline-block';  // 처음 4개의 요소만 보이게 함
  }

  if (id === 'all') {
    for (var category of ['enterprise', 'product', 'vlog']) {
      moreItems = document.getElementsByClassName(category);
      for (i = 0; i < initialDisplayCount && i < moreItems.length; i++) {
        addClass(moreItems[i], 'show');
        moreItems[i].style.display = 'inline-block';  // 처음 4개의 요소만 보이게 함
      }
    }
  } else {
    addClass(document.getElementById(id), 'active');
    if (id === 'all') id = '';
    for (i = 0; i < x.length; i++) {
      if (x[i].className.indexOf(id) > -1) {
        addClass(x[i], 'show');
      }
    }
  }
}

function addClass(element, name) {
  if (element.className.indexOf(name) === -1) {
    element.className += " " + name;
  }
}

function removeClass(element, name) {
  var arr = element.className.split(" ");
  while (arr.indexOf(name) > -1) {
    arr.splice(arr.indexOf(name), 1);
  }
  element.className = arr.join(" ");
}

// 이벤트 리스너 설정
document.getElementById('all').addEventListener('click', function(){
  filterSelection('all');
  // Hide all sub-containers
  document.getElementById('sub-enterprise').style.display = 'block';
  document.getElementById('sub-product').style.display = 'block';
  document.getElementById('sub-vlog').style.display = 'block';
});


document.getElementById('enterprise').addEventListener('click', function(){
  toggleVisibility('enterprise');
  filterSelection('enterprise');
  document.getElementById('sub-enterprise').style.display = 'block';
  document.getElementById('sub-product').style.display = 'none';
  document.getElementById('sub-vlog').style.display = 'none';
});

document.getElementById('more_enterprise').addEventListener('click', function(){

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
document.getElementById('more_product').addEventListener('click', function(){

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


document.getElementById('more_vlog').addEventListener('click', function(){
  
  filterSelection('vlog');
  document.getElementById('sub-enterprise').style.display = 'none';
  document.getElementById('sub-product').style.display = 'none';
  document.getElementById('sub-vlog').style.display = 'block';
});







  /* 모달 (팝업 버튼 눌렀을 때) */
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
  
  document.getElementById('navbarHome' ).addEventListener('click', function() {
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


// function showMore(category) {
//   const items = document.querySelectorAll(`.${category} .filterItem`);
//   for (let i = 0; i < items.length; i++) {
//     items[i].style.display = 'block';
//   }

//   const moreButton = document.getElementById(`more_${category}`);
//   moreButton.style.display = 'none';
// }



/* PORTFOLIO SECTION */
/* 
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
  
  // document.getElementById('all').addEventListener('click', filterSelection.bind(null, 'all'));
  // document.getElementById('enterprise').addEventListener('click', filterSelection.bind(null, 'enterprise'));
  // document.getElementById('product').addEventListener('click', filterSelection.bind(null, 'product'));
  // document.getElementById('vlog').addEventListener('click', filterSelection.bind(null, 'vlog'));
  

  document.getElementById('all').addEventListener('click', function(){
    filterSelection('all');
    // Hide all sub-containers
    document.getElementById('sub-enterprise').style.display = 'block';
    document.getElementById('sub-product').style.display = 'block';
    document.getElementById('sub-vlog').style.display = 'block';
  });


  document.getElementById('enterprise').addEventListener('click', function(){
    // Hide all sub-containers
    filterSelection('enterprise');
    document.getElementById('sub-enterprise').style.display = 'block';
    document.getElementById('sub-product').style.display = 'none';
    document.getElementById('sub-vlog').style.display = 'none';
  });
  
  
  document.getElementById('product').addEventListener('click', function(){
    // Hide all sub-containers
    filterSelection('product');
  

    document.getElementById('sub-enterprise').style.display = 'none';
    document.getElementById('sub-product').style.display = 'block';
    document.getElementById('sub-vlog').style.display = 'none';
  });
  
  document.getElementById('vlog').addEventListener('click', function(){
    // Hide all sub-containers
    filterSelection('vlog');

    document.getElementById('sub-enterprise').style.display = 'none';
    document.getElementById('sub-product').style.display = 'none';
    document.getElementById('sub-vlog').style.display = 'block';
  });
  
  



 */