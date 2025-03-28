

function heapMinPush(heap, newKey){
    heap.push(newKey);
    let curr = heap.length - 1;
    while(curr > 0){
        let parent = Math.floor((curr - 1) / 2);
        if(heap[curr][2] < heap[parent][2]){
            [heap[curr], heap[parent]] = [heap[parent], heap[curr]];
            curr = parent;
        } 
        else break;
    } 
}

function heapMinPop(heap){
    const n = heap.length;
    [heap[0], heap[n - 1]] = [heap[n - 1], heap[0]]
    let res = heap.pop();
    let curr = 0;
    while(2 * curr + 1 < heap.length){
        const leftIndex = 2 * curr + 1; 
        const rightIndex = 2 * curr + 2;
        const minChildIndex = (rightIndex < heap.length && heap[rightIndex][2] < heap[leftIndex][2]) ? rightIndex : leftIndex;
        if(heap[minChildIndex][2] < heap[curr][2]){
            [heap[minChildIndex], heap[curr]] = [heap[curr], heap[minChildIndex]];
            curr = minChildIndex;
        }
        else break;
    }
    return res;
}

var maxPoints = function(grid, queries) {
    let dup = [];
    for(let i = 0; i < grid.length; i++){ // a duplicate of the grid is created to keep track of already visited cells
        dup.push(grid[i].slice());
    }
    let ordered = queries.slice();
    ordered.sort((a, b) => b - a); // queries are sorted to simplify the process at the end
    let minHeap = [];
    let vals = new Map(); // a hash Map to help at the end
    let counter = 0;  // how many cells we have visited
    heapMinPush(minHeap, [0, 0, grid[0][0]]); // minHeap instead of a queue for BFS
    dup[0][0] = 0; 
    while(minHeap.length > 0){     // BFS 
        let level = minHeap.length;
        while(level > 0){
            let temp = heapMinPop(minHeap);  // we pop values from minHeap not a queue
            while(ordered[ordered.length - 1] <= temp[2]){  // for all values that are less than the value of the current cell we know we will find nothing more
                vals.set(ordered.pop(), counter); // we store for each query its result
            }
            counter++;  // we continue looking for more to explore
            if(temp[0] > 0 && dup[temp[0] - 1][temp[1]] > 0){
                dup[temp[0] - 1][temp[1]] = 0;
                heapMinPush(minHeap, [temp[0] - 1, temp[1], grid[temp[0] - 1][temp[1]]]);
            }
            if(temp[0] < grid.length - 1 && dup[temp[0] + 1][temp[1]] > 0){
                dup[temp[0] + 1][temp[1]] = 0;
                heapMinPush(minHeap, [temp[0] + 1, temp[1], grid[temp[0] + 1][temp[1]]]);
            }
            if(temp[1] > 0 && dup[temp[0]][temp[1] - 1] > 0){
                dup[temp[0]][temp[1] - 1] = 0;
                heapMinPush(minHeap, [temp[0], temp[1] - 1, grid[temp[0]][temp[1] - 1]]);
            }
            if(temp[1] < grid[0].length - 1 && dup[temp[0]][temp[1] + 1] > 0){
                dup[temp[0]][temp[1] + 1] = 0;
                heapMinPush(minHeap, [temp[0], temp[1] + 1, grid[temp[0]][temp[1] + 1]]);
            }
            level--;
        }
    }
    let res = [];
    for(let elem of queries){       // we have to use the initial order for the result
        if(!vals.has(elem)){        // if there is no key in the Map it means that the value of the query is higher than every values in the grid
            res.push(grid.length * grid[0].length);
        }
        else res.push(vals.get(elem)); // we use the values stored in the Map
    }
    return res;
};