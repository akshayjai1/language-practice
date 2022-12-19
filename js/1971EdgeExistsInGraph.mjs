/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
  let found = false
  function dfs(visited, graph, source, destination) {
    if (found || visited[source]) return
    visited[source] = true
    for (let i of graph[source]) {
      if (i === destination) {
        found = true
        break
      }
      if (!visited[i]) {
        // i.e. dfs was never run for this vertex
        dfs(visited, graph, i, destination)
      }
    }
  }
  if (source === destination) return true
  if (edges.length === 0) return false
  const visited = Array(n).fill(false)
  const map = {}
  // create map
  for (let [i, j] of edges) {
    if (map[i]) {
      map[i].push(j)
    } else {
      map[i] = [j]
    }

    if (map[j]) {
      map[j].push(i)
    } else {
      map[j] = [i]
    }
  }

  dfs(visited, map, source, destination)
  return found
}
