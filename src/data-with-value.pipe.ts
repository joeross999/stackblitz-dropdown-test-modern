import { Pipe, PipeTransform } from "@angular/core";
import { DataClass } from "./classes/data";

@Pipe({
    name: "dataWithValue",
})
export class DataWithValuePipe implements PipeTransform {
    transform(
        value: DataClass[],
        args?: any
    ): { data: DataClass; value: string }[] {
        return value.map(data => ({ data, value: data.getValue() }));
    }
}
