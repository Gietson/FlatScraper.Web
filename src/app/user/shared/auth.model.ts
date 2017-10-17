// auth.model.ts
export interface ICurrentUser {
  token: string;
  user: {
    id: string;
    email: string;
    role: string;
    username: string;
    fullName: string;
  }
}
