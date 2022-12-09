var log = console.log;
var log = () => {};
class RandomizedSet {
  constructor() {
    this.map = new Map();
    this.list = [];
  }

  insert(val) {
    log('--------------------------------');
    log('operation insert = ', val);
    if (this.map.has(val)) {
      log('returning false since, set does not have ', val);
      return false;
    }
    this.map.set(val, this.list.length);
    this.list.push(val);
    log('map is now', this.map);
    log('list is now', this.list);
    log('return value is true');
    return true;
  }

  remove(val) {
    log('--------------------------------');
    log('operation remove ', val);
    if (!this.map.has(val)) {
      log('returning false, since set does not have', val);
      return false;
    }
    const idx = this.map.get(val);
    log('index of ', val, ' in map is idx =', idx);
    log(
      ' and swapping it with last but one index which is ',
      this.list.length - 1,
    );
    // this.list[idx] = this.list.pop();
    this._swap(idx, this.list.length - 1);
    log('swap done');
    log('map is now', this.map);
    log('list is now', this.list);
    log('removing last item from list');
    this.list.pop();
    log(
      'setting in map for key = this.list[idx] ',
      this.list[idx],
      ' and value = idx = ',
      idx,
    );
    this.map.set(this.list[idx], idx);
    log(' deleting val = ', val, ' from map');
    this.map.delete(val);
    log('map is now', this.map);
    log('list is now', this.list);
    log('return value is true');
    return true;
  }

  getRandom() {
    log('--------------------------------');
    const idx = Math.floor(Math.random() * this.list.length);
    const val = this.list[idx];
    log('operation get random idx = ', idx, ' and val is ', val);
    return val;
    // return this.list[Math.floor(Math.random() * this.list.length)];
  }

  _swap(a, b) {
    log('--------------------------------');
    log(' swapping index ', a, ' with ', b);
    log('list before swap ', this.list);
    const tmp = this.list[a];
    this.list[a] = this.list[b];
    this.list[b] = tmp;
    log('list after swap ', this.list);
  }
}
// ["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"]
// [[], [1], [2], [2], [], [1], [2], []]
// Output
// [null, true, false, true, 2, true, false, 2]
var r = new RandomizedSet();
r.insert(1);
r.remove(2);
r.insert(2);
r.insert(3);
r.insert(4);
r.insert(5);
r.remove(2);
r.remove(4);
// r.insert(2);
// r.getRandom();
