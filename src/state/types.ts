import { PayloadAction } from "@reduxjs/toolkit";
import { AppState } from ".";

export type Selector<T> = (state: AppState) => T;

export type ReducerAction<S, T> = (state: S, action: PayloadAction<T>) => void;