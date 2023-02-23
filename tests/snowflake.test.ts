import { it } from 'vitest';

import { Worker } from 'snowflake-uuid';






it('Snowflake test', (ctx) => {
    console.log(ctx.meta.name);
    const generator = new Worker(0, 1, {
        workerIdBits: 5,
        datacenterIdBits: 5,
        sequenceBits: 12,
    });
    
    console.log('Snowflake ID :' ,generator.nextId()); 
    console.log('Snowflake ID string:' ,generator.nextId().toString()); 
})