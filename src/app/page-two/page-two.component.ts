import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.css']
})
export class PageTwoComponent implements OnInit {
  public formData;

  constructor(
    private readonly route: ActivatedRoute,
  ) { 
    this.route.snapshot.queryParams
  }

  ngOnInit(): void {
    this.formData = this.route.snapshot.queryParams;
  }
}
