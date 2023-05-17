import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { CalculatorComponent } from './calculator/calculator.component';
import { FormsModule } from "@angular/forms";
import { ValidateNumberDirective } from "./directives/validate-number.directive";


@NgModule({
    //to mention the name of
    //a. components
    //b. pipes
    //c. directives
    declarations: [AppComponent, CalculatorComponent, ValidateNumberDirective],
    //to mention the name of services
    providers: [],
    //to mention the name of modules
    imports: [BrowserModule, FormsModule],
    bootstrap: [AppComponent],
    exports: []
})
export class AppModule {
    constructor() {
        console.log('App module created')
    }
}