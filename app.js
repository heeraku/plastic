
/*:::::::::::::::::::::::: Nav bar ::::::::::::::::::::::::*/
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')

    burger.addEventListener('click',()=>{
        //Toggle Nav//
        nav.classList.toggle('nav-active');
    
        //Animate Links//
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
            }
        });
        
        //Burger Animation//
        burger.classList.toggle('toggle');
    });
}

navSlide();



/*:::::::::::::::::::::::: Vanilla javascript for Title Parallax Effect ::::::::::::::::::::::::*/

let bottle = document.getElementById("bottle");
let wave_text = document.getElementById("wave_text");

window.addEventListener('scroll', function(){
    var value = window.scrollY;

    bottle.style.left = value * 0.2 + 'px';  
    bottle.style.top = value * 0.8 + 'px';  
    wave_text.style.top = value * 0.5 + 'px'; 
})



/*:::::::::::::::::::::::: GSAP ScrollTrigger ::::::::::::::::::::::::*/

gsap.registerPlugin(ScrollTrigger);

gsap.timeline({
    scrollTrigger: {
        trigger: ".mg1",
        start: "center 75%",
        end: "bottom top",
        scrub: 1.5,
    }
})
.from(".mg1", {opacity: 0},0)

gsap.timeline({
    scrollTrigger: {
        trigger: ".mg2",
        start: "top 90%",
        end: "bottom top",
        scrub: 1.5,
    }
})
.from(".mg2", {opacity: 0},0)

gsap.timeline({
    scrollTrigger: {
        trigger: ".mg5",
        start: "top 80%",
        end: "bottom top",
        scrub: 2,
    }
})
.from(".mg5", {opacity: 0},0)

gsap.timeline({
    scrollTrigger: {
        trigger: ".mg8",
        start: "top 80%",
        end: "bottom top",
        scrub: 2,
    }
})
.from(".mg8", {opacity: 0},0)

gsap.timeline({
    scrollTrigger: {
        trigger: ".bottle2",
        scrub: 1,
        start: "top 40%",
        end: "bottom, top"
    }
})
.from(".bottle2",{opacity: 0, duration: 1})
.to(".bottle2",{y:innerHeight * 0.4, opacity: 0, duration: 10})

gsap.timeline({
    scrollTrigger: {
        trigger: ".mg3",
        start: "center 75%",
        end: "bottom top",
        scrub: 1.5,
    }
})
.from(".mg3", {opacity: 0},0)

gsap.timeline({
    scrollTrigger: {
        trigger: ".mg4",
        start: "top 90%",
        end: "bottom top",
        scrub: 1.5,
    }
})
.from(".mg4", {opacity: 0},0)

gsap.timeline({
    scrollTrigger: {
        trigger: ".mg6",
        start: "center 70%",
        end: "bottom top",
        scrub: 1.5,
    }
})
.from(".mg6", {opacity: 0},0)

gsap.timeline({
    scrollTrigger: {
        trigger: ".mg7",
        start: "top 90%",
        end: "bottom top",
        scrub: 2,
    }
})
.from(".mg7", {opacity: 0},0)

gsap.timeline({
    scrollTrigger: {
        trigger: ".mg9",
        start: "center 90%",
        end: "bottom top",
        scrub: 1.5,
    }
})
.from(".mg9", {opacity: 0},0)

gsap.timeline({
    scrollTrigger: {
        trigger: ".mg10",
        start: "top 90%",
        end: "bottom top",
        scrub: 2,
    }
})
.from(".mg10", {opacity: 0},0)

gsap.timeline({
    scrollTrigger: {
      trigger: ".fishs",
      start: "20% 50%",
      end: "50% 20%",
      scrub: 1.5,
    }
  })
.to(".fish_top",  { opacity:0.2}, 0)
.to(".fish_bottom", { opacity:0.2}, 0)

gsap.timeline({
    scrollTrigger: {
      trigger: ".benefits_js",
      start: "top 85%",
      end: "center 50%",
      scrub: 1,
    }
  })
.from(".benefits_js",  {x:innerWidth}, 0)

gsap.timeline({
    scrollTrigger: {
      trigger: ".pollution_js",
      start: "top 85%",
      end: "center 50%",
      scrub: 1,
    }
  })
