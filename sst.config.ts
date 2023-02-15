import { SSTConfig } from "sst";
import { API } from "./stacks/MyStack";
import { DynamoStack } from "./stacks/DynamoStack";

export default {
  config(_input) {
    return {
      name: "ulidexample",
      region: "us-east-1",
    };
  },
  stacks(app) {  
      app.stack(DynamoStack),
      app.stack(API)
},
} satisfies SSTConfig;
