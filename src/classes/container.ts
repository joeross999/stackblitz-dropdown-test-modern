import { DataClass } from "./data";

export class Container {
    // Simplification of the class being edited by the component
    constructor(public data: DataClass, public children: Container[] = []) {}

    equals(other: Container): boolean {
        let result = true;
        this.children.forEach((c, i) => {
            if (other.children[i] && !c.equals(other.children[i])) {
                result = false;
                return;
            }
        });
        return result && this.data.equals(other.data);
    }

    static readonly cache = {};
    static from(data: DataClass): Container {
        switch (data.getValue()) {
            case DataClass.STRING.getValue():
                return new Container(DataClass.STRING);
            case DataClass.INTEGER.getValue():
                return new Container(DataClass.INTEGER);
            case DataClass.MAP.getValue():
                return new Container(DataClass.MAP, [
                    new Container(DataClass.STRING),
                    new Container(DataClass.STRING),
                ]);
        }
        throw new Error("unknown data class type");
    }
}
