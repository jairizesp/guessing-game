import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-higher',
  templateUrl: './higher.component.html',
  styleUrls: ['./higher.component.css'],
})
export class HigherComponent {
  @Input() guess!: number;
}
