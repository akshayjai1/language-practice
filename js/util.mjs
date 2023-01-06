export function print2d(grid) {
  let x = ''
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      x += grid[i][j]
    }
    x += '\n'
  }
  console.log(x)
}
export const log = console.log
export const lst = '---------------------------------'
