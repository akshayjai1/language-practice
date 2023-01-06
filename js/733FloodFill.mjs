/*
we will have to run in four directions, so have an array = [(1,0),(-1,0),(0,1),(0,-1)], note, use continue, if the invalid r,c is calculated, not a return statement

for the starting point in grid, run in four directions and keep on replacing color, since we are replacing color immediately ideally we should not get infinite loop
 */

import { print2d } from './util.mjs'

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  const currentColor = image[sr][sc]
  if (color === currentColor) {
    return image
  }
  const tr = image.length
  const tc = image[0].length
  function helper(r, c) {
    image[r][c] = color
    for (let [x, y] of [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ]) {
      const [nx, ny] = [r + x, c + y]
      if (
        nx < 0 ||
        nx >= tr ||
        ny < 0 ||
        ny >= tc ||
        image[nx][ny] != currentColor
      ) {
        continue
      }
      helper(nx, ny)
    }
  }
  helper(sr, sc)
  return image
}
let a = [
  [1, 1, 1],
  [1, 1, 0],
  [1, 0, 1],
]
console.log('a is ', print2d(a))
console.log('floodfill = ', print2d(floodFill(a, 1, 1, 2)))
