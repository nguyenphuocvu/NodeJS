import { Schema, model } from 'mongoose';

interface IUser{
    firstName: string,
    lastName: string,
    email: string,
    mobile: string,
  }

const userSchema = new Schema <IUser> (
    {
        firstName: String ,
        lastName: String,
        email: String,
        mobile: String
    },
    {
        timestamps: true
    }
)

const User = model<IUser>('User', userSchema);
export default User;