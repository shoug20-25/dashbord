import styles from './Button.module.css';
function Button({ children, variant = 'primary', disabled = false, loading = false, onClick, type = 'button' }) {
  return (
    <button
      type={type}
      className={`${styles.btn} ${styles[`btn-${variant}`]}`}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {loading ? 'جاري التحميل...' : children}
    </button>
  );
}

export default Button;