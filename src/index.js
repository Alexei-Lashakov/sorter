class Sorter {
  constructor() {
    this.container = [];
  }

  add(element) {
    this.container.push(element);
  }

  at(index) {
    return this.container[index];
  }

  get length() {
    return this.container.length;
  }

  toArray() {
    return this.container;
  }

  defaultSort(a, b) {
    return a - b;
  }

  sort(indices) {
    let arrayOfIndeces = [];

    indices.sort((a, b) => a - b);

    indices.forEach(index => {arrayOfIndeces.push(this.container[index])});
    arrayOfIndeces.sort(this.defaultSort);
    
    for (let i = 0; i < indices.length; i++) {
      this.container.splice(indices[i], 1, arrayOfIndeces[i]);
    }
  }
   
  setComparator(compareFunction) {
    this.defaultSort = compareFunction;
  }
}

module.exports = Sorter;