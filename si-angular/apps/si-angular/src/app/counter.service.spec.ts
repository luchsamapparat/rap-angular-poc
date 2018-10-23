import { TestBed } from '@angular/core/testing';
import { skip } from 'rxjs/operators';
import { CounterService } from './counter.service';

describe('CounterService', () => {
  let counterService: CounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CounterService]
    });

    counterService = TestBed.get(CounterService);
  });

  it('should count', done => {
    counterService.number$.pipe(skip(1))
      .subscribe(value => {
        expect(value).toBe(1);
        done();
      });

    counterService.count();
  });
});
