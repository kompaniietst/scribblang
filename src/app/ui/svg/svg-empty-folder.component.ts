import { Component } from "@angular/core";

@Component({
    selector: 'svg-empty-folder',
    template: `
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 288 227.6"
    style="enable-background:new 0 0 288 227.6;" xml:space="preserve">
    <path class="st0" d="M232.3,19.4H103.6v-8.5c0-6-4.9-10.9-10.9-10.9H30.4c-6,0-10.9,4.9-10.9,10.9v8.5h-3.3C7.3,19.4,0,26.7,0,35.7
v174.8c0,9,7.3,16.3,16.3,16.3h216c9,0,16.3-7.3,16.3-16.3V35.7C248.5,26.7,241.2,19.4,232.3,19.4z" />
    <path class="st1" d="M213,209.6H30c-6.6,0-12-5.4-12-12v-145c0-6.6,5.4-12,12-12h183c6.6,0,12,5.4,12,12v145
C225,204.2,219.6,209.6,213,209.6z" />
</svg>

    `,
    styles: [
        `
        .st0 {
            fill: #FFC843;
        }

        .st1 {
            fill: #FFDA88;
        }
        svg {
            width: 40px;
            height: 40px;
            margin-right: 20px;
        }`
    ]
})
export class SvgEmptyFolderComponent { }