import { createUser, showUser, User, http } from '@monorepo/shared';

const user: User = createUser('gbarska', 18);

showUser(user);

const test = async function () {
    const test = await http.get('users');
    console.log(test);
}

test();