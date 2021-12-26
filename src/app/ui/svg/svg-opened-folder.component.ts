import { Component } from "@angular/core";

@Component({
    selector: 'svg-opened-folder',
    template: `
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 288 227.6"
        style="enable-background:new 0 0 288 227.6;" xml:space="preserve">
        <g>
            <path class="st0"
                d="M232.3,19.4H103.6v-8.5c0-6-4.9-10.9-10.9-10.9H30.4c-6,0-10.9,4.9-10.9,10.9v8.5h-3.3C7.3,19.4,0,26.7,0,35.7
    v174.8c0,9,7.3,16.3,16.3,16.3h216c9,0,16.3-7.3,16.3-16.3V35.7C248.5,26.7,241.2,19.4,232.3,19.4z" />
            <rect x="23.2" y="35" class="st1" width="202.1" height="176.1" />
            <path class="st2" d="M252.4,210.9c-2.1,8.7-11.2,15.8-20.2,15.8h-216c-9,0-14.5-7.1-12.4-15.8L38.5,69.9
    c2.1-8.7,11.2-15.8,20.2-15.8h216c9,0,14.5,7.1,12.4,15.8L252.4,210.9z" />
        </g>
    </svg>
    `,
    styles: [
        `
        .st0 {
            fill: #E0B03B;
        }

        .st1 {
            fill: #FFFFFF;
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
export class SvgOpenedFolderComponent { }