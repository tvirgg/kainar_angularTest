import { Component, OnInit } from '@angular/core';
import {HometableService} from "../MainServise/hometable.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {
  constructor(public appConfiguration: HometableService, private router: Router) {
  }

  form = new FormGroup({
    Title: new FormControl('', Validators.required),
    Text: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    console.log(this.appConfiguration);
  }

  onSubmit() {
    this.onADDCompite(this.form.value.Text, this.form.value.Title)
  }
  clickMethod(name: string) {
    if(confirm("Вы уверены что вы хотите удалить пост : " + name)) {
      this.appConfiguration.DelitCurentPost();
      this.router.navigate([`home`]);
    }
  }
  onADDCompite(title: string, text: string): void {
    this.appConfiguration.ChangeCurentPost(title, text);
    this.router.navigate([`home`])
  }
}
