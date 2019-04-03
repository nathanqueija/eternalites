import { Component } from "react";

import ScrollMagic from "ScrollMagic";

import TweenMax from "TweenMax";
import "animation.gsap";
import "debug.addIndicators";
import {
  wrapper,
  square,
  placeholder,
  que,
  mainHeader,
  scene,
  eye
} from "./index.module.scss";

export default class Scroll extends Component {
  constructor(props) {
    super(props);
    this.controller = new ScrollMagic.Controller();

    this.symbol = null;
    // reference to the animation
    this.myTween = null;
  }

  applyBlur = () => {
    TweenMax.set(this.symbol, {
      webkitFilter: "blur(" + this.element.a + "px)"
    });
  };

  componentDidMount() {
    this.element = { a: 0 }; //start the blur at 0 pixels

    TweenMax.to(this.element, 5, {
      a: 10,
      repeat: 100,
      onUpdate: this.applyBlur,
      yoyo: true
    });

    new ScrollMagic.Scene({
      triggerElement: "#scene2",
      offset: 400
    })
      .setPin("#eye")
      //   .addIndicators({ name: "EYEEEE" })
      .addTo(this.controller);

    new ScrollMagic.Scene({
      triggerElement: "#scene3",
      duration: "100%",
      offset: 100
    })
      .setTween("#eye", {
        opacity: 0
      })
      //   .addIndicators({ name: "EYEEEE2" })
      .addTo(this.controller);

    new ScrollMagic.Scene({
      triggerElement: "#scene3",
      duration: "100%"
    })
      .setTween("#girl", {
        opacity: 1
      })
      //   .setPin("#eye")
      //   .addIndicators({ name: "GIRL" })
      .addTo(this.controller);

    // this.myTween = TweenMax.to(this.symbol, 1, { x: 100, y: 100 });
    // build tween
    // var tween = TweenMax.to("#animate3", 1, { className: "+=fish" });

    // // build scene
    // var scene = new ScrollMagic.Scene({
    //   triggerElement: "#trigger3",
    //   duration: 200,
    //   offset: -50
    // })
    //   .setTween(tween)
    //   .addIndicators({ name: "tween css class" }) // add indicators (requires plugin)
    //   .addTo(controller);

    // new ScrollMagic.Scene({
    //   triggerElement: "#scrollStarts",
    //   duration: 400, // scroll distance
    //   offset: 0 // start this scene after scrolling for 50px
    // })
    //   .setTween("#myElement", {
    //     x: 220,
    //     color: "white"
    //   })
    //   .addIndicators({ name: "target" })
    //   //   .setPin("#myElement") // pins the element for the the scene's duration
    //   .addTo(this.controller); // assign the scene to the controller
    // new ScrollMagic.Scene({
    //   triggerElement: "#scrollStarts",
    //   duration: 400, // scroll distance
    //   offset: 0 // start this scene after scrolling for 50px
    // })
    //   .setTween("#square", {
    //     webkitFilter: "blur(0px)",
    //     scale: 2
    //   })
    //   .addIndicators({ name: "square" })
    //   //   .setPin("#myElement") // pins the element for the the scene's duration
    //   .addTo(this.controller); // assign the scene to the controller
    // new ScrollMagic.Scene({
    //   triggerElement: "#scene2",
    //   duration: 800,
    //   offset: 100
    // })
    //   //   .setPin("#eye")
    //   .setTween("#eye", {
    //     scale: 0,
    //     opacity: 0
    //   })
    //   .addIndicators() // add indicators (requires plugin)
    //   .addTo(this.controller);
  }

  render() {
    return (
      <div className={wrapper}>
        <div className={scene}>
          <h1 className={mainHeader}>ETERNALITES</h1>
        </div>
        <div id="scene2" className={scene}>
          <div ref={div => (this.symbol = div)} id="eye" className={eye}>
            SYMBOL
          </div>
        </div>
        <div id="scene3" className={scene}>
          <img id="girl" src="/static/girl.jpg" />
        </div>
        {/* <div className={placeholder} />
        <div id="scrollStarts">
          Scrolling animation starts when this is in the middle ------->
        </div>
        <div className={que} style={{ height: "600px", background: "yellow" }}>
          <div id="square" className={square} />
          <div id="square2" className={square} />
          <div
            id="wrapper"
            style={{ height: "300px", background: "lightgreen" }}
          >
            <h1 id="myElement">TARGET</h1>
          </div>
        </div> */}
      </div>
    );
  }
}
