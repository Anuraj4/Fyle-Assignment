import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root' // This makes the service available globally
})
export class UserService {
  private users: User[] = [
    { id: 1, name: 'John Doe', workouts: [{ type: 'Running', minutes: 30 }] },
    { id: 2, name: 'Jane Smith', workouts: [{ type: 'Cycling', minutes: 45 }] }
  ];

  constructor () {
    this.loadFromLocalStorage();
  }

  getUsers (): User[] {
    return this.users;
  }

  addUser (user: User) {
    this.users.push(user);
    this.saveToLocalStorage();
  }

  searchUsers (query: string): User[] {
    return this.users.filter(user =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
  }

  private saveToLocalStorage () {
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  private loadFromLocalStorage () {
    const data = localStorage.getItem('users');
    if (data) {
      this.users = JSON.parse(data);
    }
  }
}
