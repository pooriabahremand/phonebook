import Person from "./../classes/Person";
import { DriverInterface } from "./storageDriver";
export default class CsvDriver implements DriverInterface {
    people: Person[];
    filePath: string;
    constructor();
    read(): Person[];
    add(argPerson: Person): void;
    import(argPeople: Person[]): void;
}
