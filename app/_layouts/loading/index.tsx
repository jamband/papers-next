"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Component } from "./component";
import type { _Props } from "./types";

export const Loading: React.FC = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [state, setState] = useState<_Props["state"]>("initial");

  useEffect(() => {
    setState("start");

    setTimeout(() => {
      setState("complete");
    }, 300);

    setTimeout(() => {
      setState("initial");
    }, 600);
  }, [pathname, searchParams]);

  return <Component state={state} />;
};
