import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: '../../../views/shared/footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public year = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
