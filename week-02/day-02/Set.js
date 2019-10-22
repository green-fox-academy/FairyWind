'use strict';

function Set() {
  this.set = {};

  this.has = function (value) {
    return this.set.hasOwnProperty(value);
  };

  this.add = function (value) {
    if (!this.has(value)) {
      this.set[value] = value;
      return true;
    }
    return false;
  };

  this.size = function () {
    var count = 0;
    for (var item in this.set) {
      if (this.has(item)) {
        count++;
      }
    }
    return count;
  };
}

const setEntity = new Set();
setEntity.add(1);
setEntity.add(2);
setEntity.add(1);
console.log(setEntity.set);

for (var item in setEntity.set) {
  console.log(setEntity.set[item]);
}

module.exports = Set;