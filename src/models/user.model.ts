import { UserEntity } from "../entities/user.entity";
import database from "../database/database";
import { Repository } from "typeorm";
import { Request } from "express";

export class UserModel {
  private static repository: Repository<UserEntity>;

  public static async getUsers(): Promise<UserEntity[]> {
    UserModel.repository = await database
      .getConnection()
      .getRepository(UserEntity);
    return await UserModel.repository.find();
  }



}
