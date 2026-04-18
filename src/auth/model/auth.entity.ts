import { DataTypes, Optional } from "sequelize";
import { BeforeCreate, Column, HasMany, Model, Table } from "sequelize-typescript";
import { Article } from "../../article/model/article.entity"; 
import * as bcrypt from 'bcrypt';

interface AuthAttributes {
    id: number;
    username: string;
    email: string;
    password: string;
    otp: string;
}

type AuthAttributesTypes = Optional<AuthAttributes, 'id'>;

@Table
export class Auth extends Model<AuthAttributes, AuthAttributesTypes> {
    
 @Column({
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
 })
 declare id: number;
 @Column({
    type: DataTypes.STRING,
    allowNull: false,
 })
   username: string;
    @Column({
        type: DataTypes.STRING,
        allowNull: false,
 } )
       declare email: string;
    @Column({
        type: DataTypes.STRING,
        allowNull: false,
    })
    password: string;

    @Column({   
       type: DataTypes.STRING,
         allowNull: false,
 } ) 
    declare otp: string;

    @HasMany(() => Article)
    articles?: Article[];
    @BeforeCreate
    static async hashPassword(user: Auth) {
        user.password = await bcrypt.hash(user.password, 10);
    }
}

