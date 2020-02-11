import { availableAnimations } from "./utils";

export function handleDisableAnimation() {
  if (!this.mounted) return;
  if (this.animation) {
    cancelAnimationFrame(this.animation);
  }
  this.animate = false;
  this.animation = false;
  this.velocity = false;
}

export function animate(animationName, animationTime, callback) {
  if (!this.mounted) return;
  const startTime = new Date().getTime();
  const lastStep = 1;

  // if another animation is active
  handleDisableAnimation.call(this);

  // new animation
  this.animation = () => {
    if (!this.animation || !this.mounted) return;
    const frameTime = new Date().getTime() - startTime;
    const animationProgress = frameTime / animationTime;
    const animationType = availableAnimations[animationName];

    const step = animationType(animationProgress);

    if (frameTime >= animationTime) {
      callback(lastStep);
      this.animation = null;
    } else {
      callback(step);
      requestAnimationFrame(this.animation);
    }
  };

  requestAnimationFrame(this.animation);
}

export function animateComponent({ targetState, speed, type }) {
  const { scale, positionX, positionY,resetScale, scaleCoefficient } = this.stateProvider;
  const { innerWidth } = window;

  let x = targetState.positionX;
  let y = targetState.positionY;

  if(targetState.scale < resetScale){
    // x = 0;

    x = ((innerWidth/2) - ((innerWidth * targetState.scale)/2)) - scaleCoefficient;
    y = 0;

  }

  console.log({
    "m-x":x,
    "m-y":y,
    "s-c":scaleCoefficient
  });

  const scaleDiff = targetState.scale - scale;
  const positionXDiff = x - positionX;
  const positionYDiff = y - positionY;

  if (speed === 0) {
    this.stateProvider.previousScale = this.stateProvider.scale;
    this.stateProvider.scale = targetState.scale;
    this.stateProvider.positionX = x;
    this.stateProvider.positionY = y;
    this.applyTransformation();
  } else {
    // animation start timestamp
    animate.call(this, type, speed, step => {
      this.stateProvider.previousScale = this.stateProvider.scale;
      this.stateProvider.scale = scale + scaleDiff * step;
      this.stateProvider.positionX = positionX + positionXDiff * step;
      this.stateProvider.positionY = positionY + positionYDiff * step;

      // apply animation changes
      this.applyTransformation();
    });
  }
}
