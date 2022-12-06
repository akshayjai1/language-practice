class RandomizedSet {
  constructor() {
    this.list = [];
    this.map = new Map();
  }
  insert(val) {
    if (this.map.has(val)) return false;
    this.map.set(val, this.list.length);
    this.list.push(val);
    return true;
  }
  remove(val) {
    if (!this.map.has(val)) return false;
    const indexOfItemToRemove = this.map.get(val);
    // we have to set new value to this index;
    // put last element at this index;
    /* note: we cannot do list.pop() over here, as indexOfItemToRemove can be last index as well */
    const lastElementInList = this.list[this.list.length - 1];

    this.list[indexOfItemToRemove] = lastElementInList;
    // now we have to do list.pop();
    this.list.pop()
    this.map.set(lastElementInList, indexOfItemToRemove);
    this.map.delete(val);
    return true;
  }
  getRandom() {
    const randomIdx = Math.floor(Math.random() * this.list.length);
    return this.list[randomIdx];
  }
}
// this answer is failing, need to know why, it is based on understanding from
// https://www.youtube.com/watch?v=WtkwD7ikxfg
