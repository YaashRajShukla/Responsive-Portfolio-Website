$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: [ "Developer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Developer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

const card2 = document.getElementById("card-b");
const moreContent = document.getElementById("moreContent");
const toggleButton = document.getElementById("toggleButton");

let isShowMore = false;

toggleButton.addEventListener("click", () => {
  isShowMore = !isShowMore;

  if (isShowMore) {
    moreContent.style.display = "block";
    toggleButton.textContent = "Read Less";
  } else {
    moreContent.style.display = "none";
    toggleButton.textContent = "Read More";
  }
});


const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  themeToggle.classList.toggle('active');
});

const home = document.querySelector('.home');

//  day image
home.classList.add('day');

//  click event listener to the day/night button
themeToggle.addEventListener('click', () => {
  // Toggle the background image between the day and night images
  if (home.classList.contains('day')) {
    home.classList.remove('day');
    home.classList.add('night');
  } else {
    home.classList.remove('night');
    home.classList.add('day');
  }
});


// Mail button functionality
$('#mail').click(function(e){
    var email= "yaash.shukla@gmail.com";
    window.location.href="https://mail.google.com/mail/?view=cm&fs=1&to="+email;
})

// form 
const scriptURL =' https://script.google.com/macros/s/AKfycbzL9TJ2ym8M1HilIl048LRfkvN7a_vyLnXTxBynRrqi5cS89GetjkA_H1Gz70P7ctVUKg/exec';
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})