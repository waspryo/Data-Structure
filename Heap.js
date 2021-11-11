const comparison = Object.freeze({
  BIGGER: 1,
  BIGGER_OR_EQUAL: [1, 0],
  SMALLER: -1,
  SMALLER_OR_EQUAL: [-1, 0],
  EQUAL: 0,
});

const defaultCompareFunction = (a, b) => {
  if (a > b) return comparison.BIGGER;
  if (a < b) return comparison.SMALLER;

  return comparison.EQUAL;
};

class MinHeap {
  heap = [];
  compare;

  constructor(compareFn = defaultCompareFunction) {
    this.compare = compareFn;
  }

  get size() {
    return this.heap.length;
  }

  get isEmpty() {
    return this.size === 0;
  }

  peek() {
    return this.isEmpty ? null : this.heap[0];
  }

  print() {
    this.printNode(0);
  }

  insert(value) {
    if (value !== null && value !== undefined) {
      this.heap.push(value);
      this.shitUp(this.size - 1);

      return true;
    }
    return false;
  }

  extract() {
    if (this.isEmpty) return null;
    if (this.size === 1) return this.heap.shift();

    const removedNode = this.heap.shift();
    this.shitDown(0);
    return removedNode;
  }

  shitDown(index) {
    let currentIndex = index;
    const leftIndex = this.getLeftIndex(index);
    const rightIndex = this.getRightIndex(index);

    if (
      leftIndex < this.size &&
      this.compare(this.heap[currentIndex], this.heap[leftIndex]) ===
        comparison.BIGGER
    ) {
      currentIndex = leftIndex;
    }
    if (
      rightIndex < this.size &&
      this.compare(this.heap[currentIndex], this.heap[rightIndex]) ===
        comparison.BIGGER
    ) {
      currentIndex = rightIndex;
    }

    if (currentIndex !== index) {
      this.swap(index, currentIndex);
      this.shitDown(currentIndex);
    }
  }

  shitUp(index) {
    let parentIndex = this.getParentIndex(index);

    while (
      index > 0 &&
      this.compare(
        this.heap[parentIndex],
        this.heap[index] === comparison.BIGGER
      )
    ) {
      this.swap(parentIndex, index);
      index = parentIndex;
      parentIndex = this.getParentIndex(index);
    }
  }

  swap(index, child) {
    // const temp = this.heap[index];
    // this.heap[index] = this.heap[index];
    // this.heap[child] = temp;
    [this.heap[index], this.heap[child]] = [this.heap[child], this.heap[index]];
  }

  getLeftIndex(index) {
    return 2 * index + 1;
  }

  getRightIndex(index) {
    return 2 * index + 2;
  }

  getParentIndex(index) {
    if (index === 0) return null;

    return Math.floor((index - 1) / 2);
  }

  printNode(i = 0, spaceCount = 0, label = "*") {
    if (i >= this.size) return;

    console.log(`${" ".repeat(spaceCount)}${label}: ${this.heap[i]} [${i}]`);
    this.printNode(this.getLeftIndex(i), spaceCount + 3, "Light");
    this.printNode(this.getRightIndex(i), spaceCount + 3, "Right");
  }
}

const hp = new MinHeap();

hp.insert(2);
hp.insert(3);
hp.insert(4);
hp.insert(5);
hp.insert(1);

hp.extract();
hp.extract();
hp.extract();
hp.extract();
hp.print();
