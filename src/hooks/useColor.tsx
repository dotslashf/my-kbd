import { useSelector, useDispatch } from "react-redux";
import { ColorState, changeColor } from "@/store";
import React from "react";

function useColor(groupName: "key" | "text" | "background") {
  const color = useSelector((state: ColorState) => state.color[groupName]);
  const [keyColor, setKeyColor] = React.useState(color);
  const dispatch = useDispatch();

  const setColor = (newColor: string) => {
    dispatch(
      changeColor({
        color: newColor,
        partToChange: groupName,
      })
    );
    setKeyColor(newColor);
  };

  return { color: keyColor, setColor };
}

export default useColor;
