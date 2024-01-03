import { age } from "@my/logic";

export function finish(): number {
  return age({ name: "John", age: 42 });
}
