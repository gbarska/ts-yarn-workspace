import { Chicken } from "./chicken";
import { http } from "@monorepo/shared";

console.log('hello ' + 'world');

const httpRequest = http.get('https://google.com'); 

const chicken = new Chicken();

chicken.cluck();