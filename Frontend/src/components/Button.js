import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ 
  loading = false, 
  text, 
  disabled = false, 
  onClick, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  type = 'button',
  icon: Icon 
}) => {
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    success: 'btn-success',
    danger: 'btn-danger',
    warning: 'btn-warning',
    info: 'btn-info',
    light: 'btn-light',
    dark: 'btn-dark',
    outline: 'btn-outline-primary'
  };

  const sizeClasses = {
    sm: 'btn-sm',
    md: '',
    lg: 'btn-lg'
  };

  return (
    <button
      type={type}
      className={`btn ${variantClasses[variant]} ${sizeClasses[size]} 
        ${loading ? 'btn-loading' : ''} 
        d-flex align-items-center justify-content-center gap-2 
        ${className}`}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {Icon && !loading && <Icon size={18} />}
      {loading && (
        <div className="spinner-border spinner-border-sm me-2" role="status">
          <span className="visually-hidden"></span>
        </div>
      )}
      {text}
    </button>
  );
};

Button.propTypes = {
  loading: PropTypes.bool,
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf([
    'primary', 'secondary', 'success', 
    'danger', 'warning', 'info', 
    'light', 'dark', 'outline'
  ]),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.elementType
};

export default Button;