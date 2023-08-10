import { IWithdrawal } from '@/interfaces';
import { models, model, Schema } from 'mongoose';

const WithdrawalSchema: Schema = new Schema<IWithdrawal>({
  userId: {
    type: String,
    required: true,
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
  // proof: {
  //   type: String,
  //   required: true,
  // },
  status: {
    type: String,
    required: true,
    default: "processing"
  },
}, {
  timestamps: true
});

const WithdrawalModel = models.Withdraw || model('Withdraw', WithdrawalSchema);


export default WithdrawalModel