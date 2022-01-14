import { Request } from "express";
import { UserEntity } from "../entities/user.entity";
import { UserModel } from "../models/user.model";

export interface GetUsers {
  userData: UserEntity | UserEntity[];
  logged: boolean;
  userId: string;
  rol : string;
}

export interface GetUser {
  userData: UserEntity;
  logged: boolean;
  userId: string;
  rol : string;
}
export class UserController {
  public static async getUsers(req: Request): Promise<GetUsers> {
    return {
      userData: await UserModel.getUsers(),
      logged: false,
      userId: null,
      rol: null,
    };
  }

  public static async getUser(req: Request): Promise<GetUser> {
    return {
      userData: await UserModel.getUser(req.params.userId),
      logged: false,
      userId: null,
      rol: null,
    };
  }


  public static async saveUser(req: Request): Promise<boolean> {
    return await UserModel.saveUser(req);
  }

  public static async updateUser(req: Request): Promise<boolean> {
    return await UserModel.updateUser(req);
  }

  public static async deleteUser(req: Request): Promise<boolean> {
    return await UserModel.deleteUser(req.params.userId);
  }
}
