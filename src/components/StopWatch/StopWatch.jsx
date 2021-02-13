import React, { useState, useEffect } from "react";
import classes from './StopWatch.module.css';
import DisplayComponent from "./DisplayComponent/DisplayComponent";
import BtnComponent from "./BtnComponent/BtnComponent";


const StopWatch = () => {
    const [time, setTime] = useState({h: 0, m: 0, s: 0});
    const [intervalId, setIntervalId] = useState();
    const [status, setStatus] = useState(0);

    let seconds = time.s,
        minutes = time.m,
        hours = time.h;

    const updateTime = () => {
        if (minutes === 60) {
            hours++;
            minutes = 0
        }
        if (seconds === 60) {
            minutes++;
            seconds = 0;
        }
        seconds++;

        return setTime({h: hours, m: minutes, s: seconds});
    };

    const run = () => setIntervalId(setInterval(updateTime, 1000));

    const start = () => {
        updateTime();
        setStatus(1);
        run();
    }

    const stop = () => {
        clearInterval(intervalId);
        setTime({h: 0, m: 0, s: 0});
        setStatus(0);
    }

    const wait = () => {
        clearInterval(intervalId);
        setStatus(2);
    }

    const reset = () => {
        clearInterval(intervalId);
        setIntervalId(null);
        setTime({h: 0, m: 0, s: 0});
        setStatus(1);
    }

    useEffect(() => {
        intervalId === null && run();
    }, [intervalId]);

    return (
        <div className={classes.mainContent}>
            <div className={classes.stopWatchWrapper}>
                <DisplayComponent time={time}/>
                <BtnComponent
                    status={status}
                    start={start}
                    stop={stop}
                    wait={wait}
                    reset={reset}
                />
            </div>
        </div>
    );
}

export default StopWatch;