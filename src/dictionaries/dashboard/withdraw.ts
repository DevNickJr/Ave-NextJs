  export interface IPageContent {
    title: string;
    subtitle?: string;
    subtitle_text?: string;
    transactions: string;
    sent_withdraw: string;
    no_transactions: string;
    amount: string;
    wallet: string;
    submit: string;
  }
  
  interface ITranslations {
    en: IPageContent;
    es: IPageContent;
    de: IPageContent;
    zh: IPageContent;
    ko: IPageContent;
    tr: IPageContent;
  }
  
  export const DashboardWithdrawContent: ITranslations = {
    en: {
      title: 'Withdrawal',
      subtitle: 'Withdraw Funds',
      subtitle_text: 'click to initiate withdrawal',
      transactions: 'Recent Transactions',
      sent_withdraw: 'sent withdrawal request',
      no_transactions: 'No Recent transactions',
      amount: 'Enter Amount',
      wallet: 'Enter BTC Wallet',
      submit: 'Submit',
    },
    es: {
      title: 'Retiro',
      subtitle: 'Retirar fondos',
      subtitle_text: 'haga clic para iniciar el retiro',
      transactions: 'Transacciones recientes',
      sent_withdraw: 'solicitud de retiro enviada',
      no_transactions: 'No hay transacciones recientes',
      amount: 'Ingrese la cantidad',
      wallet: 'Ingrese la billetera',
      submit: 'Enviar',
    },
    de: {
      title: 'Auszahlung',
      subtitle: 'Geld abheben',
      subtitle_text: 'Klicken Sie hier, um die Auszahlung zu starten',
      transactions: 'Letzte Transaktionen',
      sent_withdraw: 'Auszahlungsanfrage gesendet',
      no_transactions: 'Keine aktuellen Transaktionen',
      amount: 'Menge eingeben',
      wallet: 'Geldbörse eingeben',
      submit: 'einreichen',
    },
    zh: {
      title: '提款',
      subtitle: '提款',
      subtitle_text: '点击以发起提款',
      transactions: '最近的交易',
      sent_withdraw: '发送提款请求',
      no_transactions: '没有最近的交易',
      amount: '输入金额',
      wallet: '输入钱包',
      submit: '提交',
    },
    ko: {
      title: '인출',
      subtitle: '자금 인출',
      subtitle_text: '인출을 시작하려면 클릭하십시오.',
      transactions: '최근 거래',
      sent_withdraw: '출금 요청 보냄',
      no_transactions: '최근 거래 없음',
      amount: '금액 입력',
      wallet: '지갑 입력',
      submit: '제출',
    },
    tr: {
      title: 'Para Çekme',
      subtitle: 'Para Çekme',
      subtitle_text: 'Para çekmek için tıklayın',
      transactions: 'Son İşlemler',
      sent_withdraw: 'çekim isteği gönderildi',
      no_transactions: 'Son işlem yok',
      amount: 'Miktar Girin',
      wallet: 'Cüzdan Girin',
      submit: 'Sunmak',
    },
  };
  