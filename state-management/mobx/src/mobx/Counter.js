import { makeObservable, observable, action } from 'mobx';

export class Counter {
  numberOfClicks = 0; //observable

  constructor() {
    makeObservable(this, {
      numberOfClicks: observable,
      increment: action,
    })
  }

  increment = amount => { //action
    this.numberOfClicks += amount;
  }
}
