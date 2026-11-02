//C1.   
//Implement a fully-typed debounce. Requirements:
//Supports both leading and trailing invocation via options (default: leading false, trailing true).
//Returns the debounced function augmented with .cancel() (drop any pending call) and .flush() (invoke the pending call immediately).
//Preserves the original this and argument/return types.
function debounce<F extends (...a: any[]) => any>(
 fn: F,
 wait: number,
 options?: { leading?: boolean; trailing?: boolean }
): ((...args: Parameters<F>) => void) & { cancel(): void; flush(): void };



