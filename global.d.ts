import { type Churnkey } from "lib/types";

declare global {
  interface Window {
    churnkey?: Churnkey;
  }
}

export {};
