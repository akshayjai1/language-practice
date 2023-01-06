/**
 * @param {number[]} forts
 * @return {number}
 */
var captureForts = function (forts) {
  let maxCapture = 0,
    tempCount = 0,
    revMax = 0,
    revTemp = 0
  let startCapture = false,
    revCaptureStarted = false
  for (let i = 0; i < forts.length; i++) {
    if (forts[i] === 1) {
      startCapture = true
      tempCount = 0

      if (revCaptureStarted) {
        revCaptureStarted = false
        revMax = Math.max(revTemp, revMax)
        revTemp = 0
      }
    } else if (forts[i] === -1) {
      if (startCapture) {
        startCapture = false
        maxCapture = Math.max(tempCount, maxCapture)
        tempCount = 0
      }

      revCaptureStarted = true
      revTemp = 0
    } else {
      if (startCapture) {
        tempCount++
      }
      if (revCaptureStarted) {
        revTemp++
      }
    }
  }
  return Math.max(maxCapture, revMax)
}
