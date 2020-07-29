/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// create a dummy head node to build a new linked list
// compare the first elements of each list
// take whichever element is smaller and put it into the new linked list
// if one list is shorter than the other, then there are no longer two elements to compare
// therefore add the longer linked list to the end of the new linked list
var mergeTwoLists = function (l1, l2) {
  let dummyHead = new ListNode(0);
  // pointer tracking dummyHead
  let currentNode = dummyHead;
  // while l1 and l2 not null we're going to compare l1 & l2
  while (l1 !== null && l2 !== null) {
    //   gather the small value
    if (l1.val < l2.val) {
      // and put it next to currentNode
      currentNode.next = l1;
      // move l1 to the next pointer
      l1 = l1.next;
      // otherwise put l2 next to currentNode
    } else {
      currentNode.next = l2;
      //   and move l2
      l2 = l2.next;
    }
// move currentNode to next
    currentNode = currentNode.next;
  }
// chain the smaller linked list to the end of the newer linked list
  if (l1 !== null) {
    currentNode.next = l1;
  } else if (l2 !== null) {
    currentNode.next = l2;
  }

  return dummyHead.next;
};
