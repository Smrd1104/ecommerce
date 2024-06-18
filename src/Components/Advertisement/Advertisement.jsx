// Advertisement.js

import React from "react";
import classes from "./Advertisement.module.css";

const Advertisement = () => {
  return (
    <div
      className={`hidden sm:block bg-gray-900 dark:bg-white  flex-1 text-center ${classes.advertisementContainer}`}
    >
      <div className="container">
        <div
          className={`${classes.animateSlide} bg-transparent text-xs text-white dark:text-black p-1 `}
        >
          {/* Advertisement Here */}
          <div className="grid grid-cols-9  sm:grid-cols-8  items-center">
            {/* Content items */}
            <p className={classes.advertisementItem}>
              <span>+</span>
              Mens Wear
            </p>
            <p className={classes.advertisementItem}>
              <span>+</span>
              Kids Wear
            </p>
            <p className={classes.advertisementItem}>
              <span>+</span>
              Electronics
            </p>
            {/* Add more items as needed */}

            {/* Copy of content for seamless loop */}
            <p className={classes.advertisementItem}>
              <span>+</span>
              Mens Wear
            </p>
            <p className={classes.advertisementItem}>
              <span>+</span>
              Kids Wear
            </p>
            <p className={classes.advertisementItem}>
              <span>+</span>
              Electronics
            </p>
            {/* Add more items as needed */}
            <p className={classes.advertisementItem}>
              <span>+</span>
              Mens Wear
            </p>
            <p className={classes.advertisementItem}>
              <span>+</span>
              Kids Wear
            </p>
            <p className={classes.advertisementItem}>
              <span>+</span>
              Electronics
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
