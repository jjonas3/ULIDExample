import { StackContext, Api ,use} from "sst/constructs";
import { DynamoStack } from "./DynamoStack";

export function API({ stack }: StackContext) {
 
 
  const table = use(DynamoStack);
  const api = new Api(stack, "api", {
    routes: {
      "GET /": "packages/functions/src/lambda.handler",
    },
  });
  stack.addOutputs({
    ApiEndpoint: api.url,
  });
  
  
}
