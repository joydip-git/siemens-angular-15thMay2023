import { Component } from "@angular/core";

@Component({
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    selector: 'app-main'
})
export class AppComponent {
    constructor() {
        console.log('App component created')
    }
}