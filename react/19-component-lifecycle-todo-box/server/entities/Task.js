// import _ from 'lodash';

export default class Task {
  constructor(id, text, state = 'active') {
    this.id = id;
    this.text = text;
    this.state = state;
  }
}
