// https://www.nileshblog.tech/2023/01/lfu-cache-leetcode-solution-in-python-c-java-javascript-dart-with-time-complexity-analysis/
var LFUCache = function (capacity) {
  this.capacity = capacity
  this.map = new Map()
  this.start = null

  function addFirst(key, val) {
    let newNode = new Node(key, val)

    if (this.start == null) {
      this.start = newNode
    } else {
      newNode.next = this.start
      this.start.prev = newNode
      this.start = newNode
    }

    this.map.set(key, newNode)
  }

  function removeLFUNode() {
    let minNode = this.start
    let node = this.start.next
    while (node != null) {
      if (node.count <= minNode.count) {
        minNode = node
      }

      node = node.next
    }

    if (minNode.prev == null) {
      this.start = this.start.next
    } else {
      let prev = minNode.prev
      let next = minNode.next

      prev.next = next

      if (next != null) {
        next.prev = prev
      }
    }

    this.map.delete(minNode.key)
  }

  function moveNodeToFirst(node) {
    if (node == this.start) return

    let next = node.next
    let prev = node.prev

    prev.next = next

    if (next != null) {
      next.prev = prev
    }

    node.next = this.start
    this.start.prev = node
    this.start = node
    node.prev = null
  }

  this.addFirst = addFirst
  this.removeLFUNode = removeLFUNode
  this.moveNodeToFirst = moveNodeToFirst
}

/**
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function (key) {
  if (this.capacity == 0) return -1

  if (this.map.has(key)) {
    let node = this.map.get(key)
    ++node.count
    this.moveNodeToFirst(node)
    return node.val
  }

  return -1
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function (key, value) {
  if (this.capacity == 0) return

  if (this.map.has(key)) {
    let node = this.map.get(key)
    node.val = value
    this.get(key)
    return
  }

  if (this.map.size == this.capacity) {
    this.removeLFUNode()
  }

  this.addFirst(key, value)
}

function Node(key, val) {
  this.count = 1
  this.key = key
  this.val = val
  this.prev = null
  this.next = null
}

// ----------
/* why are we moving items to start, while accessing? */
var LFUCache = function (capacity) {
  this.capacity = capacity
  this.map = new Map()
  this.lfuNodeAtStart = null
  /* we want to be able to add/update and get item back. let us define node first<1> */
  /* remove node having least count, i.e. least frequently use

  d */
  function removeLFUNode() {
    let lfu = this.start
    let nextNode = this.start.next
    while (nextNode != null) {
      if (nextNode.count < lfu.count) {
        lfu = nextNode
      }
      nextNode = nextNode.next
    }
    if (lfu == this.start) {
      this.start = this.start.next
    } else {
      this.breakLink(lfu)
    }
  }
  function breakLink(node) {
    if (node == this.start) {
      this.start = this.start.next
    } else if (node.next == null) {
      node.prev.next = null
    } else {
      let prev = node.prev
      let next = node.next
      prev.next = next
      if (next != null) {
        next.prev = prev
      }
    }
  }
  function addAtStart(k, v) {
    let newNode = Node(k, v)
    if (this.start == null) {
      this.start = newNode
    } else {
      this.start.prev = newNode
      newNode.next = this.start
      this.start = newNode
    }
    this.map.set(k, newNode)
  }
  this.addAtStart = addAtStart
  this.removeLFUNode = removeLFUNode
  this.breakLink = breakLink
}
LFUCache.prototype.get = function (k) {
  if (!this.map.has(k)) return -1
  let node = this.map.get(k)
  node.count += 1
  return node.val
}
/* a node of doubly linked list */
function Node(k, v) {
  this.key = k
  this.val = v
  this.count = 1
  this.prev = null
  this.next = null
}
