import { ApplicationRef, NgModule, NgZone } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponentTwoComponent } from './component-two/component-two.component';
import { CounterService } from './counter.service';


@NgModule({
    declarations: [
        ComponentOneComponent,
        ComponentTwoComponent
    ],
    imports: [
        BrowserModule,
        NxModule.forRoot()
    ],
    providers: [
        CounterService
    ],
    bootstrap: [],
    entryComponents: [
        ComponentOneComponent,
        ComponentTwoComponent
    ]
})
export class AppModule {
    constructor(
        private ngZone: NgZone,
        private applicationRef: ApplicationRef
    ) {}

    ngDoBootstrap() {
        window['bootstrapComponentOne'] = () => this.bootstrapComponent(ComponentOneComponent);
        window['bootstrapComponentTwo'] = () => this.bootstrapComponent(ComponentTwoComponent);
    }

    bootstrapComponent(Component) {
        this.ngZone.run(() => this.applicationRef.bootstrap(Component));
    }
}
