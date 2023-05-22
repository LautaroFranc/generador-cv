import { Response } from 'express';
declare var Controller: {
    new (): {
        respond: (oResponse: Response, nStatusCode: number, oData?: {
            message: string;
        } | null, oException?: string | object | null) => void;
    };
};
export default Controller;
