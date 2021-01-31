import { Component, OnInit } from '@angular/core';
import { UserPreferenceService } from '../user-preference.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  name: string;
  newName: string;

  constructor(private service: UserPreferenceService) { }

  ngOnInit(): void {
    this.name = this.service.getName();
  }

  setName(): void {
    this.service.setName(this.newName);
    this.name = this.service.getName();
  }

}
