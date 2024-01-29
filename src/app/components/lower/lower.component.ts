import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lower',
  templateUrl: './lower.component.html',
  styleUrls: ['./lower.component.css'],
})
export class LowerComponent {
  @Input() guess!: number;
}
