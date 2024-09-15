export type PhotoProps = {
  url: string;
};

export type UserDataProps = {
  id?: number;
  name: string;
  email?: string;
  role?: string;
  active?: boolean;
  deleted?: boolean;
  photos?: PhotoProps[];
  createdAt?: Date;
  profile?: ProfileDataProps;
  posts?: PostDataProps[];
};

export type ProfileDataProps = {
  id: number;
  firstName: string;
  lastName: string;
  gender: string;
  bio?: string;
  createdAt: Date;
  updatedAt: Date;
  user?: UserDataProps;
  userId: number;
};

export type PostDataProps = {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  author?: UserDataProps;
};
