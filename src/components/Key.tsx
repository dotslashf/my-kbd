import { KeyboardKey, KeyboardKeyMap } from "@/const";
import * as React from "react";

export interface IKeyProps {
  character: KeyboardKey;
  color?: string;
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
      className={`bg-slate-200 overflow-hidden rounded-md grow text-sm flex flex-col items-center justify-center shrink-0 gap-y-4 font-bold font-mono shadow-md border-b-4 border-sky-600 hover:border-slate-200 hover:cursor-pointer transition ${
        gridColumnSpan === 1 ? "aspect-square" : ""
      } `}
      style={{
        gridColumn: `span ${gridColumnSpan * 4} / span ${gridColumnSpan * 4}`,
        gap: `${isWithShiftChar ? "0.25rem" : "0"}`,
        backgroundColor: `${props.color ? props.color : "bg-slate-200"}`,
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
