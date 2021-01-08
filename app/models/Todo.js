export default class Todo {
  constructor({ id, completed, description }) {
    this.id = id;
    this.completed = completed
    this.description = description
  }

  get Template() {
    return `

    `
  }
}










//  "Todo": {
// "completed": {
//   "type": "Boolean",
//     "required": true,
//       "default": false
// },
// "description": {
//   "type": "String",
//     "required": true
// },
// "user": {
//   "type": "String",
//     "required": true