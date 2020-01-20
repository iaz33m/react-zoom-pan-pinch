import React from "react";
import { Context } from "../store/StateContext";
import styles from "./TransformComponent.module.css";

class TransformComponent extends React.Component {
  private wrapperRef = React.createRef<HTMLDivElement>();
  private contentRef = React.createRef<HTMLDivElement>();

  componentDidMount() {
    const { nodes } = this.context;
    nodes.setWrapperComponent(this.wrapperRef.current);
    nodes.setContentComponent(this.contentRef.current);
  }

  render() {
    const { children } = this.props;
    const {
      state: {
        positionX,
        positionY,
        scale,
        resetScale,
        options: { wrapperClass, contentClass },
      },
    } = this.context;

    let x = positionX;
    let y = positionY;
    
    if(scale <= resetScale){
      x = 0;      
      y = 0;      
    }
    
    console.log({x,y});
    
    const style = {
      WebkitTransform: `translate(${x}px, ${y}px) scale(${scale})`,
      transform: `translate(${x}px, ${y}px) scale(${scale})`,
    };
    
    return (
      <div
        ref={this.wrapperRef}
        className={`react-transform-component ${styles.container} ${wrapperClass}`}
      >
        <div
          ref={this.contentRef}
          className={`react-transform-element ${styles.content} ${contentClass}`}
          style={style}
        >
          {children}
        </div>
      </div>
    );
  }
}

TransformComponent.contextType = Context;

export { TransformComponent };
