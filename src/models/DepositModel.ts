import { IDeposit } from '@/interfaces';
import { models, model, Schema } from 'mongoose';

const DepositSchema: Schema = new Schema<IDeposit>({
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
  proof: {
    type: String,
    required: true,
  },
  status: {
    type: String,
  },
}, {
  timestamps: true
});

const DepositModel = models.Deposit || model('Deposit', DepositSchema);


export default DepositModel