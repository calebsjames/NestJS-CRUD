import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IssuesController } from './issues/issues.controller';
import { IssuesService } from './issues/issues.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IssuesModule } from './issues/issues.module';

@Module({
  imports: [IssuesModule],
  controllers: [AppController, IssuesController],
  providers: [AppService, IssuesService],
})
export class AppModule {}
