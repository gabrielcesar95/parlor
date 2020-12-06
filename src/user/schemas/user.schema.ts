import * as mongoose from 'mongoose'

export const UserSchema = new mongoose.Schema({
    id: String,
    name: String,
    email: String,
    birthDate: Date,
    password: { type: String, select: false }
}, {
    timestamps: true,
    versionKey: false
})

UserSchema.set('toJSON', {
    transform: function (doc, ret) {
        delete ret.password
        return ret
    }
})

export const UserProviders = [
    {
        provide: 'USER_MODEL',
        useFactory: (connection: mongoose.Connection) => connection.model('User', UserSchema),
        inject: ['DATABASE_CONNECTION'],
    },
]
