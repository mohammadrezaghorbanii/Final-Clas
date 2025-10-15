window.addEventListener("load", () => {


  const tabs = document.querySelectorAll('.center a');
  const content = document.querySelectorAll('.content-section');


  function switchTab(targetId) {
    content.forEach(content => {
      content.classList.remove('op1');
      content.classList.add("op0");
    });


    const targetcontent = document.getElementById(targetId);
    if (targetcontent) {
      targetcontent.classList.remove('op0');
      targetcontent.classList.add('op1');
    }

  }

  tabs.forEach(tab => {
    tab.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = tab.getAttribute('data-bind');
      switchTab(targetId);
    });
  });
  switchTab('one');
  
  let opensearch = document.getElementById("open-search");
  let search = document.querySelectorAll(".search");
  let searchh = document.getElementById("searchh");
  let close = document.getElementById("close-btn");

  opensearch.addEventListener("click", (e) => {
    // e.preventDefault();
    // search.forEach(element => {
    //   element.classList.toggle("tt");
    // });
    searchh.classList.toggle("tt");
  });

  close.addEventListener("click", () => {
    searchh.classList.toggle("tt");
  })






  // swiper

  var swiper = new Swiper(".my1Swiper", {
    pagination: {
      el: ".swiper-pagination",
    },
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper = new Swiper(".my2Swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
  });

  var swiper = new Swiper(".my3Swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
  });
});