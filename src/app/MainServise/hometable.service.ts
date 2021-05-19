import {Injectable} from "@angular/core";

export interface Posts{
  id: number
  title: string
  text: string
}

@Injectable({providedIn:'root'})

export class HometableService {
   public posts: Posts[] =[ //posts array
    {id: 1, title: 'first post', text: 'Hello its first post'},
    {id: 2, title: 'second post', text: 'Hello its second post'},
    {id: 3, title: 'third post', text: 'Hello its third post'},
    {id: 4, title: 'fourth post', text: 'Hello its fourth post'}
  ]
  public curPost: Posts = { id: 0, title: '', text: ''}//current post field
  public Changecutent_changepost_id( obj: object) {
    // @ts-ignore
    this.curPost.id= obj.id;//CONFIGURATION OF CURRENT POST OBJECT DATA
    // @ts-ignore
    this.curPost.title= obj.title;
    // @ts-ignore
    this.curPost.text= obj.text;
  }
  public DelitCurentPost() {//deleting from array of posts func
    // @ts-ignore
    this.posts = this.posts.filter((item) => item.id !== this.curPost.id);
  }

  public ChangeCurentPost(id: number, title: string, text: string) {//changing of current post
    // @ts-ignore
    this.posts.find(own_g => own_g.id === this.curPost.id).text = text;
    // @ts-ignore
    this.posts.find(own_g => own_g.id === this.curPost.id).title = title;
  }

  public CreatePost(title: string, text: string) {//creating new post func
    let Post = {id: (((this.posts)[this.posts.length - 1].id) + 1), text: text, title: title};//id is inc 1 of last id
    this.posts.push(Post);
  }

}
