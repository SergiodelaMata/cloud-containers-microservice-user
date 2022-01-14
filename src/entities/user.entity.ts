import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: "user" })
export class UserEntity {
  @PrimaryColumn("varchar", { length: 100 })
  userId: string;

  @Column("varchar", {length: 100})
  password: string;

  @Column("varchar", {length: 5})
  rol: string;

  @Column("varchar", {length: 100 })
  name: string;

  @Column("varchar", {length: 100 })
  firstsurname: string;

  @Column("varchar", {length: 100 })
  secondsurname: string;

  @Column("varchar", {length: 9, unique: true, nullable: true})
  telephone: string;

  @Column("varchar", {length: 60, unique: true})
  email: string;

  @Column("varchar", {length: 16, unique: true, nullable: true})
  creditcard: string;

  @Column("datetime", {nullable: true})
  expiredatecreditcard: Date;

}
