
import { Component} from '@angular/core'

@Component({
    selector:'event-app',
    template:`<h1>{{sanjib}}</h1>
    <button (click)="show()">Click me</button>`
}) //decorator - like annotation
//export is needed to export this class to other component
export class EventsAppComponent{
    sanjib = "welcome";
    show = function () {
        prompt("hello")
    }
}