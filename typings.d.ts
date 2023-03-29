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

export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  name: string;
  role: string;
  heroImage: Image;
  profilePic: Image;
}

export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}

export interface Skill extends SanityBody {
  _type: "skill";
  title: string;
  proficiency: number;
  image: Image;
}

export interface Project extends SanityBody {
  _type: "project";
  title: string;
  image: "image";
  linkToBuild: string;
  summary: string;
  skills: Skill[];
}

export interface Experience extends SanityBody {
  _type: "experience";
  company: string;
  companyImage: Image;
  dateStarted: date;
  dateEnded: date;
  points: string[];
  skills: Skill[];
}
