import React, { useState } from 'react';

const RangeSlider = () => {
  const [volume, setVolume] = useState(0);

  const handleOnChange = (event) => {
    setVolume(Number(event.target.value));
  };

  return (
    <div className="nft__filter-price tp-range-slider tp-range-slider-dark mb-20">
      <div className="nft__filter-price-inner d-flex align-items-center justify-content-between">
        <div className="nft__filter-price-box">
          <input
            value="0.00"
            readOnly
            type="text"
            id="input-with-keypress-0"
          />
          <span>Min</span>
        </div>

        <div className="nft__filter-price-to">
          <span>To</span>
        </div>

        <div className="nft__filter-price-box">
          <input
            type="text"
            value={volume.toFixed(2)}
            onChange={(event) => {
              const value = Number(event.target.value);
              if (!Number.isNaN(value) && value >= 0 && value <= 10) {
                setVolume(value);
              }
            }}
            id="input-with-keypress-1"
          />
          <span>Max</span>
        </div>
      </div>

      <input
        className="range-slider"
        type="range"
        min="0"
        max="10"
        step="0.01"
        value={volume}
        onChange={handleOnChange}
      />
    </div>
  );
};

export default RangeSlider;
