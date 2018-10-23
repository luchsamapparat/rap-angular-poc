import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CounterService } from '../counter.service';

@Component({
    selector: '[si-entry-id="si-component-two"]',
    templateUrl: './component-two.component.html',
    styleUrls: ['./component-two.component.css']
})
export class ComponentTwoComponent {

    number$: Observable<number>;

    constructor(
        private counterService: CounterService
    ) {
        this.number$ = counterService.number$;
    }

}
