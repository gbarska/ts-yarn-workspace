import { SimpleInjector, UserService } from "@monorepo/core";

const getData = async () => {
    const service = SimpleInjector.getInstance(UserService);

    const response = await service.getUsers();

    response.results.forEach(user => {
        console.log(user.name);
    });

    // const response = await http.get<ListResponse<User>>('https://pokeapi.co/api/v2/ability');
    // var users: User[] = response.data.results;
    // users.forEach(user => {
    //       console.log(user.name);
    // });
}

getData();
