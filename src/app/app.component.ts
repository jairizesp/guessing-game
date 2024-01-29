import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  maxNumber: number = 0;
  numberToGuess: number = 0;
  user_guess!: number;

  attempts: number = 0;

  higher_or_lower: number[] = [];

  display_answer = false;

  @Output() emitComparedGuessValues = new EventEmitter<number[]>();

  @Output() numbersToEmit = new EventEmitter<{
    max_number: number;
    number_to_guess: number;
  }>();

  display_error = false;
  display_max_attempts_error = false;

  constructor() {}

  ngOnInit(): void {}

  generateRandomNumber() {
    if (this.maxNumber < 1) {
      this.display_error = true;
      return;
    }

    this.numberToGuess = Math.floor(Math.random() * this.maxNumber) + 1;

    console.log(this.numberToGuess);
  }

  checkGuessedNumber(guess: number) {
    this.user_guess = guess;

    if (guess !== this.numberToGuess) {
      this.attempts++;
      this.higher_or_lower.push(guess);
    } else {
      this.display_answer = true;
      return;
    }

    if (this.attempts === 10) {
      this.display_max_attempts_error = true;
      return;
    }

    // console.log(this.attempts);
  }
}
