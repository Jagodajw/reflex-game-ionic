export interface UserInfo {
  jwt: string;
  user: {
    blocked: boolean;
    confirmed: boolean;
    createdAt: Date;
    email: string;
    id: string;
    provider: string;
    updatedAt: Date;
    username: string;
  };
}
