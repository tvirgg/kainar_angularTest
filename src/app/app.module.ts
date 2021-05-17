import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeTableComponent } from './home-table/home-table.component';
import { AddComponentComponent } from './add-component/add-component.component';
import { PostCreacteFormComponent } from './post-creacte-form/post-creacte-form.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { CommonModule } from '@angular/common';
const routes = [
  {path: '', component: HomeTableComponent},
  {path: 'home', component: HomeTableComponent},
  {path: 'add', component: AddComponentComponent},
  {path: 'addit', component: ProfileEditorComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HomeTableComponent,
    AddComponentComponent,
    PostCreacteFormComponent,
    ProfileEditorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    CommonModule,
    ReactiveFormsModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
