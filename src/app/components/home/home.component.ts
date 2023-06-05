import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '@app/components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  host: { class: 'flex flex-col flex-auto' },
})
export class HomeComponent {}
