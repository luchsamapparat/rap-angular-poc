import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterService } from '../counter.service';
import { ComponentOneComponent } from './component-one.component';


describe('ComponentOneComponent', () => {
    let component: ComponentOneComponent;
    let fixture: ComponentFixture<ComponentOneComponent>;
    let counterService: CounterService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ComponentOneComponent],
            providers: [
                CounterService
            ]
        })
            .compileComponents();

        counterService = TestBed.get(CounterService);
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ComponentOneComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('counts on click', () => {
        const spy = spyOn(counterService, 'count');

        fixture.componentInstance.onClick();

        expect(spy).toHaveBeenCalled();
    });
});
