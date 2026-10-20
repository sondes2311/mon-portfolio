export const THEME = {
  COLORS: {
    PRIMARY: '#007bff',
    SECONDARY: '#6c757d',
    SUCCESS: '#28a745',
    DANGER: '#dc3545',
    WARNING: '#ffc107',
    INFO: '#17a2b8',
    LIGHT: '#f8f9fa',
    DARK: '#343a40',
    WHITE: '#ffffff',
    BLACK: '#000000'
  },
  GRADIENTS: {
    PRIMARY: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    SECONDARY: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    DARK: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)'
  },
  SHADOWS: {
    LIGHT: '0 2px 4px rgba(0,0,0,0.1)',
    MEDIUM: '0 4px 6px rgba(0,0,0,0.1)',
    HEAVY: '0 10px 20px rgba(0,0,0,0.15)'
  },
  BORDER_RADIUS: {
    SMALL: '4px',
    MEDIUM: '8px',
    LARGE: '12px',
    ROUND: '50%'
  },
  SPACING: {
    XS: '4px',
    SM: '8px',
    MD: '16px',
    LG: '24px',
    XL: '32px',
    XXL: '48px'
  }
} as const;