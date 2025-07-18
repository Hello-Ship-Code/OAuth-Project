
export type UserSignupPayload = {
  email: string
  fullName: string
  userName: string
  location: string
  gender: string
  dob: Date
  password: string
  // terms: boolean
}

export type UserLoginPayload = {
  email: string
  password: string
}