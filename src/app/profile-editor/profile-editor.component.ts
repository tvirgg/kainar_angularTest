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

  form = new FormGroup({//formgroup obj
    Title: new FormControl('', Validators.required),
    Text: new FormControl('', Validators.required),
  });
  ngOnInit(): void {
  }

  onSubmit() {//throw new value of current editing post
      this.appConfiguration.ChangeCurentPost( this.form.value.id, this.form.value.Title, this.form.value.Text);
      this.router.navigate([`home`])
    }

  clickMethod(name: string) {//for confidence request
    if(confirm("Вы уверены что вы хотите удалить пост : " + name)) {
      this.appConfiguration.DelitCurentPost();
      this.router.navigate([`home`]);
    }
  }
}
