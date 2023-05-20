declare var Controller: {
    new (): {
        /**
         * Función que retorna la respuesta.
         *
         * @param {Response} oResponse Este objeto maneja el response de la solicitud.
         * @param {number} nStatusCode Codigo de estado de la solicud.
         * @param {Array} oData Arreglo de datos que seran devueltos en la solicitud.
         * @param {string | object} oException Mensaje de error o objeto error si lo hay.
         *
         * @author Leandro Curbelo
         */
        respond: (oResponse: any, nStatusCode: number, oData?: {
            message: string;
        } | null, oException?: string | object | null) => void;
    };
};
export default Controller;
