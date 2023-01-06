const r = []
r[0] = [
  [6, 7, 8],
  [5, 4, 9],
  [],
  [8],
  [4],
  [],
  [1, 9, 2, 3],
  [7],
  [6, 5],
  [2, 3, 1],
]



var canVisitAllRooms = function (rooms) {
  const visited = Array(rooms.length).fill(false)
  let count = 0
  const keyArray = [0]
  // visited[0] = true;
  while (keyArray.length) {
    const currentKey = keyArray.shift()
    if (!visited[currentKey]) {
      visited[currentKey] = true
      count++
      if (count === rooms.length) return true
    }
    rooms[currentKey].forEach((k) => {
      /* push key to keyArray, if room is yet to be visited, if the room is visited, which means visited[currentKey] is true, then we have already collected all keys from that room */
      if (!visited[k]) keyArray.push(k)
    })
  }
  // console.log('visted after iteration', visited)
  // console.log('vi ', visited)
  return visited.every((e) => e)
}
console.log('re = ', canVisitAllRooms(r[0]))
