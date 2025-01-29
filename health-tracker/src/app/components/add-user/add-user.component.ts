import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  name: string = '';
  workoutType: string = '';
  workoutMinutes: number = 0;

  // eslint-disable-next-line no-useless-constructor
  constructor (private userService: UserService) {}

  addUser () {
    if (!this.name || !this.workoutType || this.workoutMinutes <= 0) {
      alert('Please enter valid details');
      return;
    }

    const newUser: User = {
      id: Date.now(),
      name: this.name,
      workouts: [{ type: this.workoutType, minutes: this.workoutMinutes }]
    };

    this.userService.addUser(newUser);
    this.name = '';
    this.workoutType = '';
    this.workoutMinutes = 0;
  }
}
