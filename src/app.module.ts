import { NgModule } from "@angular/core";
import { AppComponent } from "./app/app.component";
import { RecursiveDropdownsComponent } from "./recursive-dropdowns/recursive-dropdowns.component";
import { DropDownListModule } from "@progress/kendo-angular-dropdowns";
import { DataWithValuePipe } from "./data-with-value.pipe";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent,
        RecursiveDropdownsComponent,
        DataWithValuePipe,
    ],
    imports: [DropDownListModule, BrowserModule, BrowserAnimationsModule],
    bootstrap: [AppComponent],
    providers: [],
})
export class AppModule {}
