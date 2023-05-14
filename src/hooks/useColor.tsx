import { useSelector, useDispatch } from "react-redux";
import { ColorInitialState, StateType, changeColor } from "@/store";
import React from "react";

function useColor(groupName: ColorInitialState) {
  const color = useSelector((state: StateType) => state.color[groupName]);
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
