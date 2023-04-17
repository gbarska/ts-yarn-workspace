import { User, UserService } from "@monorepo/core";

const getData = async () => {
    const service = new UserService();
    const response = await service.getUsers();
    var users: User[] = response.results;
    users.forEach(user => {
          console.log(user.name);
    });
}

getData();
