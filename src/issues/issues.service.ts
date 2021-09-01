import { HttpException, Injectable } from '@nestjs/common';
import { ISSUES } from './issues.mock';
import { CreateIssueDto } from './dto/create-issue.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Issue } from 'src/entities/issues.entity';
import { Repository } from 'typeorm';
import { InjectModel } from '@nestjs/sequelize';
import { IssueModel } from './issues.model';


@Injectable()
export class IssuesService {
    
    issues = ISSUES


    constructor(
        @InjectRepository(Issue)
        private usersRepository: Repository<Issue>,
      ) {}

//     findAll(): Promise<any> {
//         return new Promise(resolve => {
//             resolve(this.issues)
//     })
// }

//     async findAll(): Promise<Issue[]> {
//         return this.usersRepository.find();
//     }    

    async findAll() {
        return this.issues
    }

    async findOne(issueId) {
        let id = Number(issueId) 
        const issue = this.issues.find(i => i.id === id);
        if (!issue) {
            throw new HttpException('ID does not exist', 404)
        }
        return(issue);
}

    async delete(issueId) {
        let id = Number(issueId)
        let index = this.issues.findIndex(issue => issue.id === id);
        
        if (index === -1) {
            throw new HttpException('Index not found', 404)
        }

        this.issues.splice(index, 1);
        return(this.issues);
    ;
    }


    async create(issue) {
        this.issues.push(issue);
        return(this.issues)
        
    }


    async update(createIssueDto: CreateIssueDto, id: number) {
        const index = this.issues.findIndex(i => i.id === Number(id));
        if (index < 0) {
            throw new HttpException('Index not found', 404)
        }
        this.issues[index] = createIssueDto;
        return this.issues;
        

}

}