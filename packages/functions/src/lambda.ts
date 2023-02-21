import { ApiHandler } from "sst/node/api";
import { Time } from "@ulidexample/core/time";

export const handler = ApiHandler(async (_evt) => {
  console.log("In lambda");
  return {
    body: `Hello world. The time is ${Time.now()}`,
  };
});
