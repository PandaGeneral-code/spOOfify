import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useUtilsHooks = () => {
  const dispatch = useDispatch();
  const utilsState = useSelector(({ utils }) => utils);

  return { utilsState };
};
