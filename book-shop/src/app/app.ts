import { Component } from '@angular/core';
import { RouterOutlet,RouterModule } from '@angular/router';
import { Inventory} from './AppComponents/inventory/inventory';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, Inventory],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'book-shop';
}
