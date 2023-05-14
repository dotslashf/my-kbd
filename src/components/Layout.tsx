import * as React from "react";
import Keyboard from "./Keyboard";
import { HexColorPicker } from "react-colorful";
import { useDispatch, useSelector } from "react-redux";
import { changeColor } from "@/store";
import ColorPicker from "./ColorPicker";

export interface ILayoutProps {}

export function Layout(props: ILayoutProps) {
  const color = useSelector((state) => state.color.hex);
  const dispatch = useDispatch();
  const [isColorPickerOpen, setIsColorPickerOpen] = React.useState(false);
  const [keyColor, setKeyColor] = React.useState(color);

  function setKeyColorDispatch(color: string) {
    console.log("setKeyColorDispatch", color);
    dispatch(changeColor(color));
    setKeyColor(color);
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-20 w-full bg-gradient-to-bl from-sky-400 to-blue-500">
      <ColorPicker
        color={keyColor}
        setColor={setKeyColorDispatch}
        isColorPickerOpen={isColorPickerOpen}
        setIsColorPickerOpen={setIsColorPickerOpen}
      />
      <Keyboard />
    </main>
  );
}
