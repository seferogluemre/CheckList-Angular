import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Model, TodoItem } from './model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  model = new Model();
  showCompleted: boolean = false;
  newTodoText: string = '';
  showToast: boolean = false;
  toastMessage: string = '';
  toastType: 'success' | 'danger' = 'danger';

  getName() {
    return this.model.user;
  }

  getItems() {
    if (this.showCompleted) {
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

  showToastMessage(message: string, type: 'success' | 'danger') {
    this.toastMessage = message;
    this.toastType = type;
    this.showToast = true;
    setTimeout(() => {
      this.showToast = false;
    }, 3000);
  }

  addItem() {
    if (this.newTodoText.trim() !== '') {
      this.model.items.push(new TodoItem(this.newTodoText, false));
      this.showToastMessage('Görev başarıyla eklendi!', 'success');
      this.newTodoText = '';
    } else {
      this.showToastMessage('Lütfen bir görev giriniz!', 'danger');
    }
  }

}
