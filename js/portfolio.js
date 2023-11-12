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
      for (i = 0; i < filterItem.length; i++) {
        removeClass(filterItem[i], 'show');
        if (filterItem[i].classList.contains(id)) {
          addClass(filterItem[i], 'show');
          filterItem[i].style.display = ''; // 기존 스타일로 복원
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
  
  function showSubCategory(category) {
    document.getElementById('sub-enterprise').style.display = 'none';
    document.getElementById('sub-product').style.display = 'none';
    document.getElementById('sub-vlog').style.display = 'none';
    document.getElementById(`sub-${category}`).style.display = 'block';
  }
  
  
  function hideSubCategories() {
    document.getElementById('more_enterprise').style.display = 'none';
    document.getElementById('more_product').style.display = 'none';
    document.getElementById('more_vlog').style.display = 'none';
  }

  function resetSubCategories() {
    document.getElementById('more_enterprise').style.display = 'block';
    document.getElementById('more_product').style.display = 'block';
    document.getElementById('more_vlog').style.display = 'block';
  }
  

  // 카테코리를 클릭했을때 

  document.getElementById('all').addEventListener('click', function(){
    filterSelection('all');
    document.getElementById('sub-enterprise').style.display = 'block';
    document.getElementById('sub-product').style.display = 'block';
    document.getElementById('sub-vlog').style.display = 'block';
    resetSubCategories();
  }, { passive: true });

  document.getElementById('enterprise').addEventListener('click', function() {
    filterSelection('enterprise');
    showSubCategory('enterprise');
    // hideSubCategories();
  }, { passive: true });
  
  document.getElementById('product').addEventListener('click', function() {
    filterSelection('product');
    showSubCategory('product');
    // hideSubCategories();
  }, { passive: true });
  
  document.getElementById('vlog').addEventListener('click', function() {
    filterSelection('vlog');
    showSubCategory('vlog');
    // hideSubCategories();
  }, { passive: true });
  
  
  
  document.getElementById('more_enterprise').addEventListener('click', function() {
    filterSelection('enterprise');
    showSubCategory('enterprise');
    hideSubCategories();
  }, { passive: true });
  
  document.getElementById('more_product').addEventListener('click', function() {
    filterSelection('product');
    showSubCategory('product');
    hideSubCategories();
  }, { passive: true });
  
  document.getElementById('more_vlog').addEventListener('click', function() {
    filterSelection('vlog');
    showSubCategory('vlog');
    hideSubCategories();
  }, { passive: true });
  


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


  // document.getElementById('modalImage').src= imageNode.src;
  document.getElementById('modalMain').innerHTML = mainNode.innerHTML;
  document.getElementById('modalSub').innerHTML = subNode.innerHTML;
  document.getElementById('modalText').innerHTML = textNode.innerHTML;
    
  document.getElementById('portfolioModal').style.display='block';
}

document.getElementById('modalClose').addEventListener('click',function(){
  document.getElementById('portfolioModal').style.display='none';
    // 모달 내의 모든 iframe을 찾아서 각각의 src 속성을 재설정합니다.
    var iframes = document.getElementById('portfolioModal').querySelectorAll('iframe');
    iframes.forEach(function(iframe) {
      var iframeSrc = iframe.src;
      iframe.src = iframeSrc; // src 속성을 재설정하면 iframe이 새로고침됩니다.
    });
}, { passive: true });


var filterItems = document.getElementsByClassName('overlay');

for (var i = 0; i < filterItems.length; i++) {
  filterItems[i].addEventListener('click', viewPortfolio);
}



// window.onload = function() {
//   var urlParams = new URLSearchParams(window.location.search);
//   var category = urlParams.get('category');
//   if (category) {
//     filterSelection(category);
//   }
// };