import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeTableComponent} from "./home-table/home-table.component";
import {AddComponentComponent} from "./add-component/add-component.component";
import {ProfileEditorComponent} from "./profile-editor/profile-editor.component";
import {FormsModule, ReactiveFormsModule } from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
const appRoutes: Routes = [
  {path: '', component: HomeTableComponent},
  {path: 'add', component: AddComponentComponent},
  {path: 'addit', component: ProfileEditorComponent},
]

@NgModule({
  imports: [BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule],
  exports: [BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule]
})
export class AppRoutingModule { }
