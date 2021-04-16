import './style.scss'
import anime, { AnimeInstance } from 'animejs';

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

// FIVE
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

//EIGTH 
{
  const svg = document.querySelector("#svg");

  const start = document.querySelector("#eigth .start") as HTMLElement;


  const animation = anime({
    targets: svg,
    width: [0, "100%"],
    autoplay: false,
    easing: "easeInOutSine",
    duration: 1000,
  })

  start.addEventListener("click", (event) => {
    event.preventDefault();
    animation.play();
  })
}

// NINE 
{
  const circle = document.querySelector("#nine .circle");

  const start = document.querySelector("#nine .start") as HTMLElement;

  const path = anime.path("#nine #svg svg path");


  const animation = anime({
    targets: circle,
    translateX: path('x'),
    translateY: path('y'),
    autoplay: false,
    easing: "easeInOutSine",
    duration: 5000,
  })

  start.addEventListener("click", (event) => {
    event.preventDefault();
    animation.play();
  })
}

// TEN
{
  const circle = document.querySelector("#ten .circle");

  const start = document.querySelector("#ten .start") as HTMLElement;

  const path = anime.path("#ten #svg svg path");

  const svg = document.querySelector("#ten #svg");

  const animationSVG = anime.timeline({
    targets: svg,
    autoplay: false,
    easing: "linear",
  }).add({
    width: [0, "15%"],
    duration: 550,
  }).add({
    width: ["15%", "20%"],
    duration: 450,
  }).add({
    width: ["20%", "30%"],
    duration: 300,
  }).add({
    width: ["30%", "50%"],
    duration: 600,
  }).add({
    width: ["50%", "100%"],
    duration: 600,
  })

  const animation = anime({
    targets: circle,
    translateX: path('x'),
    translateY: path('y'),
    autoplay: false,
    easing: "easeInSine",
    duration: 3000,
  })

  start.addEventListener("click", (event) => {
    event.preventDefault();
    animation.play();
    animationSVG.play();
  })
}

// ELEVEN
{
  interface ElementAnimatorOptions {
    visibleElements: number, gap: number,
  }

  class ElementAnimator {
    private _animation: AnimeInstance;
    private _type: string;
    private _from: number;
    private _to: number;
    private _move: number;
    private _width: number;
    private _visibleElements: number;
    private _gap: number;

    constructor(private _element: HTMLElement, private _position: number, private _length: number, options?: ElementAnimatorOptions) {
      this._from = this._position;
      this._to = this._position;
      this._visibleElements = options?.visibleElements || 3;
      this._gap = options?.gap || 20;

      this.calculateElementWidth();
      this._width = this._element.offsetWidth;
      this._move = this._width + this._gap;
      this._animation = this.swap();
    }

    calculateElementWidth() {
      const containerWidth = this._element.parentElement.offsetWidth;
      const minWidth = (containerWidth / this._visibleElements) - (this._gap + (this._gap / this._visibleElements));
      this._element.style.minWidth = `${minWidth}px`;
    }

    async turn(type: string) {
      this._type = type;
      this.setPosition();
      this.createAnimation();
      await this.animate();
      this._from = this._to;
    }

    animate() {
      this._animation.play();
      return this._animation.finished;
    }

    createAnimation() {
      if (this._type === "left") {
        switch (this._to) {
          case -1:
            this._animation = this.leave();
            break;
          case this._visibleElements - 1:
            this._animation = this.enter();
            break;
          default:
            this._animation = this.swap();
            break;
        }
      }
      else {
        switch (this._to) {
          case this._visibleElements:
            this._animation = this.leave();
            break;
          case 0:
            this._animation = this.enter();
            break;
          default:
            this._animation = this.swap();
            break;
        }
      }
    };

    setPosition() {
      if (this._type === "left") {
        if (this._from === -1) this._from = this._length - 1;
        this._to = this._from - 1;
      }
      else {
        if (this._from === this._length - 1) this._from = -1;
        this._to = this._from + 1;
      }
    }

    swap() {
      return anime({
        targets: this._element,
        autoplay: false,
        translateX: [this._from * this._move, this._to * this._move],
        duration: 200,
        easing: "linear",
      });
    }

    enter() {
      return anime({
        targets: this._element,
        autoplay: false,
        opacity: [0, 1],
        translateX: [this._from * this._move, this._to * this._move],
        duration: 200,
        easing: "linear",
      });
    }

    leave() {
      return anime({
        targets: this._element,
        autoplay: false,
        opacity: [1, 0],
        translateX: [this._from * this._move, this._to * this._move],
        duration: 200,
        easing: "linear",
      });
    }
  }
  const leftButton = document.querySelector("#eleven .arrow-left");
  const rightButton = document.querySelector("#eleven .arrow-right");

  const items: ElementAnimator[] = Array.from(document.querySelectorAll("#eleven .card")).map((item, index, array) => new ElementAnimator(item as HTMLElement, index, array.length));

  rightButton.addEventListener("click", () => {
    items.forEach(item => item.turn("left"));
  })

  leftButton.addEventListener("click", () => {
    items.forEach(item => item.turn("right"));
  })
}

