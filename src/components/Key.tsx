import { KeyboardKey, KeyboardKeyMap } from "@/const";
import * as React from "react";

export interface IKeyProps {
  character: KeyboardKey;
  color?: string;
  textColor?: string;
}

function calculateAspectRatio(keyboardKey: KeyboardKey) {
  switch (keyboardKey) {
    case "Space":
      return 6;
    case "LeftShift":
    case "RightShift":
      return 2.5;
    case "CapsLock":
    case "Backspace":
    case "Enter":
      return 2;
    case "Tab":
    case "\\":
    case "Meta":
    case "Control":
      return 1.5;
    default:
      return 1;
  }
}

export function Key(props: IKeyProps) {
  const gridColumnSpan = calculateAspectRatio(props.character);
  const isWithShiftChar = KeyboardKeyMap[props.character].withShiftChar !== "";
  return (
    <span
      className={`bg-slate-200 overflow-hidden rounded-sm grow text-sm flex flex-col items-center justify-center shrink-0 gap-y-4 font-bold font-mono shadow-md border-2 border-b-8 border-l-4 border-r-4 border-gray-700 border-opacity-30 hover:cursor-pointer transition ${
        gridColumnSpan === 1 ? "aspect-square" : ""
      } `}
      style={{
        gridColumn: `span ${gridColumnSpan * 4} / span ${gridColumnSpan * 4}`,
        gap: `${isWithShiftChar ? "0.25rem" : "0"}`,
        backgroundColor: `${props.color ? props.color : "bg-slate-200"}`,
        color: `${props.textColor ? props.textColor : "bg-slate-800"}`,
      }}
    >
      {isWithShiftChar && (
        <span>{KeyboardKeyMap[props.character].withShiftChar}</span>
      )}
      <span>{KeyboardKeyMap[props.character].label}</span>
    </span>
  );
}

export default Key;
