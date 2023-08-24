import { NextRequest, NextResponse } from "next/server";
import dbConnect from '@/lib/dbConnection';
import InvestModel from '@/models/InvestModel';
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/configs/authOptions"
import { IHandleInvest, IInvest } from "@/interfaces";
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

    const body: IHandleInvest = await req.json()

    if (!body || !body.status) {
      return NextResponse.json({ message: 'Status is required' }, { status: 400 });
    }
    
    
    if (body.status === 'paused') {
      const start = Date.now();

      const invest = await InvestModel.findById(id);

      if (!invest) {
        return NextResponse.json({ message: 'Investment not found' }, { status: 400 });
      }

      if (invest.status === 'paused') {
        return NextResponse.json({ message: 'Investment already paused' }, { status: 400 });
      } else if (invest.status === 'completed') {
        return NextResponse.json({ message: 'Investment already Completed' }, { status: 400 });
      }

      invest.status =  body.status,
      invest.pause = {
        start,
        status: true,
        total: invest.pause?.total || 0
      }

     await invest.save()

     return NextResponse.json(invest, { status: 200 });

    } else if (body.status === 'active') {
 
      const invest = await InvestModel.findById(id);

      if (invest.status === 'active') { 
        return NextResponse.json({ message: 'Investment already Active' }, { status: 400 });
      } else if (invest.status === 'completed') {
        return NextResponse.json({ message: 'Investment already Completed' }, { status: 400 });
      }

      if (!invest) {
        return NextResponse.json({ message: 'Investment not found' }, { status: 400 });
      }

      const start = invest.pause?.start
      const total = invest.pause?.total

      if (!start) {
        return NextResponse.json({ message: 'Start Pause Time error' }, { status: 400 });
      }

      const difference =  Date.now() - start

      const newTotal = total ? total + difference : difference

      invest.pause = {
        status: false,
        start: 0,
        total: newTotal + invest.pause?.total
      }

      invest.status = body.status

      await invest.save()
      return NextResponse.json(invest, { status: 200 });

    } else if (body.status === 'completed') {

      const invest = await InvestModel.findById(id);

      const user = await UserModel.findById(invest.userId || '')

      if (!invest) {
        return NextResponse.json({ message: 'Investment not found' }, { status: 400 });
      }

      if (!user) {
        return NextResponse.json({ message: 'Investment User not found' }, { status: 400 });
      }

      if (invest.status === 'completed') {
        return NextResponse.json({ message: 'Investment already Completed' }, { status: 400 });
      }
      
      // remove from total investment and add to balance
      user.total_earnings = user.balance + invest.amount
      user.total_investment = user.total_investment - invest.amount

      // mark investment as completed
      invest.status = body.status

      const [userUpdate, investUpdate] = await Promise.all([user.save(), invest.save()])

      if (!userUpdate || !investUpdate) {
        return NextResponse.json({ message: 'Investment Update Error' }, { status: 400 });
      }

      return NextResponse.json(invest, { status: 200 });

    }

    return NextResponse.json({ message: 'Status Error' }, { status: 400 });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });

  }
}
 
// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
// export async function OPTIONS(req: Request) {}