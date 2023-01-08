class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // adds a new node containing value to the end of the list
  append(value) {
    let node = new Node(value);
    if (this.length === 0) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new Node(value);
    }
    this.length++;
  }

  // adds a new node containing value to the start of the list
  prepend(value) {
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.length++;
  }

  // returns the first node in the list
  findHead() {
    console.log('findHead():', this.head);
    return this.head;
  }

  // returns the last node in the list
  findTail() {
    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
    console.log('findTail():', tail);
    return tail;
  }

  // inserts a new node with the provided value at the given index
  insertAt(value, index) {
    if (index < 0 || index > this.length) {
      return console.error('Incorrect value of index');
    }
    let node = new Node(value);
    if (index === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let current = this.head;
      let prev = null;
      let count = 0;
      while (count < index) {
        prev = current;
        current = current.next;
        count++;
      }
      prev.next = node;
      node.next = current;
    }
    this.length++;
  }

  // returns the node at the given index
  at(index) {
    if (index < 0 || index > this.length) {
      return 'Incorrect value of index';
    }
    let current = this.head;
    let count = 0;
    while (count < index) {
      current = current.next;
      count++;
    }
    console.log(`at(${index}):`, current);
    return current;
  }

  // removes the last element from the list
  pop() {
    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    current.next = null;
    this.length--;
    return current;
  }

  // removes the node at the given index
  removeAt(index) {
    if (index < 0 || index > this.length) {
      return console.error('Incorrect value of index');
    }
    let current = this.head;
    if (index === 0) {
      this.head = current.next;
    } else {
      let prev = null;
      let count = 0;
      while (count < index) {
        prev = current;
        current = current.next;
        count++;
      }
      prev.next = current.next;
    }
    this.length--;
    return current.value;
  }

  // returns true if the passed in value is in the list
  // and otherwise returns false
  contains(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        console.log(`contains(${value}):`, true);
        return true;
      }
      current = current.next;
    }
    console.log(`contains(${value}):`, false);
    return false;
  }

  // returns the index of the node containing value,
  // or null if not found
  find(value) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.value === value) {
        console.log(`find(${value}):`, index);
        return index;
      }
      current = current.next;
      index++;
    }
    console.log(`find(${value}):`, null);
    return null;
  }

  // removes the node from the list by the given value
  removeNodeByValue(value) {
    return this.removeAt(this.find(value));
  }

  // checks whether your LinkedList is empty or not
  isEmpty() {
    if (this.length === 0) {
      console.log(`isEmpty():`, true);
    } else {
      console.log(`isEmpty():`, false);
    }
    return this.length === 0;
  }

  // returns the total number of nodes in the list
  size() {
    console.log(`size(): ${this.length}`);
    return this.length;
  }

  // goes through each node in the LinkedList
  // and outputs the value of each node
  print() {
    let current = this.head;
    let count = 0;
    while (current) {
      console.log(`print(${count}): ${current.value}`);
      current = current.next;
      count++;
    }
  }

  // represents your LinkedList objects as strings,
  // so you can print them out and preview them in the console
  toString() {
    let string = '';
    let current = this.head;
    while (current) {
      if (!current.next) {
        string += `(${current.value}) -> null`;
      } else {
        string += `(${current.value}) -> `;
      }
      current = current.next;
    }
    console.log('toString():', string);
    return string;
  }
}

let list = new LinkedList();
list.append(5);
list.append(15);
list.append(25);
list.append(35);
list.append(45);
list.append(55);
list.prepend(1);
list.removeAt(2);
list.insertAt(77, 3);
list.append(100);
list.append(150);
list.pop();
list.removeNodeByValue(100);
list.find(25);
list.size();
list.isEmpty();
list.print();
list.toString();
list.contains(5);
list.contains(8);
list.at(2);
list.findHead();
list.findTail();
