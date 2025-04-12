---
page: barbaro
---

# Il barbaro

Il barbaro e' la classe che incarna il combattente piu' violento, senza grossa
tecnica ma con tanta rabbia. Il barbaro non e' un esteta del combattimento, ma
affronta l'avversario con spietata efficacia.

Il barbaro si esalta alla vista del sangue e nel
causare ferite profonde. La sua violenza e rabbia, la furia nel combattimento
(berserk) si esalta usando le armi a due mani.

Subito fuori dalla porta ovest di Alma lungo la via verso Ostia (piccola
deviazione a nord), un maestro iniziera' i giovani barbari ai primi rudimenti
di rabbia e violenza.

> Sanguinamento

Alcune abilita'del barbaro causano il sanguinamento dell'avversario.
Questa'ultimo causa un danno di base a round per una durata base di 5 round.

La durata rimanente del sanguinamento dell'avversario si vede nel prompt
nel parametro %K come Bx, dove x sono i round rimanenti.

> Ferite profonde

Il Barbaro non risparmia i suoi colpi, ed ha una possibilita' di infliggere
una ferita profonda ai propri avversari. La possibilita' aumenta con l'uso di
armi a due mani.

Le abilita' attive infliggono sempre almeno una ferita profonda.
Colpi Critici o Eccezionali che causano una ferita profonda
ne causeranno una aggiuntiva.
Causare ferita profonda, inoltre, garantisce energia al Barbaro.

Il numero di ferite profonde applicate all'avversario si vede nel prompt
nel parametro %K come Wx, dove x e' il numero di ferite.

## Lista skill

