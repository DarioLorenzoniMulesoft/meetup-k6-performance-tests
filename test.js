import textSummary from "./common/summary/text/textMapper.js";
import getConfig from "./config/config.js";
import { get } from "k6/http";
import jsonSummary from "./common/summary/json/jsonMapper.js";
import { getToken } from "./common/auth/auth.js";
import { check } from "k6";
                             
/*******************************
*
*  Init Code                 
*                            
*  Eseguito una volta per VU 
*
*******************************/

//configurazioni per connessioni e credenziali
const config = getConfig(); 

//configurazione del test di carico
export let options = {
    scenarios: {
        stressTest: {
            executor: 'constant-arrival-rate',
            rate: 2,
            timeUnit: '1s',
            duration: '2m',
            gracefulStop: "30s",
            preAllocatedVUs: 150
        }
    },
    thresholds: { //controlli sugli SLO
        http_req_failed: ['rate<0.01'], //meno dell'1% di errori HTTP
        http_req_waiting: ['p(95)<500'], //95% delle richieste deve impiegare meno di 500ms
    }
};

/********************************************
*
*  Setup Code                             
*                                         
*  Eseguito una volta all'inizio del test 
*  restituisce dei dati utili a tutti i VU
*
********************************************/

export const setup = () => {
    console.log(`Starting test at ${new Date().toLocaleString()}`);
    return {
        token: getToken(config)
    };
}

/***************************************
*
*  VU Code                           
*                                    
*  Eseguito continuamente da ogni VU 
*  per tutta la durata del test      
*                                    
*
***************************************/

export default (data) => {

    // let customerId = (Math.floor(Math.random() * 10)) + 1; //genera un numero random tra 1 e 10
    // const res = get(`${config.webportalXapi.host}/api/customers/${customerId}/invoices`, {
    //     headers: {
    //         Authorization: data.token
    //     }
    // });
    check(res, {
        "is status 200": (res) => res.status == 200
    })
}

/******************************************
*
*  Teardown Code                        
*                                       
*  Eseguito una volta alla fine del test
*                                       
*
******************************************/

export const teardown = (data) => {
    console.log(`Stopping test at ${new Date().toLocaleString()}`);
}

export const handleSummary = (data) => {
    //formattazione dell'output del test con un oggetto dove
    //la chiave è il nome del file (stdout e stderr funzionano)
    //e il valore è la stringa da scrivere nel file
    return {
        "stdout": textSummary(data),
        "./test-results.json": jsonSummary(data)
    };
}