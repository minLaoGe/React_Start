
export const REDIRECTURL=  process.env.NEXT_PUBLIC_REDIRECT_URL|| 'http://170.106.193.82:3333';
export const CLIENTID=  process.env.NEXT_PUBLIC_CLIENT_ID|| 'mangeweb';

export  const LOGIN_URL= process.env.NEXT_PUBLIC_LOGIN_URL||'http://170.106.193.82';
export  const PREFIX= process.env.NEXT_PUBLIC_PREFIX||'manageUI';
export  const GATEWAY= process.env.NEXT_PUBLIC_GATEWAY||'http://localhost:8087/gateway';

export const getUrlClient = 'gateway/manage/dic/getDicList/machine_status';
export const getClients = 'gateway/manage/clinet/allClients';
export const oparateClients = 'gateway/manage/clinet/oparate';
export const countOnline = 'gateway/distribute/open/onlineOneCount';