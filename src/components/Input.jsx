function Input({
  label,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  error,
  name,
}) {
  return (
    <div className="input-group">
      <label htmlFor={name}>{label}</label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />

      {error && <p className="input-error">{error}</p>}
    </div>
  );
}

export default Input;