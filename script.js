
gsap.registerPlugin(Draggable, DrawSVGPlugin, EaselPlugin, Flip, GSDevTools, InertiaPlugin, MotionPathHelper, MotionPathPlugin, MorphSVGPlugin, Observer, Physics2DPlugin, PhysicsPropsPlugin, PixiPlugin, ScrambleTextPlugin, ScrollTrigger, ScrollSmoother, ScrollToPlugin, SplitText, TextPlugin, RoughEase, ExpoScaleEase, SlowMo, CustomEase, CustomBounce, CustomWiggle)

// Landing Page Animation 
const title = document.querySelector('.Title');
const def = document.querySelectorAll('.animeDef')
const click_anywhere = document.querySelectorAll('.click-anywhere')

const split = SplitText.create(title, { type: "chars" }) //split text  
const tl = gsap.timeline({ onComplete: () => { } });
tl.from(split.chars, {
  y: 150,
  opacity: 0,
  duration: 0.9,
  ease: "power4",
  stagger: 0.04,
  onComplete: () => { }
})
  .from(def, {
    x: 150,
    opacity: 0,
    mask: true,
    ease: "power3",
    duration: 1,
    stagger: 0.1,
  }, "-=0.8")
  .from(click_anywhere, {
    opacity: 0,
    duration: 1,
    ease: 'power3'
  }, "<")

//wave animation
// const wavepath = document.querySelectorAll('#wavePath');

// gsap.to(wavepath, {
//   duration: 5,
//   repeat: -1,
//   yoyo: true,
//   ease: "sine.inOut",
//   attr: {
//     d: (index) => {
//       if (index === 0) {
//         return "M0,0 L0,80 C240,20 480,120 720,70 C960,20 1200,120 1440,60 L1440,0 Z";
//       } else {
//         return "M0,120 L0,40 C240,100 480,0 720,50 C960,100 1200,0 1440,60 L1440,120 Z";
//       }
//     }
//   }
// });


//second-section-text animation
const second_text = document.querySelector('.second-section-text')
const second_section = document.querySelector('.second-section')
const second_text_split = SplitText.create(second_text, {
  type: "chars",
  mask: "chars"

})
gsap.from(second_text_split.chars, {
  mask: true,
  y: 150,
  duration: 1,
  ease: 'power4',
  stagger: {
    each: 0.05,
    from: 'random',

  },
  scrollTrigger: {
    trigger: second_section,
    start: "top 80%",
    toggleActions: "play none none none"
  }

})
//jacket image animation
const jacket = document.querySelectorAll('.image-jacket');
gsap.utils.toArray(jacket).forEach((card) => {
  gsap.from(card, {
    clipPath: "inset(0 100% 0 0)",
    duration: 1.4,
    scale: [2],
    ease: 'power3.out',
    stagger: 0.1,
    mask: true,
    scrollTrigger: {
      trigger: card,
      start: "top 70%",
      toggleActions: "play none none none"
    }
  })
})




//exclusive text name and price animation
const Name = document.querySelectorAll('.text-exclusive');
gsap.utils.toArray(Name).forEach((names) => {
  gsap.from(names, {
    x: -150,
    duration: 1.4,
    ease: 'power3.out',
    stagger: 0.1,
    mask: true,
    scrollTrigger: {
      trigger: names,
      start: 'top 90%',
      toggleActions: 'play none none none'
    }
  })
})

//accessories section text animation
// const access_text = document.querySelector(".access-anime");
// const third_section = document.querySelector('.third-section')
// const access_split = SplitText.create(access_text, {
//   type: "chars",
//   mask: 'chars'

// })
// gsap.from(access_split.chars, {
//   mask: true,
//   y: 150,
//   duration: 1,
//   ease: 'power4',
//   stagger: {
//     each: 0.05,
//     from: 'random',

//   },
//   scrollTrigger: {
//     trigger: third_section,
//     start: "top 80%",
//     toggleActions: "play none none none"
//   }
// })


//accessories scroll box setting
const pinned_col = document.querySelector('.left-col')
const scroll_row = document.querySelector('.scroll-row')
const scroll_img = document.querySelectorAll('.scroll-img')

const scroll_img_array = gsap.utils.toArray(scroll_img)

