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
      user1.userId = "23436396-18ff-41c4-b1dd-a4bdb0f1b2d7";
      user1.rol = "admin";
      user1.name = "admin";
      user1.password = "admin";
      user1.firstsurname = "admin";
      user1.secondsurname = "admin";
      user1.email = "admin@gmail.com";
      user1.telephone = "123456789";
      user1.creditcard = "4109644030727462";
      user1.expiredatecreditcard = "2025/07";
      
      const user2: UserEntity = new UserEntity();
      user2.userId = "9e53c23c-dd58-4b8b-8182-eb396c79540d";
      user2.rol = "user";
      user2.name = "user1";
      user2.password = "user1";
      user2.firstsurname = "ready";
      user2.secondsurname = "ready";
      user2.email = "user1.ready@gmail.com";
      user2.telephone = "987654321";
      user2.creditcard = "6509845773726980";
      user2.expiredatecreditcard = "2030/06";

      const user3: UserEntity = new UserEntity();
      user3.userId = "50d49dd8-f893-4d27-a721-8b55f86f6add";
      user3.rol = "admin";
      user3.name = "admin2";
      user3.password = "admin2";
      user3.firstsurname = "admin2";
      user3.secondsurname = "admin2";
      user3.email = "admin2@gmail.com";
      user3.telephone = "234567890";
      user3.creditcard = "9643987540563162";
      user3.expiredatecreditcard = "2025/08";

      const user4: UserEntity = new UserEntity();
      user4.userId = "3190c587-50b6-46a7-90ab-36eec1293296";
      user4.rol = "user";
      user4.name = "user2";
      user4.password = "user2";
      user4.firstsurname = "prepare";
      user4.secondsurname = "prepare";
      user4.email = "user2.prepare@gmail.com";
      user4.telephone = "098765432";
      user4.creditcard = "5078602913458922";
      user4.expiredatecreditcard = "2027/10";


      try {
        await database
          .getConnection()
          .getRepository(UserEntity)
          .save([user1, user2, user3, user4]);
        console.log("Users created");
      } catch (error) {
        console.log("Error: " + error.message);
      }
      
    } else {
      console.log("There are already users on database, skipping...");
    }
  }
}
