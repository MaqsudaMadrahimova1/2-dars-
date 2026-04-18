import { BadRequestException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Auth } from './model/auth.entity';
import { Article } from 'src/article/model/article.entity';

@Injectable()
export class AuthService {
  constructor(@InjectModel(Auth) private authModel: typeof Auth) {}

   async register(createAuthDto: CreateAuthDto) {
    const foundedUser = await this.authModel.findOne({ where: { email: createAuthDto.email }, raw: true });
    if (foundedUser) throw new BadRequestException("user already exists");
    
    const hashPassword = await bcrypt.hash(createAuthDto.password, 10);
    return this.authModel.create({
      email: createAuthDto.email,
      username: createAuthDto.username,
      password: hashPassword,
      otp: createAuthDto.otp
    });
  }

  findAll() {
      return this.authModel.findAll({
        attributes: { exclude: ['password'] },
        include: [{ model: Article, attributes: ['id', 'title', 'content'] }]
      });
    }

   findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
  async findByEmail(email: string) {
    return this.authModel.findOne({ where: { email }, raw: true });
  }
}