const products = [
  {
    title: 'B E A N I E',
    price: '$12.5',
    rating: '★★★★☆',
    review: '142'
  },
  {
    title: 'W A L L E T',
    price: '$23.0',
    rating: '★★★☆☆',
    review: '122'
  },
  {
    title: "S H A D E S",
    price: '$42.0',
    rating: '★★★★½',
    review: '190'
  },
  {
    title: "C A P",
    price: '$12.0',
    rating: '★★★★☆',
    review: '127'
  }
]
const container = document.querySelector(".text-container");
products.forEach(product => {
  const div = document.createElement("div");
  div.classList.add("scroll-content");
  div.innerHTML = `

    <div class="title-row">
      <h1 class="scroll-content-font prod-title">${product.title}</h1>
      <h1 class="scroll-content-font prod-divider">|</h1>
      <h1 class="scroll-content-font prod-price">${product.price}</h1>
    </div>
    <hr class='scroll-line m-0 p-0'>



  <h1 class="scroll-content-font text-end prod-rating">${product.rating}</h1> 
  <h1 class="scroll-content-font text-end " style="font-size:1.2rem; overflow:hidden">${product.review} <span class="prod-review">reviews</span></h1>`
  container.appendChild(div);
});


const scroll_text = gsap.utils.toArray(document.querySelectorAll('.scroll-content'))
const rating_text = gsap.utils.toArray(document.querySelectorAll('.prod-rating'))
let current = 0
let scrollSplit = []
let ratingSplit = []
scroll_text.forEach((el) => {
  const scrollSplitSingle = SplitText.create(el, {
    type: 'chars',
    mask: 'words',
    ignore: '.prod-rating, .prod-review'
  })
  scrollSplit.push(scrollSplitSingle)
})

rating_text.forEach((el) => {
  const ratingSplitSingle = SplitText.create(el, {
    type: 'chars'
  })
  ratingSplit.push(ratingSplitSingle)
})


scrollSplit.slice(1).forEach((split) => {
  gsap.set(split.chars, {
    opacity: 0,
  })
})

ratingSplit.slice(1).forEach((split) => {
  gsap.set(split.chars, {
    opacity: 0
  })
})

const scroll_line = gsap.utils.toArray(document.querySelectorAll('.scroll-line'))
const review_text = gsap.utils.toArray(document.querySelectorAll('.prod-review'))
gsap.set([scroll_line.slice(1),review_text.slice(1)], {
  opacity: 0
})


gsap.to(scroll_img, {
  yPercent: -320,
  ease: 'none',
  scrollTrigger: {
    trigger: scroll_row,
    start: 'top top',
    end: () => `+=${scroll_img_array.length * 1000}`,
    scrub: 1,
    pin: true,
    anticipatePin: 1,
    onUpdate: self => {
      let progressAdj
      if (self.direction > 0) {
        progressAdj = Math.max(0, self.progress - 0.07);
      }
      else {
        progressAdj = Math.max(0, self.progress + 0.07)
      }
      let index = Math.round(progressAdj * (scroll_img_array.length - 1))
      index = Math.max(0, index)
      const stl = gsap.timeline()
      if (index !== current) {

        if (window.activeTextTl) {
          window.activeTextTl.kill()
        }
        scrollSplit.forEach((split, i) => {

          gsap.set(split.chars, {
            opacity: i === current ? 1 : 0,
            y: 0,
            clearProps: "transform"
          })

        })

        ratingSplit.forEach((split, i) => {
          gsap.set(split.chars, {
            opacity: i === current ? 1 : 0,
            y: 0,
            clearProps: "transform"
          })
        })


        const stl = gsap.timeline({
          defaults: {
            overwrite: 'auto'
          }
        })

        window.activeTextTl = stl

        stl.to(scrollSplit[current].chars, {
          y: 50,
          opacity: 0,
          duration: 0.5,
          ease: 'power3.out',
          stagger: 0.02
        }, 0)

        stl.to(ratingSplit[current].chars, {
          opacity: 0,
          scale:0.5,
          duration: 0.3,
          ease: "back.out(2)"
        }, 0)



        gsap.set(scrollSplit[index].chars, {
          y: -50,
          opacity: 0
        })
        stl.to(scrollSplit[index].chars, {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power3.out',
          stagger: {
            each: 0.02,
            from:'random'
          }
        }, 0.15)


        gsap.set(ratingSplit[index].chars, {
          opacity: 0,
          scale:0.5,
        });
        stl.to(ratingSplit[index].chars, {
          opacity: 1,
          stagger:0.08,
          scale:1,
          duration: 0.2,
        }, 0.15);

        current = index
      }

    }

  }
})






//strip animation
const track = document.querySelector(".ticker-track");
const words = ["Wear ", "Your ", "Story. "];
let i;
for (i = 0; i < 25; i++) {
  words.forEach(word => {
    const span = document.createElement("span");
    span.textContent = word;
    track.appendChild(span);
  });
}
gsap.to(track, {
  xPercent: -10,
  ease: "none",
  scrollTrigger: {
    trigger: ".ticker",
    start: "top bottom",
    end: "bottom top",
    scrub: 1
  }
});


