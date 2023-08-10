import { IInvest } from '@/interfaces';
import { models, model, Schema } from 'mongoose';

const InvestSchema: Schema = new Schema<IInvest>({
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
    default: 0
  },
  plan: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: 'processing'
  },
}, {
  timestamps: true
});

const InvestModel = models.Invest || model('Invest', InvestSchema);


export default InvestModel