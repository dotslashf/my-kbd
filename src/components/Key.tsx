import { KeyboardKey, KeyboardKeyMap } from "@/const";
import useConfig from "@/hooks/useConfig";
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
  const { editKeyToMap } = useConfig();

  return (
    <span
      className={`bg-slate-200 overflow-hidden rounded-sm grow text-[6px] lg:text-sm flex lg:flex-col items-center justify-center shrink-0 lg:gap-y-4 font-bold font-mono shadow-md lg:border-2 lg:border-b-8 lg:border-l-4 lg:border-r-4 lg:border-gray-700 lg:border-opacity-30 select-none hover:cursor-pointer lg:hover:border-opacity-0 transition
      ${gridColumnSpan === 1 ? "aspect-square" : ""}
      ${isWithShiftChar ? "lg:gap-y-1 lg:gap-x-0 gap-x-1" : "gap-0"}
      `}
      style={{
        gridColumn: `span ${gridColumnSpan * 4} / span ${gridColumnSpan * 4}`,
        // gap: `${isWithShiftChar ? "0.25rem" : "0"}`,
        backgroundColor: `${props.color ? props.color : "bg-slate-200"}`,
        color: `${props.textColor ? props.textColor : "bg-slate-800"}`,
      }}
      onClick={() => {
        editKeyToMap(props.character);
      }}
    >
      {isWithShiftChar && (
        <span className="lg:text-sm text-[4px] top-0 left-0">
          {KeyboardKeyMap[props.character].withShiftChar}
        </span>
      )}
      <span>{KeyboardKeyMap[props.character].label}</span>
    </span>
  );
}

export default Key;
