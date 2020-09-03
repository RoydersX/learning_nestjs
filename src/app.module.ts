import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { postgress } from './config/database';

@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot(postgress)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
