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

  insert(node) {
    const current = this.head;

    while (current.next) {
      current = current.next;
    }

    current.next = node;
  }
}

const node = new ListNode({ id: 1, value: 'Spiderman' });
const list = new LinkedList(node);

// INSERT
const venom = new ListNode({ id: 2, value: 'Venom' });
list.insert(venom);

console.log(list);