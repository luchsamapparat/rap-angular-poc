import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  number$ = new BehaviorSubject(0);

  private counter = 0;

  count() {
    this.counter++;
    this.number$.next(this.counter);
  }

}
