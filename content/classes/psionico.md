---
page: psionico
---

# Lo psionico

Lo Psionico e' la classe che incarna la maestria nell'uso dei poteri mentali.
Lo Psionico agisce sempre tramite il suo pensiero (quando non decide di
menare le mani) e talvolta il pensiero puo' raggiungere perfino la
velocita' della luce.

Ad Alma (via delle gilde) e' presente una gilda degli psionici con un maestro
che iniziera' i giovani psionici ai primi rudimenti della loro arte.

> Velocita' della luce

Lo Psionico con la propria concentrazione riesce a far viaggiare i propri
pensieri alla velocita' della luce. L' effetto e' attivato sullo
Psionico a seguito dell'uso di [colpo psichico](#colpo-psichico), e genera dei bonus alle varie
abilita'.

Viene indicato nel prompt come 'Lightspeed!' e viene segnalato dal messaggio:
'La tua mente si apre per un istante all'infinito!'

## Lista skill

| Livello | Nome skill                                                | Note              |
| ------- | --------------------------------------------------------- | ----------------- |
| 1       | [Percezione Extrasensoriale](#percezione-extrasensoriale) |
| 1       | [Morsa Psichica ](#morsa-psichica)                        |
| 1       | [Mantello di Fiamme ](#mantello-di-fiamme)                |
| 5       | [Colpo Psichico ](#colpo-psichico)                        |
| 5       | [Lame Psioniche ](#lame-psioniche)                        | Classe Principale |
| 6       | [Rinforzo Psichico ](#rinforzo-psichico)                  |
| 7       | [Visione ](#visione)                                      |
| 7       | [Cannibalizzare ](#cannibalizzare)                        |
| 8       | [Camaleonte ](#camaleonte)                                |
| 10      | [Scudo Psichico ](#scudo-psichico)                        |
| 12      | [Assalto Psionico ](#assalto-psionico)                    | Classe Principale |
| 14      | [Riparazione Cellulare ](#riparazione-cellulare)          |
| 14      | [Mente Oltre il Corpo ](#mente-oltre-il-corpo)            |
| 15      | [Colpo Superiore ](#colpo-superiore)                      |
| 15      | [Invisibilita Psichica ](#invisibilita-psichica)          |
| 18      | [Pensiero Imponente ](#pensiero-imponente)                |
| 20      | [Viaggio Probabilistico ](#viaggio-probabilistico)        |
| 20      | [Maestria con lo Scudo ](#maestria-con-lo-scudo)          |
| 20      | [Scarica di Adrenalina ](#scarica-di-adrenalina)          |
| 21      | [Mano di Energia ](#mano-di-energia)                      |
| 21      | [Cancella la Mente ](#cancella-la-mente)                  |
| 23      | [Senso del Pericolo ](#senso-del-pericolo)                |
| 25      | [Schiaffo Violento ](#schiaffo-violento)                  |
| 30      | [Chiaroveggenza ](#chiaroveggenza)                        |
| 30      | [Armi a due Mani ](#armi-a-due-mani)                      |
| 31      | [Manipola Fiamme ](#manipola-fiamme)                      | Classe Principale |
| 38      | [Lampo di Energia ](#lampo-di-energia)                    |
| 40      | [Ambidestria ](#ambidestria)                              |
| 48      | [Morsa Brutale ](#morsa-brutale)                          |
| 49      | [Pugno Serrato ](#pugno-serrato)                          |
| 50      | [Vuoto Mentale ](#vuoto-mentale)                          |

## Descrizone skill

### Percezione Extrasensoriale

| Attributo       | Valore                                    |
| --------------- | ----------------------------------------- |
| Nome Inglese    | Esp                                       |
| Comando         | focalizza // mind nome abilita' bersaglio |
| Restrizioni     | Nessuna.                                  |
| Bersagli        | Creatura (stanza)                         |
| Causa Ostilita' | No                                        |
| Attesa          | 0.75 round (3 secondi)                    |
| Pos. Minima     | In piedi                                  |
| Usa Dadi Arma   | Si'                                       |
| Durata          | 5 tick                                    |
| Scuola          | Psichico                                  |
| Costo Mana      | 10                                        |

> Descrizione

Lo Psionico sfrutta i suoi poteri per comprendere intenzione e significato
delle comunicazioni altrui, di fatto consentendo di comprendere qualsiasi linguaggio.

### Morsa Psichica

| Attributo       | Valore                                    |
| --------------- | ----------------------------------------- |
| Nome Inglese    | Psychic Crush                             |
| Comando         | focalizza // mind nome abilita' bersaglio |
| Restrizioni     | Nessuna.                                  |
| Bersagli        | Creatura (stanza)                         |
| Causa Ostilita' | Si'                                       |
| Attesa          | 0.75 round (3 secondi)                    |
| Pos. Minima     | In combattimento                          |
| Usa Dadi Arma   | Si'                                       |
| Eff. Fisica     | 75%                                       |
| Eff. Magica     | 300%                                      |
| Scuola          | Psichico                                  |
| Costo Mana      | 10                                        |
| Guad. Energia   | 25                                        |

> Descrizione

Lo Psionico schiaccia la mente avversaria in una morsa. Le condizioni
influenzano profondamente l'effetto di questa abilita', che richiede profonda
concentrazione: avere in uso Mano di Energia e non essere ingaggiato in
combattimento garantiscono 100% Eff. Magica ulteriore ciascuno.

Inoltre, data l'affinita', riduce di 1 il cooldown relativo all'uso delle abilita'
legate a Mano di Energia.

Durante Velocita' della Luce, il guadagno di Energia aumenta a 50.

### Mantello di fiamme

| Attributo       | Valore                                   |
| --------------- | ---------------------------------------- |
| Nome Inglese    | Flame Shroud                             |
| Comando         | focalizza // mind nome abilita'          |
| Restrizioni     | Nessuna.                                 |
| Causa Ostilita' | No                                       |
| Attesa          | 0.75 round (3 secondi)                   |
| Pos. Minima     | In combattimento                         |
| Usa Dadi Arma   | No                                       |
| Durata          | Permanente                               |
| Scuola          | Fuoco                                    |
| Costo Mana      | 25                                       |
| Simbolo Prompt  | F                                        |
| Aura            | NomePg e' avvolto in un manto di fiamme. |

> Descrizione

Lo Psionico evoca un fluido mantello di fiamme attorno a se', che reagisce
ai colpi in corpo a corpo subiti, attaccando in risposta l'aggressore, consumando
una carica. In partenza, e ad ogni utilizzo, le cariche vengono riportate a 80,
o 120 se usato durante Velocita' della Luce.

L'incredibile controllo esercitato
dallo Psionico gli consente di manipolare lo scudo, tramite l'abilita' Manipola
Fiamme,consumandone cariche attivamente.

Lo scudo svanisce quando le cariche arrivano a zero. Inoltre, la risposta viene
negata qualora l'attaccante sia a sua volta protetto da uno scudo elementale.

### Colpo Psichico

| Attributo       | Valore                                    |
| --------------- | ----------------------------------------- |
| Nome Inglese    | Psionic Blast                             |
| Comando         | focalizza // mind nome abilita' bersaglio |
| Restrizioni     | Nessuna.                                  |
| Bersagli        | Creatura (stanza)                         |
| Causa Ostilita' | Si'                                       |
| Attesa          | 0.75 round (3 secondi)                    |
| Pos. Minima     | In combattimento                          |
| Usa Dadi Arma   | Si'                                       |
| Eff. Fisica     | 50%                                       |
| Eff. Magica     | 125%                                      |
| Scuola          | Psichico                                  |
| Costo Energia   | 30                                        |

> Descrizione

Lo Psionico lancia un attacco psichico diretto verso il bersaglio.
La connessione tra le due menti e' in grado di generare una condizione
di intuizione assoluta, comunemente chiamata Velocita' della Luce, che
riduce a zero il tempo di attesa per l'abilita' successiva, e ha altri vari
effetti positivi, variabili a seconda dell'abilita' utilizzata.

La possibilita' base che questo avvenga e' del 30%, ma ogni fallimento
rende l'episodio piu' probabile, aumentando le possibilita' di un ulteriore
30%, fino al primo successo.

### Lame Psioniche

| Attributo       | Valore                          |
| --------------- | ------------------------------- |
| Nome Inglese    | Psionic Blades                  |
| Comando         | focalizza // mind nome abilita' |
| Restrizioni     | Solo Classe Principale          |
| Causa Ostilita' | No                              |
| Attesa          | 0.75 round (3 secondi)          |
| Pos. Minima     | In combattimento                |
| Usa Dadi Arma   | Si'                             |
| Scuola          | Psichico                        |
| Costo Mana      | 15                              |

> Descrizione

Lo Psionico si concentra sulle proprie armi, imbevendole di energia mentale,
garantendo un bonus di 30% Eff. Magica agli attacchi in corpo a corpo, e tramutandone
il danno in Psichico. Inoltre, ogni attacco portato a segno garantisce 5 Energia.
Questa abilita' abilita l'uso di Assalto Psionico, ed e' esclusiva con Mano di Energia.

### Rinforzo Psichico

| Attributo       | Valore                                     |
| --------------- | ------------------------------------------ |
| Nome Inglese    | Psionic Enhancement                        |
| Comando         | focalizza // mind nome abilita' statistica |
| Restrizioni     | Nessuna.                                   |
| Causa Ostilita' | No                                         |
| Attesa          | 0.75 round (3 secondi)                     |
| Pos. Minima     | In combattimento                           |
| Usa Dadi Arma   | Si'                                        |
| Scuola          | Psichico                                   |
| Costo Mana      | 15                                         |

> Descrizione

Lo Psionico sfrutta la sua capacita' di modellare il proprio corpo per
potenziare temporaneamente una statistica a sua scelta, per un valore pari ad
1 + (Livello / 10).

Lo Psionico puo' utilizzare nuovamente l'abilita' per
modificare la statistica scelta, che deve essere una tra Forza, Destrezza
Intelligenza, Saggezza o Carisma.

### Visione

| Attributo       | Valore                                    |
| --------------- | ----------------------------------------- |
| Nome Inglese    | Scry                                      |
| Comando         | focalizza // mind nome abilita' bersaglio |
| Restrizioni     | Nessuna.                                  |
| Bersagli        | Creatura (mondo)                          |
| Causa Ostilita' | No                                        |
| Attesa          | 1.5 round (6 secondi)                     |
| Pos. Minima     | In piedi                                  |
| Usa Dadi Arma   | Si'                                       |
| Scuola          | Psichico                                  |
| Costo Mana      | 20                                        |

> Descrizione

Lo Psionico proietta la sua mente verso il bersaglio, e percepisce un
istante della realta' che lo circonda.

### Cannibalizzare

| Attributo       | Valore                                                 |
| --------------- | ------------------------------------------------------ |
| Nome Inglese    | Cannibalize                                            |
| Comando         | focalizza // mind nome abilita' quantita' punti ferita |
| Restrizioni     | Nessuna.                                               |
| Causa Ostilita' | No                                                     |
| Attesa          | 2.2 round (9 secondi)                                  |
| Pos. Minima     | In combattimento                                       |
| Usa Dadi Arma   | Si'                                                    |
| Scuola          | Psichico                                               |
| Costo Speciale  | i Punti Ferita indicati                                |

> Descrizione

Lo Psionico disintegra tessuti non vitali per ripristinare la propria energia
magica, restituendo il 300% della quantita' di punti ferita consumati in mana.
L'abilita' garantisce inoltre 100 Energia se utilizzata durante Velocita' della Luce.

### Camaleonte

| Attributo       | Valore                          |
| --------------- | ------------------------------- |
| Nome Inglese    | Chameleon                       |
| Comando         | focalizza // mind nome abilita' |
| Restrizioni     | Nessuna.                        |
| Causa Ostilita' | No                              |
| Attesa          | 0.75 round (3 secondi)          |
| Pos. Minima     | In piedi                        |
| Usa Dadi Arma   | Si'                             |
| Scuola          | Psichico                        |
| Costo Mana      | 25                              |

> Descrizione

Lo Psionico interviene sulla psiche delle entita' che lo circondano,
nascondendo la sua presenza ai loro occhi. La concentrazione richiesta e'
assoluta, e qualsiasi azione interrompe l'effetto.

### Scudo Psichico

| Attributo       | Valore                          |
| --------------- | ------------------------------- |
| Nome Inglese    | Psi Shield                      |
| Comando         | focalizza // mind nome abilita' |
| Restrizioni     | Nessuna.                        |
| Causa Ostilita' | No                              |
| Attesa          | 1.5 round (6 secondi)           |
| Pos. Minima     | In piedi                        |
| Usa Dadi Arma   | Si'                             |
| Scuola          | Psichico                        |
| Costo Mana      | 10                              |

> Descrizione

Lo Psionico crea una barriera di energia mentale attorno a se,
guadagnando un bonus di +15 alla Resistenza al Fisico.

### Assalto Psionico

| Attributo       | Valore                                    |
| --------------- | ----------------------------------------- |
| Nome Inglese    | Psionic Assault                           |
| Comando         | focalizza // mind nome abilita' bersaglio |
| Restrizioni     | Solo Classe Principale                    |
| Bersagli        | Creatura (stanza)                         |
| Causa Ostilita' | Si'                                       |
| Attesa          | 0.75 round (3 secondi)                    |
| Pos. Minima     | In combattimento                          |
| Usa Dadi Arma   | Si'                                       |
| Eff. Fisica     | 150%                                      |
| Eff. Magica     | 450%                                      |
| Scuola          | Psichico                                  |
| Costo Mana      | 30                                        |

> Descrizione

Lo Psionico si lancia in un assalto violento, concentrando il proprio pensiero nelle
armi gia' cariche di energia mentale.

Il contatto con la mente dell'avversario fornisce
informazioni preziose, consentendo allo Psionico di ridurre il cooldown di Chiaroveggenza
di 2 round. Se usato durante Velocita' della Luce, garantisce 40 energia.

### Riparazione Cellulare

| Attributo       | Valore                          |
| --------------- | ------------------------------- |
| Nome Inglese    | Cell Adjustment                 |
| Comando         | focalizza // mind nome abilita' |
| Restrizioni     | Nessuna.                        |
| Causa Ostilita' | No                              |
| Attesa          | 1.5 round (6 secondi)           |
| Pos. Minima     | In combattimento                |
| Usa Dadi Arma   | Si'                             |
| Eff. Fisica     | 30%                             |
| Eff. Magica     | 160%                            |
| Scuola          | Psichico                        |
| Costo Mana      | 40                              |

> Descrizione

Lo Psionico si concentra profondamente sul proprio corpo, ripristinandone le
funzioni vitali e guarendone le ferite. L'abilita' guadagna 300% Eff. Magica se
usata durante Velocita' della Luce.

### Mente oltre il corpo

| Attributo       | Valore                          |
| --------------- | ------------------------------- |
| Nome Inglese    | Mind Over Body                  |
| Comando         | focalizza // mind nome abilita' |
| Restrizioni     | Nessuna.                        |
| Causa Ostilita' | No                              |
| Attesa          | 0.75 round (3 secondi)          |
| Pos. Minima     | In combattimento                |
| Usa Dadi Arma   | Si'                             |
| Durata          | 12 tick                         |
| Scuola          | Psichico                        |
| Costo Mana      | 25                              |

> Descrizione

Lo Psionico sfrutta la sua capacita' di modellare il proprio corpo per
mitigare le sensazioni di fame e sete, mantenendosi in una condizione in cui
continua a poter mangiare e bere liberamente, senza saziarsi.

### Colpo Superiore

| Attributo       | Valore                          |
| --------------- | ------------------------------- |
| Nome Inglese    | Ultra Blast                     |
| Comando         | focalizza // mind nome abilita' |
| Restrizioni     | Nessuna.                        |
| Causa Ostilita' | Si'                             |
| Attesa          | 1.5 round (6 secondi)           |
| Pos. Minima     | In combattimento                |
| Usa Dadi Arma   | Si'                             |
| Eff. Fisica     | 100%                            |
| Eff. Magica     | 400%                            |
| Scuola          | Psichico                        |
| Costo Mana      | 25                              |

> Descrizione

Lo Psionico libera una violenta ondata di energia psichica, senza controllo,
travolgendo tutti gli avversari che lo circondano. L'efficacia aumenta enormemente
durante Velocita' della Luce, guadagnando un bonus di 200% Eff. Fisica e 200% Eff.
Magica.

### Invisibilita Psichica

| Attributo       | Valore                                    |
| --------------- | ----------------------------------------- |
| Nome Inglese    | Psi Invisibility                          |
| Comando         | focalizza // mind nome abilita' bersaglio |
| Restrizioni     | Nessuna.                                  |
| Bersagli        | Creatura (stanza)                         |
| Causa Ostilita' | No                                        |
| Attesa          | 0.75 round (3 secondi)                    |
| Pos. Minima     | In piedi                                  |
| Usa Dadi Arma   | Si'                                       |
| Durata          | 5 tick                                    |
| Scuola          | Psichico                                  |
| Costo Mana      | 10                                        |
| Simbolo Prompt  | I                                         |

> Descrizione

Lo Psionico interviene sulle menti dei suoi avversari, nascondendosi alla loro
vista, guadagnando un bonus di 20 all'Armatura. Non essendo realmente invisibile,
rimane percettibile senza problemi dai suoi alleati.

### Pensiero Imponente

| Attributo       | Valore                          |
| --------------- | ------------------------------- |
| Nome Inglese    | Towering Mind                   |
| Comando         | focalizza // mind nome abilita' |
| Restrizioni     | Nessuna.                        |
| Causa Ostilita' | No                              |
| Attesa          | 0.75 round (3 secondi)          |
| Pos. Minima     | In combattimento                |
| Usa Dadi Arma   | Si'                             |
| Scuola          | Psichico                        |
| Costo Mana      | 25                              |

> Descrizione

Lo Psionico protegge la psiche propria e dei suoi alleati, rendendoli
impervi ad attacchi mentali, garantendo un bonus di +25 alla Resistenza Psichica.

### Viaggio Probabilistico

| Attributo       | Valore                          |
| --------------- | ------------------------------- |
| Nome Inglese    | Probability Travel              |
| Comando         | focalizza // mind nome abilita' |
| Restrizioni     | Nessuna.                        |
| Causa Ostilita' | No                              |
| Attesa          | 0.75 round (3 secondi)          |
| Pos. Minima     | In combattimento                |
| Usa Dadi Arma   | Si'                             |
| Costo Mana      | 15                              |

### Maestria con lo scudo

### Scarica di Adrenalina

| Attributo       | Valore                          |
| --------------- | ------------------------------- |
| Nome Inglese    | Adrenalize                      |
| Comando         | focalizza // mind nome abilita' |
| Restrizioni     | Nessuna.                        |
| Causa Ostilita' | No                              |
| Attesa          | 0.75 round (3 secondi)          |
| Pos. Minima     | In piedi                        |
| Usa Dadi Arma   | Si'                             |
| Scuola          | Psichico                        |
| Costo Mana      | 15                              |

> Descrizione

Lo Psionico accelera il metabolismo nel proprio corpo e in quello
dei suoi alleati, garantendo un bonus a Danno Fisico e Potere Magico pari
a 5 + ( Livello Psionico / 5 ).

La scarica di adrenalina rende pero' piu'
incauti, causando anche un malus di -50 a Resistenza a Tutto.

### Mano di Energia

| Attributo       | Valore                          |
| --------------- | ------------------------------- |
| Nome Inglese    | Force Hand                      |
| Comando         | focalizza // mind nome abilita' |
| Restrizioni     | Nessuna.                        |
| Causa Ostilita' | No                              |
| Attesa          | 0.75 round (3 secondi)          |
| Pos. Minima     | In combattimento                |
| Usa Dadi Arma   | Si'                             |
| Scuola          | Psichico                        |
| Costo Mana      | 50                              |

> Descrizione

Lo Psionico crea una mano di energia mentale di cui ha controllo completo, guadagnando
la possibilita' di utilizzare Pugno Serrato, Morsa Brutale, e Schiaffo Violento. Questa
abilita' e' esclusiva con Lame Psioniche.

### Cancella la Mente

| Attributo       | Valore                                    |
| --------------- | ----------------------------------------- |
| Nome Inglese    | Mind Wipe                                 |
| Comando         | focalizza // mind nome abilita' bersaglio |
| Restrizioni     | Nessuna.                                  |
| Bersagli        | Creatura (stanza)                         |
| Causa Ostilita' | Si'                                       |
| Attesa          | 0.75 round (3 secondi)                    |
| Pos. Minima     | In combattimento                          |
| Usa Dadi Arma   | Si'                                       |
| Costo Mana      | 10                                        |

### Senso del Pericolo

| Attributo       | Valore                                    |
| --------------- | ----------------------------------------- |
| Nome Inglese    | Psionic Danger Sense                      |
| Comando         | focalizza // mind nome abilita' bersaglio |
| Restrizioni     | Nessuna.                                  |
| Bersagli        | Creatura (stanza)                         |
| Causa Ostilita' | No                                        |
| Attesa          | 0.75 round (3 secondi)                    |
| Pos. Minima     | In combattimento                          |
| Usa Dadi Arma   | Si'                                       |
| Scuola          | Psichico                                  |
| Costo Mana      | 25                                        |

> Descrizione

Lo Psionico affina i propri sensi per cercare di percepire pericoli
mortali nelle locazioni adiacenti a dove si trova.

### Schiaffo Violento

| Attributo       | Valore                                    |
| --------------- | ----------------------------------------- |
| Nome Inglese    | Knockdown Slap                            |
| Comando         | focalizza // mind nome abilita' bersaglio |
| Restrizioni     | Nessuna.                                  |
| Bersagli        | Creatura (stanza)                         |
| Causa Ostilita' | Si'                                       |
| Attesa          | 0.75 round (3 secondi)                    |
| Pos. Minima     | In combattimento                          |
| Usa Dadi Arma   | Si'                                       |
| Eff. Magica     | 200%                                      |
| Scuola          | Psichico                                  |
| Costo Mana      | 30                                        |
| Cooldown        | 6 round                                   |

> Descrizione

Lo Psionico utilizza la Mano di Energia per colpire l'avversario con uno schiaffo
violento, scagliandolo in terra e causando 2 round di attesa.

Il cooldown di questa abilita' e' condiviso con Pugno Serrato e Morsa Brutale,
ed e' ridotto a 4 round durante Velocita' della Luce.

### Chiaroveggenza

| Attributo       | Valore                          |
| --------------- | ------------------------------- |
| Nome Inglese    | Clairvoyance                    |
| Comando         | focalizza // mind nome abilita' |
| Restrizioni     | Nessuna.                        |
| Causa Ostilita' | No                              |
| Attesa          | 0.75 round (3 secondi)          |
| Pos. Minima     | In combattimento                |
| Usa Dadi Arma   | Si'                             |
| Durata          | 4 round                         |
| Scuola          | Psichico                        |
| Costo Mana      | 15                              |
| Cooldown        | 16 round                        |

> Descrizione

Lo Psionico esplora le menti degli avversari per prevedere l'immediato futuro,
riducendo tutto il danno subito del 10% e rendendolo Incrollabile per la
durata dell'effetto.

Se utilizzata durante Velocita' della Luce, il cooldown e'
ridotto a 8 round. Inoltre, l'utilizzo di Assalto Psionico fornisce
utili dettagli allo Psionico, riducendo il cooldown di 2 round.

### Armi a due mani

Impugnare un'arma a due mani riduce il numero di attacchi di uno, con un
minimo di 1. Per impugnare un'arma a due mani e' sufficiente avere la seconda
mano libera.
Un attacco a due mani ha un moltiplicatore base di 300%.

### Manipola Fiamme

| Attributo       | Valore                                                         |
| --------------- | -------------------------------------------------------------- |
| Nome Inglese    | Flame Bend                                                     |
| Comando         | focalizza // mind nome abilita' convoglia / potenzia / espandi |
| Restrizioni     | Solo Classe Principale                                         |
| Causa Ostilita' | No                                                             |
| Attesa          | 0.75 round (3 secondi)                                         |
| Pos. Minima     | In combattimento                                               |
| Usa Dadi Arma   | Si'                                                            |
| Eff. Fisica     | 100%                                                           |
| Eff. Magica     | 300%                                                           |
| Scuola          | Fuoco                                                          |
| Costo Mana      | 25                                                             |
| Costo Energia   | 20                                                             |

> Descrizione

Lo Psionico manipola il mantello di fiamme che lo circonda, consumando 5
cariche, e scegliendo un'opzione tra convoglia, potenzia ed espandi.

-   Convoglia danneggia per 100% Eff. Magica + 10% per ogni carica residua il
    bersaglio in corpo a corpo.
-   Espandi estende il mantello di fiamme in tutta la
    stanza, causando 60% Eff. Fisica e 180% Eff. Magica a tutti i bersagli ostili
-   Potenzia aumenta temporanemante il danno causato dalla reazione dello scudo
    agli attacchi in corpo a corpo di 60% Eff. Fisica e 60% Eff. Magica.

### Lampo di Energia

| Attributo       | Valore                                    |
| --------------- | ----------------------------------------- |
| Nome Inglese    | Energy Blast                              |
| Comando         | focalizza // mind nome abilita' bersaglio |
| Restrizioni     | Nessuna.                                  |
| Bersagli        | Creatura (stanza)                         |
| Causa Ostilita' | Si'                                       |
| Attesa          | 0.75 round (3 secondi)                    |
| Pos. Minima     | In combattimento                          |
| Usa Dadi Arma   | Si'                                       |
| Eff. Magica     | 400%                                      |
| Scuola          | Energia                                   |
| Costo Mana      | 25                                        |

> Descrizione

Lo Psionico lancia un attacco violento verso il bersaglio, amplificato
dallo stato di Velocita' della Luce, che garantisce un bonus di 300% Eff.
Magica.

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

### Morsa Brutale

| Attributo       | Valore                                    |
| --------------- | ----------------------------------------- |
| Nome Inglese    | Crushing Grip                             |
| Comando         | focalizza // mind nome abilita' bersaglio |
| Restrizioni     | Nessuna.                                  |
| Bersagli        | Creatura (stanza)                         |
| Causa Ostilita' | Si'                                       |
| Attesa          | 0.75 round (3 secondi)                    |
| Pos. Minima     | In combattimento                          |
| Usa Dadi Arma   | Si'                                       |
| Eff. Magica     | 300%                                      |
| Durata          | 12 round                                  |
| Scuola          | Psichico                                  |
| Costo Mana      | 25                                        |
| Cooldown        | 4 round                                   |

> Descrizione

Lo Psionico utilizza la Mano di Energia per stringere l'avversario in una morsa
brutale, causando Azzoppato. Utilizzi successivi su bersaglio ancora affetto
guadagnano 80% Eff. Magica e rinnovano la durata.

Il cooldown di questa abilita' e' condiviso con Pugno Serrato e Schiaffo Violento,
ed e' ridotto a 2 round durante Velocita' della Luce.

### Pugno Serrato

| Attributo       | Valore                                    |
| --------------- | ----------------------------------------- |
| Nome Inglese    | Clenched Fist                             |
| Comando         | focalizza // mind nome abilita' bersaglio |
| Restrizioni     | Nessuna.                                  |
| Bersagli        | Creatura (stanza)                         |
| Causa Ostilita' | Si'                                       |
| Attesa          | 0.75 round (3 secondi)                    |
| Pos. Minima     | In combattimento                          |
| Usa Dadi Arma   | Si'                                       |
| Eff. Magica     | 450%                                      |
| Scuola          | Psichico                                  |
| Costo Mana      | 20                                        |
| Guad. Energia   | 80                                        |
| Cooldown        | 4 round                                   |

> Descrizione

Lo Psionico utilizza la Mano di Energia per sferrare un pugno violento.
Il cooldown di questa abilita' e' condiviso con Morsa Brutale e Schiaffo Violento.

### Vuoto Mentale

| Attributo       | Valore                                    |
| --------------- | ----------------------------------------- |
| Nome Inglese    | Mindblank                                 |
| Comando         | focalizza // mind nome abilita' bersaglio |
| Restrizioni     | Nessuna.                                  |
| Bersagli        | Creatura (stanza)                         |
| Causa Ostilita' | No                                        |
| Attesa          | 0.75 round (3 secondi)                    |
| Pos. Minima     | In combattimento                          |
| Usa Dadi Arma   | Si'                                       |
| Costo Mana      | 15                                        |
