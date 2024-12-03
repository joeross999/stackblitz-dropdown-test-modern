import {
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output,
    SimpleChanges,
} from "@angular/core";
import { distinctUntilChanged, ReplaySubject, take } from "rxjs";
import { DataClass } from "../classes/data";
import { Container } from "../classes/container";

@Component({
    selector: "app-recursive-dropdowns",
    templateUrl: "./recursive-dropdowns.component.html",
    styleUrls: ["./recursive-dropdowns.component.css"],
})
export class RecursiveDropdownsComponent implements OnInit, OnChanges {
    @Input() container!: Container;
    @Output() typeSelected = new EventEmitter<Container>();

    dataClassList: DataClass[] = DataClass.all;
    selectedElements: DataClass[] = [
        DataClass.INTEGER,
        DataClass.STRING,
        DataClass.INTEGER,
        DataClass.INTEGER,
    ];

    constructor() {}

    ngOnInit() {}

    ngOnChanges(changes: SimpleChanges): void {}

    selectionStringChanged(data: any, position: number): void {
        console.log("selectionStringChanged", data);
        this.selectedElements[position] = data;
    }
}
