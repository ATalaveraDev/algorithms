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
    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    current.next = node;
  }

  delete(id) {
    if (this.head) {

      let current = this.head;
      let previous = null;

      while (current) {
        if (current.value.id === id) {
          previous.next = current.next;

          return this.head;
        }

        previous = current;
        current = current.next;
      }
    }

    throw new Error('Linked List is empty');
  }
}

const node = new ListNode({ id: 1, value: 'Spiderman' });
const list = new LinkedList(node);

// INSERT
const venom = new ListNode({ id: 2, value: 'Venom' });
list.insert(venom);

// DELETE
const carnage = new ListNode({ id: 3, value: 'Carnage' });
list.insert(carnage);

const docOc = new ListNode({ id: 4, value: 'Doc Octopus' });
list.insert(docOc);

const greenGoblin = new ListNode({ id: 5, value: 'Green Goblin' });
list.insert(greenGoblin);

list.delete(4)

console.log(list);