class ListNode {
  value;
  next;

  constructor(data) {
    this.value = data;
    this.next = null;
  }
}

class LinkedList {
  head;

  constructor(node) {
    this.head = node;  
  }
}

const node = new ListNode({ id: 1, value: 'Spiderman' });
const list = new LinkedList(node);

console.log(list)