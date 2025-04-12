---
page: guerriero
---

# Il guerriero

Il guerriero e' la classe che incarna meglio l'arte del combattimento fisico.

Il guerriero ha nella sua indole il combattimento e la sua arte si esprime
al meglio con tecniche di combattimento eseguite in preciso ordine, facendo
uso sia dell'arma che dello scudo. Il guerriero forte del suo addestramento,
tenta sempre di eseguire l'abilita' passive di bloccare con lo scudo
gli attacchi degli avversari.

> Il guerriero utilizza una risorsa aggiuntiva, la sequenza per le
> proprie abilita'.

La sequenza e' una risorsa aggiuntiva del guerriero.
Il guerriero trae beneficio se riesce strategicamente a pianificare i suoi
attacchi, con le varie abilita' che possono avere effetti diversi a seconda
della fase della sequenza in cui sono portati.

E' visibile nel prompt nel parametro %K:

-   Nessuna ovvero fase di apertura
-   Aperta ovvero fase di proseguo
-   Pronta! ovvero fase di chiusura

Utilizzare un'abilita' che influenza la sequenza fa passare la sequenza:

-   da Nessuna (apertura) a Aperta (proseguo)
-   da Aperta (proseguo) a Pronta! (chiusura)
-   da Pronta! (chiusura) a Nessuna (apertura) nuovamente

Invece preparazione porta direttamente a Pronta! (chiusura) da
qualsiasi stato della sequenza)
Utilizzare un abilita' come proseguo (Aperta) genera un cooldown di 3 round
sull'abilita' stessa.

Il guerriero guadagna energia in funzione della sequenza:

-   apertura sequenza: 40 energia
-   proseguo sequenza: 60 energia
-   chiusura sequenza: 100 energia

Ad Alma (via delle gilde) e' presente una gilda dei guerrieri con un maestro
che iniziera' i giovani guerrieri ai primi rudimenti della loro arte:

## Lista skill

