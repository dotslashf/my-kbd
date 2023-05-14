import * as React from "react";
import { KeyboardRows } from "./KeyboardRows";
import KeyboardRow from "./KeyboardRow";
import Key from "./Key";
import { Spacer } from "./Spacer";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";

export interface IKeyboardProps {}

export function Keyboard(props: IKeyboardProps) {
  const color = useSelector((state) => state.color.hex);
  return (
    <div className="bg-gray-800 flex flex-col gap-6 w-9/12 p-4 rounded-lg shadow-2xl">
      <KeyboardRow>
        <Key character={"Escape"} key={"Escape"} color={color} />
        <Spacer size={4} />
        {(["F1", "F2", "F3", "F4"] as const).map((char) => {
          return (
            <Key character={char} color={color} key={`${char}-${uuidv4()}`} />
          );
        })}
        <Spacer size={2} />
        {(["F5", "F6", "F7", "F8"] as const).map((char) => {
          return (
            <Key character={char} color={color} key={`${char}-${uuidv4()}`} />
          );
        })}
        <Spacer size={2} />
        {(["F9", "F10", "F11", "F12"] as const).map((char) => {
          return (
            <Key character={char} color={color} key={`${char}-${uuidv4()}`} />
          );
        })}
        <Spacer size={1} />
        {(["PrintScreen", "ScrollLock", "Pause"] as const).map((char) => {
          return (
            <Key character={char} color={color} key={`${char}-${uuidv4()}`} />
          );
        })}
      </KeyboardRow>
      <KeyboardRows />
    </div>
  );
}

export default Keyboard;
