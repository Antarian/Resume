import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    public appPages = [
        {
            title: 'Home',
            url: '/home',
            icon: 'home'
        },
        {
            title: 'Minitaurus FW',
            url: '/minitaurus/part1',
            icon: 'code-working'
        },
        {
            title: 'Dictionary',
            url: '/dictionary',
            icon: 'list'
        }
    ];

    constructor() {}
}