| Livello | Nome skill                                      | Note |
| ------- | ----------------------------------------------- | ---- |
| 1       | [Sfondare le Porte ](#sfondare-le-porte)        |
| 1       | [Scassinare ](#scassinare)                      |
| 1       | [Cambiare Nemico ](#cambiare-nemico)            |
| 1       | [Soccorrere ](#soccorrere)                      |
| 1       | [Nascondersi ](#nascondersi)                    |
| 1       | [Trancia ](#trancia)                            |
| 1       | [Schianta ](#schianta)                          |
| 1       | [Armi a due Mani ](#armi-a-due-mani)            |
| 15      | [Testata ](#testata)                            |
| 15      | [Maestria con lo Scudo](#maestria-con-lo-scudo) |
| 16      | [Infierisci ](#infierisci)                      |
| 20      | [Bagno di Sangue ](#bagno-di-sangue)            |
| 31      | [Esecuzione ](#esecuzione)                      |
| 40      | [Ambidestria ](#ambidestria)                    |
| 48      | [Carneficina ](#carneficina)                    |

## Descrizione skill

### Sfondare le porte

Dove l'astuzia e l'abilita non arriva, facciamoci aiutare dalla forza bruta.
Se un uscita e' chiusa, possiamo sempre provare a sfondare la porta con il
comando:

> sfonda uscita/direzione

> doorbash uscita/direzione

Attenzione che non e' attivita' priva di rischi: se la porta non si apre si
rischia di restare storditi.
Ovviamente sarebbe un po' complicato sfondare un'uscita posta in alto, quindi
per vie bloccate in quella direzione, bisognera' trovare soluzioni alternative..

### Scassinare

Come i migliori ladri, potete imparare a scassinare le porte, abilita' una volta
nota solo ai professionisti e poi resa disponibile tramite l'uso di costosi e
fragili attrezzi, oggi e' nelle mani (letteralmente) di tutti, tramite il
comando:

> scassina oggetto/uscita

> pick oggetto/uscita

### Cambiare nemico

Ti consente di cambiare avversario se sei coinvolto con piu' attaccanti, o
se nella locazione sono presenti piu' avversari.

> colpisci avversario

> hit avversario

Se fallisci smetti di attaccare chiunque (ma quello che stavi attaccando
non smette di attaccare te!).

### Soccorrere

E' possibile per alcune classi soccorrere i compagni durante
un combattimento e combattere i mob al posto di un altro.
In questo modo prenderai i danni al suo posto.

> soccorri alleato

> rescue alleato

Se un'altro componente del tuo gruppo viene attaccato da un mostro potrai
correre in suo aiuto per salvarlo attraverso questa abilita', che sostituira'
te a lui.

Qualora l'abilita' sia utilizzata da un barbaro, notoriamente piu' goffo, il
personaggio salvato subira' un numero di danni pari al bonus al danno del
barbaro diviso due.
Il salvataggio non lagga chi esegue l'abilita', ma lagga due round il
salvato.
Se pero' l'abilita' e' usata dal monaco sia esecutore che salvato ricevono un
round di lag ciascuno.

### Nascondersi

### Trancia

| Attributo       | Valore                                  |
| --------------- | --------------------------------------- |
| Nome Inglese    | Cleave                                  |
| Comando         | esegui // skill nome abilita' bersaglio |
| Restrizioni     | Nessuna.                                |
| Bersagli        | Creatura (stanza)                       |
| Causa Ostilita' | Si'                                     |
| Attesa          | 0.75 round (3 secondi)                  |
| Pos. Minima     | In combattimento                        |
| Usa Dadi Arma   | Si'                                     |
| Eff. Fisica     | 300%                                    |

> Descrizione

Il Barbaro porta un attacco violento, mirando oltre il malcapitato avversario.

Se l'abilita' uccide il bersaglio, lo slancio e' sufficiente per andare a colpirne
uno ulteriore. Questo effetto continua a ripetersi fino a quando uno dei bersagli
sopravvive o non rimangono avversari in vita.

L'abilita' ha inoltre un bonus di 100% Eff. Fisica se il bersaglio e' sopra al 90% di Punti Ferita.

### Schianta

| Attributo       | Valore                                  |
| --------------- | --------------------------------------- |
| Nome Inglese    | Smash                                   |
| Comando         | esegui // skill nome abilita' bersaglio |
| Restrizioni     | Nessuna.                                |
| Bersagli        | Creatura (stanza)                       |
| Causa Ostilita' | Si'                                     |
| Attesa          | 0.75 round (3 secondi)                  |
| Pos. Minima     | In combattimento                        |
| Usa Dadi Arma   | Si'                                     |
| Eff. Fisica     | 150%                                    |
| Scuola          | Trauma                                  |
| Cooldown        | 6 round                                 |

> Descrizione

Il Barbaro afferra brutalmente l'avversario e lo scaraventa in terra, causando
2 round di attesa.

Se il bersaglio e' affetto da Sanguinamento, le ferite
vengono riaperte dall'impatto, riportando a 5 round la durata dell'effetto, senza
modificarne altre caratteristiche.

### Armi a due mani

Impugnare un'arma a due mani riduce il numero di attacchi di uno, con un
minimo di 1. Per impugnare un'arma a due mani e' sufficiente avere la seconda
mano libera.
Un attacco a due mani ha un moltiplicatore base di 300%.

### Testata

| Attributo       | Valore                                  |
| --------------- | --------------------------------------- |
| Nome Inglese    | Headbash                                |
| Comando         | esegui // skill nome abilita' bersaglio |
| Restrizioni     | Nessuna.                                |
| Bersagli        | Creatura (stanza)                       |
| Causa Ostilita' | Si'                                     |
| Attesa          | 0.75 round (3 secondi)                  |
| Pos. Minima     | In combattimento                        |
| Usa Dadi Arma   | Si'                                     |
| Eff. Fisica     | 120%                                    |
| Scuola          | Impatto                                 |

> Descrizione

Il Barbaro colpisce l'avversario con una violenta testata, causando Sanguinamento.
L'uso di questa abilita' riporta sia durata che effetto del Sanguinamento ai propri valori
base.

### Maestria con lo Scudo

### Infierisci

| Attributo       | Valore                                  |
| --------------- | --------------------------------------- |
| Nome Inglese    | Rage                                    |
| Comando         | esegui // skill nome abilita' bersaglio |
| Restrizioni     | Nessuna.                                |
| Bersagli        | Creatura (stanza)                       |
| Causa Ostilita' | Si'                                     |
| Attesa          | 0.75 round (3 secondi)                  |
| Pos. Minima     | In combattimento                        |
| Usa Dadi Arma   | Si'                                     |
| Eff. Fisica     | 350%                                    |
| Scuola          | Trauma                                  |

> Descrizione

Il Barbaro infierisce sulle ferite aperte del suo avversario. Se il bersaglio e'
affetto da Sanguinamento, il danno dell'effetto guadagna 20% Eff. Fisica. La durata
non viene modificata.

### Bagno di Sangue

| Attributo       | Valore                                  |
| --------------- | --------------------------------------- |
| Nome Inglese    | Bloodbath                               |
| Comando         | esegui // skill nome abilita' bersaglio |
| Restrizioni     | Nessuna.                                |
| Bersagli        | Creatura (stanza)                       |
| Causa Ostilita' | Si'                                     |
| Attesa          | 0.75 round (3 secondi)                  |
| Pos. Minima     | In combattimento                        |
| Usa Dadi Arma   | Si'                                     |
| Eff. Fisica     | 120%                                    |
| Scuola          | Trauma                                  |
| Cooldown        | 5 round                                 |

> Descrizione

Il Barbaro esulta coperto dal sangue dei suoi nemici, trovando nuovo vigore
e dimenticando le proprie ferite. L'abilita' guadagna 8% Eff.

Fisica per ogni Ferita Profonda sul bersaglio, e guarisce il Barbaro per il 150% del danno causato.
Se l'abilita' uccide il bersaglio, il cooldown e' azzerato.

### Esecuzione

| Attributo       | Valore                                  |
| --------------- | --------------------------------------- |
| Nome Inglese    | Execute                                 |
| Comando         | esegui // skill nome abilita' bersaglio |
| Restrizioni     | Nessuna.                                |
| Bersagli        | Creatura (stanza)                       |
| Causa Ostilita' | Si'                                     |
| Attesa          | 0.75 round (3 secondi)                  |
| Pos. Minima     | In combattimento                        |
| Usa Dadi Arma   | Si'                                     |
| Eff. Fisica     | 250%                                    |
| Scuola          | Trauma                                  |

> Descrizione

Il Barbaro tenta di porre fine all'esistenza del malcapitato bersaglio.
L'Eff. Fisica e' aumentata del 5% per ogni punto Energia consumato, e del 20% per
ogni Ferita Profonda presente sul bersaglio.

Se l'abilita' uccide il bersaglio, la scena e' talmente cruenta da generare un'applicazione di Panico in tutti gli
avversari nella locazione.

### Ambidestria

Con l'abilita' di ambidestria e' possibile per tutti il combattimento
a due armi.

-   Impugnare una seconda arma causa un attacco con l'arma secondaria
    immediatamente successivo ad ogni attacco con l'arma principale.
-   Il moltiplicatore base degli attacchi con la mano secondaria e'
    proporzionale all'apprendimento dell'abilita' Ambidestria.
-   Il moltiplicatore base degli attacchi con la mano secondaria e' 25%, ed
    incrementa di 0.5% per ogni punto in Ambidestria
-   Le armi non possono piu' cadere.

I ranger sono particolarmente ferrati in questa abilita' avendo
un'ambidestria perfetta.

### Carneficina

| Attributo       | Valore                       |
| --------------- | ---------------------------- |
| Nome Inglese    | Carnage                      |
| Comando         | esegui // skill nome abilita |
| Restrizioni     | Nessuna.                     |
| Causa Ostilita' | No                           |
| Attesa          | 0 round (0 secondi)          |
| Pos. Minima     | In combattimento             |
| Usa Dadi Arma   | Si'                          |
| Costo Energia   | 20                           |

> Descrizione

Il Barbaro si abbandona in una furia omicida. Fin quando ha Energia disponibile,
ogni attacco in corpo a corpo consuma 20 Energia, e colpisce tutti i bersagli ostili
nella locazione. L'effetto termina quando il Barbaro non ha piu' Energia disponibile.