| Livello | Nome skill                                      | Note              |
| ------- | ----------------------------------------------- | ----------------- |
| 1       | [Sfondare le Porte](#sfondare-le-porte)         |
| 1       | [Cambiare Nemico](#cambiare-nemico)             |
| 1       | [Soccorrere](#soccorrere)                       |
| 1       | [Sfondamento di Scudo](#sfondamento-di-scudo)   |
| 1       | [Stoccata](#stoccata)                           |
| 5       | [Maestria con lo Scudo](#maestria-con-lo-scudo) |
| 5       | [Schianto di Scudo](#schianto-di-scudo)         | Max 2 Classi      |
| 5       | [Spallata](#spallata)                           | Classe Principale |
| 10      | [Spaccaterra](#spaccaterra)                     | Classe Principale |
| 15      | [Contrattacco](#contrattacco)                   |
| 20      | [Colpo di Pomo](#colpo-di-pomo)                 |
| 25      | [Volonta di Ferro](#volonta-di-ferro)           | Max 2 Classi      |
| 25      | [Armi a due Mani](#armi-a-due-mani)             |
| 25      | [Ambidestria](#ambidestria)                     |
| 30      | [Muro di Scudi](#muro-di-scudi)                 |
| 40      | [Defletti](#defletti)                           | Solo Monoclasse   |
| 41      | [Spazzata](#spazzata)                           |
| 50      | [Preparazione](#preparazione)                   | Classe Principale |

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

### Sfondamento di scudo

| Attributo       | Valore                                  |
| --------------- | --------------------------------------- |
| Nome Inglese    | Shield Impact                           |
| Comando         | esegui // skill nome abilita' bersaglio |
| Restrizioni     | Nessuna.                                |
| Bersagli        | Creatura (stanza)                       |
| Causa Ostilita' | Si'                                     |
| Attesa          | 0.75 round (3 secondi)                  |
| Pos. Minima     | In combattimento                        |
| Usa Dadi Arma   | Si'                                     |
| Eff. Fisica     | 250%                                    |
| Durata          | 3 round                                 |
| Scuola          | Impatto                                 |

> Descrizione:

Il Guerriero impatta l'avversario con il suo scudo. Se l'abilita'
viene utilizzata per Aprire la Sequenza, il bersaglio viene
Confuso per 3 round.

### Stoccata

| Attributo       | Valore                                  |
| --------------- | --------------------------------------- |
| Nome Inglese    | Lunge                                   |
| Comando         | esegui // skill nome abilita' bersaglio |
| Restrizioni     | Nessuna.                                |
| Bersagli        | Creatura (stanza)                       |
| Causa Ostilita' | Si'                                     |
| Attesa          | 0.75 round (3 secondi)                  |
| Pos. Minima     | In combattimento                        |
| Usa Dadi Arma   | Si'                                     |
| Eff. Fisica     | 400%                                    |
| Scuola          | Perforazione                            |

> Descrizione:

Il Guerriero si lancia in un affondo verso il suo avversario.
Se l'abilita' viene utilizzata per aprire la Sequenza, l'avversario
viene reso Vulnerabile per 3 round.

### Maestria con lo scudo

### Schianto di scudo

| Attributo       | Valore                                  |
| --------------- | --------------------------------------- |
| Nome Inglese    | Shield Slam                             |
| Comando         | esegui // skill nome abilita' bersaglio |
| Restrizioni     | Massimo due Classi                      |
| Bersagli        | Creatura (stanza)                       |
| Causa Ostilita' | Si'                                     |
| Attesa          | 0.75 round (3 secondi)                  |
| Pos. Minima     | In combattimento                        |
| Usa Dadi Arma   | Si'                                     |
| Eff. Fisica     | 500%                                    |
| Scuola          | Impatto                                 |

> Descrizione:

Il Guerriero schianta l'avversario sotto il suo scudo in un attacco
brutale. Se l'abilita' prosegue la Sequenza, il cooldown di
Muro di Scudi viene ridotto di 2 round. Se l'abilita' chiude
la Sequenza, invece, l'Eff. Fisica viene aumentata di 400%.

### Spallata

| Attributo       | Valore                                  |
| --------------- | --------------------------------------- |
| Nome Inglese    | Tackle                                  |
| Comando         | esegui // skill nome abilita' bersaglio |
| Restrizioni     | Solo Classe Principale                  |
| Bersagli        | Creatura (stanza)                       |
| Causa Ostilita' | Si'                                     |
| Attesa          | 0.75 round (3 secondi)                  |
| Pos. Minima     | In combattimento                        |
| Usa Dadi Arma   | Si'                                     |
| Eff. Fisica     | 50%                                     |

> Descrizione:

Il Guerriero si lancia verso il suo avversario, colpendolo con una possente
spallata. Se l'abilita' viene usata per proseguire la Sequenza, guadagna 100%
Eff. Fisica, ed aumenta il danno della prossima abilita' usata entro 2 round del 50%.
Se invece viene usata per chiudere la Sequenza, guadagna 200% Eff. Fisica, manda
il bersaglio a terra e causa 2 round di attesa.

### Spaccaterra

| Attributo       | Valore                        |
| --------------- | ----------------------------- |
| Nome Inglese    | Earthshatter                  |
| Comando         | esegui // skill nome abilita' |
| Restrizioni     | Solo Classe Principale        |
| Causa Ostilita' | No                            |
| Attesa          | 0.75 round (3 secondi)        |
| Pos. Minima     | In combattimento              |
| Usa Dadi Arma   | Si'                           |
| Eff. Fisica     | 150%                          |
| Scuola          | Impatto                       |

> Descrizione:

Il Guerriero utilizza l'inerzia del combattimento per scuotere il terreno
che lo circonda, generando una possente onda d'urto che Rallenta i bersagli
ingaggiati per 2 round.  
Se l'abilita' viene usata per proseguire la Sequenza
i bersagli ingaggiati subiscono invece Confusione per 3 round. Se l'abilita'
viene usata per chiudere la Sequenza, i bersagli ingaggiati vengono
mandati in terra e subiscono 2 round di attesa.

### Contrattacco

| Attributo       | Valore                                  |
| --------------- | --------------------------------------- |
| Nome Inglese    | Counterattack                           |
| Comando         | esegui // skill nome abilita' bersaglio |
| Restrizioni     | Nessuna.                                |
| Bersagli        | Creatura (stanza)                       |
| Causa Ostilita' | Si'                                     |
| Attesa          | 0.75 round (3 secondi)                  |
| Pos. Minima     | In combattimento                        |
| Usa Dadi Arma   | Si'                                     |
| Eff. Fisica     | 380%                                    |
| Scuola          | In funzione dell'Arma impugnata         |
| Costo Speciale  | Fino a 100 Energia addizionale          |

> Descrizione:

Il Guerriero spende fino ad un massimo di 100 Energia, aumentando l'Eff. Fisica
del Contrattacco del 2% per ogni punto di Energia speso.
Questa abilita' interagisce con la Sequenza, ma non ha effetti che
dipendono dallo stato della stessa.

### Colpo di pomo

| Attributo       | Valore                                  |
| --------------- | --------------------------------------- |
| Nome Inglese    | Pommel Strike                           |
| Comando         | esegui // skill nome abilita' bersaglio |
| Restrizioni     | Nessuna.                                |
| Bersagli        | Creatura (stanza)                       |
| Causa Ostilita' | Si'                                     |
| Attesa          | 0.75 round (3 secondi)                  |
| Pos. Minima     | In combattimento                        |
| Usa Dadi Arma   | Si'                                     |
| Eff. Fisica     | 150%                                    |
| Scuola          | Impatto                                 |

> Descrizione:

Il Guerriero chiude la distanza e colpisce l'avversario con il pesante
pomo della sua arma. Se l'abilita' prosegue la Sequenza, guadagna 100% Eff.
Fisica, ed il bersaglio viene Confuso per 2 round. Se l'abilita' chiude
la Sequenza, guadagna 300% Eff. Fisica ed il bersaglio viene Stordito
per 1 round.

### Volonta di ferro

| Attributo       | Valore                        |
| --------------- | ----------------------------- |
| Nome Inglese    | Iron Will                     |
| Comando         | esegui // skill nome abilita' |
| Restrizioni     | Massimo due Classi            |
| Causa Ostilita' | No                            |
| Attesa          | 0.75 round (3 secondi)        |
| Pos. Minima     | In combattimento              |
| Usa Dadi Arma   | Si'                           |
| Eff. Fisica     | 150%                          |
| Scuola          | Natura                        |
| Cooldown        | 6 round                       |

> Descrizione:

Il Guerriero scrolla le spalle e scaccia via il dolore delle ferite
ricevute. L'Eff. Fisica base e' aumentata del 3% per ogni punto percentuale
di Punti Ferita mancanti sul totale. Se utilizzata per proseguire la Sequenza,
il cooldown e' ridotto a 3 round. Se utilizzata per chiudere la Sequenza,
guadagna ulteriore 50% Eff. Fisica, ed e' accompagnata da un possente urlo
in grado di scuotere gli animi degli alleati, guarendoli del 40% dell'efficacia
dell'abilita' base, e non genera cooldown.

### Armi a due mani

Impugnare un'arma a due mani riduce il numero di attacchi di uno, con un
minimo di 1. Per impugnare un'arma a due mani e' sufficiente avere la seconda
mano libera.
Un attacco a due mani ha un moltiplicatore base di 300%.

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

### Muro di scudi

| Attributo       | Valore                        |
| --------------- | ----------------------------- |
| Nome Inglese    | Shield Wall                   |
| Comando         | esegui // skill nome abilita' |
| Restrizioni     | Nessuna.                      |
| Causa Ostilita' | No                            |
| Attesa          | 0.75 round (3 secondi)        |
| Pos. Minima     | In combattimento              |
| Usa Dadi Arma   | Si'                           |
| Eff. Fisica     | 125%                          |
| Durata          | 6 round                       |
| Scuola          | Impatto                       |
| Cooldown        | 20 round                      |

> Descrizione:

Il Guerriero assume una robusta posizione difensiva, guadagnando un bonus
importante a Bloccare con lo Scudo e lo stato Incrollabile.
Questa abilita' non interagisce con la Sequenza.

### Defletti

| Attributo       | Valore                        |
| --------------- | ----------------------------- |
| Nome Inglese    | Deflect                       |
| Comando         | esegui // skill nome abilita' |
| Restrizioni     | Solo Classe Singola           |
| Causa Ostilita' | No                            |
| Attesa          | 0.75 round (3 secondi)        |
| Pos. Minima     | In combattimento              |
| Usa Dadi Arma   | Si'                           |
| Cooldown        | 8 round                       |

> Descrizione:

Il Guerriero utilizza lo scudo per deflettere un attacco, dirigendolo verso
uno dei suoi avversari, incluso il mittente. A causa della precisione richiesta,
il Guerriero ha bisogno di cogliere l'attimo, motivo per cui l'abilita' perdura
soltanto per 3 secondi dall'utilizzo.
Questa abilita' non interagisce con la Sequenza.

### Spazzata

| Attributo       | Valore                        |
| --------------- | ----------------------------- |
| Nome Inglese    | Sweep                         |
| Comando         | esegui // skill nome abilita' |
| Restrizioni     | Nessuna.                      |
| Causa Ostilita' | No                            |
| Attesa          | 0.75 round (3 secondi)        |
| Pos. Minima     | In combattimento              |
| Usa Dadi Arma   | Si'                           |
| Eff. Fisica     | 250%                          |

> Descrizione:

Il Guerriero lancia un attacco in un ampio arco, colpendo fino a 2 bersagli.
Se l'abilita' viene usata per proseguire la sequenza, guadagna 150% Eff. Fisica,
e colpisce fino a 3 bersagli. Se viene usata per chiudere la sequenza, guadagna
200% Eff. Fisica, e colpisce fino a 5 bersagli.

### Preparazione

| Attributo       | Valore                        |
| --------------- | ----------------------------- |
| Nome Inglese    | Wind up                       |
| Comando         | esegui // skill nome abilita' |
| Restrizioni     | Solo Classe Principale        |
| Causa Ostilita' | No                            |
| Attesa          | 0.75 round (3 secondi)        |
| Pos. Minima     | In combattimento              |
| Usa Dadi Arma   | Si'                           |
| Scuola          | Impatto                       |
| Guad. Energia   | 100                           |
| Cooldown        | 10 round                      |

> Descrizione

Il Guerriero raccoglie tempo, spazio ed energie per preparare
il suo prossimo attacco. L'uso di questa abilita' porta la Sequenza
direttamente a Pronta.

