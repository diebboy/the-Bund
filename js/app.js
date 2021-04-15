//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
   for (let index = 0; index < sliders.length; index++) {
      let slider = sliders[index];
      if (!slider.classList.contains('swiper-bild')) {
         let slider_items = slider.children;
         if (slider_items) {
            for (let index = 0; index < slider_items.length; index++) {
               let el = slider_items[index];
               el.classList.add('swiper-slide');
            }
         }
         let slider_content = slider.innerHTML;
         let slider_wrapper = document.createElement('div');
         slider_wrapper.classList.add('swiper-wrapper');
         slider_wrapper.innerHTML = slider_content;
         slider.innerHTML = '';
         slider.appendChild(slider_wrapper);
         slider.classList.add('swiper-bild');

         if (slider.classList.contains('_swiper_scroll')) {
            let sliderScroll = document.createElement('div');
            sliderScroll.classList.add('swiper-scrollbar');
            slider.appendChild(sliderScroll);
         }
      }
      if (slider.classList.contains('_gallery')) {
         //slider.data('lightGallery').destroy(true);
      }
   }
   sliders_bild_callback();
}

function sliders_bild_callback(params) { }

let sliderScrollItems = document.querySelectorAll('._swiper_scroll');
if (sliderScrollItems.length > 0) {
   for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index];
      const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
      const sliderScroll = new Swiper(sliderScrollItem, {
         observer: true,
         observeParents: true,
         direction: 'vertical',
         slidesPerView: 'auto',
         freeMode: true,
         scrollbar: {
            el: sliderScrollBar,
            draggable: true,
            snapOnRelease: false
         },
         mousewheel: {
            releaseOnEdges: true,
         },
      });
      sliderScroll.scrollbar.updateSize();
   }
}

function sliders_bild_callback(params) { }

let menuName = ['Lawrie Alton', 'Charles Timmy', 'curt sheard', 'Cade Ryker', 'Tommie Brendan'];
let menuName1 = ['vocalist', 'guitar', 'bass', 'drums', 'electronics'];

let sliderSlider = new Swiper('.slider', {
   // effect: 'fade',
   autoplay: {
      delay: 5000,
      disableOnInteraction: false,
   },

   observer: true,
   observeParents: true,
   slidesPerView: 1,
   spaceBetween: 0,
   autoHeight: false,
   speed: 800,
   //touchRatio: 0,
   //simulateTouch: false,
   loop: true,
   //preloadImages: false,
   //lazy: true,
   // Dotts
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
         return '\
         <div class="box ' + className + '">\
         <span class="text">' + (menuName[index]) + '</span>\
         <span class="subtext">' + (menuName1[index]) + '</span>\
         </div>';
      },
   },
   // Arrows
   navigation: {
      prevEl: '.slider-arrow__prev',
      nextEl: '.slider-arrow__next',
   },
   /*
   breakpoints: {
      320: {
         slidesPerView: 1,
         spaceBetween: 0,
         autoHeight: true,
      },
      768: {
         slidesPerView: 2,
         spaceBetween: 20,
      },
      992: {
         slidesPerView: 3,
         spaceBetween: 20,
      },
      1268: {
         slidesPerView: 4,
         spaceBetween: 30,
      },
   },
   */
   on: {
      lazyImageReady: function () {
         ibg();
      },
   }
   // And if we need scrollbar
   //scrollbar: {
   //	el: '.swiper-scrollbar',
   //},
});

