import React from "react";
import classes from './DisplayComponent.module.css';

const DisplayComponent = (props) => {
    return (
      <div className={classes.displayWrapper}>
          <span>{props.time.h}</span>
          <span>{props.time.m}</span>
          <span>{props.time.s}</span>
      </div>
    );
}

export default DisplayComponent;