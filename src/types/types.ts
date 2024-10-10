export enum Role {
  ADMIN = 'admin',
  MODERATOR = 'moderator',
  PARENT = 'parent',
  SITTER = 'sitter'
}

export enum ChildAge {
  NEWBORNS = 'newborns', // 0-2 months
  INFANTS = 'infants', // INFANTS // 3-12 months
  TODDLERS = 'toddlers', // TODDLERS // 1-2 years
  PRESCHOOLERS = 'preschoolers', // PRESCHOOLERS // 3-6 years
  SCHOOLERS = 'schoolers', // SCHOOLERS // 7-12 years
  TEENS = 'teens' // TEENS // 13-19 years
}

export enum Education {
  ELEMENTARY = 'Elementary',
  HIGH_SCHOOL = 'High_School',
  COLLEGE = 'College',
  GRADUATE = 'Graduate'
}

export enum TimeUnits {
  MONTHS = 'months',
  YEARS = 'years'
}

export enum Languages {
  serbian = 'serbian',
  english = 'english',
  spanish = 'spanish',
  french = 'french',
  german = 'german',
  italian = 'italian'
}

export type LangProps = {
  serbian?: boolean;
  english?: boolean;
  spanish?: boolean;
  french?: boolean;
  german?: boolean;
  italian?: boolean;
};

export enum EarningsRate {
  HOURLY = 'Hourly',
  DAILY = 'Daily',
  WEEKLY = 'Weekly',
  MONTHLY = 'Monthly'
}

export type PhotoProps = {
  id?: number;
  url: string;
  author?: UserDataProps;
  authorId?: number;
};

export type UserDataProps = {
  id?: number;
  name: string;
  email?: string;
  role?: string;
  active?: boolean;
  deleted?: boolean;
  photo?: PhotoProps;
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
  photo?: PhotoProps;
  createdAt: Date;
  updatedAt: Date;
  user?: UserDataProps;
  userId?: number;
};

export type ChildAgeGroupProps = {
  newborns: boolean;
  infants: boolean;
  toddlers: boolean;
  preschoolers: boolean;
  schoolers: boolean;
  teens: boolean;
};

export type PostDataProps = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  published: boolean;
  title: string;
  description: string;
  email?: string;
  phone?: string;
  birthDate?: Date;
  country?: string;
  city?: string;
  address?: string;
  availability?: string;
  experience?: number;
  experienceTimeUnit: TimeUnits;
  childAgeGroup: ChildAgeGroupProps;
  numberOfChildren: number;
  pets: boolean;
  specialNeeds: boolean;
  inOwnHouse: boolean;
  cleaning: boolean;
  cleaningChildOnly: boolean;
  shopping: boolean;
  cooking: boolean;
  cookingChildOnly: boolean;
  outWithChild: boolean;
  car: boolean;
  driversLicense: boolean;
  notSmoking: boolean;
  education: Education;
  sitterCourse: boolean;
  firstAid: boolean;
  languages: LangProps;
  otherLanguages?: string;
  earnings: number;
  earningsRate: EarningsRate;
  author?: UserDataProps;
  authorId?: number;
  profile?: ProfileDataProps;
  profileId?: number;
};
