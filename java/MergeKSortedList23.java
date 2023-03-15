// A class to represent a node of a linked list
class ListNode {
  int val; // the value of the node
  ListNode next; // the reference to the next node
  // constructor to create a new node with a given value
  ListNode(int val) {
    this.val = val;
    this.next = null;
  }
}

// A class to merge k sorted linked lists
class Solution {
  public ListNode mergeKLists(ListNode[] lists) {
    // if the input array is empty or null, return null
    if (lists == null || lists.length == 0) {
      return null;
    }
    // create a priority queue to store the nodes of the lists
    // the priority is based on the value of the nodes in ascending order
    PriorityQueue<ListNode> pq = new PriorityQueue<>((a, b) -> a.val - b.val);
    // add the first node of each list to the priority queue
    for (ListNode list : lists) {
      if (list != null) {
        pq.offer(list);
      }
    }
    // create a dummy node to point to the head of the merged list
    ListNode dummy = new ListNode(0);
    // create a pointer to traverse the merged list
    ListNode curr = dummy;
    // while the priority queue is not empty, do the following
    while (!pq.isEmpty()) {
      // poll the node with the smallest value from the priority queue
      ListNode node = pq.poll();
      // append it to the merged list
      curr.next = node;
      // move the pointer to the next node
      curr = curr.next;
      // if the polled node has a next node, add it to the priority queue
      if (node.next != null) {
        pq.offer(node.next);
      }
    }
    // return the head of the merged list
    return dummy.next;
  }
}