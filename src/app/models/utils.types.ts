// Types utilitaires pour TypeScript

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type RequireField<T, K extends keyof T> = T & Required<Pick<T, K>>;

export type OptionalField<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type CreateRequest<T> = Omit<T, 'id' | 'createdAt' | 'updatedAt'>;

export type UpdateRequest<T> = Partial<Omit<T, 'id' | 'createdAt' | 'updatedAt'>>;

export type EntityWithTimestamps = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
};

export type SortDirection = 'asc' | 'desc';

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export type ViewMode = 'grid' | 'list' | 'card';

export type ComponentSize = 'small' | 'medium' | 'large';

export type ComponentVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';

export type Device = 'mobile' | 'tablet' | 'desktop';

// Types pour les animations
export type AnimationDirection = 'left' | 'right' | 'up' | 'down';
export type AnimationDuration = 'fast' | 'normal' | 'slow';
export type AnimationEasing = 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear';

// Types pour les formulaires
export type FormFieldType = 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'textarea' | 'select' | 'checkbox' | 'radio' | 'file' | 'date';

export interface FormField {
  name: string;
  type: FormFieldType;
  label: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  options?: UtilsSelectOption[];
  validation?: {
    min?: number;
    max?: number;
    pattern?: string;
    custom?: (value: any) => boolean | string;
  };
}

export interface UtilsSelectOption {
  value: any;
  label: string;
  disabled?: boolean;
}