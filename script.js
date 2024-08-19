function menuberAnim() {
  const menu = document.querySelector(".menu-toggle");

  let i = 0;

  menu.addEventListener("click", () => {
    if (i == 0) {
      const tl = gsap.timeline();
      tl.to(".nav-element", {
        top: "60px",
        duration: 0.3,
      });
      tl.from(".nav-element li", {
        x: 20,
        opacity: 0,
        stagger: 0.1,
      });
      i = 1;
    } else if (i == 1) {
      gsap.to(".nav-element", {
        top: "-500%",
        duration: 0.3,
      });
      i = 0;
    }
  });
  document.querySelector(".nav-element").addEventListener("click", () => {
    gsap.to(".nav-element", {
      top: "-500%",
      duration: 0.3,
    });
    i = 0;
  });
}

function navActive() {
  const sections = document.querySelectorAll("section");
  const links = document.querySelectorAll(".nav-element li a");

  window.addEventListener("scroll", () => {
    let top = window.scrollY;

    sections.forEach((sec) => {
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");

      if (top >= offset && top < offset + height) {
        links.forEach((li) => {
          li.classList.remove("active");
          if (li.classList.contains(id)) {
            li.classList.add("active");
          }
        });
      }
    });
  });
}

function headerAnim() {
  const tl3 = gsap.timeline();
  tl3.from(".header .h-img", {
    opacity: 0,
    duration: 0.3,
  });
  // tl3.from(".inner-div ", {
  //   y: 10,
  //   opacity: 0,
  //   stagger: 0.3,
  //   duration: 0.3,
  // });
  tl3.from(".inner-div img ", {
    y: 10,
    opacity: 0,
    stagger: 0.3,
    duration: 0.3,
  });
  tl3.from(".name, .details ", {
    y: 10,
    opacity: 0,
    stagger: 0.3,
    duration: 0.3,
  });
  tl3.from(".header-icons a ", {
    y: 10,
    opacity: 0,
    stagger: 0.1,
    duration: 0.3,
  });
  tl3.from(".nav ", {
    y: -10,
    opacity: 0,
    stagger: 0.1,
    duration: 0.5,
  });
}

function skillAnim() {
  const circularProgress = document.querySelectorAll(".circular-progress");
  const pregressValue = document.querySelectorAll(".progress-value");
  const container = document.querySelector(".skills-container");
  let activated = false;
  window.addEventListener("scroll", () => {
    const containerTop = container.offsetTop;
    // const containerHeight = container.offsetHeight;
    const scrollY = window.pageYOffset;
    const windowHeight = window.innerHeight;
    if (scrollY > containerTop - windowHeight + 200 && activated == false) {
      activated = true;
      circularProgress.forEach((circle, value) => {
        let initialValue = 0;
        let endValue = circle.children[0].getAttribute("data-end-value");
        let speed = 2000 / endValue;
        let progress = setInterval(() => {
          initialValue++;
          circle.children[0].textContent = initialValue + "%";
          circle.style.background = `conic-gradient(var(--red) ${
            initialValue * 3.6
          }deg, #d7d7d7 ${initialValue * 3.6}deg)`;
          if (initialValue == endValue) {
            clearInterval(progress);
          }
        }, speed);
      });
      const countContainer = document.querySelectorAll(".count-container");

      countContainer.forEach((count) => {
        let start = 0;
        let end = parseInt(count.children[0].getAttribute("end"), 10); // Ensure `end` is an integer
        let speed2 = 2000 / (end / 10); // Adjust speed for incrementing by 10

        let progress2 = setInterval(() => {
          start += 10; // Increment by 10
          count.children[0].textContent = `${start}+`;

          if (start >= end) {
            // Ensure it stops at or just beyond the `end` value
            count.children[0].textContent = `${end}+`; // Correct the final display value
            clearInterval(progress2);
          }
        }, speed2);
      });
    } else if (
      scrollY < containerTop - windowHeight + 200 &&
      activated == true
    ) {
      activated = false;
      circularProgress.forEach((circle) => {
        circle.children[0].textContent = "0%";
        circle.style.background = `conic-gradient(var(--red) 3.6deg, #ededed 0deg)`;
      });
      activated = false;
    }
  });
}

