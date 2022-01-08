import { Request } from "express";
import { UserEntity } from "../entities/user.entity";

export interface GetUsers {
  userData: UserEntity | UserEntity[];
  logged: boolean;
  userId: string;
}

export interface GetUser {
  userData: UserEntity;
  logged: boolean;
  userId: string;
}
export class UserController {
  public static async getUsers(req: Request): Promise<GetUsers> {
    return await {
      userData: null,
      logged: false,
      userId: null,
    };
  }

  public static async saveUser(req: Request): Promise<GetUser> {
    return await {
      userData: null,
      logged: false,
      userId: null,
    };
  }

  public static async deleteUser(req: Request): Promise<boolean> {
    return null;
  }
}
