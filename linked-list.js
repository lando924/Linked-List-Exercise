/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode =new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    return this.removeAt(this.length-1)
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.length === 0) {
      throw new Error('Empty List')
    } else {
      let head = this.head;
      this.head = this.head.next;
      this.length -= 1;
      if (this.length == 0) {
        this.tail = null;
      }
      return head.val
    }
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (this.length === 0 || idx >= this.length) {
      throw new Error('Invalid index')
    } else {
      let currentNode = this.head;
      let tracker = 0;

      while (tracker < idx) {
        currentNode = currentNode.next
        tracker += 1;
      }
      return currentNode.val;
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (this.length === 0 || idx >= this.length) {
      throw new Error('Invalid index')
    } 
      let currentNode = this.head;
      let tracker = 0;

      while (tracker < idx) {
        currentNode = currentNode.next;
        tracker += 1;
      }
      currentNode.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx > this.length) {
      throw new Error('Invalid index')
    } 
    if (idx === this.length || this.length === 0) {
      this.push(val);
    } else {
      let currentNode = this.head;
      let newNode = new Node(val);
      let tracker = 0;

      while (tracker < idx-1) {
        currentNode = currentNode.next;
        tracker += 1;
      }
      let after = currentNode.next;
      currentNode.next = newNode;
      newNode.next = after;
      this.length += 1;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (this.length === 0 || idx >= this.length) {
      throw new Error('Invalid index')
    } if (this.length === 1) {
      let val = this.head.val;
      this.head = null;
      this.tail = null;
      this.length -= 1;
      return val
    }

    let currentNode = this.head;
    let tracker = 0;
    this.length -= 1;

    while (tracker < idx - 1) {
      currentNode = currentNode.next
      tracker += 1;
    }
    let item = currentNode.next;
    currentNode.next = currentNode.next.next;

    if (item.next === null) {
      this.tail = currentNode
    }
    return item.val;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) {
      return 0; 
    } else {
      let sum = this.head.val;
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNOde.next;
        sum += currentNode.val;
      }
      return sum/this.length;
    }
  }
}

module.exports = LinkedList;
