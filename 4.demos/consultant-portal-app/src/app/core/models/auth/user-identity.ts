import { User } from './user';
import { Role } from './role';

export interface UserIdentity {
  userName: string;
  user: User;
  roles: Role[];
  token: string;
  refreshToken: string;
}
