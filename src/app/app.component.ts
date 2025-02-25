import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Model } from './model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  model = new Model();

  getName(){  
    return this.model.user;
  }

  getItems(){
    return this.model.items;
  }

  onActionChange(item: any) {
    item.action = !item.action;
  }

}
