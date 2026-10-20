export interface Experience {
  id: number;
  company: string;
  position: string;
  location: string;
  startDate: Date;
  endDate?: Date; // null si poste actuel
  current: boolean;
  description: string;
  achievements: string[];
  technologies: string[];
  type: ExperienceType;
  companyLogo?: string;
  companyUrl?: string;
  projects?: ExperienceProject[];
}

export interface ExperienceProject {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  role: string;
  duration?: string;
}

export enum ExperienceType {
  FULL_TIME = 'full_time',
  PART_TIME = 'part_time',
  FREELANCE = 'freelance',
  INTERNSHIP = 'internship',
  CONTRACT = 'contract',
  VOLUNTEER = 'volunteer'
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  field: string;
  startDate: Date;
  endDate?: Date;
  location: string;
  description?: string;
  achievements?: string[];
  gpa?: number;
  logo?: string;
}