import { ProjectCategory, ProjectStatus, SkillCategory, SkillLevel, ExperienceType, ProjectType, BudgetRange, Timeline, Availability, LanguageLevel } from './index';

// Libellés pour les énumérations
export const PROJECT_CATEGORY_LABELS: Record<ProjectCategory, string> = {
  [ProjectCategory.WEB]: 'Application Web',
  [ProjectCategory.MOBILE]: 'Application Mobile',
  [ProjectCategory.DESKTOP]: 'Application Desktop',
  [ProjectCategory.API]: 'API/Service Web',
  [ProjectCategory.DESIGN]: 'Design/UI/UX',
  [ProjectCategory.OTHER]: 'Autre'
};

export const PROJECT_STATUS_LABELS: Record<ProjectStatus, string> = {
  [ProjectStatus.COMPLETED]: 'Terminé',
  [ProjectStatus.IN_PROGRESS]: 'En cours',
  [ProjectStatus.PLANNED]: 'Planifié',
  [ProjectStatus.ARCHIVED]: 'Archivé'
};

export const SKILL_CATEGORY_LABELS: Record<SkillCategory, string> = {
  [SkillCategory.FRONTEND]: 'Frontend',
  [SkillCategory.BACKEND]: 'Backend',
  [SkillCategory.DATABASE]: 'Base de données',
  [SkillCategory.DEVOPS]: 'DevOps',
  [SkillCategory.DESIGN]: 'Design',
  [SkillCategory.MOBILE]: 'Mobile',
  [SkillCategory.TOOLS]: 'Outils',
  [SkillCategory.LANGUAGES]: 'Langages',
  [SkillCategory.FRAMEWORKS]: 'Frameworks',
  [SkillCategory.AI]: 'Intelligence Artificielle'
};

export const SKILL_LEVEL_LABELS: Record<SkillLevel, string> = {
  [SkillLevel.BEGINNER]: 'Débutant',
  [SkillLevel.INTERMEDIATE]: 'Intermédiaire',
  [SkillLevel.ADVANCED]: 'Avancé',
  [SkillLevel.EXPERT]: 'Expert'
};

export const EXPERIENCE_TYPE_LABELS: Record<ExperienceType, string> = {
  [ExperienceType.FULL_TIME]: 'Temps plein',
  [ExperienceType.PART_TIME]: 'Temps partiel',
  [ExperienceType.FREELANCE]: 'Freelance',
  [ExperienceType.INTERNSHIP]: 'Stage',
  [ExperienceType.CONTRACT]: 'Contrat',
  [ExperienceType.VOLUNTEER]: 'Bénévolat'
};

export const PROJECT_TYPE_LABELS: Record<ProjectType, string> = {
  [ProjectType.WEBSITE]: 'Site Web',
  [ProjectType.MOBILE_APP]: 'Application Mobile',
  [ProjectType.ECOMMERCE]: 'E-commerce',
  [ProjectType.API]: 'API/Service',
  [ProjectType.CONSULTING]: 'Conseil',
  [ProjectType.MAINTENANCE]: 'Maintenance',
  [ProjectType.OTHER]: 'Autre'
};

export const BUDGET_RANGE_LABELS: Record<BudgetRange, string> = {
  [BudgetRange.UNDER_1K]: 'Moins de 1 000€',
  [BudgetRange.RANGE_1K_5K]: '1 000€ - 5 000€',
  [BudgetRange.RANGE_5K_10K]: '5 000€ - 10 000€',
  [BudgetRange.RANGE_10K_25K]: '10 000€ - 25 000€',
  [BudgetRange.OVER_25K]: 'Plus de 25 000€',
  [BudgetRange.TO_DISCUSS]: 'À discuter'
};

export const TIMELINE_LABELS: Record<Timeline, string> = {
  [Timeline.ASAP]: 'Dès que possible',
  [Timeline.WITHIN_MONTH]: 'Dans le mois',
  [Timeline.WITHIN_3_MONTHS]: 'Dans 3 mois',
  [Timeline.WITHIN_6_MONTHS]: 'Dans 6 mois',
  [Timeline.FLEXIBLE]: 'Flexible'
};

export const AVAILABILITY_LABELS: Record<Availability, string> = {
  [Availability.AVAILABLE]: 'Disponible',
  [Availability.BUSY]: 'Occupé',
  [Availability.UNAVAILABLE]: 'Indisponible'
};

export const LANGUAGE_LEVEL_LABELS: Record<LanguageLevel, string> = {
  [LanguageLevel.BASIC]: 'Notions',
  [LanguageLevel.INTERMEDIATE]: 'Intermédiaire',
  [LanguageLevel.FLUENT]: 'Courant',
  [LanguageLevel.NATIVE]: 'Natif'
};

// Couleurs par catégorie
export const SKILL_CATEGORY_COLORS: Record<SkillCategory, string> = {
  [SkillCategory.FRONTEND]: '#61DAFB',
  [SkillCategory.BACKEND]: '#68217A',
  [SkillCategory.DATABASE]: '#336791',
  [SkillCategory.DEVOPS]: '#FF6B35',
  [SkillCategory.DESIGN]: '#FF0080',
  [SkillCategory.MOBILE]: '#A4C639',
  [SkillCategory.TOOLS]: '#666666',
  [SkillCategory.LANGUAGES]: '#F7DF1E',
  [SkillCategory.FRAMEWORKS]: '#764ABC',
  [SkillCategory.AI]: '#FF6B6B'
};

// Technologies populaires avec leurs icônes et couleurs
export const POPULAR_TECHNOLOGIES = [
  { name: 'Angular', icon: 'fab fa-angular', color: '#DD0031' },
  { name: 'React', icon: 'fab fa-react', color: '#61DAFB' },
  { name: 'Vue.js', icon: 'fab fa-vuejs', color: '#4FC08D' },
  { name: 'TypeScript', icon: 'fab fa-js-square', color: '#3178C6' },
  { name: 'JavaScript', icon: 'fab fa-js-square', color: '#F7DF1E' },
  { name: 'Node.js', icon: 'fab fa-node-js', color: '#339933' },
  { name: 'Python', icon: 'fab fa-python', color: '#3776AB' },
  { name: 'PHP', icon: 'fab fa-php', color: '#777BB4' },
  { name: 'Laravel', icon: 'fab fa-laravel', color: '#FF2D20' },
  { name: 'Docker', icon: 'fab fa-docker', color: '#2496ED' },
  { name: 'Git', icon: 'fab fa-git-alt', color: '#F05032' },
  { name: 'AWS', icon: 'fab fa-aws', color: '#232F3E' }
];

// Réseaux sociaux
export const SOCIAL_PLATFORMS = [
  { name: 'LinkedIn', icon: 'fab fa-linkedin', color: '#0A66C2' },
  { name: 'GitHub', icon: 'fab fa-github', color: '#181717' },
  { name: 'Twitter', icon: 'fab fa-twitter', color: '#1DA1F2' },
  { name: 'Instagram', icon: 'fab fa-instagram', color: '#E4405F' },
  { name: 'Facebook', icon: 'fab fa-facebook', color: '#1877F2' },
  { name: 'YouTube', icon: 'fab fa-youtube', color: '#FF0000' },
  { name: 'Website', icon: 'fas fa-globe', color: '#007bff' },
  { name: 'Email', icon: 'fas fa-envelope', color: '#6c757d' }
];