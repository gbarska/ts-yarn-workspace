import {container} from "tsyringe";

export class SimpleInjector{
     static getInstance<T>(constructor: new (...args: any[]) => T): T { return container.resolve(constructor); };
}
