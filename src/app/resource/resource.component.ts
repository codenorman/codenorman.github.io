import {Component, Input, OnInit} from '@angular/core';
import {Resource} from './resource.model';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css']
})
export class ResourceComponent implements OnInit {
  @Input() resource: Resource;
  constructor() { }

  ngOnInit(): void {
  }

}
