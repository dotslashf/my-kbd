import * as React from "react";
import Keyboard from "./Keyboard";
import { HexColorPicker } from "react-colorful";
import { useDispatch, useSelector } from "react-redux";
import { changeColor } from "@/store";

export interface ILayoutProps {}

export function Layout(props: ILayoutProps) {
  const color = useSelector((state) => state.color.hex);
  const dispatch = useDispatch();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-20 w-full bg-gradient-to-bl from-sky-400 to-blue-500">
      <HexColorPicker
        color={color}
        onChange={(value) => {
          console.log(value);
          dispatch(changeColor(value));
        }}
      />
      <Keyboard />
    </main>
  );
}
