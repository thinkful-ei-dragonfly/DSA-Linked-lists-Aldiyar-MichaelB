/* eslint-disable strict */
class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  find(item) {
    let currNode = this.head;
    if (!this.head) {
      return null;
    }

    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;

      } else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  remove(item) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    let currNode = this.head;
    let prevNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      prevNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not Found');
      return;
    }
    prevNode.next = currNode.next;
  }

  insertBefore(item, afterKey) {
    let after = this.find(afterKey);
    if (this.head === after) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== after) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, after);
    }
  }

  insertAfter(item, beforeKey) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      let before = this.find(beforeKey);
      let current = before.next;
      while (tempNode.next !== before) {
        tempNode = tempNode.next;
      }
      before.next = new _Node(item, current);
    }
  }

  insertAt(item, position) {
    if (this.head === null) {
      this.find.insertFirst(item);
    } else {
      let tempNode = this.head;
      for (let i = 0; i < position - 1; i++) {
        tempNode = tempNode.next;
      }
      this.insertBefore(item, tempNode.value);
    }
  }


}

function main() {
  let SLL = new LinkedList();

  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbucks');
  SLL.insertLast('Tauhida');
  SLL.insertBefore('Athena', 'Boomer');
  SLL.insertAfter('Hotdog', 'Helo');
  SLL.insertAt('kat', 3);
  SLL.remove('Tauhida');



  function display(list) {
    while (list.head !== null) {
      console.log(list.head.value);
      list.head = list.head.next;
    }
  }

  // display(SLL);

  function size(list) {
    let counter = 0;
    while (list.head !== null) {
      counter++;
      list.head = list.head.next;
    }
    console.log(counter);
  }

  // size(SLL);

  function isEmpty(list) {
    if (list.head === null) {
      return true;
    } else {
      return false;
    }
  }

  // console.log(isEmpty(SLL));

  function findPrevious(node, list) {


    let currNode = list.head;
    if (!list.head) {
      return null;
    }

    while (currNode.next.value !== node) {
      if (currNode.next === null) {
        return null;

      } else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  // console.log(findPrevious('Starbucks', SLL));

  function findLast(list) {
    let currNode = list.head;
    if (!list.head) {
      return null;
    }

    while (currNode.next !== null) {
      currNode = currNode.next;
    }
    return currNode;
  }

  // console.log(findLast(SLL));

  function WhatDoesThisProgramDo(lst) {
    let current = lst.head;
    while (current !== null) {
      let newNode = current;
      while (newNode.next !== null) {
        if (newNode.next.value === current.value) {
          newNode.next = newNode.next.next;
        } else {
          newNode = newNode.next;
        }
      }
      current = current.next;
    }
  }

  // WhatDoesThisProgramDo(SLL);
  // console.log(display(SLL));

  function reverser(list) {
    let current = list.head;
    console.log('first node is',list.head.next);
    list.head.next = null;
    let last = current;
    while (current.next !== null) {


      current = current.next;
      current.next = last;
      last = current;
    }
    console.log(list);


  }
  display(SLL);
  console.log(reverser(SLL));
}



console.log(main());