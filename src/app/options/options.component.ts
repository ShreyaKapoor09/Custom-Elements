import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'custom-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {

  option =["Mountain", "Beach", "Island"];

  constructor() { }

  ngOnInit(): void {
  }

}
