
function memoize(fn) {
    // Initialize an empty object to store cached results
    const cache = {};
    
    return function(...args) {
        // Convert the arguments into a JSON string to use as a cache key
        const key = JSON.stringify(args);

        // Check if the result for this key is already stored in the cache
        if (key in cache) {
            return cache[key];
        } 

        // Compute the result using the original function
        const result = fn.apply(this, args); 
        // Store the computed result in the cache for future use
        cache[key] = result;

        return result; // Return the newly computed result
    }
}