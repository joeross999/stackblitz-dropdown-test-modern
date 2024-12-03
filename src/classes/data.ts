export class DataClass {
    // simplifcation of the classes we are binding to the dropdown
    public static readonly STRING = new DataClass("string");
    public static readonly INTEGER = new DataClass("integer");
    public static readonly MAP = new DataClass("map");
    public static readonly VOID = new DataClass("void");
    public static readonly all = [
        DataClass.STRING,
        DataClass.INTEGER,
        DataClass.MAP,
    ];
    constructor(private value: string) {}

    public equals(other: DataClass): boolean {
        return this.value === other.value;
    }

    public getValue(): string {
        return this.value;
    }
}
