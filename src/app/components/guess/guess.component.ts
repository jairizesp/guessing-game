import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-guess',
  templateUrl: './guess.component.html',
  styleUrls: ['./guess.component.css'],
})
export class GuessComponent {
  guessed!: number;

  @Input() is_max_attempt!: boolean;
  @Input() is_answer_correct!: boolean;
  @Output() guessedNumber = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  guessNumber() {
    this.guessedNumber.emit(this.guessed);
  }
}
