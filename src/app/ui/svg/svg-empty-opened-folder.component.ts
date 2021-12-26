import { Component } from "@angular/core";

@Component({
    selector: 'svg-empty-opened-folder',
    template: `
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 288 227.6"
    style="enable-background:new 0 0 288 227.6;" xml:space="preserve">
    <path class="st0" d="M232.3,19.7H103.6v-8.5c0-6-4.9-10.9-10.9-10.9H30.4c-6,0-10.9,4.9-10.9,10.9v8.5h-3.3C7.3,19.7,0,27,0,36
v174.8c0,9,7.3,16.3,16.3,16.3h216c9,0,16.3-7.3,16.3-16.3V36C248.5,27,241.2,19.7,232.3,19.7z" />
    <path class="st1" d="M213,209.9H30c-6.6,0-12-5.4-12-12v-145c0-6.6,5.4-12,12-12h183c6.6,0,12,5.4,12,12v145
C225,204.5,219.6,209.9,213,209.9z" />
    <path class="st2" d="M252.4,210.9c-2.1,8.7-11.2,15.8-20.2,15.8h-216c-9,0-14.5-7.1-12.4-15.8L38.5,69.9
c2.1-8.7,11.2-15.8,20.2-15.8h216c9,0,14.5,7.1,12.4,15.8L252.4,210.9z" />
    <path class="st1" d="M238.7,202.1c-1.9,6.5-10,11.8-18,11.8H31.5c-8,0-13-5.3-11.1-11.8L51.3,81.4c1.9-6.5,10-11.8,18-11.8h189.1
c8,0,13,5.3,11.1,11.8L238.7,202.1z" />
</svg>

    `,
    styles: [
        `
        .st0 {
            fill: #E0B03B;
        }

        .st1 {
            fill: #FFDA88;
        }

        .st2 {
            fill: #FFC843;
        }
        svg {
            width: 40px;
            height: 40px;
            margin-right: 20px;
        }`
    ]
})
export class SvgEmptyOpenedFolderComponent { }