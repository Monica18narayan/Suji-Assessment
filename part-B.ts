//B1.   
//Implement a recursive generic type DeepReadonly<T> that makes every property readonly at every depth,
//  including inside arrays. It must make ro.servers[0].host = 'x' a compile-time error for the type below.
interface Config {
 name: string;
 servers: { host: string; ports: number[] }[];
 meta: { tags: string[] };
}
type RO = DeepReadonly<Config>;

const ro: RO = {
 name: 'MyConfig',
 servers: [{ host: 'x', ports: [80, 443] }],
 meta: { tags: ['production', 'v1'] },
};
console.log(ro.servers[0].host);
ro.servers[0].host='y';

//DeepReadonly  makes all the properties of a type T readonly, including nested objects and arrays.
// so ro.servers[0].host='y'; this line gives compile time Error because ro.servers[0].host is readonly.



// B2.   
// Given the discriminated union below, write area(shape: Shape): number using a switch. 
// Add a compile-time exhaustiveness check so that if a new shape variant is added later and left unhandled, 
// TypeScript reports an error. Explain the mechanism you used.
type Shape =
 | { kind: 'circle';   radius: number }
 | { kind: 'rect';     width: number; height: number }
 | { kind: 'triangle'; base: number; height: number };

function area(shape: Shape): number {
    switch(shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2;
        case 'rect':
            return shape.width*shape.width;
        case 'triangle':
            return shape.base * shape.height /2;
        default:
            const exhaustive:never =shape; return exhaustive;
    }
}

// The mechanism used for compile-time exhaustiveness check is the 'never' type. 
//type never is a type that represents values that never occur.
// In the default case of the switch statement, we assign the shape to a variable of type never.
 