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
  showCompleted: boolean = false;

  getName(){  
    return this.model.user;
  }

  getItems(){
    if(this.showCompleted) {
      return this.model.items;
    }
    return this.model.items.filter(item => !item.action);
  }

  onActionChange(item: any) {
    item.action = !item.action;
  }

  toggleCompleted() {
    this.showCompleted = !this.showCompleted;
  }

}
