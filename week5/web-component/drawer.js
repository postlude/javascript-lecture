export class FcDrawer extends HTMLElement {
    // 있어야지 js property와 html attribute binding
    static get observedAttributes() {
        return ['opened'];
    }
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open'});
        shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    position: fixed;
                    top: 0;
                    bottom: 0;
                    right: 0;
                    width: 320px;
                    box-shadow: 0 0 36px 0 rgba(0, 0, 0, 0.1);
                    width: 200px;
                    transition: all 0.4s ease-out;
                }

                :host .heading {
                    text-align: right;
                    padding: 0 4px;
                }

                :host button {
                    border: none;
                    background-color: white;
                    /* color: red */;
                    color: var(--fc-drawer-close-color, red);
                    font-size: 18px;
                    font-weight: 500;
                }
            </style>
            <div class="heading">
                <button id="close-btn">X</button>
            </div>
            <!-- host안의 inner 내용들이 slot에 나타남 -->
            <slot></slot>
        `;

        // this.innerHTML = '<h1>hello</h1>'; // body 최하단에 쓰면 가능한데 그러면 순서가 중요해지므로 이렇게 작성하지 말 것
        shadowRoot.addEventListener('click', e => {
        // this.addEventListener('click', e => {
            if(e.target.id === 'close-btn') {
                this.opened = false;
            }
        });
    }
    get opened() {
        return this.getAttribute('opened');
    }
    set opened(value) {
        if(value === '' || value === true || value === 'true') {
            this.style.transform = 'translateX(0px)';
            this.setAttribute('opened', '');
        }else {
            this.style.transform = 'translateX(320px)';
            this.removeAttribute('opened');
        }
    }
    connectedCallback() {
        // this.innerHTML = `
        //     <div class="heading">
        //         <button id="close-btn">X</button>
        //     </div>`;
        this.opened = this.getAttribute('opened');
    }
    attributeChangedCallback(name, oldVal, newVal) {
        if(oldVal !== newVal) {
            this.opened = newVal;
        }
    }
}