"use client";

import { useEffect, useId, useRef } from "react";
import { Component } from "./component";
import type { Props } from "./types";

export const FormInput: React.FC<Props> = (props) => {
  const id = useId();
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [inputRef]);

  return <Component {...props} id={id} inputRef={inputRef} />;
};
