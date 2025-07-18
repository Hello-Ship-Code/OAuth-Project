import { ReactNode } from "react"

export type ButtonProps = {
  type: 'button' | 'submit' | 'reset'
  size: 'small' | 'medium' | 'large'
  variant: 'primary-btn' | 'secondary-btn' | 'danger-btn' | 'icon-btn'
  className?: string
  text: string
  onClick?: () => void
  icon?: ReactNode
}