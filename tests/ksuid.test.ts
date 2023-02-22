
import { it } from 'vitest';
import KSUID from 'ksuid';

it('ULID test', (ctx) => {
    console.log(ctx.meta.name);
    const ksuidFromSync = KSUID.randomSync()
    console.log('KSUID: ',ksuidFromSync.string);


}

)