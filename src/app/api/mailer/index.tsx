import { NextRequest, NextResponse } from "next/server";
import dbConnect from '@/lib/dbConnection';
import nodemailer from 'nodemailer';


// ----------------------------------------------------------------------

const maiiList = [
  {
    name: "welcome_mail",
    subject: "Welcome to Avestock",
    message: "Welcome to Avestock, we are glad to have you here. We hope you enjoy your stay with us.",
    // html with styles
    html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Welcome to Avestock</title>
    </head>
    <body>
        <div style="background-color: #F5F5F5; font-family: 'Montserrat', sans-serif;">
            <main style="background-color: white; color: #1C1C1C; max-width: 507px; margin-inline: auto; ">
                <div style="padding: 24px; padding-top: 24px;">
                    <p style="font-size: 14px; max-width: 410px; line-height: 25px; letter-spacing: 0.02em; font-weight: 500; opacity: 0.95;">
                        Welcome to Avestock, we are glad to have you here. We hope you enjoy your stay with us.
                    </p>
                    <div style="margin-top: 42px; font-weight: 500; opacity: 0.97; margin-bottom: 42px; font-size: 14px;">
                        <p>Best Regards,</p>
                        <p>The Avestock Team</p>
                    </div>
                    <p style="height: 1px; background-color: #00000025;"></p>
                    <div>
                        <p style="font-size: 12px; margin-top: 30px; margin-bottom: 30px; color: #444444; max-width: 410px; line-height: 25px; letter-spacing: 0.02em;">
                            Talk to us anytime! Call +2347001020300 or email
                          </p>
                    </div>
                </div>
            </main>
        </div>
    </body>
    </html>
    `
  },
  {
    name: "reset_password",
    subject: "Reset Password",
    message: "You have requested to reset your password. Click the link below to reset your password.",
    // html with styles
    html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Reset Password</title>
    </head>
    <body>
        <div style="background-color: #F5F5F5; font-family: 'Montserrat', sans-serif;">
            <main style="background-color: white; color: #1C1C1C; max-width: 507px; margin-inline: auto; ">
                <div style="padding: 24px; padding-top: 24px;">
                    <p style="font-size: 14px; max-width: 410px; line-height: 25px; letter-spacing: 0.02em; font-weight: 500; opacity: 0.95;">
                        You have requested to reset your password. Click the link below to reset your password.
                    </p>
                    <a href="https://avestock.vercel.app/reset-password" style="text-decoration: none; color: #1C1C1C; font-size: 14px; font-weight: 500; opacity: 0.97; margin-bottom: 42px; margin-top: 42px; display: block;">
                        Reset Password
                    </a>
                    <div style="margin-top: 42px; font-weight: 500; opacity: 0.97; margin-bottom: 42px; font-size: 14px;">
                        <p>Best Regards,</p>
                        <p>The Avestock Team</p>
                    </div>  
                    <p style="height: 1px; background-color: #00000025;"></p>
                    <div>
                        <p style="font-size: 12px; margin-top: 30px; margin-bottom: 30px; color: #444444; max-width: 410px; line-height: 25px; letter-spacing: 0.02em;">
                            Talk to us anytime! Call +2347001020300 or email
                          </p>
                    </div>
                </div>
            </main>
        </div>
    </body>
    </html>
    `
  },
  {
    name: "withdrawal_approved",
    subject: "Withdrawal Approved",
    message: "Your withdrawal request has been approved. You will receive your funds shortly.",
    // html with styles
    html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Withdrawal Approved</title>
    </head>
    <body>
        <div style="background-color: #F5F5F5; font-family: 'Montserrat', sans-serif;">
            <main style="background-color: white; color: #1C1C1C; max-width: 507px; margin-inline: auto; ">
                <div style="padding: 24px; padding-top: 24px;">
                    <p style="font-size: 14px; max-width: 410px; line-height: 25px; letter-spacing: 0.02em; font-weight: 500; opacity: 0.95;">
                        Your withdrawal request has been approved. You will receive your funds shortly.
                    </p>
                    <div style="margin-top: 42px; font-weight: 500; opacity: 0.97; margin-bottom: 42px; font-size: 14px;">
                        <p>Best Regards,</p>
                        <p>The Avestock Team</p>
                    </div>
                    <p style="height: 1px; background-color: #00000025;"></p>
                    <div>
                        <p style="font-size: 12px; margin-top: 30px; margin-bottom: 30px; color: #444444; max-width: 410px; line-height: 25px; letter-spacing: 0.02em;">
                            Talk to us anytime! Call +2347001020300 or email
                          </p>
                    </div>
                </div>
            </main>
        </div>
    </body>
    </html>
    `
  },
  {
    name: "withdrawal_declined",
    subject: "Withdrawal Declined",
    message: "Your withdrawal request has been declined. Please contact support for more information.",
    // html with styles
    html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Withdrawal Declined</title>
    </head>
    <body>
        <div style="background-color: #F5F5F5; font-family: 'Montserrat', sans-serif;">
            <main style="background-color: white; color: #1C1C1C; max-width: 507px; margin-inline: auto; ">
                <div style="padding: 24px; padding-top: 24px;">
                    <p style="font-size: 14px; max-width: 410px; line-height: 25px; letter-spacing: 0.02em; font-weight: 500; opacity: 0.95;">
                        Your withdrawal request has been declined. Please contact support for more information.
                    </p>
                    <div style="margin-top: 42px; font-weight: 500; opacity: 0.97; margin-bottom: 42px; font-size: 14px;">
                        <p>Best Regards,</p>
                        <p>The Avestock Team</p>
                    </div>
                    <p style="height: 1px; background-color: #00000025;"></p>
                    <div>
                        <p style="font-size: 12px; margin-top: 30px; margin-bottom: 30px; color: #444444; max-width: 410px; line-height: 25px; letter-spacing: 0.02em;">
                            Talk to us anytime! Call +2347001020300 or email
                          </p>
                    </div>
                </div>
            </main>
        </div>
    </body>
    </html>
    `
  },
  {
    name: "deposit_approved",
    subject: "Deposit Approved",
    message: "Your deposit request has been approved. Your funds have been credited to your account.",
    // html with styles
    html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Deposit Approved</title>
    </head>
    <body>
        <div style="background-color: #F5F5F5; font-family: 'Montserrat', sans-serif;">
            <main style="background-color: white; color: #1C1C1C; max-width: 507px; margin-inline: auto; ">
                <div style="padding: 24px; padding-top: 24px;">
                    <p style="font-size: 14px; max-width: 410px; line-height: 25px; letter-spacing: 0.02em; font-weight: 500; opacity: 0.95;">
                        Your deposit request has been approved. Your funds have been credited to your account.
                    </p>
                    <div style="margin-top: 42px; font-weight: 500; opacity: 0.97; margin-bottom: 42px; font-size: 14px;">
                        <p>Best Regards,</p>
                        <p>The Avestock Team</p>
                    </div>
                    <p style="height: 1px; background-color: #00000025;"></p>
                    <div>
                        <p style="font-size: 12px; margin-top: 30px; margin-bottom: 30px; color: #444444; max-width: 410px; line-height: 25px; letter-spacing: 0.02em;">
                            Talk to us anytime! Call +2347001020300 or email
                          </p>
                    </div>
                </div>
            </main>
        </div>
    </body>
    </html>
    `
  },
  {
    name: "deposit_declined",
    subject: "Deposit Declined",
    message: "Your deposit request has been declined. Please contact support for more information.",
    // html with styles
    html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Deposit Declined</title>
    </head>
    <body>
        <div style="background-color: #F5F5F5; font-family: 'Montserrat', sans-serif;">
            <main style="background-color: white; color: #1C1C1C; max-width: 507px; margin-inline: auto; ">
                <div style="padding: 24px; padding-top: 24px;">
                    <p style="font-size: 14px; max-width: 410px; line-height: 25px; letter-spacing: 0.02em; font-weight: 500; opacity: 0.95;">
                        Your deposit request has been declined. Please contact support for more information.
                    </p>
                    <div style="margin-top: 42px; font-weight: 500; opacity: 0.97; margin-bottom: 42px; font-size: 14px;">
                        <p>Best Regards,</p>
                        <p>The Avestock Team</p>
                    </div>
                    <p style="height: 1px; background-color: #00000025;"></p>
                    <div>
                        <p style="font-size: 12px; margin-top: 30px; margin-bottom: 30px; color: #444444; max-width: 410px; line-height: 25px; letter-spacing: 0.02em;">
                            Talk to us anytime! Call +2347001020300 or email
                          </p>
                    </div>
                </div>
            </main>
        </div>
    </body>
    </html>
    `
  },
  {
    name: "kyc_approved",
    subject: "KYC Approved",
    message: "Your KYC request has been approved. You can now trade on Avestock.",
    // html with styles
    html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>KYC Approved</title>
    </head>
    <body>
        <div style="background-color: #F5F5F5; font-family: 'Montserrat', sans-serif;">
            <main style="background-color: white; color: #1C1C1C; max-width: 507px; margin-inline: auto; ">
                <div style="padding: 24px; padding-top: 24px;">
                    <p style="font-size: 14px; max-width: 410px; line-height: 25px; letter-spacing: 0.02em; font-weight: 500; opacity: 0.95;">
                        Your KYC request has been approved. You can now trade on Avestock.
                    </p>
                    <div style="margin-top: 42px; font-weight: 500; opacity: 0.97; margin-bottom: 42px; font-size: 14px;">
                        <p>Best Regards,</p>
                        <p>The Avestock Team</p>
                    </div>
                    <p style="height: 1px; background-color: #00000025;"></p>
                    <div>
                        <p style="font-size: 12px; margin-top: 30px; margin-bottom: 30px; color: #444444; max-width: 410px; line-height: 25px; letter-spacing: 0.02em;">
                            Talk to us anytime! Call +2347001020300 or email
                          </p>
                    </div>
                </div>
            </main>
        </div>
    </body>
    </html>
    `
  },
  {
    name: "kyc_declined",
    subject: "KYC Declined",
    message: "Your KYC request has been declined. Please contact support for more information.",
    // html with styles
    html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>KYC Declined</title>
    </head>
    <body>
        <div style="background-color: #F5F5F5; font-family: 'Montserrat', sans-serif;">
            <main style="background-color: white; color: #1C1C1C; max-width: 507px; margin-inline: auto; ">
                <div style="padding: 24px; padding-top: 24px;">
                    <p style="font-size: 14px; max-width: 410px; line-height: 25px; letter-spacing: 0.02em; font-weight: 500; opacity: 0.95;">
                        Your KYC request has been declined. Please contact support for more information.
                    </p>
                    <div style="margin-top: 42px; font-weight: 500; opacity: 0.97; margin-bottom: 42px; font-size: 14px;">
                        <p>Best Regards,</p>
                        <p>The Avestock Team</p>
                    </div>
                    <p style="height: 1px; background-color: #00000025;"></p>
                    <div>
                        <p style="font-size: 12px; margin-top: 30px; margin-bottom: 30px; color: #444444; max-width: 410px; line-height: 25px; letter-spacing: 0.02em;">
                            Talk to us anytime! Call +2347001020300 or email
                          </p>
                    </div>
                </div>
            </main>
        </div>
    </body>
    </html>
    `
  }
]

