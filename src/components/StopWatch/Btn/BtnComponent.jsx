import React from "react";
import classes from './BtnComponent.module.css';

const BtnComponent = (props) => {
    return (
        <div>
            {props.status === 0 ? (
                    <div className={classes.btnWrapper}>
                        <button onClick={props.start} className={`${classes.btnGreen} ${classes.btn}`}>Start</button>
                        <button className={`${classes.btnBlue} ${classes.btn}`}>Wait</button>
                        <button className={`${classes.btnOrange} ${classes.btn}`}>Reset</button>
                    </div>
                )
                : ''}
            {props.status === 1 ? (
                    <div className={classes.btnWrapper}>
                        <button onClick={props.stop} className={`${classes.btnRed} ${classes.btn}`}>Stop</button>
                        <button onClick={props.wait} className={`${classes.btnBlue} ${classes.btn}`}>Wait</button>
                        <button onClick={props.reset} className={`${classes.btnOrange} ${classes.btn}`}>Reset</button>
                    </div>
                )
                : ''}
            {props.status === 3 ? (
                    <div className={classes.btnWrapper}>
                        <button onClick={props.start} className={`${classes.btnGreen} ${classes.btn}`}>Start</button>
                        <button onClick={props.wait} className={`${classes.btnBlueWait} ${classes.btn}`}>Wait</button>
                        <button onClick={props.reset} className={`${classes.btnOrange} ${classes.btn}`}>Reset</button>
                    </div>
                )
                : ''}
        </div>
    );
}

export default BtnComponent;