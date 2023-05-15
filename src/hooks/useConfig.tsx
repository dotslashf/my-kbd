import { KeyboardKeys } from "@/const";
import {
  StateType,
  editGroupKeys,
  toggleIsEditing,
  toggleIsLegendShown,
} from "@/store";
import { useDispatch, useSelector } from "react-redux";

function useConfig() {
  const dispatch = useDispatch();
  const isEditing = useSelector((state: StateType) => state.config.isEditing);
  const keyMap = useSelector((state: StateType) => state.config.keyMap);
  const colors = useSelector((state: StateType) => state.color);
  const isLegendShown = useSelector(
    (state: StateType) => state.config.isLegendShown
  );

  function toggleEditing() {
    dispatch(toggleIsEditing());
  }

  function toggleLegendShown() {
    dispatch(toggleIsLegendShown());
  }

  function editKeyToMap(key: string) {
    if (!isEditing) return;
    dispatch(
      editGroupKeys({
        key: key,
      })
    );
  }

  const returnGroupFromKey = (key: string) =>
    Object.entries(keyMap).find(([_, keys]) => keys.includes(key))?.[0] ||
    "keyPrimary";

  const hashMapKeyAndColor = KeyboardKeys.reduce(
    (hashMap: { [key: string]: string }, key) => {
      const keyGroup = returnGroupFromKey(key) as keyof typeof colors;
      hashMap[key] = colors[keyGroup];
      return hashMap;
    },
    {}
  );

  return {
    isEditing,
    isLegendShown,
    toggleEditing,
    toggleLegendShown,
    editKeyToMap,
    keyMap,
    hashMapKeyAndColor,
  };
}

export default useConfig;
