import { stringify } from "@angular/core/src/util";

export const Heroes: Hero[] = [
    {name: 'Ravi', age: 28}, {name: 'jogi', age: 28}, {name:'Raj', age: 22}
];
export interface Hero
{
    name: String;
    age: Number;
}