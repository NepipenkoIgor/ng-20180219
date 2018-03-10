import {Pipe, PipeTransform} from '@angular/core';
import {User} from '../../users';

@Pipe({
  name: 'usersFilter'
})
export class UsersFilterPipe implements PipeTransform {

  transform(users: User[], searchTerm: string): User[] {
    if (!searchTerm) {
      return users;
    }

    return users.filter((user: User) =>
      `${user.firstName} ${user.surname}`.toLowerCase()
        .includes(searchTerm.toLowerCase()));
  }

}
