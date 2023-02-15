import { Table } from "sst/constructs";
import { StackContext } from "sst/constructs";

// new Table(stack, "TalentAgency", {
//     {
//         fields: {
//             userId: "string"
//         },
//         primaryIndex: {partionKey: "userId"}
//     }
    
    
//     )



    export function DynamoStack({stack} : StackContext) {
        const table = new Table(stack,"AgencyTable",
        {
            fields: {
                pk: "string",
                sk: "string",
                companyName: "string",
                firstName: "string",
                lastName: "string",

            },
            primaryIndex: {
                partitionKey: "pk",
                sortKey: "sk"
            },
            globalIndexes: {
                reverseIndex: {
                    partitionKey: "sk",
                    sortKey: "pk",
                    projection: "keys_only"
                }

            }
        });
        return table;
    }
    