import { NextRequest, NextResponse } from "next/server";
import dbConnect from '@/lib/dbConnection';
import DepositModel from '@/models/DepositModel';
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/configs/authOptions"
import { IApproveDeposit, IDeposit } from "@/interfaces";
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

    const body: IApproveDeposit = await req.json()

    if (!body || !body.status) {
      return NextResponse.json({ message: 'Status is required' }, { status: 400 });
    }
    
    if (body.status === 'denied') {

      // const deposit = await DepositModel.findByIdAndUpdate(id, body, { new: true }).lean();
      const deposit = await DepositModel.findById(id);

      if (!deposit) {
        return NextResponse.json({ message: 'Deposit not found' }, { status: 400 });
      }

      if (deposit.status === 'approved') {
        return NextResponse.json({ message: 'Deposit already approved' }, { status: 400 });
      } else if (deposit.status === 'denied') {
        return NextResponse.json({ message: 'Deposit already denied' }, { status: 400 });
      }

      deposit.status = 'denied';
      await deposit.save();
  

      return NextResponse.json(deposit, { status: 200 });

    } else if (body.status === 'approved') {

      const deposit = await DepositModel.findById(id);

      if (!deposit) {
        return NextResponse.json({ message: 'Deposit not found' }, { status: 400 });
      }

      if (deposit.status === 'approved') {
        return NextResponse.json({ message: 'Deposit already approved' }, { status: 400 });
      } else if (deposit.status === 'denied') {
        return NextResponse.json({ message: 'Deposit already denied' }, { status: 400 });
      }

      const user = await UserModel.findById(deposit.userId || '');

      if (!user) {
        return NextResponse.json({ message: 'User Not Found.. Failed to update user balance' }, { status: 400 });
      }

      user.balance += deposit.amount;
      user.total_deposit = user.total_deposit + 1;
      deposit.status = 'approved';

      // perform two mongoose operations at once

      const [updatedUser, updatedDeposit] = await Promise.all([
        user.save(),
        deposit.save()
      ]);

      if (!updatedUser || !updatedDeposit) {
        return NextResponse.json({ message: 'Failed to update user balance' }, { status: 400 });
      }
  
      return NextResponse.json(updatedDeposit, { status: 200 });
    }

    return NextResponse.json({ message: 'Invalid status' }, { status: 400 });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });

  }
}
 
// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
// export async function OPTIONS(req: Request) {}