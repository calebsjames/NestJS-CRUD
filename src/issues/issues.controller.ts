import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { CreateIssueDto } from './dto/create-issue.dto';
import { IssuesService } from './issues.service';

@Controller('issues')
export class IssuesController {
    constructor(private readonly issuesService: IssuesService) {}

    @Get()
    async findAll() {
        const issues = await this.issuesService.findAll();
        return issues;
    }
    
    @Get(':id')
    async findOne(@Param('id') id) {
        const issue = await this.issuesService.findOne(id);
        return issue;
    }

    @Post()
    async create(@Body() createIssueDto: CreateIssueDto) {
        const issue = await this.issuesService.create(createIssueDto)
        return issue;
    }

    @Delete()
    async delete(@Query() query) {
        const issues = await this.issuesService.delete(query.issueId);
        return issues;
    }


    @Put(':id')
    async update(@Body() createIssueDto: CreateIssueDto, @Param('id') id) {
        const issues = this.issuesService.update(createIssueDto, id);
    return issues
    }

}
