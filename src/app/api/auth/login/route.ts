import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/lib/dbConnection';
import User from '@/models/UserModel';
import { NextResponse } from 'next/server';

// ----------------------------------------------------------------------

 
export async function POST(req: NextApiRequest, res: NextApiResponse) {
    try {
        await dbConnect();
        // console.log('kllsa')
        if (!req.body.password || (!req.body.email && !req.body.username)) {
            res.status(400).json({ message: 'Please fill in all fields' });
            return;
        }

        const user = await User.findOne({
            $or: [
                { email: req.body.email ? req.body.email : '' },
                { username: req.body.username ? req.body.username : '' }
            ]
        });

        if (!user) {
            res.status(400).json({ message: 'User not found' });
            return;
        }
        const isMatch = await user.comparePassword(req.body.password);

        if (!isMatch) {
            // console.log({isMatch, user})
            res.status(400).json({ message: 'Invalid credentials' });
            return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
        }

        return res.status(200).json({ user });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
}
 
// export async function PUT(req: NextApiRequest, res: NextApiResponse) {}
 
// export async function DELETE(req: NextApiRequest, res: NextApiResponse) {}
 
// export async function PATCH(req: NextApiRequest, res: NextApiResponse) {}
 
// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
// export async function OPTIONS(req: NextApiRequest, res: NextApiResponse) {}