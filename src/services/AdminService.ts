import { IUser, IPassword, IWallet, IDeposit, IWithdrawal, IPlan, IInvest, IVerifyUser, IApproveWithdrawal, IApproveDeposit, IHandleInvest } from '@/interfaces'
import BaseService from "./BaseService"
import { AxiosResponse } from 'axios'



export const apiGetUsers = (): Promise<AxiosResponse<IUser[], any>> => {
    return BaseService.get(`/users`)
}

export const apiUpdatePlan = (data: IPlan): Promise<AxiosResponse<IPlan, any>> => {
    return BaseService.patch(`/plans/${data._id}`, data)
}

export const apiUpdateWallet = (data: IWallet, { id }: { id: string }): Promise<AxiosResponse<IWallet, any>> => {
    return BaseService.patch(`/wallets/${data._id}`, data)
}

export const apiGetInvestments = (): Promise<AxiosResponse<IInvest[], any>> => {
    return BaseService.get(`/investments`)
}

export const apiGetDeposits = (): Promise<AxiosResponse<IDeposit[], any>> => {
    return BaseService.get(`/deposits`)
}

export const apiGetWithdrawals = (): Promise<AxiosResponse<IWithdrawal[], any>> => {
    return BaseService.get(`/withdrawals`)
}



// Path: src\services\DepositService.ts

export const apiGetPlans = (): Promise<AxiosResponse<IPlan[], any>> => {
    return BaseService.get(`/plans`)
}

export const apiGetWallets = (): Promise<AxiosResponse<IWallet[], any>> => {
    return BaseService.get(`/wallets`)
}

export const apiGetUserWithdrawals = (id: string): Promise<AxiosResponse<IWithdrawal[], any>> => {
    return BaseService.get(`/withdrawals/user/${id}`)
}

export const apiGetUserDeposits = (id: string): Promise<AxiosResponse<IDeposit[], any>> => {
    return BaseService.get(`/deposits/user/${id}`)
}

export const apiGetUserInvestments = (id: string): Promise<AxiosResponse<IInvest[], any>> => {
    return BaseService.get(`/investments/user/${id}`)
}

export const apiDeposit = (data: IDeposit): Promise<AxiosResponse<IDeposit, any>> => {
    return BaseService.post(`/deposits`, data)
}

export const apiInvest = (data: IInvest): Promise<AxiosResponse<IInvest, any>> => {
    return BaseService.post(`/investments`, data)
}

export const apiWithdrawal = (data: IWithdrawal): Promise<AxiosResponse<IWithdrawal, any>> => {
    return BaseService.post(`/withdrawals`, data)
}


// Path: src\services\DepositService.ts

export const apiVerifyUser = (data: IVerifyUser): Promise<AxiosResponse<IUser, any>> => {
    return BaseService.patch(`/users/${data._id}/admin/verify`, data)
}

export const apiAprroveWithdrawal = (data: IApproveWithdrawal): Promise<AxiosResponse<IWithdrawal, any>> => {
    return BaseService.patch(`/withdrawals/${data._id}/verify`, data)
}

export const apiAprroveDeposit = (data: IApproveDeposit): Promise<AxiosResponse<IDeposit, any>> => {
    return BaseService.patch(`/deposits/${data._id}/verify`, data)
}

export const apiHandleInvest = (data: IHandleInvest): Promise<AxiosResponse<IInvest, any>> => {
    return BaseService.patch(`/investments/${data._id}/verify`, data)
}
