// src/domain/models/Post.ts
export class Post {
    constructor(
        public id: string,
        public title: string,
        public description: string,
        public createdAt: Date,
        public updatedAt: Date,
        public deletedAt?: Date
    ) {}
}
