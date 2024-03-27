import { Test } from "@nestjs/testing";
import { UsersController } from "../users.controller";
import { UsersService } from "../users.service";
import { JwtService } from "@nestjs/jwt";
import { User } from "../models/user.model";
import { CreateUserDto } from "../dto/create-user.dto";
import { userStub } from "./stubs/user.stub";
import { before } from "node:test";
import exp from "node:constants";

jest.mock("../users.service");

describe("Users controller", () => {
  let usersController: UsersController;
  let usersService: UsersService;

  beforeAll(async () => {
    const modulRef = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService, JwtService],
    }).compile();
    usersController = modulRef.get<UsersController>(UsersController);
    usersService = modulRef.get<UsersService>(UsersService);
    jest.clearAllMocks();
  });
  it("User controller should be defined", () => {
    expect(usersController).toBeDefined();
  });
  it("User service should be defined", () => {
    expect(usersService).toBeDefined();
  });

  describe("createUser", () => {
    describe("when create user is called", () => {
      let user: User;
      let createUserDto: CreateUserDto;
      beforeAll(async () => {
        createUserDto = {
          name: userStub().name,
          email: userStub().email,
          password: userStub().password,
        };
        user = await usersController.createUser(createUserDto);
        console.log(user);
      });
      it("then it should call usersServise", () => {
        expect(usersService.createUser).toHaveBeenCalledWith(createUserDto);
      });
      it("then it should return user", () => {
        expect(user).toEqual(userStub());
      });
    });
  });
  describe("getAllUsers", ()=>{
    describe("when create user is called", ()=>{
        let users:User[]
        beforeAll(async()=>{
            users = await usersController.getAllUsers()
        })
        test("then it should call user",()=>{
            expect(usersService.findAll).toHaveBeenCalled()
        })
        test("then it should return users", ()=>{
            expect(users).toEqual([userStub()])
        })
    })
  })
  describe("getOneUser", ()=>{
    describe("when create user is called", ()=>{
        let user : User
        beforeAll(async()=>{
            user = await usersController.findOne(String(userStub().id))
        })
        test("then it should call user", ()=>{
            expect(usersService.findOne).toHaveBeenCalled()
        })
        test("then it should return users", ()=>{
            expect(user).toEqual(userStub())
        })
    })
  })
  describe("deleteUser",()=>{
    describe("when create user is called", ()=>{
        let user: Object
        beforeAll(async()=>{
            user = await usersController.remove(String(userStub().id));
        })
        test("then it should call user", ()=>{
            expect(usersService.remove).toHaveBeenCalled()
        })
        console.log(userStub);
        
        test("then it should return user", ()=>{
            expect(user).toEqual({ message: `Foydalanuvchi o'chirildi` });
        })
    });
  })
});
