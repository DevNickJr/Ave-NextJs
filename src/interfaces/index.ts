export interface IUserLogin {
    email: string
    password: string
}

export interface IForgotPassword { 
    email: string, 
    redirect_url: string 
}

export interface IChangePassword { 
    password: string,
    confirm_password: string, 
    token: string, 
    uidb64: 'MTI' 
}

export interface IUserRegister {
    email: string
    password: string
    confirm_password: string
    first_name: string      
    last_name: string    
    terms?: boolean     
}

export interface IUser extends IUserRegister {
    id?: string
    balance: number
    bonus: number,
    total_deposit: number,
    total_withdrawal: number,
    status: string,
    document?: string
}

export interface IRegisterFace {
    email: string
    image: string
}

export interface IVerifiedFace {
    level: string
    image: string
}

export interface IProfile {
    email: string
    phone: string
    first_name: string      
    last_name: string        
    middle_name: string
    level: string      
    matric_no: string 
  }


export interface IPassword {
    old_password: string
    new_password: string
    confirm_password: string
  }
  

export interface IReducerAction<T> {
    type: T;
    payload?: string | { [key: string]: string };
    data?: string | { [key: string]: string };
    name?: string;
}

export interface ILoginReducerAction extends IReducerAction<"email" | "password"> {
    payload: string
}

export interface IRegistereducerAction extends IReducerAction<"email" | "password" | "confirm_password" | "first_name" | "last_name" | "terms"> {
    payload: string
}


export interface ITableColumn {
    name: string;
    label: string;
    extra?: boolean;
    custom?: (value: string, meta: any) => JSX.Element;
    options?: {
        filter: boolean;
        sort: boolean;
    };
}

export interface IFaqs {
    question: string;
    answer: string;
}

export interface IWallet {
    _id?: string;
    name: string;
    address: string;
    qr_code: string;
}

export interface IPlan {
    _id?: string;
    name: string;
    minimum: number;
    maximum: number;
    duration: number;
    roi: string;
}

export interface IDeposit {
    _id?: string;
    email: string;
    userId: string;
    amount: number;
    wallet: string;
    proof: string;
    status?: string;
    createdAt?: string;
}

export interface IInvest {
    _id?: string;
    email: string;
    userId: string;
    amount: number;
    plan: string;
    status?: string;
    createdAt?: string;
}

export interface IWithdrawal {
    _id?: string;
    email: string;
    userId: string;
    amount: number;
    wallet: string;
    // proof: string;
    status?: string;
    createdAt?: string;
}
   
// export interface IPlan {
//     name: string;
//     minimum: string;
//     maximum: string;
//     roi: string;
//     duration: string;
//     status?: string;
//     description: string;
//     image: string;
// }


export interface IFeedback {
    name: string;
    email: string;
    message: string;
}