export const initialState = {
  wrapperComponent: null,
  contentComponent: null,
  previousScale: 1,
  scale: 1,
  positionX: 0,
  positionY: 0,
  options: {
    disabled: false,
    transformEnabled: true,
    minPositionX: null,
    maxPositionX: null,
    minPositionY: null,
    maxPositionY: null,
    minScale: 0.25,
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
