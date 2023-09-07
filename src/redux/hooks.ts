import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import type { TAppDispatch, TRootState } from "./types";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/explicit-module-boundary-types
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;
export const useAppDispatch = () => useDispatch<TAppDispatch>();
