import _ from 'lodash';

export default class Task {
  constructor(text, state = 'active') {
    this.id = _.uniqueId();
    this.text = text;
    this.state = state;
  }
}
