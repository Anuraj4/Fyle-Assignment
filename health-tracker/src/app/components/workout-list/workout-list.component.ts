import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-workout-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.css']
})
export class WorkoutListComponent {
  users: User[] = [];

  constructor (private userService: UserService) {
    this.users = this.userService.getUsers();
  }
}
