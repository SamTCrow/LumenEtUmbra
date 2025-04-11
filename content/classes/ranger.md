---
page: ranger
---

# Il Ranger

Il ranger e' la classe che incarna il desiderio di esplorazione.
E come tutti gli esploratori che si rispettino, il ranger e' in grado di
muoversi nel mondo senza paura di affrontare pericoli e avversari.

Il ranger ha alcune abilita' passive che riflettono la sua estrema
abilita' nell'utilizzo delle armi, anche di quelle da lancio:

La sua abilita', rapidita' e capacita' nell'uso delle armi, consente al ranger
di sorprendere l'avversario e rendere la sua difesa incerta.

Il ranger che vive in armonia con la natura solitamente viaggia ed esplora
assieme ad un compagno che lo aiuta anche nell'affrontare gli
avversari.

Subito fuori dalla porta ovest di Alma lungo la via verso Ostia (piccola
deviazione a sud), un maestro iniziera' i giovani ranger ai primi rudimenti
dell'esplorazione del mondo.

> Ambidestria perfetta

Il Ranger puo' afferrare (hold) come seconda arma qualsiasi arma, anche quelle
che normalmente non potrebbero essere afferrate ma solo impugnate.

> Disingaggiare

Il ranger e' in grado di lasciare momentaneamente il combattimento corpo a
corpo, allontanandosi dall'avversario con un semplice salto e utilizzando
abilita' a distanza. Disingaggiare e' un'abilita' passiva
del ranger e viene automaticamente attivata dall'uso dell'abilita' a distanza.
Se il ranger utilizza un'abilita' a distanza spezza l'equilibrio
dell'avversario e ripristina il bonus di difesa incerta.

L'abilita' ha un cooldown di 5 round, evidenziato nel prompt
parametro %K come CDx

