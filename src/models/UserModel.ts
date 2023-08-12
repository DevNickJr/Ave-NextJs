import { IUser } from '@/interfaces';
import { models, model, Schema } from 'mongoose';
const bcrypt = require('bcrypt');

const UserSchema: Schema = new Schema<IUser>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  first_name: {
    type: String,
    required: true,
    // unique: true,
  },
  last_name: {
    type: String,
    required: true,
    // unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['verified', 'unverified', 'suspended', 'deleted'],
    default: 'unverified'
    // required: true,
  },
  balance: {
    type: Number,
    default: 0
    // required: true,
  },
  total_deposit: {
    type: Number,
    default: 0
    // required: true,
  },
  total_withdrawal: {
    type: Number,
    default: 0
    // required: true,
  },
  bonus: {
    type: Number,
    default: 0
    // required: true,
  },
  document: {
    front: String,
    back: String
    // required: true,
  },
}, {
  timestamps: true
});

//compare password
UserSchema.methods.comparePassword = async function comparePassword(enteredPassword: string) {
    return await bcrypt.compare(enteredPassword, this.password);
};

const UserModel = models.User || model('User', UserSchema);


export default UserModel