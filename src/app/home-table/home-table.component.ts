import { Component, OnInit} from '@angular/core';
import {HometableService} from "../MainServise/hometable.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-table',
  templateUrl: './home-table.component.html',
  styleUrls: ['./home-table.component.css']
})
export class HomeTableComponent implements OnInit {

  constructor(public HometableService: HometableService, private router: Router) {}
  onADDCompite(obj: object): void {
    this.HometableService.Changecutent_changepost_id(obj);
    this.router.navigate([`addit`])
  }
  ngOnInit(): void {
  }
}
