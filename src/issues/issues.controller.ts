import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { get } from 'http';
import { CreateIssueDto } from './dto/create-issue.dto';

@Controller('issues')
export class IssuesController {
    @Get()
    findAll(): string {
        return 'Get all issues'
    }

    @Get(':id')
    findOne(@Param('id') id): string {
        return `Issue ${id}`;
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
