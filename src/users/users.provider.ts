import { Injectable } from '@nestjs/common';
import { User } from '../interfaces/user.interface';

@Injectable()
export class UsersProvider {
  private readonly users: User[] = [];

  addUser(user: User): void {
    this.users.push(user);
  }

  getAll(): User[] {
    return this.users;
  }
}
