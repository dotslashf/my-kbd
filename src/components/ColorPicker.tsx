import { HexColorPicker } from "react-colorful";

interface Props {
  color: string;
  setColor: (color: string) => void;
  isColorPickerOpen: boolean;
  setIsColorPickerOpen: (state: boolean) => void;
}

const ColorPicker = (props: Props) => {
  return (
    <div className="mb-8">
      <div className="flex h-12">
        <div
          className="h-full flex-shrink-0 w-12 border-slate-800 border-l border-t border-b rounded-l-md"
          style={{ backgroundColor: props.color }}
          onClick={() => {
            props.setIsColorPickerOpen(!props.isColorPickerOpen);
          }}
        ></div>
        <input
          type="text"
          value={`#${props.color.replace("#", "")}`}
          className="px-2 outline-none border-slate-800 border-r border-t border-b rounded-r-md"
          maxLength={7}
          onKeyPress={(e) => {
            const validHexChars = /[0-9a-fA-F]/;
            if (!validHexChars.test(e.key)) {
              e.preventDefault();
            }
          }}
          onChange={(e) => {
            props.setColor(e.target.value);
          }}
        />
      </div>
      {props.isColorPickerOpen && (
        <div className="absolute">
          <HexColorPicker
            color={props.color}
            onChange={(value) => {
              props.setColor(value);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
