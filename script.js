// /**
//  * StorySpire - Interactive Landing Page Logic
//  * Senior Frontend Development Implementation
//  */

// document.addEventListener("DOMContentLoaded", () => {
//   initMobileMenu();
//   initTestimonialSlider();
//   initCommunitySlider();
//   initYoutubeSlider();
//   initScrollHeader();
// });

// /**
//  * 1. Mobile Drawer Navigation & Scroll Lock
//  */
// function initMobileMenu() {
//   const burgerBtn = document.querySelector(".header__burger");
//   const closeBtn = document.querySelector(".mobile-drawer__close");
//   const drawer = document.querySelector(".mobile-drawer");
//   const drawerLinks = document.querySelectorAll(".mobile-drawer__nav-link");
//   const body = document.body;

//   function openMenu() {
//     drawer.classList.add("active");
//     body.style.overflow = "hidden"; // Lock background scroll
//   }

//   function closeMenu() {
//     drawer.classList.remove("active");
//     body.style.overflow = ""; // Release background scroll
//   }

//   burgerBtn.addEventListener("click", openMenu);
//   closeBtn.addEventListener("click", closeMenu);

//   // Auto-close menu when clicking a link
//   drawerLinks.forEach((link) => {
//     link.addEventListener("click", closeMenu);
//   });
// }

// /**
//  * 2. Testimonial Text Carousel (Next/Prev controls)
//  */
// function initTestimonialSlider() {
//   const slides = document.querySelectorAll(".testimonials__slide");
//   const prevBtn = document.querySelector(".testimonials__btn--prev");
//   const nextBtn = document.querySelector(".testimonials__btn--next");

//   if (slides.length === 0) return;

//   let currentIndex = 0;

//   function showSlide(index) {
//     // Handle boundary conditions
//     if (index < 0) {
//       currentIndex = slides.length - 1;
//     } else if (index >= slides.length) {
//       currentIndex = 0;
//     } else {
//       currentIndex = index;
//     }

//     // Toggle visibility classes
//     slides.forEach((slide, i) => {
//       if (i === currentIndex) {
//         slide.classList.add("active");
//       } else {
//         slide.classList.remove("active");
//       }
//     });
//   }

//   prevBtn.addEventListener("click", () => {
//     showSlide(currentIndex - 1);
//   });

//   nextBtn.addEventListener("click", () => {
//     showSlide(currentIndex + 1);
//   });
// }

// /**
//  * 3. Mobile Story Community Slider (Horizontal Scroll + Dot Bindings)
//  */
// function initCommunitySlider() {
//   const track = document.querySelector(".story-community__track");
//   const dots = document.querySelectorAll(".story-community__dot");
//   const cards = document.querySelectorAll(".story-community__card");

//   if (!track || dots.length === 0) return;

//   // A. Sync active dot status when the user swipes or scrolls naturally
//   track.addEventListener("scroll", () => {
//     const width = track.getBoundingClientRect().width;
//     const scrollLeft = track.scrollLeft;

//     // Calculate currently active slide index
//     const index = Math.round(scrollLeft / width);

//     updateActiveDot(index);
//   });

//   function updateActiveDot(index) {
//     dots.forEach((dot, idx) => {
//       if (idx === index) {
//         dot.classList.add("active");
//       } else {
//         dot.classList.remove("active");
//       }
//     });
//   }

//   // B. Support dot click scrolling to target slide
//   dots.forEach((dot) => {
//     dot.addEventListener("click", (e) => {
//       const slideIndex = parseInt(e.target.getAttribute("data-slide"));
//       const cardWidth = cards[slideIndex].getBoundingClientRect().width;

//       // Scroll track to target slide
//       track.scrollTo({
//         left: slideIndex * (cardWidth + 24), // include margin gap
//         behavior: "smooth",
//       });

//       updateActiveDot(slideIndex);
//     });
//   });
// }

// /**
//  * 4. YouTube Video Horizontal Slider (Multi-device Swipe & Buttons Slider)
//  */
// function initYoutubeSlider() {
//   const track = document.querySelector(".youtube__track");
//   const prevBtn = document.querySelector(".youtube__btn--prev");
//   const nextBtn = document.querySelector(".youtube__btn--next");
//   const cards = document.querySelectorAll(".youtube__card");

//   if (!track || cards.length === 0) return;

//   let currentIndex = 0;

//   // Calculate maximum slide index based on layout
//   function getMaxIndex() {
//     const isMobile = window.innerWidth < 768;
//     if (isMobile) {
//       return cards.length - 1; // Slide one card at a time on mobile
//     } else {
//       return cards.length - 3; // Show 3 columns at a time on desktop
//     }
//   }

//   function slideTo(index) {
//     const maxIndex = getMaxIndex();

//     // Boundaries
//     if (index < 0) {
//       currentIndex = 0;
//     } else if (index > maxIndex) {
//       currentIndex = maxIndex;
//     } else {
//       currentIndex = index;
//     }

//     const isMobile = window.innerWidth < 768;
//     if (isMobile) {
//       // Scroll track on mobile to support native smooth scrolling
//       const cardWidth = cards[0].getBoundingClientRect().width;
//       track.scrollTo({
//         left: currentIndex * (cardWidth + 40), // 40px gap in media queries
//         behavior: "smooth",
//       });
//     } else {
//       // Translate track on desktop for hardware-accelerated fluid feel
//       const cardWidth = cards[0].getBoundingClientRect().width;
//       const gapWidth = 40; // gap: 2.5rem is 40px
//       const offset = currentIndex * (cardWidth + gapWidth);
//       track.style.transform = `translateX(-${offset}px)`;
//     }
//   }

//   if (prevBtn && nextBtn) {
//     prevBtn.addEventListener("click", () => {
//       slideTo(currentIndex - 1);
//     });

//     nextBtn.addEventListener("click", () => {
//       slideTo(currentIndex + 1);
//     });
//   }

//   // C. Swipe Touch gesture handling for Youtube on mobile screens
//   let startX = 0;
//   let endX = 0;

//   track.addEventListener(
//     "touchstart",
//     (e) => {
//       startX = e.touches[0].clientX;
//     },
//     { passive: true },
//   );

//   track.addEventListener(
//     "touchend",
//     (e) => {
//       endX = e.changedTouches[0].clientX;
//       handleSwipe();
//     },
//     { passive: true },
//   );

//   function handleSwipe() {
//     const swipeThreshold = 50; // min swipe distance in px
//     const diff = startX - endX;

//     if (Math.abs(diff) > swipeThreshold) {
//       if (diff > 0) {
//         // Swiped Left -> next slide
//         slideTo(currentIndex + 1);
//       } else {
//         // Swiped Right -> previous slide
//         slideTo(currentIndex - 1);
//       }
//     }
//   }

//   // Reset slide layouts on window resize
//   window.addEventListener("resize", () => {
//     slideTo(0);
//   });
// }

// /**
//  * 5. Glassy Header Scroll Effect
//  */
// function initScrollHeader() {
//   const header = document.querySelector(".header");

//   window.addEventListener("scroll", () => {
//     if (window.scrollY > 50) {
//       header.style.padding = "0.8rem 0";
//       header.style.background = "rgba(6, 4, 19, 0.9)";
//       header.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.3)";
//     } else {
//       header.style.padding = "1.25rem 0";
//       header.style.background = "rgba(6, 4, 19, 0.7)";
//       header.style.boxShadow = "none";
//     }
//   });
// }
