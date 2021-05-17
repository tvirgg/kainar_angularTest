export class Post{
  constructor(
    public id: number,
    public title: string,
    public text: string
  ) {}
}
export interface Posts {
  posts: Post[]
}
