import { HttpException, Injectable } from '@nestjs/common';
import { UpdateResult, DeleteResult } from 'typeorm';
import { Issue } from './interfaces/issue.interface';
import { ISSUES } from './issues.mock';
import { CreateIssueDto } from './dto/create-issue.dto';

@Injectable()
export class IssuesService {

    issues = ISSUES

    findAll(): Promise<any> {
        return new Promise(resolve => {
            resolve(this.issues)
    })
}


    findOne(issueId): Promise<any> {
        let id = Number(issueId)
        return new Promise(resolve => {
            const issue = this.issues.find(i => i.id === id);
            if (!issue) {
                throw new HttpException('ID does not exist', 404)
            }
            resolve(issue);
    })
}


    delete(issueId): Promise<any> {
        let id = Number(issueId)
        return new Promise(resolve => {
            let index = this.issues.findIndex(issue => issue.id === id);
            if (index === -1) {
                throw new HttpException('Index not found', 404)
            }
            this.issues.splice(index, 1);
            resolve(this.issues);
    });
    }


    create(issue): Promise<any> {
        return new Promise(resolve => {
            this.issues.push(issue);
            resolve(this.issues)
        })
    }
    

    // update(issue): Promise<any> {
    //     return new Promise (resolve => {
    //         this.issues.push(issue);
    //         resolve(this.issues)
    //     })
    // }

    async update(createIssueDto: CreateIssueDto, id: string): Promise<any> {
        try {
          const issue = await this.findOne(id);
          issue.title = createIssueDto.title;
          issue.url = createIssueDto.url;
          issue.description = createIssueDto.description;
          issue.labels = createIssueDto.labels;
          issue.author = createIssueDto.author;
          issue.comment_count = createIssueDto.comment_count;
          return await issue.save();
        } catch (error) {
          throw new HttpException('Error updating article', 400);
        }
      }

}
