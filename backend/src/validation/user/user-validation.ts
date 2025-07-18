import z from 'zod'

export const userValidation = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .trim()
    .min(1, 'Email is required')
    .email('Invalid email format'),

  fullName: z
    .string({ required_error: 'Full name is required' })
    .min(3, 'Full name must be at least 3 characters')
    .max(24, 'Full name cannot exceed 24 characters'),

  password: z
    .string({ required_error: 'Password is required' })
    .min(8, 'Password must be at least 8 characters long')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number')
    .regex(
      /[@$!%*?&#^()_\-+={}[\]|:;"'<>,./~`]/,
      'Password must contain at least one special character',
    ),

  userName: z
    .string({ required_error: 'Username is required' })
    .min(5, 'Username must be at least 5 characters')
    .max(30, 'Username cannot exceed 30 characters')
    .regex(
      /^[a-z0-9._]+$/,
      'Username can only contain lowercase letters, numbers, underscores, and dots',
    ),

  location: z
    .string({ required_error: 'Location is required' })
    .min(3, 'Location must be at least 3 characters')
    .max(100, 'Location cannot exceed 100 characters')
    .regex(
      /^[a-zA-Z\s\-']+$/,
      'Location can only contain letters, spaces, hyphens, and apostrophes',
    ),

  gender: z.enum(['male', 'female'], {
    required_error: 'Gender is required',
    invalid_type_error: 'Gender must be male or female',
  }),

  dob: z.preprocess(
    (val) => {
      if (typeof val === 'string' || val instanceof Date) {
        const parsed = new Date(val)
        return isNaN(parsed.getTime()) ? undefined : parsed
      }
      return undefined
    },
    z
      .date({
        required_error: 'Date of Birth is required',
        invalid_type_error: 'Invalid date format',
      })
      .refine((d) => d < new Date(), {
        message: 'DOB must be in the past',
      }),
  ),

  // terms: z.preprocess(
  //   (val) => {
  //     if (typeof val === 'string') {
  //       return val === 'true' // convert to boolean
  //     }
  //     return val
  //   },
  //   z.boolean({ required_error: 'Terms acceptance is required' }).refine((val) => val === true, {
  //     message: 'You must accept the terms and conditions',
  //   }),
  // ),
})