import { RouterModule } from '@angular/router';
import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [MatIconModule, RouterModule]
})
export class HeaderComponent {
  @Output() navClickEvent = new EventEmitter();

  onNavClick(navData) {
    this.navClickEvent.emit(navData.srcElement.innerText);
  }
}
