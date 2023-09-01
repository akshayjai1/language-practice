/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function (graph) {
  // red = 1, blue -1, no color = 0; initially all nodes are colored 0
  let nodes = Array(graph.length).fill(0)
  // we will use dfs, to keep coloring nodes, if we find that a node is already colored, then if the color is different than what we want to color it with, we return false
  for (let i = 0; i < graph.length; i++) {
    // lets color ith node with red = 1, and in case it was already colored through some dfs
    // work, then we can skip
    nodes[i] = 1
    let currentAdjacent = graph[i]
    for (let j = 0; j < currentAdjacent.length; j++) {
      if (!dfs(currentAdjacent[j], -1 * nodes[i])) {
        // it's ok if dfs returns true, but if dfs returns false, that means
        // we saw a contradiction and we can say that graph is not bipartite
        return false
      }
      console.log('i,j,nodes', i, j, nodes)
    }
  }
  return true
  function dfs(node, newColor) {
    if (nodes[node] !== 0) {
      // so we return false, if the existing color does not match with new color
      //  we want to apply

      let isContradiction = nodes[node] !== newColor
      if (isContradiction) {
        console.log(
          'returning false, because there is a contradiction',
          nodes,
          node,
        )

        return false
      }
    }
    // assuming now nodes[node] = 0
    nodes[node] = newColor
    return true
  }
}

console.log(
  isBipartite([
    [1, 3],
    [0, 2],
    [1, 3],
    [0, 2],
  ]),
)
