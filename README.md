# Meetup K6 Performance Test Demo

Tabella dei contenuti
- [Introduzione](#introduzione)
- [Configurazione](#configurazione)
- [Esecuzione](#esecuzione)
- [Link Utili](#link-utili)
- [Autori](#autori)

## Introduzione

Questa repository contiene al suo interno il performance test mostrato durante l'ottavo Meetup Romano dal titolo Dalla Teoria alla Pratica: Test di Performance in MuleSoft per l'ottimizzazione delle API.

## Configurazione

Prima di eseguire il test é opportuno configurare il VU Code nel file _test.js_ e modificare il contenuto dei file JSON contenuti all'interno della directory _config_.

Il VU Code utilizzato durante la demo é reperibile sotto forma di commento all'interno delle righe da 65 a 70 nel file _test.js_. Questo codice deve essere sostituito con la chiamata verso l'host dell'applicazione Mulesoft da testare con gli eventuali parametri necessari.

All'interno del file di config.js va aggiunto un oggetto del tipo:

```
{
    "webportalXapi": {
        "host": "<host>",
        "path": "/api/customers/{customerId}/invoices"
    }
}
```

Infine, qualora l'endpoint da chiamare sia protetto da meccanismi di autenticazione che richiedano a valle del codice aggiuntivo lo si può implementare all'interno del file: ```common/auth/auth.js```. Questo codice verrà richiamato all'inzio dei test e sarà comune a tutti i VU.


## Esecuzione

Una prima modalità con cui si può eseguire il test é quella di avvalersi della GitHub actions configurata. Lo si può fare andando su Actions, selezionando a sinistra ```UAT performance test``` e cliccando sul bottone ```Run Workflow```.

In alternativa, una volta installato k6 sulla propria macchina locale é possibile avviare il test - dopo essersi spostati sulla directory che lo contiene- con il seguente comando: ```k6 run test.js```

## Link Utili

[Recording della sessione](https://meetups.mulesoft.com/events/details/mulesoft-rome-presents-dalla-teoria-alla-pratica-test-di-performance-in-mulesoft-per-lottimizzazione-delle-api/)

[Documentazione K6](https://k6.io/docs/)

[Rome MuleSoft Meetup Group](https://meetups.mulesoft.com/rome/)

## Autori

Andrea Formichetti - <andrea.formichetti@x3solutions.it>

Dario Lorenzoni - <dlorenzoni@salesforce.com> 

