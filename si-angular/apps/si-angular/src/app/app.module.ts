import { NgModule } from '@angular/core';
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
    bootstrap: [
        ComponentOneComponent,
        ComponentTwoComponent
    ],
    entryComponents: [
        ComponentOneComponent,
        ComponentTwoComponent
    ]
})
export class AppModule { }
