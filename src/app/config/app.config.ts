export interface AppConfig {
  production: boolean;
  apiUrl: string;
  portfolioTitle: string;
  portfolioDescription: string;
  social: {
    email: string;
    linkedin: string;
    github: string;
    twitter: string;
  };
}

export const APP_ROUTES = {
  HOME: '',
  ABOUT: 'about',
  PROJECTS: 'projects',
  CONTACT: 'contact'
} as const;

export const ANIMATION_DURATION = {
  FAST: 200,
  NORMAL: 300,
  SLOW: 500
} as const;

export const BREAKPOINTS = {
  MOBILE: 768,
  TABLET: 1024,
  DESKTOP: 1200
} as const;