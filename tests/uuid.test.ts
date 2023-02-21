import { it } from 'vitest';
import { v4 as uuidv4 } from 'uuid';





it('UUID test', (ctx) => {
    // prints name of the test
    console.log(ctx.meta.name);
    console.log('UUID (V4): ',uuidv4()); 
});





