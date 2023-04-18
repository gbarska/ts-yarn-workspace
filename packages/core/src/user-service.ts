import {autoInjectable} from "tsyringe";
import { Http, ListResponse } from "./http";
import { User } from "./user";

@autoInjectable()
export class UserService {
    constructor (private httpClient: Http){}
    
    async getUsers() : Promise<ListResponse<User>> {
        return (await this.httpClient.get<ListResponse<User>>("https://pokeapi.co/api/v2/ability")).data;
    }
}