const { innerWidth, innerHeight } = window;
let defaultScale = innerWidth / 1000;

let scaleCoefficient = 0;

if(window.innerWidth < 1025 && window.matchMedia("(orientation: landscape)").matches) {

  defaultScale = innerWidth / 1200;

  if(innerHeight < innerWidth) {
    defaultScale = innerHeight / 1200;
  }

  scaleCoefficient = 50;

}


if(innerWidth < 600 && window.matchMedia("(orientation: landscape)").matches) {

  defaultScale = innerWidth / 1500;

  if(innerHeight < innerWidth) {
    defaultScale = innerHeight / 1500;
  }
  scaleCoefficient = 100;
}

if(innerWidth < 1024 && window.matchMedia("(orientation: portrait)").matches) {
  scaleCoefficient = 100;
}

if(innerWidth < 600 && window.matchMedia("(orientation: portrait)").matches) {
  scaleCoefficient = 120;
}



if (defaultScale > 1) {
  defaultScale = 1;
}

export const initialState = {
  wrapperComponent: null,
  contentComponent: null,
  resetScale:defaultScale,
  previousScale: defaultScale,
  scale: defaultScale,
  scaleCoefficient:scaleCoefficient,
  positionX: ((innerWidth/2) - ((innerWidth * defaultScale)/2)) - scaleCoefficient,
  positionY: 0,
  options: {
    disabled: false,
    transformEnabled: true,
    minPositionX: null,
    maxPositionX: null,
    minPositionY: null,
    maxPositionY: null,
    minScale: defaultScale,
    maxScale: 8,
    limitToBounds: false,
    centerContent: true,
    wrapperClass: "",
    contentClass: "",
  },
  wheel: {
    disabled: false,
    step: 5,
    wheelEnabled: true,
    touchPadEnabled: true,
    disableLimitsOnWheel: true,
  },
  pan: {
    disabled: false,
    panAnimationType: "linear",
    lockAxisX: false,
    lockAxisY: false,
    velocity: true,
    velocityEqualToMove: true,
    velocitySensitivity: 10,
    velocityActiveScale: 1,
    velocityMinSpeed: 2,
    velocityBaseTime: 1600,
    velocityAnimationType: "easeOut",
    limitToWrapperBounds: false,
    padding: true,
    paddingSize: 30,
    panPaddingShiftTime: 60,
    panReturnAnimationTime: 200,
    panReturnAnimationType: "easeOut",
    disableOnTarget: [],
  },
  pinch: {
    disabled: false,
  },
  zoomIn: {
    disabled: false,
    step: 20,
    animation: true,
    animationType: "easeOut",
    animationTime: 200,
  },
  zoomOut: {
    disabled: false,
    step: 20,
    animation: true,
    animationType: "easeOut",
    animationTime: 200,
  },
  doubleClick: {
    disabled: false,
    step: 20,
    mode: "zoomIn",
    animation: true,
    animationType: "easeOut",
    animationTime: 200,
  },
  reset: {
    disabled: false,
    animation: true,
    animationType: "easeOut",
    animationTime: 200,
  },
  scalePadding: {
    disabled: false,
    size: 0.2,
    animationTime: 200,
    animationType: "easeOut",
  },
};
