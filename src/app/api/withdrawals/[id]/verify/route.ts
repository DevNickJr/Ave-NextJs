import { NextRequest, NextResponse } from "next/server";
import dbConnect from '@/lib/dbConnection';
import WithdrawalModel from '@/models/WithdrawalModel';
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/configs/authOptions"
import { IApproveWithdrawal } from "@/interfaces";
import UserModel from "@/models/UserModel";


// ----------------------------------------------------------------------

export async function PATCH(req: NextRequest, { params }: { params: { id: string }}) {
  try {
    await dbConnect();
    // const session = await getServerSession(authOptions)
    // console.log({session})

    // if (!session) {
    //   return res.status(401).json({ message: "You must be signed in to access this" });
    // } 

    const { id } = params;
    
    if (!id) {
      return NextResponse.json({ message: 'ID is required' }, { status: 400 });
    }

    const body: IApproveWithdrawal = await req.json()

    if (!body || !body.status) {
      return NextResponse.json({ message: 'Status is required' }, { status: 400 });
    }

    if (body.status === 'denied') {
      const withdrawal = await WithdrawalModel.findById(id);

      if (!withdrawal) {
        return NextResponse.json({ message: 'Withdrawal not found' }, { status: 400 });
      }

      if (withdrawal.status == 'approved') {
        return NextResponse.json({ message: 'Withdrawal already approved' }, { status: 400 });
      } else if (withdrawal.status == 'denied') {
        return NextResponse.json({ message: 'Withdrawal already denied' }, { status: 400 });
      }

      if (!withdrawal) {
        return NextResponse.json({ message: 'failed to perform withdrawal operation' }, { status: 400 });
      }

      withdrawal.status = 'denied';
      await withdrawal.save();

      

      return NextResponse.json(withdrawal, { status: 200 });

    } else if (body.status === 'approved') {

      const withdrawal = await WithdrawalModel.findById(id);

      if (!withdrawal) {
        return NextResponse.json({ message: 'Withdrawal not found' }, { status: 400 });
      }

      if (withdrawal.status == 'approved') {
        return NextResponse.json({ message: 'Withdrawal already approved' }, { status: 400 });
      } else if (withdrawal.status == 'denied') {
        return NextResponse.json({ message: 'Withdrawal already denied' }, { status: 400 });
      }

      const user = await UserModel.findById(withdrawal.userId || '');

      if (!user) {
        return NextResponse.json({ message: 'User not found.. Failed to update User Balance' }, { status: 400 });
      }

      if (user.total_earnings >= withdrawal.amount) {
        user.total_earnings -= withdrawal.amount;
      } 
      else if (user.balance >= withdrawal.amount) {
        user.balance -= withdrawal.amount;
      } else {
        return NextResponse.json({ message: 'Insufficient Balance' }, { status: 400 });
      }

      withdrawal.status = 'approved';
      user.total_withdrawal = user.total_withdrawal + 1;

         // perform two mongoose operations at once

         const [updatedUser, updatedWithdrawal] = await Promise.all([
          user.save(),
          withdrawal.save()
        ]);

        if (!updatedUser || !updatedWithdrawal) {
          return NextResponse.json({ message: 'Failed to update user balance' }, { status: 400 });
        }

        return NextResponse.json(updatedWithdrawal, { status: 200 });

    }
    
    return NextResponse.json({ message: 'Invalid status' }, { status: 400 });


  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });

  }
}
 
// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
// export async function OPTIONS(req: Request) {}