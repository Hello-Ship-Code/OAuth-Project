
export interface Wallet {
  id: string
  userId: string
  userCoins: number

}

export interface User {
  id: string
  userName: string
  fullName: string
  categories: string[]
  wallet: Wallet
}

export interface UserResponse {
  user: User;
}