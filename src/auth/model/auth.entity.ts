import { DataTypes } from "sequelize";
import { Column, Model, Table } from "sequelize-typescript";

@Table
export class Auth extends Model {
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
}

