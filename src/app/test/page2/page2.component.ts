import { Component, OnInit, Inject, Renderer, ElementRef, OnDestroy } from '@angular/core';
import { NgModuleCompileResult } from '@angular/compiler/src/ng_module_compiler';
import { TestComponent } from 'app/test/test.component';
import { TestService } from '../test.service';
import { Config } from '../../app.config';

@Component({
    selector: 'app-page2',
    templateUrl: './page2.component.html',
    styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit, OnDestroy {
    apiResult: Object;
    x: number;
    y: number;
    anotherX: string;
    url: string;
    constructor(private element: ElementRef, private testService: TestService) { }

    ngOnInit() {
        let navbar = document.getElementsByTagName('app-navbar')[0].children[0];
        console.log(navbar);
        navbar.classList.remove('navbar-transparent');
        this.fetchData();
        this.x = this.testService.FindingForX();
        this.y = this.testService.FindingForY();
        this.anotherX = this.testService.FindingForAnotherX();
        this.url = `${Config.ApiUrl}/test`;
    }

    ngOnDestroy() {
        let navbar = document.getElementsByTagName('app-navbar')[0].children[0];
        navbar.classList.remove('navbar-transparent');
    }

    fetchData() {
        this.testService.getTestData().subscribe(res => {
            this.apiResult = res;
        })
    }

}
