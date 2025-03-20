/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[][]} query
 * @return {number[]}
 */
function findParent(node, parent){
    if (parent[node] < 0)
        return node;
    parent[node] = findParent(parent[node], parent);
    return parent[node];
}

var minimumCost = function(n, edges, query) {
    const parent = new Array(n).fill(-1);
    const cost = new Array(n).fill(-1);

    for (let edge of edges){
        const [u, v, w] = edge;
        let ru = findParent(u, parent);
        let rv = findParent(v, parent);
        if (ru !== rv){
            cost[ru] &= cost[rv];
            parent[rv] = ru;
        }
        cost[ru] &= w;
    }
    const res = [];
    for (let q of query){
        const [u, v] = q;
        let ru = findParent(u, parent);
        let rv = findParent(v, parent);
        if (ru === rv) {
            res.push(cost[ru]);
        } else {
            res.push(-1);
        }
    }
    return res;
};