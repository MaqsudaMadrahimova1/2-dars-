import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Article } from './model/article.entity';

@Injectable()
export class ArticleService {
  constructor(@InjectModel(Article) private articleModel: typeof Article) {}
  async create(createArticleDto: CreateArticleDto) {
    const user = await this.articleModel.create(createArticleDto)
    return user ;
  }

  findAll() {
    return `This action returns all article`;
  }

  findOne(id: number) {
    return `This action returns a #${id} article`;
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return `This action updates a #${id} article`;
  }

  remove(id: number) {
    return `This action removes a #${id} article`;
  }
}
function InjectModel(Article: typeof Article): (target: typeof ArticleService, propertyKey: undefined, parameterIndex: 0) => void {
  throw new Error('Function not implemented.');
}

