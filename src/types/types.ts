enum Age {
  EIGHTEEN = 'EIGHTEEN',
  TWENTY_FIVE = 'TWENTY_FIVE',
  FORTY = 'FORTY',
  FIFTY_FIVE = 'FIFTY_FIVE',
  SIXTY_FIVE = 'SIXTY_FIVE'
}

enum ChildAge {
  NEWBORNS = 'NEWBORNS', // 0-2 months
  INFANTS = 'INFANTS', // INFANTS // 3-12 months
  TODDLERS = 'TODDLERS', // TODDLERS // 1-2 years
  PRESCHOOLERS = 'PRESCHOOLERS', // PRESCHOOLERS // 3-6 years
  SCHOOLERS = 'SCHOOLERS', // SCHOOLERS // 7-12 years
  TEENS = 'TEENS' // TEENS // 13-19 years
}

enum Education {
  ELEMENTARY = 'ELEMENTARY',
  HIGH_SCHOOL = 'HIGH_SCHOOL',
  COLLEGE = 'COLLEGE',
  GRADUATE = 'GRADUATE'
}

enum Languages {
  ENGLISH = 'ENGLISH',
  SPANISH = 'SPANISH',
  FRENCH = 'FRENCH',
  GERMAN = 'GERMAN',
  ITALIAN = 'ITALIAN',
  OTHER = 'OTHER'
}

enum EarningsRate {
  HOURLY = 'HOURLY',
  MONTHLY = 'MONTHLY',
  YEARLY = 'YEARLY'
}

export type PhotoProps = {
  id?: number;
  url: string;
  author?: UserDataProps;
  authorId?: number;
  post?: PostDataProps;
  postId?: number;
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
  createdAt: Date;
  updatedAt: Date;
  published: boolean;
  title: string;
  description: string;
  email: string;
  phone: string;
  birthDate: Date;
  ageGroup: Age;
  country: string;
  city: string;
  experience: number;
  childAgeGroup: ChildAge;
  numberOfChildren: number;
  pets: Boolean;
  specialNeeds: Boolean;
  inOwnHouse: Boolean;
  cleaning: Boolean;
  cleaningChildOnly: Boolean;
  shopping: Boolean;
  cooking: Boolean;
  cookingChildOnly: Boolean;
  outWithChild: Boolean;
  car: Boolean;
  driversLicense: Boolean;
  smoking: Boolean;
  education: Education;
  sitterCourse: Boolean;
  firstAid: Boolean;
  languages: Languages;
  otherLanguages: string;
  earnings: number;
  earningsRate: EarningsRate;
  photos?: PhotoProps[];
  author?: UserDataProps;
};
