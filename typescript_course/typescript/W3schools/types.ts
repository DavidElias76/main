
// TYPES

// any
// This tell the compiler to avoid any type checking

let v: any = true;
v = "string"; // no error as it can be "any" type
Math.round(v); // no error as it can be "any" type

// unknown
// This could be anything but peform some type checking before asking it

let w: unknown = 1;
w = "string"; // no error
w = {
  runANonExistentMethod: () => {
    console.log("I think therefore I am");
  }
} as { runANonExistentMethod: () => void}
// How can we avoid the error for the code commented out below when we don't know the type?
// w.runANonExistentMethod(); // Error: Object is of type 'unknown'.
if(typeof w === 'object' && w !== null) {
  (w as { runANonExistentMethod: Function }).runANonExistentMethod();
}
// Although we have to cast multiple times we can do a check in the if to secure our type and have a safer casting

// perform some type cecking before saking it
function processValue(value: unknown) {
  if (typeof value === 'string') {
    // value is now treated as string
    console.log(value.toUpperCase());
  } else if (Array.isArray(value)) {
    // value is now treated as any[]
    console.log(value.length);
  }
}

// It can be used when working with the external sources

// Type: Never
// This is used when a function never returns and should never return

// A function that never returns 

function throwError(message: string): never {
    throw new Error(message)
}

// Type: undefined & nul

// Nullish coalescing (??) - only uses default if value is null or undefined
// const value = inputvalue ?? 'default';

// // Optional chaining (?.) - safely access nested properties
// const street = user?.address?.street;