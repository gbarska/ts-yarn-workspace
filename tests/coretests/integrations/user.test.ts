
import { createUser, User } from '@monorepo/core';

const dbTeardown = async () => {
    // Do something
}

describe('User', () => {

    beforeAll(async () => {
        await dbTeardown();
    })

    afterAll(async () => {
        await dbTeardown();
    })

    describe('Create user', () => {
        it('should create user', async () => {
           const user = createUser('John', 30);
            expect(user.age).toEqual(30);
            expect(user.name).toEqual('John');
        })
    })
})