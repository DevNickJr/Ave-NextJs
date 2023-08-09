import { IWithdrawal } from '@/interfaces';
import { models, model, Schema } from 'mongoose';

const WithdrawalSchema: Schema = new Schema<IWithdrawal>({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  wallet: {
    type: String,
    required: true,
  },
  proof: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
}, {
  timestamps: true
});

const WithdrawalModel = models.Withdrawal || model('Withdrawal', WithdrawalSchema);


export default WithdrawalModel