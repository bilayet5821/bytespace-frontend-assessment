export function AuthFormField({
  name,
  label,
  type,
  placeholder,
  autoComplete,
  minLength,
}: {
  name: string
  label: string
  type: string
  placeholder: string
  autoComplete: string
  minLength?: number
}) {
  return (
    <div className="auth-field">
      <label htmlFor={`auth-${name}`}>{label}</label>
      <input
        id={`auth-${name}`}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required
        minLength={minLength}
      />
    </div>
  )
}
