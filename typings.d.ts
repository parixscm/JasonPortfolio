interface SanityBody {
  _id: string;
  _rev: string;
  _createdAt: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface IPageInfo extends SanityBody {
  _type: "pageInfo";
  name: string;
  role: string;
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
  summary: string;
  skills: Skill[];
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
