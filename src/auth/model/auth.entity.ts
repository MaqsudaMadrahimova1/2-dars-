import { DataTypes, Optional } from "sequelize";
import { Column, HasMany, Model, Table } from "sequelize-typescript";
import { Article } from "../../article/model/article.entity"; // Adjust the path as necessary

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
 email!: string;
    @Column({
        type: DataTypes.STRING,
        allowNull: false,
    })
    password: string;

    @Column({   
       type: DataTypes.STRING,
         allowNull: false,
 } ) 
    otp!: string;

    @HasMany(() => Article)
    articles?: Article[];
}

