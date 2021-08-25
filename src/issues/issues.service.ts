import { HttpException, Injectable } from '@nestjs/common';
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

    delet

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


    update(createIssueDto: CreateIssueDto, id: number) {
        const index = this.issues.findIndex(i => i.id === Number(id));
        if (!index) {
            throw new HttpException('Index not found', 404)
        }
        this.issues[index] = createIssueDto;
          return this.issues;
        

}

}