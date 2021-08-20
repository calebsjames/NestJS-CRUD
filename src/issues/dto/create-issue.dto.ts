export class CreateIssueDto {
    readonly id: number;
    readonly title: string;
    readonly url: string;
    readonly description: string;
    readonly labels: string;
    readonly author: string;
    readonly comment_count: number;
}