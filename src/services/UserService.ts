import { IUser, IPassword, IWallet, IDeposit, IWithdrawal, IPlan, IInvest } from '@/interfaces'
import BaseService from "./BaseService"
import { AxiosResponse } from 'axios'



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
