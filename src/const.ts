export type KeyboardKey =
  | "Escape"
  | "F1"
  | "F2"
  | "F3"
  | "F4"
  | "F5"
  | "F6"
  | "F7"
  | "F8"
  | "F9"
  | "F10"
  | "F11"
  | "F12"
  | "PrintScreen"
  | "ScrollLock"
  | "Pause"
  | "`"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "0"
  | "-"
  | "="
  | "Backspace"
  | "Insert"
  | "Home"
  | "PageUp"
  | "Tab"
  | "Q"
  | "W"
  | "E"
  | "R"
  | "T"
  | "Y"
  | "U"
  | "I"
  | "O"
  | "P"
  | "["
  | "]"
  | "\\"
  | "Delete"
  | "End"
  | "PageDown"
  | "CapsLock"
  | "A"
  | "S"
  | "D"
  | "F"
  | "G"
  | "H"
  | "J"
  | "K"
  | "L"
  | ";"
  | "'"
  | "Enter"
  | "LeftShift"
  | "Z"
  | "X"
  | "C"
  | "V"
  | "B"
  | "N"
  | "M"
  | ","
  | "."
  | "/"
  | "RightShift"
  | "RightShift2u"
  | "Control"
  | "Meta"
  | "Meta1u"
  | "Alt"
  | "Space"
  | "Fn"
  | "ArrowUp"
  | "ArrowLeft"
  | "ArrowDown"
  | "ArrowRight";

export type KeyboardModifierKey = {
  label: string;
  withShiftChar: string;
}

export const KeyboardKeyMap: { [key in KeyboardKey]: KeyboardModifierKey } = {
  Escape: {
    label: "Esc",
    withShiftChar: "",
  },
  "F1": {
    label: "F1",
    withShiftChar: ""
  },
  "F2": {
    label: "F2",
    withShiftChar: ""
  },
  "F3": {
    label: "F3",
    withShiftChar: ""
  },
  "F4": {
    label: "F4",
    withShiftChar: ""
  },
  "F5": {
    label: "F5",
    withShiftChar: ""
  },
  "F6": {
    label: "F6",
    withShiftChar: ""
  },
  "F7": {
    label: "F7",
    withShiftChar: ""
  },
  "F8": {
    label: "F8",
    withShiftChar: ""
  },
  "F9": {
    label: "F9",
    withShiftChar: ""
  },
  "F10": {
    label: "F10",
    withShiftChar: ""
  },
  "F11": {
    label: "F11",
    withShiftChar: ""
  },
  "F12": {
    label: "F12",
    withShiftChar: ""
  },
  "PrintScreen": {
    label: "PrtScn",
    withShiftChar: ""
  },
  "ScrollLock": {
    label: "ScrLk",
    withShiftChar: ""
  },
  "Pause": {
    label: "Pause",
    withShiftChar: ""
  },
  "`": {
    label: "`",
    withShiftChar: "~"
  },
  "1": {
    label: "1",
    withShiftChar: "!"
  },
  "2": {
    label: "2",
    withShiftChar: "@"
  },
  "3": {
    label: "3",
    withShiftChar: "#"
  },
  "4": {
    label: "4",
    withShiftChar: "$"
  },
  "5": {
    label: "5",
    withShiftChar: "%"
  },
  "6": {
    label: "6",
    withShiftChar: "^"
  },
  "7": {
    label: "7",
    withShiftChar: "&"
  },
  "8": {
    label: "8",
    withShiftChar: "*"
  },
  "9": {
    label: "9",
    withShiftChar: "("
  },
  "0": {
    label: "0",
    withShiftChar: ")"
  },
  "-": {
    label: "-",
    withShiftChar: "_"
  },
  "=": {
    label: "=",
    withShiftChar: "+"
  },
  "Backspace": {
    label: "⟵",
    withShiftChar: ""
  },
  "Insert": {
    label: "Ins",
    withShiftChar: ""
  },
  "Home": {
    label: "Home",
    withShiftChar: ""
  },
  "PageUp": {
    label: "PgUp",
    withShiftChar: ""
  },
  "Tab": {
    label: "⇥",
    withShiftChar: ""
  },
  "Q": {
    label: "Q",
    withShiftChar: ""
  },
  "W": {
    label: "W",
    withShiftChar: ""
  },
  "E": {
    label: "E",
    withShiftChar: ""
  },
  "R": {
    label: "R",
    withShiftChar: ""
  },
  "T": {
    label: "T",
    withShiftChar: ""
  },
  "Y": {
    label: "Y",
    withShiftChar: ""
  },
  "U": {
    label: "U",
    withShiftChar: ""
  },
  "I": {
    label: "I",
    withShiftChar: ""
  },
  "O": {
    label: "O",
    withShiftChar: ""
  },
  "P": {
    label: "P",
    withShiftChar: ""
  },
  "[": {
    label: "[",
    withShiftChar: "{"
  },
  "]": {
    label: "]",
    withShiftChar: "}"
  },
  "\\": {
    label: "\\",
    withShiftChar: "|"
  },
  "Delete": {
    label: "Del",
    withShiftChar: ""
  },
  "End": {
    label: "End",
    withShiftChar: ""
  },
  "PageDown": {
    label: "PgDown",
    withShiftChar: ""
  },
  "CapsLock": {
    label: "Caps",
    withShiftChar: ""
  },
  "A": {
    label: "A",
    withShiftChar: ""
  },
  "S": {
    label: "S",
    withShiftChar: ""
  },
  "D": {
    label: "D",
    withShiftChar: ""
  },
  "F": {
    label: "F",
    withShiftChar: ""
  },
  "G": {
    label: "G",
    withShiftChar: ""
  },
  "H": {
    label: "H",
    withShiftChar: ""
  },
  "J": {
    label: "J",
    withShiftChar: ""
  },
  "K": {
    label: "K",
    withShiftChar: ""
  },
  "L": {
    label: "L",
    withShiftChar: ""
  },
  ";": {
    label: ";",
    withShiftChar: ":"
  },
  "'": {
    label: "",
    withShiftChar: "\""
  },
  "Enter": {
    label: "↵",
    withShiftChar: ""
  },
  "LeftShift": {
    label: "Shift",
    withShiftChar: ""
  },
  "Z": {
    label: "Z",
    withShiftChar: ""
  },
  "X": {
    label: "X",
    withShiftChar: ""
  },
  "C": {
    label: "C",
    withShiftChar: ""
  },
  "V": {
    label: "V",
    withShiftChar: ""
  },
  "B": {
    label: "B",
    withShiftChar: ""
  },
  "N": {
    label: "N",
    withShiftChar: ""
  },
  "M": {
    label: "M",
    withShiftChar: ""
  },
  ",": {
    label: ",",
    withShiftChar: "<"
  },
  ".": {
    label: ".",
    withShiftChar: ">"
  },
  "/": {
    label: "/",
    withShiftChar: "?"
  },
  "RightShift": {
    label: "Shift",
    withShiftChar: ""
  },
  "RightShift2u": {
    label: "",
    withShiftChar: ""
  },
  "Control": {
    label: "Ctrl",
    withShiftChar: ""
  },
  "Meta": {
    label: "⌘/⊞",
    withShiftChar: ""
  },
  "Meta1u": {
    label: "",
    withShiftChar: ""
  },
  "Alt": {
    label: "Alt",
    withShiftChar: ""
  },
  "Space": {
    label: " ",
    withShiftChar: ""
  },
  "Fn": {
    label: "Fn",
    withShiftChar: ""
  },
  "ArrowUp": {
    label: "▲",
    withShiftChar: ""
  },
  "ArrowLeft": {
    label: "◀",
    withShiftChar: ""
  },
  "ArrowDown": {
    label: "▼",
    withShiftChar: ""
  },
  "ArrowRight": {
    label: "▶",
    withShiftChar: ""
  },
}

