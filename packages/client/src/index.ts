import { http, User } from "@monorepo/core";

class ListResponse<T> {
   results: T[] = [];
}

const getData = async () => {
    const response = await http.get<ListResponse<User>>('https://pokeapi.co/api/v2/ability');
    var users: User[] = response.data.results;

    users.forEach(user => {
          console.log(user.name);
    });
}

getData();
