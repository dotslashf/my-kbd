import * as React from "react";
import Keyboard from "./Keyboard";
import { useDispatch, useSelector } from "react-redux";
import { ColorState, changeColor } from "@/store";
import ColorPicker from "./ColorPicker";
import useColor from "@/hooks/useColor";

export interface ILayoutProps {}

export function Layout(props: ILayoutProps) {
  const [isColorPickerOpen, setIsColorPickerOpen] = React.useState(false);
  const { color, setColor } = useColor("key");
  const { color: backgroundColor, setColor: setBackgroundColor } =
    useColor("background");
  const { color: textColor, setColor: setTextColor } = useColor("text");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-20 w-full bg-gradient-to-bl from-sky-400 to-blue-500">
      <div className="flex">
        <ColorPicker color={color} setColor={setColor} />
        <ColorPicker color={backgroundColor} setColor={setBackgroundColor} />
        <ColorPicker color={textColor} setColor={setTextColor} />
      </div>
      <Keyboard />
    </main>
  );
}
