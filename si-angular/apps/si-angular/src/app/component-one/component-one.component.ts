import { Component, HostListener } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
    selector: '[si-entry-id="si-component-one"]',
    templateUrl: './component-one.component.html',
    styleUrls: ['./component-one.component.css']
})
export class ComponentOneComponent {

    constructor(
        private counterService: CounterService
    ) { }

    @HostListener('click')
    onClick() {
        this.counterService.count();
    }

}