.from(".pollution_js",  {x:innerWidth}, 0)

gsap.timeline({
    scrollTrigger: {
      trigger: ".animal_js",
      start: "top 85%",
      end: "center 50%",
      scrub: 1,
    }
  })
.from(".animal_js",  {x:innerWidth}, 0)


gsap.timeline({
    scrollTrigger: {
      trigger: ".bf_img",
      start: "top 70%",
      end: "center 20%",
      scrub: 1,
    }
  })
.from(".bf_img",  {x:-100}, 0)

gsap.timeline({
    scrollTrigger: {
      trigger: ".bf_txt",
      start: "top 70%",
      end: "center 20%",
      scrub: 1,
    }
  })
.from(".bf_txt",  {opacity:0},0)

gsap.timeline({
    scrollTrigger: {
      trigger: ".pol_img",
      start: "top 70%",
      end: "center 20%",
      scrub: 1,
    }
  })
.from(".pol_img",  {x:-100}, 0)

gsap.timeline({
    scrollTrigger: {
      trigger: ".pol_txt",
      start: "top 70%",
      end: "center 20%",
      scrub: 1,
    }
  })
.from(".pol_txt",  {opacity:0},0)

gsap.timeline({
    scrollTrigger: {
      trigger: ".whale_js",
      start: "top 80%",
      end: "center 30%",
      scrub: 1.2,
    }
  })
.from(".whale_js",  {x:-100, y: 100, opacity: 0}, 0)


gsap.timeline({
    scrollTrigger: {
      trigger: ".ani_img1",
      start: "top 70%",
      end: "center 20%",
      scrub: 1,
    }
  })
.from(".ani_img1",  {x:-100}, 0)

gsap.timeline({
    scrollTrigger: {
      trigger: ".ani_txt1",
      start: "top 70%",
      end: "center 20%",
      scrub: 1,
    }
  })
.from(".ani_txt1",  {opacity:0},0)

gsap.timeline({
    scrollTrigger: {
      trigger: ".ani_img2",
      start: "top 70%",
      end: "center 20%",
      scrub: 1,
    }
  })
.from(".ani_img2",  {x:100}, 0)

gsap.timeline({
    scrollTrigger: {
      trigger: ".ani_txt2",
      start: "top 70%",
      end: "center 20%",
      scrub: 1,
    }
  })
.from(".ani_txt2",  {opacity:0},0)

gsap.timeline({
    scrollTrigger: {
      trigger: ".dna",
      start: "top 70%",
      end: "center 20%",
      scrub: 1.2,
    }
  })
.to(".dna",  {x:-100, scale: 2, opacity: 0.1}, 0)

gsap.timeline({
    scrollTrigger: {
      trigger: ".micro_js",
      start: "top 85%",
      end: "center 50%",
      scrub: 1,
    }
  })
.from(".micro_js",  {x:innerWidth}, 0)

gsap.timeline({
    scrollTrigger: {
      trigger: ".turtle",
      start: "top 70%",
      end: "center 10%",
      scrub: 1,
    }
  })
.from(".turtle",  {x:-100, y: -100, opacity: 0}, 0)

gsap.timeline({
    scrollTrigger: {
      trigger: ".micro_img",
      start: "top 70%",
      end: "center 20%",
      scrub: 1,
    }
  })
.from(".micro_img",  {x:-100}, 0)

gsap.timeline({
    scrollTrigger: {
      trigger: ".micro_txt",
      start: "top 70%",
      end: "center 20%",
      scrub: 1,
    }
  })
.from(".micro_txt", {opacity:0},0)

gsap.timeline({
    scrollTrigger: {
      trigger: ".human_img",
      start: "top 70%",
      end: "center 20%",
      scrub: 1,
    }
  })
.from(".human_img",  {x:100}, 0)

gsap.timeline({
    scrollTrigger: {
      trigger: ".human_txt",
      start: "top 70%",
      end: "center 20%",
      scrub: 1,
    }
  })
.from(".human_txt",  {opacity:0},0)

gsap.timeline({
    scrollTrigger: {
      trigger: ".solve_js",
      start: "top 85%",
      end: "center 50%",
      scrub: 1,
    }
  })
.from(".solve_js",  {x:innerWidth}, 0)