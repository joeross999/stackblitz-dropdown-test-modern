import { Component } from "@angular/core";
import { Container } from "../classes/container";
import { DataClass } from "../classes/data";

@Component({
    selector: "app-root",
    template: `
        <h2>recursive dropdown test</h2>
        <app-recursive-dropdowns
            [container]="container"
            (typeSelected)="typeSelected($event)"
        >
        </app-recursive-dropdowns>
    `,
})
export class AppComponent {
    container = new Container(DataClass.MAP, [
        new Container(DataClass.STRING),
        new Container(DataClass.STRING),
    ]);

    typeSelected(container: Container): void {
        console.log("typeSelected", container);
        this.container = container;
    }
}
