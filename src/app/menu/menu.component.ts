import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
    hoverDim(): void {
        $(".special.cards .image").dimmer({
            on: "hover"
        });
    }
}
