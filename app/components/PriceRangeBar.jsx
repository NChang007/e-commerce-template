'use client'
import React, { useCallback, useEffect, useState, useRef  } from 'react'
import Link from 'next/link'
import '../styles/priceRangeBar.css'
import PropTypes from "prop-types";

const PriceRangeBar = ({ min, max, onChange }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes
//   useEffect(() => {
//     console.log("min:", minVal, " max:", maxVal);
//   }, [minVal, maxVal, onChange]);

  return (
    <div className="container">
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        onChange={(event) => {
          const value = Math.min(Number(event.target.value), maxVal);
          setMinVal(value);
          minValRef.current = value;
        }}
        className="thumb thumb--left"
        style={{ zIndex: minVal > max - 100 && "5" }}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        onChange={(event) => {
          const value = Math.max(Number(event.target.value), minVal);
          setMaxVal(value);
          maxValRef.current = value;
        }}
        className="thumb thumb--right"
      />

      <div className="slider">
        <div className="slider-track" />
        <div ref={range} className="slider-range" />
      </div>
      <div className="values">
        <div className="values-min-input">
            <input 
                type="number" 
                min={minVal} 
                max={maxVal}
                value={minVal} 
                onChange={(event) => {
                    const value = Math.min(Number(event.target.value), maxVal);
                    setMinVal(value);
                    minValRef.current = value;
                }}
            />
        </div>
        <div className="values-max-input"> 
            <input 
                type="number"
                min={minVal} 
                max={maxVal}
                value={maxVal} 
                onChange={(event) => {
                    const value = Math.max(Number(event.target.value), minVal);
                    setMaxVal(value);
                    maxValRef.current = value;
                }}
            />
        </div>
      </div>
    </div>
  );
};

PriceRangeBar.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default PriceRangeBar;


