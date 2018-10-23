import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterService } from '../counter.service';
import { ComponentTwoComponent } from './component-two.component';


describe('ComponentTwoComponent', () => {
    let component: ComponentTwoComponent;
    let fixture: ComponentFixture<ComponentTwoComponent>;
    let counterService: CounterService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ComponentTwoComponent],
            providers: [
                CounterService
            ]
        })
            .compileComponents();

        counterService = TestBed.get(CounterService);
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ComponentTwoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should display the initial count value', () => {
        expect(fixture.nativeElement.querySelector('.count').textContent).toBe('0');
    });

    it('should update the count value when a new value is emitted', () => {
        counterService.count();

        fixture.detectChanges();

        expect(fixture.nativeElement.querySelector('.count').textContent).toBe('1');
    });
});