// TWELVE
{
  const start = document.querySelector('#twelve .start') as HTMLElement;

  const textWrapperOne = document.querySelector('#twelve .text-one');
  textWrapperOne.innerHTML = textWrapperOne.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  const textWrapperTwo = document.querySelector('#twelve .text-two');
  textWrapperTwo.innerHTML = textWrapperTwo.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  const animation = anime.timeline({ autoplay: false })
    .add({
      targets: textWrapperOne.children,
      scale: [2, 1],
      opacity: [0, 1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 950,
      delay: (el, i) => 70 * i
    })
    .add({
      targets: textWrapperTwo.children,
      scale: [2, 1],
      opacity: [0, 1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 950,
      delay: (el, i) => 70 * i
    })
    .add({
      targets: '#twelve .letter',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    })

  start.addEventListener('click', (event) => {
    event.preventDefault();
    animation.play();
  })
}

// THIRTEEN
{
  interface ElementAnimatorOptions {
    visibleElements: number,
    width: number,
  }

  class ElementAnimator {
    private _animation: AnimeInstance;
    private _type: string;
    private _from: number;
    private _to: number;
    private _center: number;
    private _move: number;
    private _width: number;
    private _visibleLayer: number;

    constructor(private _element: HTMLElement, private _position: number, private _length: number, options?: ElementAnimatorOptions) {
      if (this._length % 2 === 0) throw new ErrorEvent("The number of elements must be odd.");

      this._from = this._position;
      this._to = this._position;

      this._width = options?.width || 300;
      this._element.style.width = `${this._width}px`;
      this._element.style.left = `calc(50% - ${this._width / 2}px)`;
      this._move = this._width / 2;
      this._center = Math.floor(this._length / 2);

      let visibleElements = options?.visibleElements || this._length;
      this._visibleLayer = this.calcLayer(visibleElements);
      this.setZ();
      this.setVisibility();
      this.createAnimation();
    }

    calcLayer(number: number) {
      const offset = Math.abs(this._center - number);
      return offset;
    }

    setVisibility() {
      const fromLayer = this.calcLayer(this._from);
      const opacity = this.isVisible(fromLayer) ? 1 : 0;
      this._element.style.opacity = `${opacity}`;
    }

    setZ() {
      const layer = this.calcLayer(this._from);
      const z = 5;
      this._element.style.zIndex = `${z - layer}`;
    }

    async turn(type: string) {
      this._type = type;
      this.setPosition();
      this.createAnimation();
      await this.animate();
      this._from = this._to;
      this.setZ();
    }

    animate() {
      this._animation.play();
      return this._animation.finished;
    }

    isVisible(layer: number) {
      return layer <= this._visibleLayer;
    }

    createAnimation() {
      const toLayer = this.calcLayer(this._to);
      const fromLayer = this.calcLayer(this._from);

      if (!this.isVisible(fromLayer) && this.isVisible(toLayer)) this._animation = this.enter();
      else if (this.isVisible(fromLayer) && !this.isVisible(toLayer)) this._animation = this.leave();
      else this._animation = this.swap();
    };

    setPosition() {
      if (this._type === "left") {
        this._to = this._from === 0 ? this._length - 1 : this._from - 1;
      }
      else {
        this._to = this._from === this._length - 1 ? 0 : this._from + 1;
      }
    }

    calcScale() {
      const toLayer = this.calcLayer(this._to);
      const fromLayer = this.calcLayer(this._from)
      return [1 - (fromLayer / 10), 1 - (toLayer / 10)];
    }

    swap() {
      return anime({
        targets: this._element,
        autoplay: false,
        scale: this.calcScale(),
        translateX: [(this._from - this._center) * this._move, (this._to - this._center) * this._move],
        duration: 200,
        easing: "linear",
      });
    }

    enter() {
      return anime({
        targets: this._element,
        autoplay: false,
        scale: this.calcScale(),
        opacity: [0, 1],
        translateX: [(this._from - this._center) * this._move, (this._to - this._center) * this._move],
        duration: 200,
        easing: "linear",
      });
    }

    leave() {
      return anime({
        targets: this._element,
        autoplay: false,
        scale: this.calcScale(),
        opacity: [1, 0],
        translateX: [(this._from - this._center) * this._move, (this._to - this._center) * this._move],
        duration: 200,
        easing: "linear",
      });
    }
  }
  const leftButton = document.querySelector("#thirteen .arrow-left");
  const rightButton = document.querySelector("#thirteen .arrow-right");

  const items: ElementAnimator[] = Array.from(document.querySelectorAll("#thirteen .card")).map((item, index, array) => new ElementAnimator(item as HTMLElement, index, array.length));

  rightButton.addEventListener("click", () => {
    items.forEach(item => item.turn("left"));
  })

  leftButton.addEventListener("click", () => {
    items.forEach(item => item.turn("right"));
  })
}