Se decide di effettuare un tiro mirato rimane a distanza fino allo scoccare
dell'arma o allo scadere della durata dell'abilita' di disingaggiare,
massimo 5 round, evidenziato in prompt come Rx nel parametro %K.
Mentre si trova a distanza, il ranger subisce meno danno (25% di riduzione

-   35% con compagno Falco(evoca compagno) e i suoi attacchi corpo a corpo
    diventano attacchi a distanza (quindi non generano WeaponSpell
    a meno di avere compagno Falco)

> Difesa incerta

Quando il Ranger danneggia l'avversario per la prima volta, i suoi
attacchi implacabili applicano all'avversario l'effetto difesa incerta.
Gli attacchi repentini del ranger fanno vacillare la fiducia
(e le doti di difesa) dell'avversario.
Il ranger che attacca un pg/mob sotto effetto di difesa incerta ha
un bonus sul danno.
Il bonus iniziale e' del 30% e decade ad un ritmo di 3%/Round

Il bonus di difesa incerta sull'avversario del corpo a corpo e'
visibile nel parametro %K del prompt.

Se il ranger utilizza un'abilita' a distanza spezza l'equilibrio
dell'avversario e il bonus viene ripristinato al valore iniziale.

## Lista skill

| Livello | Nome skill                                            | Note              |
| ------- | ----------------------------------------------------- | ----------------- |
| 1       | [Cacciare ](#cacciare)                                |
| 1       | [Soccorrere ](#soccorrere)                            |
| 1       | [Sfondare le Porte ](#sfondare-le-porte)              |
| 1       | [Scassinare ](#scassinare)                            |
| 1       | [Evoca Compagno ](#evoca-compagno)                    |
| 2       | [Nascondersi ](#nascondersi)                          |
| 3       | [Tiro Rapido ](#tiro-rapido)                          |
| 4       | [Muoversi Silenziosamente](#muoversi-Silenziosamente) |
| 5       | [Primo Soccorso ](#primo-soccorso)                    |
| 8       | [Furia Animale ](#furia-animale)                      |
| 8       | [Affondo ](#affondo)                                  | Classe Principale |
| 10      | [Ambidestria ](#ambidestria)                          |
| 10      | [Scatena ](#scatena)                                  |
| 20      | [Tiro Mirato ](#tiro-mirato)                          |
| 20      | [Raffica ](#raffica)                                  |
| 30      | [Maestria con lo Scudo ](#maestria-con-lo-scudo)      |
| 31      | [Fuoco Rapido ](#fuoco-rapido)                        |
| 40      | [Armi a due Mani ](#armi-a-due-mani)                  |
| 41      | [Turbine ](#turbine)                                  |

## Descrizione skill

### Cacciare

Poco fuori Alma Civitas si trova un cacciatore che dietro compenso insegna una
abilita' molto comoda per districarsi nel vasto mondo.

Il comando

> cacciare mob/pg

> track mob/pg

ci suggerisce il percorso da seguire per giungere da chi stiamo cercando sia
esso un giocatore oppure un MOB.
Poiche' per cercare le tracce di qualcuno si perde tempo, i nostri movimenti
saranno sensibilmente rallentati mentre siamo "in caccia".

> Di seguito alcuni messaggi che ci indicano che stiamo cacciando:

Vedi una traccia della tua preda che va verso direzione.

Stai cercando una traccia...

Non riesci a trovare tracce.

### Soccorrere

E' possibile per alcune classi soccorrere i compagni durante
un combattimento e combattere i mob al posto di un altro.
In questo modo prenderai i danni al suo posto.

soccorri alleato

rescue alleato

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

### Sfondare le Porte

Dove l'astuzia e l'abilita non arriva, facciamoci aiutare dalla forza bruta.
Se un uscita e' chiusa, possiamo sempre provare a sfondare la porta con il
comando:

sfonda uscita/direzione

doorbash uscita/direzione

Attenzione che non e' attivita' priva di rischi: se la porta non si apre si
rischia di restare storditi.
Ovviamente sarebbe un po' complicato sfondare un'uscita posta in alto, quindi
per vie bloccate in quella direzione, bisognera' trovare soluzioni alternative..

### Scassinare

Come i migliori ladri, potete imparare a scassinare le porte, abilita' una volta
nota solo ai professionisti e poi resa disponibile tramite l'uso di costosi e
fragili attrezzi, oggi e' nelle mani (letteralmente) di tutti, tramite il
comando:

scassina oggetto/uscita

pick oggetto/uscita

### Evoca Compagno

| Attributo       | Valore                                           |
| --------------- | ------------------------------------------------ |
| Nome Inglese    | Summon Companion                                 |
| Comando         | formula // cast nome abilita lupo / puma / falco |
| Restrizioni     | Nessuna.                                         |
| Causa Ostilita' | No                                               |
| Attesa          | 0.75 round (3 secondi)                           |
| Pos. Minima     | In piedi                                         |
| Usa Dadi Arma   | Si'                                              |
| Scuola          | Natura                                           |

> Descrizione

Il Ranger chiama al suo fianco un compagno animale, che accompagna le
sue avventure, scegliendo tra lupo, puma o falco.
Ogni compagno influenza le abilita' del Ranger in maniera differente, e garantisce
un bonus passivo:

-   Lupo : Tutte le abilita' attive in corpo a corpo causano un attacco ulteriore
    portato con la mano secondaria verso il bersaglio dell'abilita' stessa.
-   Puma : Tutte le abilita' attive in corpo a corpo riducono di 1 round il cooldown
    di Disingaggiare.
-   Falco : Tutte le abilita' attive attivano eventuali Incantesimi d'Arma presenti
    sulla mano primaria.

Il compagno animale e' in parte personalizzabile, tramite il comando compagno.

### Nascondersi

### Tiro Rapido

| Attributo       | Valore                                  |
| --------------- | --------------------------------------- |
| Nome Inglese    | Quick Shot                              |
| Comando         | esegui // skill nome abilita' bersaglio |
| Restrizioni     | Nessuna.                                |
| Bersagli        | Creatura (stanza)                       |
| Causa Ostilita' | Si'                                     |
| Attesa          | 0.75 round (3 secondi)                  |
| Pos. Minima     | In combattimento                        |
| Usa Dadi Arma   | Si'                                     |
| Eff. Fisica     | 250%                                    |
| Scuola          | Trauma                                  |
| Tag             | A Distanza                              |

> Descrizione

Il Ranger prende le distanze, estrae rapidamente l'arco e scaglia una freccia
verso il bersaglio. Se accompagnato dal compagno puma, usare questa abilita' non
lo riporta in corpo a corpo, ma guadagna un cooldown di 4 round.

Se accompagnato dal compagno falco, invece, applica Vulnerabile al bersaglio
per 6 round.

### Muoversi Silenziosamente

### Primo Soccorso

| Attributo       | Valore                       |
| --------------- | ---------------------------- |
| Nome Inglese    | First aid                    |
| Comando         | esegui // skill nome abilita |
| Restrizioni     | Nessuna.                     |
| Causa Ostilita' | No                           |
| Attesa          | 0.75 round (3 secondi)       |
| Pos. Minima     | In combattimento             |
| Usa Dadi Arma   | Si'                          |
| Eff. Magica     | 160%                         |
| Scuola          | Natura                       |
| Costo Mana      | 15                           |

> Descrizione

Il Ranger applica unguenti e bende sulle proprie ferite, guarendosi.
L'abilita' guadagna 1% Eff. Fisica per ogni 2 punti di Energia, senza consumarla.

Se utilizzata mentre il Ranger si trova a distanza, o qualora sia accompagnato dal
lupo, guadagna ulteriore 75% Eff. Fisica. Se il Ranger e' accompagnato dal puma,
il tempo d'attesa e' ridotto a 0.5 round.

### Furia Animale

| Attributo       | Valore                                  |
| --------------- | --------------------------------------- |
| Nome Inglese    | Animal Fury                             |
| Comando         | esegui // skill nome abilita' bersaglio |
| Restrizioni     | Nessuna.                                |
| Bersagli        | Creatura (stanza)                       |
| Causa Ostilita' | Si'                                     |
| Attesa          | 0.75 round (3 secondi)                  |
| Pos. Minima     | In combattimento                        |
| Usa Dadi Arma   | Si'                                     |
| Eff. Fisica     | 150%                                    |
| Scuola          | Natura                                  |
| Cooldown        | 12 round                                |

> Descrizione

Il Ranger incita il proprio compagno animale, che si lancia in un attacco
verso l'avversario, mandandolo a terra e causando 2 round di attesa. L'effetto
varia a seconda del compagno del Ranger:

-   Lupo : Cooldown ridotto a 6 round.
-   Puma : +100% Eff. Fisica, il Ranger guadagna 60 Energia.
-   Falco : +50% Eff. Fisica, applica Confuso e Accecato per 6 round.

### Affondo

| Attributo       | Valore                                  |
| --------------- | --------------------------------------- |
| Nome Inglese    | Strike                                  |
| Comando         | esegui // skill nome abilita' bersaglio |
| Restrizioni     | Solo Classe Principale                  |
| Bersagli        | Creatura (stanza)                       |
| Causa Ostilita' | Si'                                     |
| Attesa          | 0.75 round (3 secondi)                  |
| Pos. Minima     | In combattimento                        |
| Usa Dadi Arma   | Si'                                     |
| Eff. Fisica     | 180%                                    |
| Scuola          | Taglio                                  |
| Costo Mana      | 15                                      |
| Guad. Energia   | 30                                      |

> Descrizione

Il Ranger chiude la distanza portando un attacco verso il suo avversario.
Se accompagnato dal compagno lupo, in caso di colpo Eccezionale, ripristina
a 5 le applicazioni di Difesa Incerta.

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

### Scatena

| Attributo       | Valore                                  |
| --------------- | --------------------------------------- |
| Nome Inglese    | Unleash                                 |
| Comando         | esegui // skill nome abilita' bersaglio |
| Restrizioni     | Nessuna.                                |
| Bersagli        | Creatura (stanza)                       |
| Causa Ostilita' | Si'                                     |
| Attesa          | 0.75 round (3 secondi)                  |
| Pos. Minima     | In combattimento                        |
| Usa Dadi Arma   | Si'                                     |
| Eff. Fisica     | 200%                                    |
| Durata          | 12 round                                |
| Scuola          | Natura                                  |

> Descrizione

Il Ranger scatena il compagno animale contro il suo bersaglio.
Il lavoro di squadra entusiasma il Ranger, che guadagna un effetto, che varia
a seconda del compagno:

-   Lupo : Difesa Incerta recupera 3 applicazioni su colpo Eccezionale.
-   Puma : Difesa Incerta non si consuma mentre il Ranger e' a distanza.
-   Falco : Tiro Rapido applica Vulnerabile per 6 round al bersaglio.

### Tiro Mirato

| Attributo       | Valore                                  |
| --------------- | --------------------------------------- |
| Nome Inglese    | Aimed Shot                              |
| Comando         | esegui // skill nome abilita' bersaglio |
| Restrizioni     | Nessuna.                                |
| Bersagli        | Creatura (stanza)                       |
| Causa Ostilita' | Si'                                     |
| Attesa          | 0.75 round (3 secondi)                  |
| Pos. Minima     | In combattimento                        |
| Usa Dadi Arma   | Si'                                     |
| Eff. Fisica     | 300%                                    |
| Scuola          | Trauma                                  |
| Tag             | A Distanza                              |

> Descrizione:

Il Ranger incocca una freccia e prende la mira accuratamente verso un bersaglio.
Utilizzare nuovamente l'abilita' in questo stato lascia partire la freccia, che guadagna
60% Eff. Fisica ogni secondo di attesa. Se il Ranger e' accompagnato dal
compagno puma, lo stesso bonus e' applicato anche alla Letalita'.

Se il bersaglio e' ignaro e non in combattimento e/o non percepisce il Ranger, l'abilita'
guadagna un bonus di 50% alla possibilita' di colpo critico.

Un'attesa eccessiva stanca il Ranger al punto da non riuscire a mantenere la tensione,
ed il colpo parte automaticamente,con danno ridotto del 25%.

Inoltre, se il Ranger non riesce a mantenere la distanza tramite Disingaggiare,
il colpo partira' all'ultimo istante possibile, con danno ridotto del 50%.

### Raffica

| Attributo       | Valore                                  |
| --------------- | --------------------------------------- |
| Nome Inglese    | Flurry                                  |
| Comando         | esegui // skill nome abilita' bersaglio |
| Restrizioni     | Nessuna.                                |
| Bersagli        | Creatura (stanza)                       |
| Causa Ostilita' | Si'                                     |
| Attesa          | 0.75 round (3 secondi)                  |
| Pos. Minima     | In combattimento                        |
| Usa Dadi Arma   | Si'                                     |
| Eff. Fisica     | 180%                                    |
| Scuola          | Taglio                                  |

> Descrizione

Il Ranger porta una rapida raffica di colpi verso il bersaglio scelto,
continuando fin quando ha ancora energia a disposizione. Se accompagnato dal
compagno lupo, il costo per colpo e' ridotto a 35 Energia.

### Maestria con lo Scudo

### Fuoco Rapido

| Attributo       | Valore                        |
| --------------- | ----------------------------- |
| Nome Inglese    | Rapid Fire                    |
| Comando         | esegui // skill nome abilita' |
| Restrizioni     | Nessuna.                      |
| Causa Ostilita' | Si'                           |
| Attesa          | 0.75 round (3 secondi)        |
| Pos. Minima     | In combattimento              |
| Usa Dadi Arma   | Si'                           |
| Scuola          | Perforazione                  |
| Costo Mana      | 15                            |
| Tag             | A Distanza                    |

> Descrizione

Il Ranger prende le distanze, estrae il suo arco e scaglia una raffica di
frecce verso l'avversario. Se accompagnato dal compagno puma, il costo per proiettile
e' ridotto a 12.

### Armi a due mani

Impugnare un'arma a due mani riduce il numero di attacchi di uno, con un
minimo di 1. Per impugnare un'arma a due mani e' sufficiente avere la seconda
mano libera.
Un attacco a due mani ha un moltiplicatore base di 300%.

### Turbine

| Attributo       | Valore                          |
| --------------- | ------------------------------- |
| Nome Inglese    | Whirlwind                       |
| Comando         | esegui // skill <nome abilita'> |
| Restrizioni     | Nessuna.                        |
| Causa Ostilita' | No                              |
| Attesa          | 0.75 round (3 secondi)          |
| Pos. Minima     | In combattimento                |
| Usa Dadi Arma   | Si'                             |
| Eff. Fisica     | 180%                            |

> Descrizione

Il Ranger si lancia in una serie di attacchi eleganti verso gli avversari che e'
in grado di percepire, roteando le armi e muovendosi rapidamente da uno all'altro,
guadagnando impeto ed accumulando 40 Energia per ogni colpo portato
con successo.
