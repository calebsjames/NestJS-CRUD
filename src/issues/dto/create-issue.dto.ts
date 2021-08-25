import { IsNumber, IsString } from "class-validator";

export class CreateIssueDto {

    @IsNumber()
    readonly id: number;

    @IsString()
    readonly title: string;

    @IsString()
    readonly url: string;
    
    @IsString()
    readonly description: string;
    
    @IsString()
    readonly labels: string;

    @IsString()
    readonly author: string;

    @IsNumber()
    readonly comment_count: number;
}
