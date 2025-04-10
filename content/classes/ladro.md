---
page: ladro
---

# Il ladro

Il ladro e` la classe che incarna la maestria nel sotterfugio e nel trovare 
soluzioni non convenzionali alle problematiche. Il ladro tende a non essere la 
prima linea di combattimento e di solito cerca di sorprendere l`avversario
evitando il combattimento a viso aperto.

> Il ladro utilizza una risorsa aggiuntiva, i punti combo per le proprie abilita`

I punti combo sono una una risorsa aggiuntiva del ladro, che rappresentano
quanto il ladro abbia variato i suoi attacchi rendendolo cosi` imprevedibile 
all`avversario.
I punti combo garantiscono effetti bonus alle abilita` del ladro.

I punti combo hanno un valore da 0 a 4 e sono visualizzabili nel prompt
con il parametro %K

## Lista skill

| Livello | Nome skill                                            | Note              |
| ------- | ----------------------------------------------------- | ----------------- |
| 1       | [Muoversi Silenziosamente](#muoversi-silenziosamente) |
| 1       | [Nascondersi ](#nasconders)                           |
| 1       | [Scassinare ](#scassinare)                            |
| 1       | [Spiare ](#spiare)                                    |
| 1       | [Ritirarsi ](#ritirarsi)                              |
| 1       | [Pugnalare ](#pugnalare)                              |
| 5       | [Sgambetta ](#sgambetta)                              |
| 5       | [Sventra ](#sventra)                                  |
| 8       | [Ventaglio di Lame ](#ventaglio-di-lame)              |
| 10      | [Ambidestria ](#ambidestria)                          |
| 10      | [Evasione ](#evasione)                                |
| 10      | [Volteggio ](#volteggio)                              |
| 10      | [Avvelena le Armi ](#avvelena-le-armi)                |
| 15      | [Sangue Freddo ](#sangue-freddo)                      |
| 18      | [Cospira ](#cospira)                                  |
| 21      | [Aggirare ](#aggirare)                                |
| 21      | [Rinvigorisci ](#rinvigorisci)                        | Classe Principale |
| 21      | [Accoltella ](#accoltella)                            |
| 30      | [Maestria con lo Scudo ](#maestria-con-lo-scudo)      |
| 31      | [Svanisci ](#svanisci)                                |
| 50      | [Armi a due Mani ](#armi-a-due-mani)                  |
| 50      | [Assalto Dalle Tenebre ](#assalto-dalle-tenebre)      | Classe Principale |

## Descrizione skill

### Muoversi Silenziosamente

### Nascondersi

### Scassinare

Come i migliori ladri, potete imparare a scassinare le porte, abilita` una volta
nota solo ai professionisti e poi resa disponibile tramite l`uso di costosi e
fragili attrezzi, oggi e` nelle mani (letteralmente) di tutti, tramite il
comando:

> scassina oggetto/uscita<br>
> pick oggetto/uscita

### Spiare

### Ritirarsi

### Pugnalare

| Attributo        | Valore                                  |
| ---------------- | --------------------------------------- |
| Nome Inglese     | Backstab                                |
| Comando          | esegui // skill nome abilita` bersaglio |
| Restrizioni      | Nessuna.                                |
| Bersagli         | Creatura (stanza)                       |
| Causa Ostilita\` | Si`                                     |
| Attesa           | 0.75 round (3 secondi)                  |
| Pos. Minima      | In combattimento                        |
| Usa Dadi Arma    | Si`                                     |
| Eff. Fisica      | 700%                                    |
| Scuola           | Perforazione                            |
| Costo Energia    | 40                                      |

> Descrizione

Il Ladro approfitta di una situazione vantaggiosa per colpire alle spalle il
bersaglio. Utilizzabile solo se quest'ultimo e\` Vulnerabile, o se non e` in grado
di vedere il Ladro. In quest'ultimo caso, guadagna 150% Eff. Fisica.
Un ulteriore bonus di 200% Eff. Fisica si ottiene nel caso il bersaglio sia sopra
il 75% di Punti Ferita.
Genera 1 punto combo.

### Sgambetta

| Attributo        | Valore                                  |
| ---------------- | --------------------------------------- |
| Nome Inglese     | Trip                                    |
| Comando          | esegui // skill nome abilita` bersaglio |
| Restrizioni      | Nessuna.                                |
| Bersagli         | Creatura (stanza)                       |
| Causa Ostilita\` | Si`                                     |
| Attesa           | 0.5 round (2 secondi)                   |
| Pos. Minima      | In combattimento                        |
| Usa Dadi Arma    | Si`                                     |

> Descrizione

Il Ladro esegue un rapido movimento, tentando di cogliere l'avversario di sorpresa
e facendogli perdere l'equilibrio, mandandolo in terra e generando attesa per 2 round.
Questa abilita` fa parte del gruppo Acrobatica, e condivide il cooldown con
[Volteggio](#volteggio)
ed [Evasione](#evasione).

L'assenza di questo cooldown e` un requisito per [Assalto dalle Tenebre](#assalto-dalle-tenebre).

Utilizzare abilita` che sfruttano i punti combo riduce questo cooldown in funzione dei
punti utilizzati:

-   1 o 2 punti combo: -1 round di cooldown
-   3 punti combo: -2 round di cooldown
-   4 punti combo: -3 round di cooldown

### Sventra

| Attributo        | Valore                                     |
| ---------------- | ------------------------------------------ |
| Nome Inglese     | Disembowel                                 |
| Comando          | esegui // skill nome abilita` bersaglio    |
| Restrizioni      | Nessuna.                                   |
| Bersagli         | Creatura (stanza)                          |
| Causa Ostilita\` | Si`                                        |
| Attesa           | 0.75 round (3 secondi)                     |
| Pos. Minima      | In combattimento                           |
| Usa Dadi Arma    | Si`                                        |
| Eff. Fisica      | 450% / 550% / 675% / 875% (su punti combo) |
| Costo Energia    | 40                                         |

> Descrizione

Il Ladro sfrutta i punti combo accumulati e porta un attacco terribile.
Richiede almeno 1 punto combo.

### Ventaglio di Lame

| Attributo       | Valore                                     |
| --------------- | ------------------------------------------ |
| Nome Inglese    | Fan of Knives                              |
| Comando         | esegui // skill nome abilita`              |
| Restrizioni     | Nessuna.                                   |
| Causa Ostilita` | No                                         |
| Attesa          | 0.75 round (3 secondi)                     |
| Pos. Minima     | In combattimento                           |
| Usa Dadi Arma   | Si`                                        |
| Eff. Fisica     | 180% / 240% / 320% / 400% (su punti combo) |
| Scuola          | Perforazione                               |

> Descrizione

Il Ladro sfrutta i punti combo accumulati, scagliando un ventaglio di.
lame verso tutti i bersagli ostili che riesce a vedere.

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

### Evasione

| Attributo       | Valore                        |
| --------------- | ----------------------------- |
| Nome Inglese    | Evasion                       |
| Comando         | esegui // skill nome abilita` |
| Restrizioni     | Nessuna.                      |
| Causa Ostilita` | No                            |
| Attesa          | 0.5 round (2 secondi)         |
| Pos. Minima     | In combattimento              |
| Usa Dadi Arma   | Si`                           |

> Descrizione

Il Ladro si concentra nell'evitare gli attacchi avversari, sfruttando le sue
doti acrobatiche. Tutti gli attacchi corpo a corpo e le abilita` attive dirette verso
il Ladro saranno evitate per i successivi 2 round, ed ogni schivata ha il 20% di
generare 1 punto combo.
Questa abilita` fa parte del gruppo Acrobatica, e condivide il cooldown con [Volteggio](#volteggio)
e [Sgambetta](#sgambetta).

L'assenza di questo cooldown e` un requisito per [Assalto dalle Tenebre](#assalto-dalle-tenebre).

Utilizzare abilita` che sfruttano i punti combo riduce questo cooldown in funzione dei
punti utilizzati:

-   1 o 2 punti combo: -1 round di cooldown
-   3 punti combo: -2 round di cooldown
-   4 punti combo: -3 round di cooldown

### Volteggio

| Attributo        | Valore                                  |
| ---------------- | --------------------------------------- |
| Nome Inglese     | Vault                                   |
| Comando          | esegui // skill nome abilita` bersaglio |
| Restrizioni      | Nessuna.                                |
| Bersagli         | Creatura (stanza)                       |
| Causa Ostilita\` | Si`                                     |
| Attesa           | 0.5 round (2 secondi)                   |
| Pos. Minima      | In combattimento                        |
| Usa Dadi Arma    | Si`                                     |
| Cooldown         | 16 round                                |

> Descrizione

Il Ladro volteggia oltre il proprio avversario, recuperando immediatamente
una grande quantita` di Energia. Qualora l'avversario sia attualmente ingaggiato
in corpo a corpo con il Ladro, non riuscira` a portare attacchi nel round successivo.
Questa abilita` fa parte del gruppo Acrobatica, e condivide il cooldown con [Evasione](#evasione)
e [Sgambetto](#sgambetto).

L'assenza di questo cooldown e` un requisito per [Assalto dalle Tenebre](#assalto-dalle-tenebre).

Utilizzare abilita` che sfruttano i punti combo riduce questo cooldown in funzione dei
punti utilizzati:

-   1 o 2 punti combo: -1 round di cooldown
-   3 punti combo: -2 round di cooldown
-   4 punti combo: -3 round di cooldown

### Avvelena Armi

| Attributo       | Valore                                       |
| --------------- | -------------------------------------------- |
| Nome Inglese    | Envenom Weapons                              |
| Comando         | esegui // skill nome abilita` tipo di veleno |
| Restrizioni     | Nessuna.                                     |
| Causa Ostilita` | No                                           |
| Attesa          | 0.75 round (3 secondi)                       |
| Pos. Minima     | In combattimento                             |
| Usa Dadi Arma   | No                                           |
| Eff. Fisica     | 30%                                          |
| Eff. Magica     | 30%                                          |
| Durata          | 60 round                                     |
| Scuola          | Natura                                       |

> Descrizione

Il Ladro avvelena le lame delle proprie armi, scegliendo una delle possibili
formule a sua disposizione. Ogni attacco portato in corpo a corpo ha il 30% di
applicare il veleno, mentre la probabilita\` sale al 50% sull'utilizzo di abilita`
attive che generano punti combo.

I veleni possibli sono:

-   Canalizzante: Genera energia.
-   Prosciugante: Guarisce il Ladro.
-   Maledetto : Riduce l'effetto delle cure sul bersaglio.
-   Mortale : Causa danno natura immediato.

Il Ladro puo` anche scegliere di pulire le armi, usando l'opzione Rimuovi.

### Sangue Freddo

| Attributo       | Valore                        |
| --------------- | ----------------------------- |
| Nome Inglese    | Cold Blood                    |
| Comando         | esegui // skill nome abilita` |
| Restrizioni     | Nessuna.                      |
| Causa Ostilita` | No                            |
| Attesa          | 0.5 round (2 secondi)         |
| Pos. Minima     | In combattimento              |
| Usa Dadi Arma   | Si`                           |
| Guad. Energia   | 60                            |
| Cooldown        | 16 round                      |

> Descrizione

Il Ladro si concentra per portare un colpo preciso e mortale, senza farsi
distrarre dalle circostanze. La prossima abilita` attiva mandata a segno ha il
100% di essere un Colpo Critico.

Questa abilita` fa parte del gruppo Gioco Sporco, e condivide il cooldown con
[Cospira](#cospira) e [Svanisci](#svanisci).

L'assenza di questo cooldown e` un requisito per
[Assalto dalle Tenebre](#assalto-dalle-tenebre).

Utilizzare abilita` che generano punti combo riduce
questo cooldown di un numero di round pari alla quantita` di punti combo generati.

### Cospira

| Attributo        | Valore                                  |
| ---------------- | --------------------------------------- |
| Nome Inglese     | Connive                                 |
| Comando          | esegui // skill nome abilita` bersaglio |
| Restrizioni      | Nessuna.                                |
| Bersagli         | Creatura (stanza)                       |
| Causa Ostilita\` | Si`                                     |
| Attesa           | 0.5 round (2 secondi)                   |
| Pos. Minima      | In combattimento                        |
| Usa Dadi Arma    | Si`                                     |
| Durata           | 10 round                                |
| Scuola           | Umbra                                   |
| Cooldown         | 16 round                                |

> Descrizione

Il Ladro pianifica accuratamente le sue prossime mosse. Genera immediatamente
2 punti combo, e tutto il danno causato al bersaglio prescelto e` aumentato del 15%.

Questa abilita` fa parte del gruppo Gioco Sporco, e condivide il cooldown con
[Svanisci](#svanisci) e [Sangue Freddo](#sangue-freddo).

L'assenza di questo cooldown e` un requisito
per [Assalto dalle Tenebre](#assalto-dalle-tenebre).

Utilizzare abilita` che generano punti combo riduce
questo cooldown di un numero di round pari alla quantita` di punti combo generati.

### Aggirare

| Attributo        | Valore                                  |
| ---------------- | --------------------------------------- |
| Nome Inglese     | Circle                                  |
| Comando          | esegui // skill nome abilita` bersaglio |
| Restrizioni      | Nessuna.                                |
| Bersagli         | Creatura (stanza)                       |
| Causa Ostilita\` | Si`                                     |
| Attesa           | 0.75 round (3 secondi)                  |
| Pos. Minima      | In combattimento                        |
| Usa Dadi Arma    | Si`                                     |
| Eff. Fisica      | 450%                                    |

> Descrizione

Il Ladro sfrutta la sua mobilita` per aggirare il bersaglio e colpirlo alle
spalle. Questo attacco non puo` essere bloccato con lo scudo, e guadagna 150% Eff.
Fisica se il bersaglio e` impegnato in combattimento con un bersaglio diverso dal
Ladro che porta l'attacco. Genera 1 punto combo.

### Rinvigorisci

| Attributo       | Valore                                     |
| --------------- | ------------------------------------------ |
| Nome Inglese    | Invigorate                                 |
| Comando         | esegui // skill nome abilita`              |
| Restrizioni     | Solo Classe Principale                     |
| Causa Ostilita` | No                                         |
| Attesa          | 0.75 round (3 secondi)                     |
| Pos. Minima     | In combattimento                           |
| Usa Dadi Arma   | Si`                                        |
| Eff. Fisica     | 100% / 125% / 175% / 225% (su punti combo) |
| Eff. Magica     | 50%                                        |
| Scuola          | Natura                                     |
| Costo Energia   | 40                                         |

> Descrizione

Il Ladro sfrutta i punti combo accumulati per rinvigorirsi, guarendo
le sue ferite. Richiede almeno 1 punto combo.

### Accoltella

| Attributo        | Valore                                      |
| ---------------- | ------------------------------------------- |
| Nome Inglese     | Shiv                                        |
| Comando          | esegui // skill <nome abilita`> <bersaglio> |
| Restrizioni      | Nessuna.                                    |
| Bersagli         | Creatura (stanza)                           |
| Causa Ostilita\` | Si`                                         |
| Attesa           | 0.75 round (3 secondi)                      |
| Pos. Minima      | In combattimento                            |
| Usa Dadi Arma    | Si`                                         |
| Eff. Fisica      | 250%                                        |
| Scuola           | Perforazione                                |
| Costo Energia    | 60                                          |

> Descrizione

Il Ladro estrae un coltello nascosto per portare un affondo improvviso.
Applica sempre il veleno, qualora sia presente sulle armi.
Genera 2 punti combo.

### Maestria Con Lo Scudo

### Svanisci

| Attributo       | Valore                        |
| --------------- | ----------------------------- |
| Nome Inglese    | Vanish                        |
| Comando         | esegui // skill nome abilita` |
| Restrizioni     | Nessuna.                      |
| Causa Ostilita` | No                            |
| Attesa          | 0.5 round (2 secondi)         |
| Pos. Minima     | In combattimento              |
| Usa Dadi Arma   | Si`                           |
| Cooldown        | 16 round                      |

> Descrizione

Il Ladro utilizza una preparazione alchemica per creare istantaneamente una
nuvola di fumo, sfruttando la confusione per svanire nel nulla, interrompendo ogni
combattimento in cui era coinvolto e tornando nascosto tra le ombre.

I bersagli che
erano in quel momento ingaggiati con il ladro subiscono 1 round di attesa.

Questa abilita` fa parte del gruppo Gioco Sporco, e condivide il cooldown con [Cospira](#cospira)
e [Sangue Freddo](#sangue-freddo).

L'assenza di questo cooldown e` un requisito per [Assalto dalle Tenebre](#assalto-dalle-tenebre).

Utilizzare abilita` che generano punti combo riduce questo cooldown di un numero di round
pari alla quantita` di punti combo generati.

### Armi a due mani

Impugnare un'arma a due mani riduce il numero di attacchi di uno, con un
minimo di 1. Per impugnare un'arma a due mani e' sufficiente avere la seconda
mano libera.
Un attacco a due mani ha un moltiplicatore base di 300%.

### Assalto Dalle Tenebre

| Attributo        | Valore                                  |
| ---------------- | --------------------------------------- |
| Nome Inglese     | Shadowstrike                            |
| Comando          | esegui // skill nome abilita` bersaglio |
| Restrizioni      | Solo Classe Principale                  |
| Bersagli         | Creatura (stanza)                       |
| Causa Ostilita\` | Si`                                     |
| Attesa           | 0.75 round (3 secondi)                  |
| Pos. Minima      | In combattimento                        |
| Usa Dadi Arma    | Si`                                     |
| Eff. Fisica      | 600%                                    |
| Eff. Magica      | 300%                                    |
| Scuola           | Umbra                                   |
| Cooldown         | 8 round                                 |

> Descrizione

Il Ladro si mescola alle ombre, materializzandosi alle spalle di un bersaglio,
portando un attacco devastante, e creando un clone d'ombra con la meta` dei suoi
punti ferita. A causa della sua natura effimera, il clone subisce il 10% di danno
in piu`, cumulativo per ogni colpo subito.

Il bersaglio di Assalto dalle Tenebre, e tutti gli avversari correntemente ingaggiati
con il Ladro, si troveranno improvvisamente ad affrontare il clone, ed in preda ad
Ossessione.

Questa abilita\` puo\` essere usata solo se il cooldown delle abilita` di Acrobatica e
Gioco Sporco e` libero, e manda entrambe in cooldown di 8 round.