let sliderSlide = new Swiper('.tour-slider', {
   // effect: 'fade',
   /* autoplay: {
       delay: 5000,
       disableOnInteraction: false,
    },*/

   observer: true,
   observeParents: true,
   slidesPerView: 1,
   //slidesPerColumn: 1,
   spaceBetween: 20,
   autoHeight: true,
   speed: 800,
   direction: 'vertical',
   //touchRatio: 0,
   loop: true,
   //preloadImages: false,
   //lazy: true,
   // Dotts
   //// Arrows
   //navigation: {
   //   prevEl: '.slider-arrow__prev',
   //   nextEl: '.slider-arrow__next',
   //},
   /*
   breakpoints: {
      320: {
         slidesPerView: 1,
         spaceBetween: 0,
         autoHeight: true,
      },
      768: {
         slidesPerView: 2,
         spaceBetween: 20,
      },
      992: {
         slidesPerView: 3,
         spaceBetween: 20,
      },
      1268: {
         slidesPerView: 4,
         spaceBetween: 30,
      },
   },
   */
   on: {
      lazyImageReady: function () {
         ibg();
      },
   },
   // And if we need scrollbar
   scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
   }
});
let sliderSlide1 = new Swiper('.tour__sliders', {
   effect: 'fade',

   fadeEffect: {
      crossFade: true
   },
   /* autoplay: {
       delay: 5000,
       disableOnInteraction: false,
    },*/

   observer: true,
   observeParents: true,
   slidesPerView: 1,
   //slidesPerColumn: 1,
   simulateTouch: true,
   touchRatio: 0,
   spaceBetween: 0,
   autoHeight: true,
   speed: 800,
   direction: 'vertical',
   loop: true,
   navigation: {
      prevEl: '.tour__prev',
      nextEl: '.tour__next',
   },
});

sliderSlide.controller.control = sliderSlide1;
sliderSlide1.controller.control = sliderSlide;

let bandcampLinks = document.getElementsByClassName('bandcamp-link');
for (var i = 0; i < bandcampLinks.length; i++) {
   bandcampLinks[i].addEventListener('click', function (e) {
      e.stopPropagation();
   });
}

