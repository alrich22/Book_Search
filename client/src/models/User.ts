import type { Book } from './Book';

export interface User {
  username: string | null;
  email: string | null;
  password: string | null;
  savedBooks: Book[];
}

export const createMockUser = (userData?: Partial<User>): User => {
  return {
    username: userData?.username || 'mockUser',
    email: userData?.email || 'mock@example.com',
    password: userData?.password || 'mockPassword',
    savedBooks: userData?.savedBooks || [] };
};