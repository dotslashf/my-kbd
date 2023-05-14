import { StateType, editGroupKeys, toggleIsEditing } from "@/store";
import { useDispatch, useSelector } from "react-redux";

function useConfig() {
  const dispatch = useDispatch();
  const isEditing = useSelector((state: StateType) => state.keyMap.isEditing);

  function toggleEditing() {
    dispatch(toggleIsEditing());
  }

  function editKeyToMap(key: string) {
    if (!isEditing) return;
    dispatch(
      editGroupKeys({
        key: key,
      })
    );
  }

  return {
    isEditing,
    toggleEditing,
    editKeyToMap,
  };
}

export default useConfig;