let songElements = document.getElementsByClassName('song');
Amplitude.init({
   continue_next: false,
   callbacks: {
      song_change: function () {

      }
   },
   "continue_next": true,
   "volume": 100,
   "songs": [
      {
         "name": "01. Clouds In The Forest",
         "url": "https://cdndl.zaycev.net/track/24326181/96xhKRwgFPp39ZKqGYyBGtE3VGrbUtt1kGNYkmd5VF74VtZYkJcHRdU1gjLPaC5ghASiGqh8xn1adVcLFyy2uGqRszcxPoxR3w3pcNowfVkExuj7ojFUT2PzEGp497UiYxYP5gwPmemDccZ7MEoJ5mL5EsHPDvXaEGFoib5ch3zbQAJJ7qfQhJoPB71zPxcrsLtdYsDRfypXUuyfZ5VrdEzKuLqnjVffDp8m5RyDrASNt9BC3hriADpohTvUFZjeLkGvmUdd1ogK5TSvutrFcUxc8drvchkmx4snqUDbpyw8wdDMJpJe5dq2nhELQAtXttHqa5tYYPjobFv2Y4euNyg6hxM9SWREH8kDjcyVjjT42wpRAVdSy45EbgPHhE6CjKqcNviUu9nLX3y7yVNAo4YdWo7MqkD",
      },
      {
         "name": "02. Rat In The River",
         "url": "https://cdndl.zaycev.net/track/24326219/2uHKk8qcDMSk1roQ7hwK2iaC8Vzms5bsrRUunqNtT8UYWMbqfampf5mEcR8cvXRvCH6f59Vueb1J6tdYneg8qPT4qD9R3FRxG5rovFCu3Tbj5MvWJNAvpp18X3NKV6PArFd6NEGDbeGVuckK8QwHr8QW9pZVrAjNjy5kuqtQH87D4QenFJQHC5Hnsfjc5USinbtCVu2K97c6suecpnv149NgqTbe5xSa2SWKUdKdoayRCroTNB5rQHqYhodbN1fF4JdsyaG5LepiptKwVmckHqVqSiym8bnTxaEJgvszUmB96WqCB9eyxPa81b1nMq77Xm8ac8VX4yf96BN4bokfpg6D5ae67bfXoZVconchXefnBXX1gtDbys3r3ZLUVwxTUqHc3JNgGqwdL5xV8SzuN8hny8xjZaeE",
      },
      {
         "name": "03. Giants And Companions",
         "url": "https://cdndl.zaycev.net/track/24326161/2uHKk8qcDMSk1roQ7hwK2ibHifZqPAeKpqHSrfyUfGiB7E449YtKCbvyBtaYNVNZ7AfQU3cehEW8Num9roQXuVoZYtG83TDh7tLEsYpmTYDNBsbVz8d75LyHMh91he8xFTfhWqDQA4xF7yybhuRC4Pr16KfRRjGhZ124cwkmFsGt3dLvChPNQLGpY9j6LjLC7uCervSHHwh5enjsXmzzNEjPsu4VyGGqXKurTe2jWcSPJfnSYi6TfD1r668w1ewXcgHcHobjWnheddtCiN3Fqm1bTd5E8pucdLQcLc4EnbuLF8QGNBy698WFXgYGJAQeGVGsceJdf8gd2Cf14QFCcGGjtmXTSLKdH3WnrRgTFWscN1KRpLgj6ThqF6TTQdz6CfTA9Bc9g6avn6XLogGsQxhS8KffrWuH",
      },
      {
         "name": "04. Ashamed Of Light",
         "url": "https://cdndl.zaycev.net/track/24326163/2uHKk8qcDMSk1roQ7hwK2ia1GAgTXeRDMb59v3Wdk15QThQd5TAYkfyUQe46hNUfJJdrfAe3HfG1hYmbM9oopE5zeSmNqRXXzYjyZnkbtSZhE8KGubry9zZgLb6wELmX4zYsUdnmrYPbUk9FiDxbTSx3GqFqHGC2s9W7WBZKFMCSMXrcQrHAR9U2FFw88i2jU9YQ9EMRvuUFHYsS2p2KTbeFM4miAj7WuSV8FZ7nziqVT8Mz2GbstJW1wk4aN7sBh9zm5Y4pSkJe5AoFtVTpe1i4QhC2vdoRq8kTwwLXNzxXjMchhNNeaVWFBaSFPAFLoybUa3nKqhPrnRGREokNmFnQTiJ7js31f6KCKzRyo2Zb6uXcDrHsPeErtn6dmaPRYjSrhZTvuTXcVdG2sdBusbLAURRrSYHH",
      },
      {
         "name": "05. Doubting The Forest",
         "url": "https://cdndl.zaycev.net/track/24326093/2uHKk8qcDMSk1roQ7hwK2iYDp124aAJMf6BpJubE3yVbXkJBBShyKwdhv6hwDtJqhh1pK4VZ8xVXeLvVwFEWtnom4yWmtWR9yeoeoLFZaM7m3royyEbJpEE2nNLWRsY2gXfY9Wh3VHra1zauGWphuMitBpiPoLHuFimJNZG2Nwnhbcw2KeKaWcSRxM54GMyzfpnWNgnsLajXWBjbQXRc3iZZBxBA7U19mrSz4Dg9DE3u1ByAZCza9Yni5fwae9sQrqnGqimxa3NU1nZ4gj3t5YXdsVs28gJ4SL2jxrfj6cAA8vQ4LugzirxbPGQg4mp7ZkLBQHqpsTGP8c7pFe54GCdwgqcDCatkmQACrjAVWMSELm6BFMczKNxG2U1h2HMcaj4dpC9da8Zjje9a54hQL2sgApyT4s8A",
      },
      {
         "name": "06. Criminals Of The Lake",
         "url": "https://cdndl.zaycev.net/track/24326115/LmJHLkrcEKRYqiRTAFFhfmweUG9k4R1KX5V6m6Ys72vP2c5aXCej42JWnTyJHKSKonsBS4V5gjz7xRbufUQTVLDB26WmBWkd9XJTwmFktWoEV4NAQnUbmSrSZyMfYua9hatK2DtKmMJrbwzn1eqsBoAXgG7yBXTc7vdD8itg5A5qWATLLkeA9dR9XosVEeQMPBVxYmgEAFC3YVEMzsfHQ2JMQJMbcTvzKNkHDtHpBDt29EeVDai5gRfvAhe7AVzRcjnQcenHaQheReqQydfx2a5Xg4NAp2W2hJvYiWfb7Xq2a1cmwvNCfA7dNNGFNdTXuVFcgBFMMfKbJkMZ3NGu7EktotQHnB3qz9tqfvKPhgqBR4iei36t45c6miLKoBkvSTaT1yHjadHwv9CXFo5QqMTgNZyqoHX",
      },
      {
         "name": "07. Curse Of Eternity",
         "url": "https://cdndl.zaycev.net/track/24326256/96xhKRwgFPp39ZKqGYyBGsK1q9MYekZJS72oi9mXeEH7kQzeGwyzJKiK1ChDpqxb2tRPhNgpRHha5XP94tRvGghV1mTvPmwz1iHrYDFePehM4CcG1rDHnXPQPJDdk9jK1NCrvEtc1kUKwL7NtNC9piT6dt2MGUCUshf6U7cvDgyryBVMxZV9SioU6DHerzymM88ScZEPmK3Sqn6vMqmG3owQuo3gwcVpC3Z4FGcTP2gcrujKh5zsbnTXeWdP7S7t7woR5bgYQrVubkQoNEfkGHGx5icCMn1DaCfz8s3QPhB47YhwdbGNH1761Sjn6VtMwS9QMofs9mefhJ71dei34iWLyW5Jn3tXuErq5GR4LZ2ptHUbkxMsPxpP2TxR92f5PizN1utEgSKnjKjn3tvCvD3iVvkqxq9",
      },
      {
         "name": "08. Fog In My Town",
         "url": "https://cdndl.zaycev.net/track/24326281/2dWsLwbS5h7oFjEBFJsEPEVkxF1mqZUbpUQcjGn6QGXogJP2TiqZyVBmEKoh48G3jJQcv7HpSidFTFCnKKipGk9psbBCazDdEVZhZCh7Xe4eJz7zWqCCDFgaejDtsP9Gbtxe99An7fYhFZgG7hoJRE53a4TXuJ4DcjzamoF5NUSaAdDiGA81D1omSCaHpuz6VY4axuQB3ZwC9fmR6x2U6gk2U4g5LA4PLzwUit29UWJJ64A4ZDouJ535gpL9UpSVqSLTLZuip5YmnCG1Gnk6VXMS4EqLnGnoYkFaWzCLiQQZxTxe8NztAPxStwNoEm6xhedhuWUa4ZHQG1TkySENY8tDoo2j8DHEM8baVT5YzkBxnqwbLp6TSrDMVKS3ZcpaWKimUNQDeE7ewp7pqe2Ni4jQ2Hs74NB",
      },
      {
         "name": "09. Serpent In The Mountains",
         "url": "https://cdndl.zaycev.net/track/24326166/2uHKk8qcDMSk1roQ7hwK2iZFvE4W7DyTwzVwd6aCE4usJCpnE9B5qm2rnopCSgcaPRwYHsTajQbHjUWhjaec9s8ETreCNnVYyMMXnxL9yXUx3A31vYoZfJg6y3CbHYELnajHSkp3S7MHUaebEs3HEuVtEuob3zjQ2GQFqaELbki8aYsqJvyMT4kb7BHnCDt8jQ19idM7PjVJzkat4uDcDx7E6HWoataP9odZoJKPwnPP1o3YuCixu1NU7gu18gCHaBvhe63MBs4SpL7eC7n15kmaaun419jq3Jo7cEYh6Uk8h8eGgHSRkAQGhbqpu5dU7h25zsg4tnk9yH4fSrVpD5KBPZX2Uu8WzAf4UEKT39HJ3PpTSGw3jxqkFRtkcYQaBCLizrhTqv3UaD5froSA6GS1BHK6efvT",
      }
   ]
});

