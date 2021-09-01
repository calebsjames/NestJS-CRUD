import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Issue } from 'src/entities/issues.entity';
import { IssuesController } from './issues.controller';
import { IssueModel } from './issues.model';
import { IssuesService } from './issues.service';



@Module({
  imports: [SequelizeModule.forFeature([IssueModel]), TypeOrmModule.forFeature([Issue])],
  exports: [TypeOrmModule],
  controllers: [IssuesController],
  providers: [IssuesService],
})
export class IssuesModule {}
