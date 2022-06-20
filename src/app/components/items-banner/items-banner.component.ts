import { Movie } from './../../models/movie';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'items-banner',
  templateUrl: './items-banner.component.html',
  styleUrls: ['./items-banner.component.css'],
})
export class ItemsBannerComponent implements OnInit {
  @Input() items: Movie[] = [];
  @Input() title: string = '';
  constructor() {}

  ngOnInit(): void {}
}
