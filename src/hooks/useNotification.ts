import {notification} from 'antd';


type InfoParams  = {
    message: string;
    description?: string;
    duration?: number;
}

export type INotificationApi = {
    info: (params: InfoParams) => void;
    error: (params: InfoParams) => void;
}
export const useNotification = (): INotificationApi =>
    notification;

