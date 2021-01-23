import React from "react";
import AvatarEditor from "react-avatar-editor";

interface IAvatarProps {
  key: string;
  value: string;
}

export const MyEditor: React.FC = () => {
  return (
    <>
      <AvatarEditor
        image="https://avatars0.githubusercontent.com/u/246180?v=4"
        width={250}
        height={250}
        border={50}
        color={[255, 255, 255, 0.6]} // RGBA
        scale={1.2}
        rotate={0}
      />
    </>
  );
};
