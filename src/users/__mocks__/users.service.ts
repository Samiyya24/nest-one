import { userStub } from "../test/stubs/user.stub";

export const UsersService = jest.fn().mockReturnValue({
  createUser: jest.fn().mockResolvedValue(userStub()),
  findAll: jest.fn().mockResolvedValue([userStub()]),
  findOne: jest.fn().mockResolvedValue(userStub()),
  remove: jest.fn().mockResolvedValue({message:`Foydalanuvchi o'chirildi`}),
});