"use strict";

const portfolioData ={

 'enterprise' : [
    {
      name: "벤틀리",
      desc: "벤틀리 기업홍보영상",
      imageUrl: "./asset/portfolio/enterprise/enter_1_2.jpg",
      videoUrl: "https://www.youtube.com/embed/EwZhZZb1Cv4?si=9kC_djCrPMpFf0Wf",
      alt: "벤틀리"
    },
    {
      name: "스몹",
      desc: "스몹 기업홍보영상",
      imageUrl: "./asset/portfolio/enterprise/enter_2_2.jpg",
      videoUrl: "https://www.youtube.com/embed/AjFtAfcBY3k?si=zeJfhyRNCwsW77GL",
      alt: "스몹"
    },
    {
      name: "한국 콘진원",
      desc: "한국 콘진원",
      imageUrl: "./asset/portfolio/enterprise/enter_2_3.jpg",
      videoUrl: "https://www.youtube.com/embed/5pJn2BVDWVs?si=iYTkBr4cFUzWaDUI",
      alt: "한국 콘진원"
    },

    {
      name: "삼성전기",
      desc: "삼성 전기 역사관 투어",
      imageUrl: "./asset/portfolio/enterprise/enter_2_6.jpg",
      videoUrl: " https://www.youtube.com/embed/-v3Mf7pJgvU?si=YEsYrX8ru6d7LEr3",
      alt: "삼성 전기 역사관 투어"
    },

    {
      name: "",
      desc: "",
      imageUrl: "",
      videoUrl: "",
      alt: ""
    },

    {
      name: "",
      desc: "",
      imageUrl: "",
      videoUrl: "",
      alt: ""
    },

    {
      name: "",
      desc: "",
      imageUrl: "",
      videoUrl: "",
      alt: ""
    },

    {
      name: "",
      desc: "",
      imageUrl: "",
      videoUrl: "",
      alt: ""
    },

    {
      name: "",
      desc: "",
      imageUrl: "",
      videoUrl: "",
      alt: ""
    },

    {
      name: "",
      desc: "",
      imageUrl: "",
      videoUrl: "",
      alt: ""
    },

    {
      name: "",
      desc: "",
      imageUrl: "",
      videoUrl: "",
      alt: ""
    },

    {
      name: "",
      desc: "",
      imageUrl: "",
      videoUrl: "",
      alt: ""
    },

    {
      name: "",
      desc: "",
      imageUrl: "",
      videoUrl: "",
      alt: ""
    },

    {
      name: "",
      desc: "",
      imageUrl: "",
      videoUrl: "",
      alt: ""
    },

    {
      name: "",
      desc: "",
      imageUrl: "",
      videoUrl: "",
      alt: ""
    },

    {
      name: "",
      desc: "",
      imageUrl: "",
      videoUrl: "",
      alt: ""
    },

    {
      name: "",
      desc: "",
      imageUrl: "",
      videoUrl: "",
      alt: ""
    },

    {
      name: "",
      desc: "",
      imageUrl: "",
      videoUrl: "",
      alt: ""
    },

    {
      name: "",
      desc: "",
      imageUrl: "",
      videoUrl: "",
      alt: ""
    },

    {
      name: "",
      desc: "",
      imageUrl: "",
      videoUrl: "",
      alt: ""
    },

    {
      name: "",
      desc: "",
      imageUrl: "",
      videoUrl: "",
      alt: ""
    },

    {
      name: "",
      desc: "",
      imageUrl: "",
      videoUrl: "",
      alt: ""
    },

    {
      name: "",
      desc: "",
      imageUrl: "",
      videoUrl: "",
      alt: ""
    },

    {
      name: "",
      desc: "",
      imageUrl: "",
      videoUrl: "",
      alt: ""
    },

    {
      name: "",
      desc: "",
      imageUrl: "",
      videoUrl: "",
      alt: ""
    },

    {
      name: "",
      desc: "",
      imageUrl: "",
      videoUrl: "",
      alt: ""
    },

    {
      name: "",
      desc: "",
      imageUrl: "",
      videoUrl: "",
      alt: ""
    },

    {
      name: "",
      desc: "",
      imageUrl: "",
      videoUrl: "",
      alt: ""
    },

    {
      name: "",
      desc: "",
      imageUrl: "",
      videoUrl: "",
      alt: ""
    },

    {
      name: "",
      desc: "",
      imageUrl: "",
      videoUrl: "",
      alt: ""
    },

    {
      name: "",
      desc: "",
      imageUrl: "",
      videoUrl: "",
      alt: ""
    },

  ],
  'product' : [],
  'vlog' : []
};

// 서브 컨테이너의 ID에 맞게 아이템들을 화면에 표시하는 함수
function displayItems(containerId) {
    const items = portfolioData[containerId]; // 해당 컨테이너 ID의 아이템 리스트를 가져옵니다.
    const container = document.getElementById(containerId);
    const portfolioItemsContainer = container.querySelector('#portfolio-items');
    portfolioItemsContainer.innerHTML = ''; // 컨테이너를 비웁니다.
  
    // 아이템들을 동적으로 생성하여 추가합니다.
    items.forEach(item => {
      const itemDiv = document.createElement('div');
      itemDiv.className = 'filterItem';
      itemDiv.innerHTML = `
        <div class="image">
          <img src="${item.imageUrl}" alt="${item.alt}">
        </div>
        <div class="video">
          <iframe width="300" height="100%" src="${item.videoUrl}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div class="main">${item.name}</div>
        <div class="sub">${item.desc}</div>
        <div class="text">텍스트 상세설명</div>
      `;
      portfolioItemsContainer.appendChild(itemDiv);
    });
  }
  
  // 페이지가 로드되면 모든 서브 컨테이너의 아이템들을 표시합니다.
  document.addEventListener('DOMContentLoaded', function() {
    displayItems('sub-enterprise');
    displayItems('sub-product');
    displayItems('sub-vlog');
  });
  
  // 예를 들어, 카테고리 탭이 클릭되었을 때 해당 아이템들을 표시하도록 이벤트 리스너를 설정합니다.
  document.querySelector('.category-tab-enterprise').addEventListener('click', function() {
    displayItems('sub-enterprise');
  });
  document.querySelector('.category-tab-product').addEventListener('click', function() {
    displayItems('sub-product');
  });
  document.querySelector('.category-tab-vlog').addEventListener('click', function() {
    displayItems('sub-vlog');
  });