//==webp
let unlock = true;

function testWebP(callback) {
   var webP = new Image();
   webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
   };
   webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
   if (support == true) {
      document.querySelector('html').classList.add('_webp');
   } else {
      document.querySelector('html').classList.add('_no-webp');
   }
})
//==webp
//==burger
let iconMenu = document.querySelector('.menu__icon');
let menuBody = document.querySelector('.menu__body');
if (iconMenu) {
   iconMenu.addEventListener("click", function (e) {
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
   });
}
//==burger

// Прокрутка при клике
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
   menuLinks.forEach(menuLink => {
      menuLink.addEventListener("click", onMenuLinkClick);
   });
   function onMenuLinkClick(e) {
      const menuLink = e.target;
      if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
         const gotoBlock = document.querySelector(menuLink.dataset.goto);
         const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;
         if (iconMenu.classList.contains('_active')) {
            document.body.classList.remove('_lock');
            iconMenu.classList.remove('_active');
            menuBody.classList.remove('_active');
         }
         window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
         });
         e.preventDefault();
      }
   }
}



//===ibg
function ibg() {
   if (()) {
      let ibg = document.querySelectorAll("._ibg");
      for (var i = 0; i < ibg.length; i++) {
         if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
         }
      }
   }
}
ibg();
//===ibg







