// type StackType = {
//   item: number[],
//   add: AddFunc,
//   remove: NumFunc,
//   top: NumFunc,
//   isEmpty: BolFunc,
//   size: NumFunc,
//   clear: ArrFunc
// }
// type AddFunc = (value: number) => number
// type NumFunc = () => number
// type BolFunc = () => boolean
// type ArrFunc = () => number[]
//
// const Stack: StackType = {
//   item: [],
//   add: function(value: number) {
//     return this.item.push(value)
//   },
//   remove: function() {
//     return this.item.pop() ?? 0
//   },
//   top: function() {
//     return this.item[this.item.length - 1]
//   },
//   isEmpty: function() {
//     return this.item.length === 0
//   },
//   size: function() {
//     return this.item.length
//   },
//   clear: function() {
//     return this.item = []
//   }
// }
