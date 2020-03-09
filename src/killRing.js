
class KillRing {
  maxLength = 60;

  constructor(maxLen = 60) {
    this.maxLength = maxLen;
    this.killRing = [];
    this.index = null;
  }

  push(text) {
    this.killRing = [text].concat(this.killRing);
    if (this.killRing.length > this.maxLength) {
      this.killRing = this.killRing.slice(0, this.maxLength);
    }
    this.index = 0;
    // console.log(this.killRing);
  }

  grow(text) {
    if (this.index == null) {
      this.push(text);
    }
    this.index = 0;
    this.killRing[0] = this.killRing[0] + text;
    // console.log(this.killRing);
  }

  top() {
    if (this.index == null) {
      return null;
    }
    return this.killRing[this.index];
  }

  addIfNotEqualsFirstText(text) {
    if (this.index == null) {
      return;
    }
    if (this.killRing[0] !== text) {
      this.push(text);
    }
  }

  yankPop() {
    if (this.index == null) {
      return null;
    }

    this.index = (this.index + 1) % this.killRing.length;
    return this.top();
  }
};

module.exports = KillRing;
