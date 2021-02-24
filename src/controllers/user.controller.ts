import { Get, Route, Tags, Post, Put, Delete, Body, Path } from "tsoa";
import { User } from "../models";
import {
  getUsers,
  createUser,
  IUserPayload,
  getUser,
  updateUser,
  deleteUser,
} from "../repositories/user.repository";

@Route("users")
@Tags("User")
export default class UserController {
  @Get("/")
  public async getUsers(): Promise<Array<User>> {
    return getUsers();
  }

  @Post("/")
  public async createUser(@Body() body: IUserPayload): Promise<User> {
    return createUser(body);
  }

  @Get("/:id")
  public async getUser(@Path() id: string): Promise<User | null> {
    return getUser(Number(id));
  }

  @Put("/:id")
  public async updateUser(@Path() id: string, @Body() body: IUserPayload): Promise<User | null> {
    return updateUser(Number(id), body);
  }

  @Delete("/:id")
  public async deleteUser(@Path() id: string): Promise<User | null> {
    return deleteUser(Number(id));
  }
}