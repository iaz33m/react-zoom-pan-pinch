const { innerWidth, innerHeight } = window;
let defaultScale = innerWidth / 1000;

if(innerHeight < innerWidth) {
  defaultScale = innerHeight / 1000;
}


if(innerWidth < innerHeight && window.matchMedia("(orientation: landscape)").matches) {
  defaultScale = innerWidth / 1200;
}

if(innerHeight < innerWidth && window.matchMedia("(orientation: landscape)")) {
  defaultScale = innerHeight / 1200;
}

if (defaultScale > 1) {
  defaultScale = 1;
}

console.log({
  "defaultScale": defaultScale
});

export const initialState = {
  wrapperComponent: null,
  contentComponent: null,
  resetScale:defaultScale,
  previousScale: defaultScale,
  scale: defaultScale,
  positionX: 0,
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
    limitToBounds: true,
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
