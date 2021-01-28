//https://stackoverflow.com/questions/62725470/creat-range-slider-in-react-js

import React, { useCallback, useMemo } from 'react'
import RangeSlider from './RangeSlider'

interface IKWSliderBarProps {
  parentVal: number;
  setParentVal: (val: number) => void;
  min: number;
  max: number;
  step: number;
}

export const KWSliderBar: React.FC<IKWSliderBarProps> = ({
  parentVal,
  setParentVal,
  ...IKWSliderprops
}) => {
  
    //need useCallback why? if this component rendered we don't want to recreate the onChange function
    const sliderValueChanged = useCallback((val: number) => {
      console.log("NEW VALUE", val);
      setParentVal(val);
    }, [setParentVal]);
  
    // need useMemo why? if this component rendered we don't want to recreate a new instance of the configuration object,
   // but recreate it when parentVal gets changed, so Slider will re-render,
   // and you can remove parentVal from dependency array and once the parent parentVal gets updated slider will not be re-renderd
    const sliderProps = useMemo(
      () => ({
        // min: props.min,
        // max: props.max,
        value: parentVal,
        // step: props.step,
        ...IKWSliderprops,
        onChange: (val: number ) => sliderValueChanged(val)
      }),
      // dependency array, this will call useMemo function only when parentVal gets changed,
      // if you 100% confident parentVal only updated from Slider, then you can keep empty dependency array
      // and it will not re-render for any configuration object change 
      [parentVal]
    );
  
    return (
      <div>
        <RangeSlider {...sliderProps} />
      </div>
    );
  };
  