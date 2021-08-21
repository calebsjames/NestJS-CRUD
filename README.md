

## Description

Basic CRUD functionality with NestJs

## Installation

```bash
$ npm install
$ git@github.com:calebsjames/quore.git
```

## Running the app

```bash
$ npm run start:dev
```

## Data Structure
    {
        "id": 1,
        "title": "The first issue",
        "url": "www.google.com",
        "description": "This is the first of many issues",
        "labels": "Problem",
        "author": "Caleb James",
        "comment_count": 314
    }

## Test

In Postman:

Get all: http://localhost:3000/issues
Get one: http://localhost:3000/issues/1
Post: http://localhost:3000/issues
Delete: http://localhost:3000/issues/?issueId=4
Put: http://localhost:3000/issues/1
