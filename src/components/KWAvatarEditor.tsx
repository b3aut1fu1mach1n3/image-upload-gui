import React, { useState } from "react";
import AvatarEditor from "react-avatar-editor";
import { KWSliderBar } from "./KWSliderBar"

export const KWAvatarEditor: React.FC = () => {

  const [zoomValue, setZoomValue] = useState<number>(14)

  function clickEvent(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    alert("clicked!");
  }

  function SaveButton() {
    return (
      <div>
        <button type="button" onClick={clickEvent}>
          Save
        </button>
      </div>
    );
  }

  return (
    <>
      <AvatarEditor
        image="https://avatars0.githubusercontent.com/u/246180?v=4"
        width={250}
        height={250}
        border={50}
        color={[255, 255, 255, 0.6]} // RGBA
        scale={zoomValue/10 >= 1 ? (zoomValue/10) : 1}
        rotate={0}
      />
      <KWSliderBar 
        parentVal={zoomValue} 
        setParentVal={setZoomValue}
        min={10}
        max={20}
        step={1}  
      />
      <SaveButton />
    </>
  );
};
