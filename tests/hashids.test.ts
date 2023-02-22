import { it } from 'vitest'
import Hashids from 'hashids';

const seed = 'My project'

it('HashIDs test', (ctx) => {
    const recordID = 350;

    var hashids = new Hashids(seed);
    console.log(ctx.meta.name);
    console.log('HashIDs input record id is :',recordID);
    const encoded = hashids.encode(recordID);
    console.log('HashId encoded is: ',encoded);
    const decoded = hashids.decode(encoded);
    console.log('HashId encoded is: ',decoded);



})


