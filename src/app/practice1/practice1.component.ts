import { Component, OnInit } from '@angular/core';
interface Name {
  text: string;
  checked: boolean
}
@Component({
  selector: 'app-practice1',
  templateUrl: './practice1.component.html',
  styleUrls: ['./practice1.component.css']
})
export class Practice1Component implements OnInit {

  toggle: boolean = false;
  a: number;
  b: number;
  sum: number = 0;
  names: Name[] = [
    { text: "Marvin", checked: false },
    { text: "Moe", checked: false },
    { text: "Yuri", checked: false }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  add(): void {
    this.sum = this.a + this.b;
  }

  toggleBackGround(): void {
    this.toggle = !this.toggle;
  }

  toggleName(name: Name): void {
  
    name.checked = !name.checked;
  }

}
