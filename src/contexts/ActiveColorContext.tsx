import { createContext, use } from "react";
import { INITIAL_ACTIVE_COLOR } from "../consts";

export const ActiveColorContext = createContext<number>(INITIAL_ACTIVE_COLOR);

export const useActiveColorContext = () => {
  const context = use(ActiveColorContext);
  if (context === undefined) {
    throw new Error(
      "useActiveColorContext must be used within a ColorProvider"
    );
  }
  return context;
};
