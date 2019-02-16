import { GuessInputControl } from './GuessInputControl';
import { Baseball } from './baseball';

export class App {
    constructor() {
        const queryParam = new URLSearchParams(location.search);
        this.digit = queryParam.get('digit') || undefined;
        this.inputControl = new GuessInputControl('.digit-input-container', {
            callback: this.handleGuess.bind(this),
            digitNumber: this.digit
        });
        this.baseball = new Baseball(this.digit);
        console.log(this.baseball.problem);
        this.resultsContainerEl = document.querySelector(".result-container");
    }

    handleGuess(values, error) {
        if (error) {
            alert(error.message);
            return;
        }
        const result = this.baseball.getResult(values);
        this.resultsContainerEl.insertAdjacentHTML(
            "beforeend",
            this.createResultEl(values, result.toString())
        );
        if (result === `${this.digit}S0B`) {
            alert("정답을 맞추었습니다!");
            this.resetGame();
        }
        console.log(result.toString());
    }

    resetGame() {
        this.inputControl.disable('정답을 맞추었습니다!');
    };

    createResultEl(guess, result) {
        return `<li class="list-group-item">
              <span class="guess">${guess}</span>
              <span class="badge result">${result}</span>
            </li>`;
    }

}


