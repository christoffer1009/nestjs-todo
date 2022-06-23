import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { MongooseModule } from '@nestjs/mongoose';
import 'dotenv/config'

const uri = process.env.MONGO_URI
@Module({
  imports: [TodoModule, MongooseModule.forRoot(uri)],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
