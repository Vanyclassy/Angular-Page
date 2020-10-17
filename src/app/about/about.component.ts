import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about, [appAbout]',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  selected = 'USD($)';


  constructor() { }

  ngOnInit(): void {
  }

}
