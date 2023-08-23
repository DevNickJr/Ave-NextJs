import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/lib/dbConnection';
import User from '@/models/UserModel';
import { NextResponse } from 'next/server';
import { IUser } from '@/interfaces';
import { nanoid } from 'nanoid'


const bcrypt = require('bcrypt');

// ----------------------------------------------------------------------
 
 
export async function POST(req: Request, res: NextApiResponse) {
    try {
        await dbConnect();

        // body.email = "nicholasjd12@gmail.com";
        // body.password = "123456";
        // body.username = "nicholasjd12";
        // body.confirm_password = "123456";

        const body: IUser = await req.json()

        // console.log({body})
        
        // if (body.password !== body.confirm_password) {
        //     return NextResponse.json({ message: 'Passwords do not match' }, { status: 400 });
        // }
        if (body.password.length < 6) {
            return NextResponse.json({ message: 'Password must be at least 6 characters' }, { status: 400 });
        }
        if (!body.email || !body.password || !body.currency || !body.nationality) {
            return NextResponse.json({ message: 'Please fill in all fields' }, { status: 400 });
        }

        const userExists = await User.findOne({
                 email: body.email ? body.email : '',
        });

        if (userExists) {
            return NextResponse.json({ message: 'User already exists' }, { status: 400 });
        
        }

        //hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(body.password, salt);

        // console.log({
        //     ...body,
        //     email: body.email,
        //     password: hashedPassword,
        // })
        const referral_id = nanoid(10)

        const user = await User.create({
            ...body,
            email: body.email,
            password: hashedPassword,
            referral_id
        });

        const { password, ...rest } = user.toObject();


        return NextResponse.json({ user: rest }, { status: 200 });

    } catch (error) {
        console.error({error});
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });

    }
}
 
// export async function PUT(req: NextApiRequest, res: NextApiResponse) {}
 
// export async function DELETE(req: NextApiRequest, res: NextApiResponse) {}
 
// export async function PATCH(req: NextApiRequest, res: NextApiResponse) {}
 
// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
// export async function OPTIONS(req: NextApiRequest, res: NextApiResponse) {}