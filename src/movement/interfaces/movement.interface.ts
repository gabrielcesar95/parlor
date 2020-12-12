import { Document } from 'mongoose'

export interface Movement extends Document {
    userId: string
    readonly transactionId: string
    value: number
    createdAt: Date
}