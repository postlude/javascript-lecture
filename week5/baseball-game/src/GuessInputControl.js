export class GuessInputControl {

    constructor(
        containerSelector, {
            callback = function () { },
            digitNumber = 3
        } = {}
    ) {
        let inputElementText = ""; // 나중에 값이 바뀌기 떄문에 let으로 정의합니다.

        this.inputContainer = document.querySelector(containerSelector);

        if (!(callback instanceof Function)) {
            throw new Error('콜백함수를 잘못 전달 받았습니다.');
        }

        if (this.inputContainer == null) {
            throw Error('컨테이너 아이디를 찾을 수 없습니다.');
        }

        for (let index = 0; index < digitNumber; index++) {
            inputElementText += '<input type="text" maxlength="1" class="digit-input" placeholder="•">';
        }
        this.inputContainer.innerHTML = inputElementText;
        this.inputContainer.addEventListener('keydown', e => {
            const charCode = (typeof e.which == "undefined") ? e.keyCode : e.which; // IE는 keyCode
            if (e.target.className === 'digit-input') {
                if (charCode === 37 || charCode == 8 || charCode == 46 || charCode == 39 || charCode == 32) {
                    return;
                }
                if (charCode === 13 && e.target === e.target.parentElement.lastElementChild) {
                    const values = Array.from(e.target.parentElement.children).map(v => Number(v.value));
                    this.clear();
                    callback.call(null, values);
                    return;
                }
                if (!/[0-9]/.test(Number(String.fromCharCode(charCode)))) {
                    e.stopPropagation();
                    e.preventDefault();
                }
            }
        });
        this.inputContainer.addEventListener('keyup', e => {
            if (e.target.className === 'digit-input') {
                // http://keycode.info/ keycode
                const charCode = (typeof e.which == "undefined") ? e.keyCode : e.which, // IE는 keyCode
                    previousSibling = e.target.previousElementSibling,
                    nextElementSibling = e.target.nextElementSibling;

                if (previousSibling) {
                    // 왼쪽방향키, backspace, delete, 
                    if (charCode === 37 || charCode == 8 || charCode == 46) {
                        previousSibling.select();
                        previousSibling.focus();
                        return;
                    }
                }

                if (nextElementSibling) {
                    // 오른쪽방향키, 스페이스바
                    if (charCode === 39 || charCode === 32) {
                        nextElementSibling.select();
                        return;
                    }
                    if (e.target.value != "") {
                        nextElementSibling.select()
                    }
                }
            }
        });
    }

    clear() {
        Array.from(this.inputContainer.children).forEach(v => v.value = null);
        this.inputContainer.firstElementChild.select();
    }

    disable() {
        Array.from(this.inputContainer.children)
            .forEach(v => v.disabled = true);
    }

}