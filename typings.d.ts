// 📍 Parent Interface
interface SanityBody {
  _id: string;
  _rev: string;
  _createdAt: string;
  _updatedAt: string;
}

// 📍 Child Interface
interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

interface IIntroLine {
  icon: string;
  highlightText: string;
  text1: string;
  text2: string;
  isLeft: boolean;
}

// 📍 Section Export Interface
export interface IPageInfo extends SanityBody {
  _type: "pageInfo";
  name: string;
  role: string;
  heroLines: string[];
  introLines: IIntroLine[];
  heroImage: Image;
  profilePic: Image;
}

export interface ISocial extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}

export interface ISkill extends SanityBody {
  _type: "skill";
  title: string;
  proficiency: number;
  image: Image;
}

export interface IProject extends SanityBody {
  _type: "project";
  title: string;
  image: "image";
  linkToBuild: string;
  with: string;
  summary: string[];
  skills: ISkill[];
}

export interface IExperience extends SanityBody {
  _type: "experience";
  jobTitle: string;
  company: string;
  companyImage: Image;
  dateStarted: date;
  dateEnded: date;
  points: string[];
  skills: Skill[];
}
