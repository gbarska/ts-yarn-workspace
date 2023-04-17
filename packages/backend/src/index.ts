import { createUser, showUser, User } from '@monorepo/shared';

const user: User = createUser('gbarska', 18);

showUser(user);

function test(){
    console.log('test');
}

test();