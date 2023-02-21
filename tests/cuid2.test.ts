import { it } from 'vitest'
import { createId } from '@paralleldrive/cuid2';






it('cuid2  test', (ctx) => {
    const ids = [
        createId(), // 'tz4a98xxat96iws9zmbrgj3a'
        createId(), // 'pfh0haxfpzowht3oi213cqos'
        createId(), // 'nc6bzmkmd014706rfda898to'
      ];
      console.log(ctx.meta.name);
      ids.forEach(element => {
            console.log('CUID2: ',element);
      });
      
    

});

