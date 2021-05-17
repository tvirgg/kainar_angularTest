import {Injectable, Input} from "@angular/core";

export interface Posts{
  id: number
  title: string
  text: string
}





@Injectable({providedIn:'root'})

export class HometableService {
   public posts: Posts[] =[
    {id: 1, title: 'first post', text: 'Hello its first post'},
    {id: 2, title: 'second post', text: 'Hello its second post'},
    {id: 3, title: 'third post', text: 'Hello its third post'},
    {id: 4, title: 'fourth post', text: 'Hello its fourth post'}
  ]
  public cutent_changepost_id: number = 0
  public cutent_title: string =''
  public cutent_text: string =''

  public Changecutent_changepost_id( obj: object) {
    // @ts-ignore
    this.cutent_changepost_id= obj.id;
    // @ts-ignore
    this.cutent_title= obj.title;
    // @ts-ignore
    this.cutent_text= obj.text;
    console.log(this.cutent_changepost_id);
  }
  public DelitCurentPost() {//deleting
    // @ts-ignore
    this.posts = this.posts.filter((item) => item.id !== this.cutent_changepost_id);
  }

  public ChangeCurentPost( title: string, text: string) {//changing
    // @ts-ignore
    this.posts.find(own_g => own_g.id === this.cutent_changepost_id).text = text;
    // @ts-ignore
    this.posts.find(own_g => own_g.id === this.cutent_changepost_id).title = title;
    console.log(this.posts);
  }

  public ChangeCurent( title: string, text: string) {//creating post
    let Post = {id: (((this.posts)[this.posts.length - 1].id) + 1), text: text, title: title};
    this.posts.push(Post);
    console.log(this.posts);
  }

}
