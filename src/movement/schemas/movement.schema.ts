import * as mongoose from 'mongoose'

export const MovementSchema = new mongoose.Schema({
    id: String,
    userId: String,
    transactionId: String,
    value: Number,
    createdAt: Date,
}, {
    timestamps: true,
    versionKey: false
})

export const MovementProviders = [
    {
        provide: 'MOVEMENT_MODEL',
        useFactory: (connection: mongoose.Connection) => connection.model('Movement', MovementSchema),
        inject: ['DATABASE_CONNECTION'],
    },
]
