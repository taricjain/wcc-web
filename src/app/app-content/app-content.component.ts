import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-app-content',
  templateUrl: './app-content.component.html',
  styleUrls: ['./app-content.component.css']
})
export class AppContentComponent {
    @Input()
    title: string;
}
