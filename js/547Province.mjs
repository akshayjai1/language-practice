class UnionFind {
  constructor(n) {
    this.graph = [...Array(n)].map((e, i) => i)
    this.groups = n
  }
  find(id) {
    if (this.graph[id] === id) return id
    this.graph[id] = this.find(this.graph[id])
    return this.graph[id]
  }
  union(x, y) {
    let rootX = this.find(x)
    let rootY = this.find(y)
    if (rootX !== rootY) {
      this.graph[rootX] = rootY
      this.groups--
    }
  }
}
var findCircleNum = function (ar) {
  let n = ar.length,
    uf = new UnionFind(ar.length)
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (ar[i][j] == 1) {
        uf.union(i, j)
      }
    }
  }
  return uf.groups
}

/*
we want to find how many different provinces exist.
one way is to use union find, other way is to use dfs

if we think about dfs,
first iterate through 0 .. n
start second loop if i !=j and ij = 1,i.e if you find 1 in array,
then if(i and j are not in visited set) count++ and now we should start dfs(i) and dfs(j), we start dfs for variable which is not in set. and iterate through the jth row
in the dfs function, if we find any 1, then add column number in visited set and dfs(columnNumber), so here we also need a visited
set in dfs, if we have iterated through a number in dfs, it should
be in set, and second time, we should skip.
this dfs call will end with end of iteration.



*/
