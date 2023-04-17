import { Chicken } from "./chicken";
import { http } from "@monorepo/core";

console.log('hello ' + 'world');

const httpRequest = http.get('https://google.com'); 

const chicken = new Chicken();

chicken.cluck();