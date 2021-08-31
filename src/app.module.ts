import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IssuesController } from './issues/issues.controller';
import { IssuesService } from './issues/issues.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IssuesModule } from './issues/issues.module';
import { Issue } from './entities/issues.entity';
import { SequelizeModule } from '@nestjs/sequelize';
import { IssueModel } from './issues/issues.model';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'test',
    entities: [Issue],
    synchronize: true,
    autoLoadEntities: true,
  }),

  IssuesModule, 

  SequelizeModule.forRoot({
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'test',
    models: [IssueModel],
  })],
  controllers: [AppController, IssuesController],
  providers: [AppService, IssuesService],
})
export class AppModule {}
