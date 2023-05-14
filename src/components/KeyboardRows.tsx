import * as React from "react";
import KeyboardRow from "./KeyboardRow";
import Key from "./Key";
import { Spacer } from "./Spacer";
import { KeyboardKey, KeyboardTKLMapping } from "@/const";
import { v4 as uuidv4 } from "uuid";

export interface IKeyboardRowsProps {}

export function KeyboardRows(props: IKeyboardRowsProps) {
  return (
    <div className="flex flex-col gap-y-2">
      {/* first row */}
      <KeyboardRow>
        {KeyboardTKLMapping.firstRow["1"].map((char) => {
          return (
            <Key character={char as KeyboardKey} key={`${char}-${uuidv4()}`} />
          );
        })}
        <Spacer size={1} />
        {KeyboardTKLMapping.firstRow["2"].map((char) => {
          return (
            <Key character={char as KeyboardKey} key={`${char}-${uuidv4()}`} />
          );
        })}
      </KeyboardRow>
      {/* second row */}
      <KeyboardRow>
        {KeyboardTKLMapping.secondRow["1"].map((char) => {
          return (
            <Key character={char as KeyboardKey} key={`${char}-${uuidv4()}`} />
          );
        })}
        <Spacer size={1} />
        {KeyboardTKLMapping.secondRow["2"].map((char) => {
          return (
            <Key character={char as KeyboardKey} key={`${char}-${uuidv4()}`} />
          );
        })}
      </KeyboardRow>
      {/* third row */}
      <KeyboardRow>
        {KeyboardTKLMapping.thirdRow["1"].map((char) => {
          return (
            <Key character={char as KeyboardKey} key={`${char}-${uuidv4()}`} />
          );
        })}
      </KeyboardRow>
      {/* fourth row */}
      <KeyboardRow>
        {KeyboardTKLMapping.fourthRow["1"].map((char) => {
          return (
            <Key character={char as KeyboardKey} key={`${char}-${uuidv4()}`} />
          );
        })}
        <Spacer size={4} />
        <Spacer size={1} />
        <Key character={"ArrowUp"} key={"Up"} />;
      </KeyboardRow>
      {/* last row */}
      <KeyboardRow>
        {KeyboardTKLMapping.fifthRow["1"].map((char) => {
          return (
            <Key character={char as KeyboardKey} key={`${char}-${uuidv4()}`} />
          );
        })}
        <Spacer size={1} />
        {KeyboardTKLMapping.fifthRow["2"].map((char) => {
          return (
            <Key character={char as KeyboardKey} key={`${char}-${uuidv4()}`} />
          );
        })}
      </KeyboardRow>
    </div>
  );
}

export default KeyboardRows;
