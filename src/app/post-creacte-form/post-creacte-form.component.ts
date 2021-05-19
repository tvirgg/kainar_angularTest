import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {HometableService} from "../MainServise/hometable.service";
import {Router, RouterModule} from "@angular/router";


@Component({
  selector: 'app-post-creacte-form',
  templateUrl: './post-creacte-form.component.html',
  styleUrls: ['./post-creacte-form.component.css']
})

export class PostCreacteFormComponent implements OnInit {
  constructor(private appConfiguration: HometableService, private router: Router) {}
  form = new FormGroup({
    Title: new FormControl('', Validators.required),
    Text: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
  }
  onSubmit(){
    this.appConfiguration.CreatePost(this.form.value.Title, this.form.value.Text);
    this.router.navigate([`home`])//going to home component
  }
}
