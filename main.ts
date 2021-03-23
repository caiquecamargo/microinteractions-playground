import './style.scss'
import anime from 'animejs';

//ONE
{
  let squareFrame = 0;
  const frames = document.querySelector('.frames') as HTMLElement;
  const square = anime({
    targets: '.square',
    translateX: 250,
    autoplay: false,
    update: () => {
      squareFrame++;
      frames.innerText = `frames: ${squareFrame}`;
    }
  })

  const button = document.querySelector('.start');

  button.addEventListener('click', (event) => {
    event.preventDefault();
    square.play();
    squareFrame = 0;
  })
}

//TWO
{
  const start = document.querySelector('#two .start') as HTMLElement;
  const contentOne = document.querySelector('#two .one') as HTMLElement;
  const contentTwo = document.querySelector('#two .two') as HTMLElement;

  const leaveAnimation = anime.timeline({
    autoplay: false,
    easing: 'linear',
    duration: 250,
  });
  leaveAnimation
    .add({
      targets: contentOne,
      translateX: -250,
      opacity: 0,
    })
    .add({
      targets: contentTwo,
      translateX: [250, 0],
      opacity: [0, 1]
    })

  start.addEventListener('click', (event) => {
    event.preventDefault();
    contentTwo.style.position = 'absolute';
    leaveAnimation.play();
    leaveAnimation.finished.then(() => contentTwo.style.position = 'relative')
  })
}

// THREE
{
  const start = document.querySelector('#three .start') as HTMLElement;

  var textWrapper = document.querySelector('#three .text');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  const letter = anime.timeline({ autoplay: false, loop: true })
    .add({
      targets: '.text .letter',
      scale: [2, 1],
      opacity: [0, 1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 950,
      delay: (el, i) => 70 * i
    }).add({
      targets: '.text',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });

  start.addEventListener('click', (event) => {
    event.preventDefault();
    letter.play();
  })
}

//FOUR
{
  const start = document.querySelector('#four .start');

  const loading = anime.timeline({
    targets: '#four .loading',
    autoplay: false,
    loop: true,
    duration: 500,
  })
    .add({
      easing: 'easeOutSine',
      translateX: [-50, 50],
      scaleX: [
        { value: 2, duration: 150, easing: 'easeOutExpo' },
        { value: 1, duration: 350, easing: 'easeOutExpo' },
      ],
    }).add({
      easing: 'easeOutSine',
      translateX: [50, -50],
      scaleX: [
        { value: 2, duration: 150, easing: 'easeOutExpo' },
        { value: 1, duration: 350, easing: 'easeOutExpo' },
      ],
    })

  start.addEventListener('click', (event) => {
    event.preventDefault();
    loading.play();
  })
}

// //FIVE
{
  const start = document.querySelector('#five .start');

  const svg = anime({
    targets: '#five svg path',
    autoplay: false,
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 5000,
  })

  start.addEventListener('click', (event) => {
    event.preventDefault();
    svg.play();
  })

  // Cria as animações de forma aleatória

  // var pathEls = document.querySelectorAll('path');
  // for (var i = 0; i < pathEls.length; i++) {
  //   var pathEl = pathEls[i];
  //   var offset = anime.setDashoffset(pathEl);
  //   pathEl.setAttribute('stroke-dashoffset', offset.toString());
  //   anime({
  //     targets: pathEl,
  //     strokeDashoffset: [offset, 0],
  //     duration: anime.random(1000, 3000),
  //     delay: anime.random(0, 2000),
  //     loop: true,
  //     direction: 'alternate',
  //     easing: 'easeInOutSine',
  //     autoplay: true
  //   });
  // }
}

// SIX
{
  const buttonSandwich = document.querySelector("#sandwich1");

  const sandwich = anime.timeline({
    targets: buttonSandwich.children,
    autoplay: false,
    easing: 'easeOutSine',
    duration: 250,
  })
    .add({
      opacity: (el, index) => {
        if (index === 1) return [1, 0];
      },
      translateY: (el, index) => {
        const qty = 10;
        if (index === 1) return 0;
        return index ? -qty : qty;
      },
    })
    .add({
      rotateZ: (el, index) => {
        const qty = 45;
        if (index === 1) return 0;
        return index ? -qty : qty;
      }
    })

  buttonSandwich.addEventListener('click', async (event) => {
    event.preventDefault();
    sandwich.play();
    await sandwich.finished;
    sandwich.reverse();
  })
}

// SEVEN
{
  const buttonSandwich = document.querySelector("#sandwich2");

  const sandwich = anime.timeline({
    targets: buttonSandwich.children,
    autoplay: false,
    easing: 'easeOutSine',
    duration: 250,
  })
    .add({
      opacity: (el, index) => {
        if (index === 1) return [1, 0];
      },
      translateY: (el, index) => {
        const qty = 10;
        if (index === 1) return 0;
        return index ? -qty : qty;
      },
    })
    .add({
      rotateZ: (el, index) => {
        const qty = 45;
        if (index === 1) return 0;
        return index ? -qty : qty;
      }
    })

  const palletes = document.querySelectorAll("[data-pallete]");

  const animePallete = anime({
    targets: palletes,
    autoplay: false,
    scale: [0, 1],
    opacity: {
      value: [0, 1],
      easing: "easeOutQuint"
    },
    delay: anime.stagger(150),
  })

  buttonSandwich.addEventListener('click', async (event) => {
    event.preventDefault();
    sandwich.play();
    animePallete.play();
    await Promise.all([sandwich.finished, animePallete.finished]);
    sandwich.reverse();
    animePallete.reverse();
  })
}