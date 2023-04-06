var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode(0);
    let curr = dummy;
    
    // Traverse the linked lists and add nodes to the merged linked list in the proper order
    while (list1!== null && list2 !== null) {
      if (list1.val < list2.val) {
        curr.next = list1;
        list1= list1.next;
      } else {
        curr.next = list2;
        list2 = list2.next;
      }
      curr = curr.next;
    }
    
    // Add any remaining nodes from list1or list2 to the merged linked list
    if (list1!== null) {
      curr.next = list1;
    } else {
      curr.next = list2;
    }
    
    // Return the head of the merged linked list (skip over the dummy node)
    return dummy.next
     
  };