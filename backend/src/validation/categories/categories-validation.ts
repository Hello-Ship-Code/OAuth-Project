import { z } from 'zod'

export const categoriesValidation = z.object({
  name: z
    .string({ required_error: 'Name is required' })
    .min(3, 'Full name must be at least 3 characters'),
  src: z
    .string({ required_error: 'Src is required' })
    .min(3, 'Source must be at least 3 characters'),
  icon: z
    .string({ required_error: 'icon is required' })
    .min(3, 'icon must be at least 3 characters'),
})
