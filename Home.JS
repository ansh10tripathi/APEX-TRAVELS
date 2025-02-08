searchForm=document.querySelector('.search-form');

document.querySelector('#search-btn').onclink = () => {
  searchForm.classList.toggle('active');
}
let loginForm=document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick=()=>{
  loginForm.classList.toggle('active');
}
document.querySelector('#close-login').onclick=()=>{
  loginForm.classList.remove('active');
}
window.onscroll=()=>{

  searchForm.classList.remove('active');

  if(window.scrollY > 80){
    document.querySelector('.HDR-1 .div-2').classList.add('active');
  }else{
    document.querySelector('.HDR-1 .div-2').classList.remove('active');
  }
}
window.onload=()=>{
  if(window.scrollY > 80){
    document.querySelector('.HDR-1 .div-2').classList.add('active');
  }else{
    document.querySelector('.HDR-1 .div-2').classList.remove('active');
  }
  fadeOut();
}
function loader(){
  document.querySelector('.loader-container').classList.add('active');
}
function fadeOut(){
  setTimeout(loader, 1000);
}
var swiper = new Swiper(".book-slider", {
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
        slidesPerView: 1,
    },
    768: {
        slidesPerView: 2,
    },
    1024: {
        slidesPerView: 3,
    },
  },
});
var swiper = new Swiper(".featured-slider", {
    spaceBetween: 10,
    loop:true,
    centeredSlides: true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    breakpoints: {
      0: {
          slidesPerView: 1,
      },
      450: {
        slidesPerView: 2,
      },
      768: {
          slidesPerView: 3,
      },
      1024: {
          slidesPerView: 4,
      },
    },
  });
  var swiper = new Swiper(".arrivals-slider", {
    spaceBetween: 10,
    loop:true,
    centeredSlides: true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
          slidesPerView: 1,
      },
      768: {
          slidesPerView: 2,
      },
      1024: {
          slidesPerView: 3,
      },
    },
  });
  var swiper = new Swiper(".reviews-slider", {
    spaceBetween: 10,
    grabCursor:true,
    loop:true,
    centeredSlides: true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
          slidesPerView: 1,
      },
      768: {
          slidesPerView: 2,
      },
      1024: {
          slidesPerView: 3,
      },
    },
  });
  var swiper = new Swiper(".blogs-slider", {
    spaceBetween: 10,
    grabCursor:true,
    loop:true,
    centeredSlides: true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
          slidesPerView: 1,
      },
      768: {
          slidesPerView: 2,
      },
      1024: {
          slidesPerView: 3,
      },
    },
  });
  document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('event-calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',  // Show the month view
        events: [
            {
                title: 'Holi Festival',
                start: '2025-03-25',
                end: '2025-03-26',
                description: 'Celebrate the festival of colors in Mathura & Vrindavan!',
                url: 'https://www.holifestival.org'
            },
            {
                title: 'Diwali in Jaipur',
                start: '2025-10-23',
                description: 'Experience the grand Diwali celebrations in Jaipur.',
                url: 'https://www.rajasthan.gov.in'
            }
        ],
        eventClick: function(info) {
            alert(info.event.title + "\n" + info.event.description);
        }
    });

    calendar.render();
});