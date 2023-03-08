import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [MatIconModule, RouterModule]
})
export class HeaderComponent {}
