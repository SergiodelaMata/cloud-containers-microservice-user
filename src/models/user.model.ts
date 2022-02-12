import { UserEntity } from "../entities/user.entity";
import database from "../database/database";
import { Repository } from "typeorm";
import { Request } from "express";
import { v4 as uuidv4 } from "uuid";

export class UserModel {
  private static repository: Repository<UserEntity>;

  public static async getUsers(): Promise<UserEntity[]> {
    UserModel.repository = await database
      .getConnection()
      .getRepository(UserEntity);
    return await UserModel.repository.find();
  }

  public static async getUser(userId: string): Promise<UserEntity> {
    UserModel.repository = await database
      .getConnection()
      .getRepository(UserEntity);
    return await UserModel.repository.findOne({ userId: userId });
  }

  public static async getUserByEmail(email: string): Promise<UserEntity> {
    UserModel.repository = await database
      .getConnection()
      .getRepository(UserEntity);
    return await UserModel.repository.findOne({ email: email });
  }

  public static async saveUser(req: Request): Promise<string> {
    var status;
    try {
      const user: UserEntity = new UserEntity();
      user.userId = uuidv4(); //genera un identificador
      user.password = req.body.password;
      if(req.body.rol && req.body.name && req.body.firstsurname && req.body.secondsurname && req.body.email && req.body.telephone)
      {
        user.rol = req.body.rol;
        user.name = req.body.name;
        user.firstsurname = req.body.firstsurname;
        user.secondsurname = req.body.secondsurname;
        user.email = req.body.email;
        user.telephone = req.body.telephone;
        if(req.body.creditcard && req.body.expiredatecreditcard)
        {
          user.creditcard = req.body.creditcard;
          user.expiredatecreditcard = req.body.expiredatecreditcard;
        }

        UserModel.repository = await database
          .getConnection()
          .getRepository(UserEntity);
        await UserModel.repository.save(user);
        status = {status:"Registered"};
      }
      else
      {
        status = {status:"Fields incomplete"};
      }
    } catch (error) {
      console.log("Error al insertar el usuario: " + error);
      status = {status:"Error with insertion"};
    }
    return JSON.stringify(status);
  }

  public static async updateUser(req: Request): Promise<string> {
    var status;
    try {
      UserModel.repository = await database
        .getConnection()
        .getRepository(UserEntity);

      const user: UserEntity = await UserModel.getUser(req.body.userId);
      user.password = req.body.password;
      if(req.body.rol && req.body.name && req.body.firstsurname && req.body.secondsurname && req.body.email && req.body.telephone)
      {
        user.rol = req.body.rol;
        user.name = req.body.name;
        user.firstsurname = req.body.firstsurname;
        user.secondsurname = req.body.secondsurname;
        user.email = req.body.email;
        user.telephone = req.body.telephone;
        if(req.body.creditcard && req.body.expiredatecreditcard)
        {
          user.creditcard = req.body.creditcard;
          user.expiredatecreditcard = req.body.expiredatecreditcard;
        }
        await UserModel.repository.save(user);
        status = {status:"Updated data"};
      }
      else
      {
        status = {status:"Fields incomplete"};
      }
    } catch (error) {
      console.log("Error al actualizar los datos del usuario: " + error);
      status = {status:"Error with update"};
    }
    return JSON.stringify(status);
  }

  public static async deleteUser(userId: string): Promise<boolean> {
    const userData: UserEntity = await this.getUser(userId);
    if (userData) {
      try {
        UserModel.repository = await database
          .getConnection()
          .getRepository(UserEntity);
        await UserModel.repository.delete(userData.userId);
        return true;
      } catch {
        return false;
      }
    } else {
      return false;
    }
  }

}

