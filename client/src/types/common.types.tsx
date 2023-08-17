import { ChangeEvent, Dispatch, FormEvent, MouseEvent,MouseEventHandler, SetStateAction } from "react";

export type SetState<T> = Dispatch<SetStateAction<T>>;
export type OnInputChange=ChangeEvent<HTMLInputElement>;
export type OnFormSubmit=FormEvent<HTMLFormElement>
export type OnBtnClick=MouseEvent<HTMLButtonElement>
export type OnBtnClickHndlr=MouseEventHandler<HTMLButtonElement>
export type OnDivClick=MouseEvent<HTMLDivElement>
export type OnDivClickHndlr=MouseEventHandler<HTMLDivElement>