export const KeyboardTKLMapping = {
  firstRow: {
    "1": ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
    "2": ["Insert", "Home", "PageUp"]
  },
  secondRow: {
    "1": ["Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\"],
    "2": ["Delete", "End", "PageDown"]
  },
  thirdRow: {
    "1": ["CapsLock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "Enter"]
  },
  fourthRow: {
    "1": ["LeftShift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "RightShift"]
  },
  fifthRow: {
    "1": ["Control", "Meta", "Alt", "Space", "Alt", "Meta", "Fn", "Control"],
    "2": ["ArrowLeft", "ArrowDown", "ArrowRight",]
  }
}

export const KeyboardKeys: KeyboardKey[] = [
  "Escape",
  "F1",
  "F2",
  "F3",
  "F4",
  "F5",
  "F6",
  "F7",
  "F8",
  "F9",
  "F10",
  "F11",
  "F12",
  "PrintScreen",
  "ScrollLock",
  "Pause",
  "`",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "-",
  "=",
  "Backspace",
  "Insert",
  "Home",
  "PageUp",
  "Tab",
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "[",
  "]",
  "\\",
  "Delete",
  "End",
  "PageDown",
  "CapsLock",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  ";",
  "'",
  "Enter",
  "LeftShift",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
  ",",
  ".",
  "/",
  "RightShift",
  "RightShift2u",
  "Control",
  "Meta",
  "Meta1u",
  "Alt",
  "Space",
  "Fn",
  "ArrowUp",
  "ArrowLeft",
  "ArrowDown",
  "ArrowRight",
];