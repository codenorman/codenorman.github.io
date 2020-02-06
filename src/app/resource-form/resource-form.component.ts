import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, OnInit} from '@angular/core';
import {MatChipInputEvent} from '@angular/material/chips';

export interface WeightClass {
  name: string;
}

@Component({
  selector: 'app-resource-form',
  templateUrl: './resource-form.component.html',
  styleUrls: ['./resource-form.component.css']
})
export class ResourceFormComponent implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  weightClasses: WeightClass[] = [
    {name: '10'},
    {name: '30'},
    {name: '40'},
    {name: '45'},
  ];

  get isValid() { return this.weightClasses.length !== 5}
  constructor() {
  }

  ngOnInit(): void {
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.weightClasses.push({name: value.trim()});
      this.weightClasses.sort( (a, b) => +a.name < +b.name ? -1: 1)
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(weightClass: WeightClass): void {
    const index = this.weightClasses.indexOf(weightClass);

    if (index >= 0) {
      this.weightClasses.splice(index, 1);
    }
  }
}
