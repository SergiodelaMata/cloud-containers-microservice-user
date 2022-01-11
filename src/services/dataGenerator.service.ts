import { UserEntity } from "../entities/user.entity";
import { v4 as uuidv4 } from "uuid";
import database from "../database/database";

export class DataGenerator {
  static async createUsers() {
    const users: UserEntity[] = await database
      .getConnection()
      .getRepository(UserEntity)
      .find();
    if (users.length === 0) {
      const user1: UserEntity = new UserEntity();
      user1.userId = uuidv4();
      user1.rol = "admin";
      user1.name = "admin";
      user1.firstsurname = "";
      user1.secondsurname = "";
      user1.email = "admin@gmail.com";
      user1.telephone = "123456789";
      user1.creditcard = null;
      user1.expiredatecreditcard = null;
      
      const user2: UserEntity = new UserEntity();
      user2.userId = uuidv4();
      user2.rol = "user";
      user2.name = "user1";
      user2.firstsurname = "ready";
      user2.secondsurname = "ready";
      user2.email = "user1.ready@gmail.com";
      user2.telephone = "987654321";
      user2.creditcard = null;
      user2.expiredatecreditcard = null;
      try {
        await database
          .getConnection()
          .getRepository(UserEntity)
          .save([user1, user2]);
        console.log("Users created");
      } catch (error) {
        console.log("Error: " + error.message);
      }
      
    } else {
      console.log("There are already users on database, skipping...");
    }
  }
}
