import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { get } from 'http';
import { CreateIssueDto } from './dto/create-issue.dto';
import { IssuesService } from './issues.service';
import { Issue } from './interfaces/issue.interface';

@Controller('issues')
export class IssuesController {
    constructor(private readonly issuesService: IssuesService) {}

    @Get()
    findAll(): Issue[] {
        return this.issuesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id): Issue {
        return this.issuesService.findOne(id);
    }

    @Post()
    create(@Body() createIssueDto: CreateIssueDto): string {
        return `Title: ${createIssueDto.title} Description: ${createIssueDto.description}`
    }

    @Delete(':id')
    delete(@Param('id') id): string {
        return `Deleted issue ${id}`
    }

    @Put(':id')
    update(@Body() updateIssueDto: CreateIssueDto, @Param('id') id): string {
        return `Update ${id} - Title: ${updateIssueDto.title}`
    }

}
