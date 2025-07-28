import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})

export class AppComponent {

  title = 'Farm Management Admin';

  constructor(
    private authService: AuthService
  ) {

    this.authService.runInitialLoginSequence();
  }
}
