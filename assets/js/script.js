// Refresh AOS on scroll
window.onscroll = () => {
    AOS.refresh();
}

// ------------------------------------------------------------------------------------------------------------

// Functionality For Home Page What We Do Slider
const prMediaSwiper = new Swiper(".what-we-do .what-we-do-slider", {
  slidesPerView: 3,
  loop: true,
  speed: 800,
  spaceBetween: 25,
  grabCursor: true,
  autoplay: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".what-we-do .swiper-button-next",
    prevEl: ".what-we-do .swiper-button-prev",
  },
  breakpoints: {
    992: { slidesPerView: 3 },
    768: { slidesPerView: 3 },
    480: { slidesPerView: 2 },
    0: { slidesPerView: 1 }
  }
});

// ------------------------------------------------------------------------------------------------------------

// Functionality For Home Page Project Counter Animation
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".count-box span");

    // Count up animation
    function countUp(el) {
        const target = parseInt(el.getAttribute("data-count").replace(/\D/g, "")); // handles "70+"
        let count = 0;
        const speed = 1000; // smaller = faster
        const increment = Math.ceil(target / speed);

        const updateCount = () => {
            count += increment;
            if (count < target) {
                el.textContent = count;
                requestAnimationFrame(updateCount);
            } else {
                el.textContent = el.getAttribute("data-count"); // show final with + if any
            }
        };

        updateCount();
    }

    // Observer to trigger when in viewport
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                countUp(el);
                obs.unobserve(el); // run only once
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
        observer.observe(counter);
    });
});

// ------------------------------------------------------------------------------------------------------------
