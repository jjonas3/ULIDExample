import { customAlphabet } from 'nanoid';
import { nanoid } from 'nanoid';
import { it } from 'vitest';






it('Nanoid  test', (ctx) => {
    console.log(ctx.meta.name);
    // const nanoid = customAlphabet('ABCDEF1234567890', 12);
    console.log('Nano ID: ',nanoid());
})



it('Nanoid Custom alphabet', (ctx) => {
    console.log(ctx.meta.name);
    const customAlpha ='ABCDEF1234567890'
    const nanoid = customAlphabet(customAlpha, 12);
    console.log('Custom alphabet',customAlpha);
    console.log('Nano ID, custom alphabet: ',nanoid());
})