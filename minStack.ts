class MinStack {
  item: number[]
  constructor() {
    this.item = []
  }

  push(val: number): void {
    this.item.push(val)
  }

  pop(): void {
    this.item.pop()
  }

  top(): number {
    return this.item[this.item.length - 1]
  }

  getMin(): number {
    return Math.min(...this.item)
  }
}
