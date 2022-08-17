function reverseLinkLest(head) {
    let prev = null
    let next = null
    //as long as head does not equal null
    while(head != null) {
        //assign next to head
        next = head.next
        //then move it over to the prev
        head.next = prev
        //assign prev the current value
        prev = head
        //point to the next head
        head = next
    }
    return prev
}