import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { FileModule } from '../file/file.module';
import { User } from '../users/models/user.model';
import { Posts } from './models/post.model';

@Module({
  imports:[SequelizeModule.forFeature([User, Posts]),FileModule],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
