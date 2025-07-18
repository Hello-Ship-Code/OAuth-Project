
export type InputProps = {
  placeholder: string
  type: string
  name: string
  value?: string
  className?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  size: 'small' | 'medium' | 'large'
  variant: 'primary-input' | 'error-input'
  checked?: boolean
}