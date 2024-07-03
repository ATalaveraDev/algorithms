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

// INSERT
const node = new ListNode({ id: 1, value: 'Spiderman' });
const list = new LinkedList(node);

const peter = new ListNode({ id: 2, value: 'Peter Parker' });
list.insert(peter);

console.log('After inserting', list);

// DELETE
const venom = new ListNode({ id: 1, value: 'Venom' });
const enemiesList = new LinkedList(venom);

const carnage = new ListNode({ id: 2, value: 'Carnage' });
enemiesList.insert(carnage);

const docOc = new ListNode({ id: 3, value: 'Doc Octopus' });
enemiesList.insert(docOc);

const greenGoblin = new ListNode({ id: 4, value: 'Green Goblin' });
enemiesList.insert(greenGoblin);

enemiesList.delete(3);

console.log('After deleting', enemiesList);