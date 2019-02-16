import { getRandomInt } from './util';

export class Baseball {
    constructor(digit = 3) {
        this.digit = digit;
        this.problem = this.makeProblem(digit);
    }

    makeProblem() {
        let problem = [],
            numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

        for (let i = 0; i < this.digit; i++) {
            let max = 9 - i,
                index = getRandomInt(0, max);
            problem.push(numbers[index]);
            numbers.splice(index, 1);
        }

        return problem;
    }

    getResult(guess) {
        let strike = 0,
            ball = 0;

        this.problem.forEach((v, i) => {
            if (guess[i] === v) {
                strike++;
            } else if (this.problem.indexOf(guess[i]) > -1) {
                ball++;
            }
        });

        return `${strike}S${ball}B`;
    }
}