function eduAnim() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".education-container",

      // markers:true,
      start: "top 30%",
      end: "top 100%",
    },
  });
  tl.from(".edu-heading", {
    opacity: 0,
    duration: 0.3,
    x: -50,
  });

  tl.from(".edu-image", {
    opacity: 0,
    duration: 0.3,
    x: -50,
  });
  tl.from(".school", {
    opacity: 0,
    duration: 0.3,
    y: 50,
    stagger: 0.3,
  });
}
function page2Anim() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".page-2",
      start: "top 20%",
      end: "top 100%",
      //   markers: true,
    },
  });

  tl.from(".p-2-icon-container", {
    y: 20,
    opacity: 0,
    duration: 0.5,
    ease: "Power3.easeOut", // Smooth ease out
  })
    .from(".container-1", {
      y: 20,
      opacity: 0,
      duration: 0.3,
      ease: "Back.easeOut(1.7)", // Adds a slight overshoot for a dynamic effect
    })
    .from(".container-2 ", {
      y: 20,
      opacity: 0,
      duration: 0.5,
      ease: "Back.easeOut(1.7)", // Same easing for symmetry

      // ease: "Elastic.easeOut(1, 0.3)", // Bouncy effect
    })
    .from(".container-3", {
      y: 20,
      opacity: 0,
      duration: 0.5,
      ease: "Back.easeOut(1.7)", // Same easing for symmetry
    })

    .from(".tag-container .content", {
      y: 20,
      opacity: 0,
      duration: 0.5,
      stagger: 0.2,
    });
}

function page3Anim() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".page-3",
      start: "top 20%",
      end: "top 100%",
      // markers: true,
    },
  });
  tl.from(".proj-1", {
    opacity: 0,
    y: 20,
    duration: 0.5,
  });
  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page-3",
      start: "top -20%",
      end: "top 100%",
      // markers: true,
    },
  });
  tl2.from(".proj-2", {
    opacity: 0,
    y: 20,
    duration: 0.5,
  });
  const tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page-3",
      start: "top -50%",
      end: "top 100%",
      // markers: true,
    },
  });
  tl3.from(".proj-3", {
    opacity: 0,
    y: 20,
    duration: 0.5,
  });
  const tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page-3",
      start: "top -140%",
      end: "top 100%",
      // markers: true,
    },
  });
  tl4.from(".proj-4", {
    opacity: 0,
    y: 20,
    duration: 0.5,
  });
}

function swiperjs() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1, // Default number of slides per view
    spaceBetween: 30, // Space between slides
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      // When the screen width is 768px or larger
      768: {
        slidesPerView: 2, // Show 2 slides per view on tablets and up
      },
      // When the screen width is 1024px or larger
      1024: {
        slidesPerView: 3, // Show 3 slides per view on desktop and up
        spaceBetween: 10, // Space between slides
      },
      1440: {
        slidesPerView: 3, // Show 3 slides per view on desktop and up
        spaceBetween: 30, // Space between slides
      },
    },
  });
}

function page4Anim() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".page-4",
      start: "top 40%",
      end: "top 100%",
      // markers: true,
    },
  });
  tl.from(".swiper .swiper-slide", {
    opacity: 0,
    y: 20,
    duration: 0.5,
    stagger: 0.3,
  });
}
function contactAnim() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".contact-container",
      start: "top 40%",
      end: "top 100%",
      // markers: true,
    },
  });

  tl.from(".contact-left", {
    y: 40,
    opacity: 0,
    duration: 0.5,
  });
  tl.from(".contact-right", {
    x: 20,
    opacity: 0,
    duration: 0.5,
  });
}

function sendEmail() {
  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  const serviceId = "service_hi1ppqc";
  const templateId = "template_ybae1cl";
  emailjs
    .send(serviceId, templateId, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("your message sent successfully");
    })
    .catch((err) => console.log(err));
}
headerAnim();
menuberAnim();
navActive();
page2Anim();
page3Anim();
page4Anim();
swiperjs();
skillAnim();
eduAnim();
contactAnim();