export async function POST(req: NextRequest) {
  try {
    await dbConnect();

    const body: any = await req.json()
    
    const { sender, recipient, subject, message } = body;
    
    console.log({sender, recipient, subject, message})

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'nicholasduadei14@gmail.com',
          pass: 'qbltztxonnsivedv'
        }
      });

      const mailOptions = {
        host: 'smtp.zoho.com',
        port: 587,
        secure: true, // use TLS
        auth: {
            user: "username",
            pass: "pass",
        },
        tls: {
            // do not fail on invalid certs
            rejectUnauthorized: false,
        },
      };
    //   const mailOptions = {
    //     // from: sender,
    //     to: recipient,
    //     subject,
    //     text: message,
    //     html: `
    //     <!DOCTYPE html>
    //     <html lang="en">
    //     <head>
    //         <meta charset="UTF-8">
    //         <meta http-equiv="X-UA-Compatible" content="IE=edge">
    //         <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //         <link rel="preconnect" href="https://fonts.googleapis.com">
    //         <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    //         <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">
    //         <title>Reply</title>
    //     </head>
    //     <body style="background-color: #F5F5F5; font-family: 'Montserrat', sans-serif;">
    //         <main style="background-color: white; color: #1C1C1C; max-width: 507px; margin-inline: auto; ">
    //             <div style="padding: 24px; padding-top: 24px;">
    //                 <p style="font-size: 14px; max-width: 410px; line-height: 25px; letter-spacing: 0.02em; font-weight: 500; opacity: 0.95;">
    //                     ${message}
    //                 </p>
    //                 <div style="margin-top: 42px; font-weight: 500; opacity: 0.97; margin-bottom: 42px; font-size: 14px;">
    //                     <p>Best Regards,</p>
    //                     <p>The Brilliant Brains Team</p>
    //                 </div>
    //                 <p style="height: 1px; background-color: #00000025;"></p>
    //                 <div>
    //                     <p style="font-size: 12px; margin-top: 30px; margin-bottom: 30px; color: #444444; max-width: 410px; line-height: 25px; letter-spacing: 0.02em;">
    //                         Talk to us anytime! Call +2347001020300 or email info@bbscholarship.org © 2023 Brilliant Brains, Inc. All rights reserved.
    //                     </p>
    //                 </div>
    //             </div>
    //         </main>
    //     </body>
    //     </html>
    //     `
    //   };

      // Send the email
    transporter.sendMail(mailOptions, function(error: any, info) {
        if (error) {
            console.log('Error occurred:', error.message);

            return NextResponse.json({ message: 'An error occurred while sending the email' }, { status: error?.status || 500 });
        } else {
            console.log('Email sent successfully!');
              return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
        }
    });   
    

  } catch (error: any) {
    console.error({error});
    return NextResponse.json({ message: error.message || 'Internal server error' }, { status: error?.status || 500 });
  }
}
 