import { IUser } from '@/interfaces';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: IUser;
  accessToken: string;
  refreshToken: string;
}

export interface RefreshResponse {
  accessToken: string;
}
