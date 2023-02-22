import { it } from 'vitest'
import { ulid } from 'ulid'
import { monotonicFactory } from 'ulid'

it('ULID test', (ctx) => {
  // prints name of the test
  console.log(ctx.meta.name);
  console.log('First',ulid());
  sleep();
  console.log('Second',ulid());
  sleep();
  console.log('Third',ulid());
 
})



it('Monotonic ULID', (ctx) =>  { 
 
const ulid = monotonicFactory()
console.log(ctx.meta.name);

// Strict ordering for the same timestamp, by incrementing the least-significant random bit by 1
console.log('First',ulid(150000)); // 000XAL6S41ACTAV9WEVGEMMVR8
console.log('Second',ulid(150000)); // 000XAL6S41ACTAV9WEVGEMMVR9
console.log('third',ulid(150000)); // 000XAL6S41ACTAV9WEVGEMMVRA
console.log('Fourth',ulid(150000)); // 000XAL6S41ACTAV9WEVGEMMVRB
console.log('Fifth',ulid(150000)); // 000XAL6S41ACTAV9WEVGEMMVRC
 
// Even if a lower timestamp is passed (or generated), it will preserve sort order
console.log('sixth with lower seed',ulid(100000)); // 000XAL6S41ACTAV9WEVGEMMVRD
})


function sleep(){
  setTimeout(() => 
  {
    
  },
  1000);

}

