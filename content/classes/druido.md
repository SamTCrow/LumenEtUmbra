---
page: druido
---

# Il druido

Il druido è la classe che vive più in armonia con la natura, e trae forza
dall'instabile equilibrio tra vita e morte

A nord di Alma, deviando in una radura e poi proseguendo a sud, è presente
un maestro dei druidi che iniziera' i giovani ai primi rudimenti della via
della natura.

> Cerchio della vita

Il Druido ha un collegamento profondo con la natura, e come diretta
conseguenza, con l'impatto delle sue azioni.
Le abilità del druido possono essere allineate ad uno di due poli:
Vita e Morte.

Quando il Druido utilizza un'abilità, sposta la propria Affinità verso il
polo relativo, fino ad una distanza massima dall'equilibrio di 2 punti.
L'affinita' si vede nel parametro %K del prompt:

-   E equilibrio
-   Mx verso il polo morte (di x=1,2 punti)
-   Vx verso il polo vita (di x=1,2 punti)

Il cerchio della vita non sta mai in equilibro stabile, e il druido pendola
costantemente tra vita e morte: solo appena uscito dalla locanda (o dopo
morto) il druido e' in equilibrio.

Se il druido usa un'abilità affine al polo verso cui è vicino (o se è in
equilibrio) il druido guadagna 10 energia piu' altri 10 per ogni
punto di affinità al polo.
Se il druido usa un'abilita' affine al polo opposto, riceve un bonus
all'abilità proporzionale allo spostamento di affinità.

## Lista skill

| Livello | Nome skill                                            | Note              |
| ------- | ----------------------------------------------------- | ----------------- |
| 1       | [Crea Acqua ](#crea-acqua)                            |
| 3       | [Evoca Fulmine ](#evoca-fulmine)                      |
| 6       | [Seme Della Rinascita ](#seme-della-rinascia)         |
| 7       | [Parla con Piante ](#parla-con-piante)                |
| 8       | [Viaggio Arboreo ](#viaggio-arboreo)                  |
| 10      | [Rinnovamento ](#rinnovamento)                        | Classe Principale |
| 10      | [Trasporto Tramite Piante](#trasporto-tramite-piante) |
| 11      | [Arroventa Armatura ](#arroventa-armatura)            |
| 18      | [Antiche Radici ](#antiche-radice)                    |
| 21      | [Scudo di Fulmini ](#scudo-di-fulmini)                |
| 26      | [Catena di Fulmini ](#catena-di-fulmini)              |
| 27      | [Raggio di Sole ](#raggio-di-sole)                    |
| 28      | [Fioritura ](#fioritura)                              | Classe Principale |
| 31      | [Uragano ](#uragano)                                  | Classe Principale |
| 35      | [Sentiero Astrale ](#sentiero-astrale)                |
| 41      | [Forma Selvaggia ](#forma-selvaggia)                  |
| 41      | [Canto Della Foresta ](#canto-della-foresta)          | Classe Principale |
| 45      | [Morte Strisciante ](#morte-strisciante)              |
| 49      | [Tocco di gea ](#tocco-di-gea)                        |
| 50      | [Armonia Della Natura ](#armonia-della-natura)        |
| 50      | [Maestria con lo Scudo ](#maestria-con-lo-scudo)      |
| 50      | [Ambidestria ](#ambidestria)                          |
| 50      | [Armi a due Mani ](#armi-a-due-mani)                  |

## Descrizione skill

### Crea Acqua

| Attributo       | Valore                                      |
| --------------- | ------------------------------------------- |
| Nome Inglese    | Create Water                                |
| Comando         | formula // cast nome abilita' bersaglio     |
| Restrizioni     | Nessuna.                                    |
| Bersagli        | Oggetto (inventario) Oggetto (equipaggiato) |
| Causa Ostilita' | No                                          |
| Attesa          | 0.75 round (3 secondi)                      |
| Pos. Minima     | In piedi                                    |
| Usa Dadi Arma   | Si'                                         |
| Costo Mana      | 5                                           |

### Evoca fulmine

| Attributo       | Valore                                  |
| --------------- | --------------------------------------- |
| Nome Inglese    | Call Lightning                          |
| Comando         | formula // cast nome abilita' bersaglio |
| Restrizioni     | Nessuna.                                |
| Bersagli        | Creatura (stanza)                       |
| Causa Ostilita' | Si'                                     |
| Attesa          | 0.75 round (3 secondi)                  |
| Pos. Minima     | In combattimento                        |
| Usa Dadi Arma   | Si'                                     |
| Eff. Magica     | 245%                                    |
| Scuola          | Elettricita'                            |
| Costo Mana      | 20                                      |

> Descrizione

Il Druido richiama un fulmine dal cielo sul bersaglio. L'abilita' ottiene un bonus
di 50% Eff. Magica se usata all'aperto, che aumenta ulteriormente a 75% se nuvoloso,
a 125% se sta piovendo, e a 200% se il cielo e' in tempesta.

In quest'ultimo caso, l'energia e' tale da garantire al Druido 5 cariche di Scudo di Fulmini,
qualora lo abbia attivo.

L'Abilita' riceve miglioramenti quando consuma l'affinita' del Cerchio della Vita:

-   1: Richiama un secondo fulmine per il 50% del danno su un bersaglio casuale.
-   2: Richiama due ulteriori fulmini per il 75% del danno su bersagli casuali.

### Seme della rinascita

| Attributo       | Valore                                  |
| --------------- | --------------------------------------- |
| Nome Inglese    | Seed of Life                            |
| Comando         | formula // cast nome abilita' bersaglio |
| Restrizioni     | Nessuna.                                |
| Bersagli        | Creatura (stanza)                       |
| Causa Ostilita' | No                                      |
| Attesa          | 0.75 round (3 secondi)                  |
| Pos. Minima     | In combattimento                        |
| Usa Dadi Arma   | Si'                                     |
| Durata          | 5 round                                 |
| Scuola          | Natura                                  |
| Costo Mana      | 20                                      |

> Descrizione

Il Druido pianta un Seme della Rinascita nel bersaglio, che lo guarisce immediatamente
e per i successivi 5 round. Al termine dell'effetto, il Seme fiorisce, guarendo per 120%
Eff. Magica prima di scomparire.

L'Abilita' riceve miglioramenti quando consuma l'affinita' del Cerchio della Vita:

-   1: 80% Eff. Magica base, 160% fioritura, durata 4 round.
-   2: 100% Eff. Magica base, 200% fioritura, durata 2 round.

### Parla con piante

| Attributo       | Valore                                  |
| --------------- | --------------------------------------- |
| Nome Inglese    | Speak With Plants                       |
| Comando         | formula // cast nome abilita' bersaglio |
| Restrizioni     | Nessuna.                                |
| Bersagli        | Oggetto (stanza)                        |
| Causa Ostilita' | No                                      |
| Attesa          | 0.75 round (3 secondi)                  |
| Pos. Minima     | In piedi                                |
| Usa Dadi Arma   | Si'                                     |
| Costo Mana      | 5                                       |

### Viaggio arboreo

| Attributo       | Valore                                  |
| --------------- | --------------------------------------- |
| Nome Inglese    | Tree Travel                             |
| Comando         | formula // cast nome abilita' bersaglio |
| Restrizioni     | Nessuna.                                |
| Bersagli        | Creatura (stanza)                       |
| Causa Ostilita' | No                                      |
| Attesa          | 0.75 round (3 secondi)                  |
| Pos. Minima     | In piedi                                |
| Usa Dadi Arma   | Si'                                     |
| Costo Mana      | 2                                       |

### Rinnovamento

| Attributo       | Valore                                  |
| --------------- | --------------------------------------- |
| Nome Inglese    | Renew                                   |
| Comando         | formula // cast nome abilita' bersaglio |
| Restrizioni     | Solo Classe Principale                  |
| Bersagli        | Creatura (stanza)                       |
| In Combatt.     | Se non specificato, va su se stessi.    |
| Causa Ostilita' | No                                      |
| Attesa          | 0.75 round (3 secondi)                  |
| Pos. Minima     | In combattimento                        |
| Usa Dadi Arma   | Si'                                     |
| Eff. Magica     | 90%                                     |
| Durata          | 6 round                                 |
| Scuola          | Natura                                  |
| Costo Mana      | 15                                      |

> Descrizione

Il Druido guarisce le ferite del bersaglio, e l'energia vitale continua ad avvolgere
il bersaglio, aumentando i successivi effetti di guarigione del 10%, o del 20% se causati
dal Druido stesso. Successive applicazioni ripristinano la durata dell'effetto.

L'Abilita' riceve miglioramenti quando consuma l'affinita' del Cerchio della Vita:

-   1: +20% Eff. Magica, durata aumentata a 8 round.
-   2: +50% Eff. Magica, durata aumentata a 10 round.

### Trasporto Tramite Piante

| Attributo       | Valore                                  |
| --------------- | --------------------------------------- |
| Nome Inglese    | Transport via Plant                     |
| Comando         | formula // cast nome abilita' bersaglio |
| Restrizioni     | Nessuna.                                |
| Bersagli        | Oggetto (mondo)                         |
| Causa Ostilita' | No                                      |
| Attesa          | 0.75 round (3 secondi)                  |
| Pos. Minima     | In piedi                                |
| Usa Dadi Arma   | Si'                                     |
| Costo Mana      | 20                                      |

### Arroventa Armatura

| Attributo       | Valore                                  |
| --------------- | --------------------------------------- |
| Nome Inglese    | Heat Armor                              |
| Comando         | formula // cast nome abilita' bersaglio |
| Restrizioni     | Nessuna.                                |
| Bersagli        | Creatura (stanza)                       |
| Causa Ostilita' | Si'                                     |
| Attesa          | 0.75 round (3 secondi)                  |
| Pos. Minima     | In combattimento                        |
| Usa Dadi Arma   | Si'                                     |
| Eff. Magica     | 150%                                    |
| Durata          | 6 round                                 |
| Scuola          | Fuoco                                   |
| Costo Mana      | 15                                      |

> Descrizione

Il Druido manipola fibre e metalli, aumentando la temperatura di vesti e armature di
un bersaglio. Per la durata dell'effetto, il bersaglio continua a soffrire le ustioni per
il 40% dell'Eff. Magica.

L'Abilita' riceve miglioramenti quando consuma l'affinita' del Cerchio della Vita:

-   1: +80% Eff. Magica iniziale, +20% Eff. Magica nel tempo.
-   2: +100% Eff. Magica iniziale, +60% Eff. Magica nel tempo.

Disarma l'avversario, arroventandone l'arma per 20 secondi.

### Antiche Radici

| Attributo       | Valore                                  |
| --------------- | --------------------------------------- |
| Nome Inglese    | Ancient Roots                           |
| Comando         | formula // cast nome abilita' bersaglio |
| Restrizioni     | Nessuna.                                |
| Bersagli        | Creatura (stanza)                       |
| Causa Ostilita' | Si'                                     |
| Attesa          | 0.75 round (3 secondi)                  |
| Pos. Minima     | In combattimento                        |
| Usa Dadi Arma   | Si'                                     |
| Durata          | 4 round                                 |
| Scuola          | Natura                                  |
| Costo Mana      | 15                                      |

> Descrizione:

Il Druido evoca radici irte di spine velenose che spuntano dal suolo e si aggrovigliano
attorno ad un bersaglio, stringendolo in una morsa dolorosa, rendendolo Immobilizzato.

L'Abilita' riceve miglioramenti quando consuma l'affinita' del Cerchio della Vita:

-   1: Durata 5 round
-   2: Durata 6 round, causa 50% Eff. Magica danno ogni round.

### Scudo di Fulmini

| Attributo       | Valore                                             |
| --------------- | -------------------------------------------------- |
| Nome Inglese    | Lightning Shield                                   |
| Comando         | formula // cast nome abilita' bersaglio            |
| Restrizioni     | Nessuna.                                           |
| Bersagli        | Creatura (stanza)                                  |
| Causa Ostilita' | No                                                 |
| Attesa          | 0.75 round (3 secondi)                             |
| Pos. Minima     | In combattimento                                   |
| Usa Dadi Arma   | No                                                 |
| Scuola          | Elettricita'                                       |
| Costo Mana      | 25                                                 |
| Simbolo Prompt  | F                                                  |
| Aura            | L'aria attorno a NomePg e' carica di elettricita'! |

### Catena di Fulmini

| Attributo       | Valore                                  |
| --------------- | --------------------------------------- |
| Nome Inglese    | Chain Lightning                         |
| Comando         | formula // cast nome abilita' bersaglio |
| Restrizioni     | Nessuna.                                |
| Bersagli        | Creatura (stanza)                       |
| Causa Ostilita' | Si'                                     |
| Attesa          | 0.75 round (3 secondi)                  |
| Pos. Minima     | In combattimento                        |
| Usa Dadi Arma   | Si'                                     |
| Eff. Magica     | 225%                                    |
| Scuola          | Elettricita'                            |
| Costo Mana      | 15                                      |

> Descrizione

Il Druido crea un arco voltaico che rimbalza di bersaglio in bersaglio, fino ad un massimo
di 5 bersagli colpiti. Per ogni bersagli colpito, l'Eff. Magica si riduce del 30%.

L'Abilita' riceve miglioramenti quando consuma l'affinita' del Cerchio della Vita:

-   1: L'Eff. Magica per bersaglio si riduce del 15%.
-   2: L'Eff. Magica per bersaglio aumenta del 15%, ed il Druido guadagna
    3 cariche di Scudo di Fulmini per ogni bersaglio colpito.

### Raggio di Sole

| Attributo       | Valore                                  |
| --------------- | --------------------------------------- |
| Nome Inglese    | Sunray                                  |
| Comando         | formula // cast nome abilita' bersaglio |
| Restrizioni     | Nessuna.                                |
| Bersagli        | Creatura (stanza)                       |
| Causa Ostilita' | Si'                                     |
| Attesa          | 0.75 round (3 secondi)                  |
| Pos. Minima     | In combattimento                        |
| Usa Dadi Arma   | Si'                                     |
| Eff. Magica     | 200%                                    |
| Durata          | 2 round                                 |
| Scuola          | Lumen                                   |
| Costo Mana      | 20                                      |

> Descrizione

Il Druido crea un raggio di luce intenso, dirigendolo verso un avversario,
rendendolo Accecato.

L'Abilita' riceve miglioramenti quando consuma l'affinita' del Cerchio della Vita:

-   1: Durata 4 round.
-   2: Durata 4 round, e colpisce ad area fino a 5 bersagli.

### Fioritura

| Attributo       | Valore                        |
| --------------- | ----------------------------- |
| Nome Inglese    | Flourish                      |
| Comando         | formula // cast nome abilita' |
| Restrizioni     | Solo Classe Principale        |
| Causa Ostilita' | No                            |
| Attesa          | 0.75 round (3 secondi)        |
| Pos. Minima     | In combattimento              |
| Usa Dadi Arma   | Si'                           |
| Scuola          | Natura                        |
| Costo Mana      | 10                            |

> Descrizione

Il Druido esalta le energie che ha precedentemente infuso nei bersagli amichevoli.
La Fioritura ha effetto su tutti i bersagli amichevoli in stanza, guarendo per il 90%
dell'Efficacia Magica chi e' affetto da Rinnovamento, e causando una fioritura immediata
del Seme della Vita, senza pero' consumarlo.

Questa abilita' ha effetto solo su effetti causati dal Druido che la utilizza, ed inoltre
riceve miglioramenti quando consuma l'affinita' del Cerchio della Vita:

-   1: +15% Eff. Magica, +25 Mana recuperato per bersaglio
-   2: +30% Eff. Magica, +50 Mana recuperato per bersaglio.

### Uragano

| Attributo       | Valore                        |
| --------------- | ----------------------------- |
| Nome Inglese    | Hurricane                     |
| Comando         | formula // cast nome abilita' |
| Restrizioni     | Solo Classe Principale        |
| Causa Ostilita' | No                            |
| Attesa          | 0.75 round (3 secondi)        |
| Pos. Minima     | In combattimento              |
| Usa Dadi Arma   | Si'                           |
| Scuola          | Natura                        |
| Costo Mana      | 60                            |

> Descrizione

Il Druido evoca nubi, pioggia e vento ovunque si trovi, anche all'interno.
Per 20 round, la locazione e' considerata all'aperto, ed il tempo atmosferico una
tempesta. Questo incantesimo influenza la locazione direttamente, e non segue il
druido nei suoi spostamenti.

Quando la tempesta si forma, un fulmine saetta immediatamente verso un bersaglio
ostile casuale, qualora presente.

### Sentiero Astrale

| Attributo       | Valore                        |
| --------------- | ----------------------------- |
| Nome Inglese    | Astral Walk                   |
| Comando         | formula // cast nome abilita' |
| Restrizioni     | Nessuna.                      |
| Causa Ostilita' | No                            |
| Attesa          | 0.75 round (3 secondi)        |
| Pos. Minima     | In piedi                      |
| Usa Dadi Arma   | Si'                           |
| Costo Mana      | 25                            |

### Forma Selvaggia

| Attributo       | Valore                       |
| --------------- | ---------------------------- |
| Nome Inglese    | Wild Shape                   |
| Comando         | formula // cast nome abilita |
| Restrizioni     | Nessuna.                     |
| Causa Ostilita' | No                           |
| Attesa          | 0.75 round (3 secondi)       |
| Pos. Minima     | In combattimento             |
| Usa Dadi Arma   | Si'                          |
| Scuola          | Natura                       |
| Costo Mana      | 20                           |

> Descrizione

Il Druido fa appello al suo legame con la natura, trasformando il suo corpo in una
forma animale, ognuna delle quali presenta caratteristiche uniche.

> Forme Disponibli:

#### Orso Grizzly

Razza un predatore.
Non puoi modificare l'equipaggiamento in questa forma.
Non puoi lanciare incantesimi in questa forma.

Garantisce un bonus di 50% ai tuoi punti ferita massimi.

Resistenza a Impatto : +75.
Resistenza a Perforazione : +75.
Resistenza a Taglio : +75.

Ti consente di usare le seguenti abilita':
Artiglio Fatale
Ruggito Selvaggio

Descrizione:

Il Druido si trasforma in un feroce Orso Grizzly, facendo tesoro della sua
potenza fisica e incredibile resistenza, che lo rende Incrollabile per la durata
della trasformazione. Inoltre, se al momento della trasformazione il Druido e'
affetto dal proprio [Seme della Rinascita](#seme-della-rinascita), la sua durata viene prolungata di 5 round.

#### Gatto Selvatico

Razza un predatore.
Non puoi modificare l'equipaggiamento in questa forma.
Non puoi lanciare incantesimi in questa forma.

Causa un malus di -30% ai tuoi punti ferita massimi.

Ti consente di usare le seguenti abilita':
Muoversi Silenziosamente
Nascondersi
Balzo Felino
Mutilare

Descrizione:

Il Druido si trasforma in un agile felino selvatico di dimensioni modeste, in grado di
muoversi in perfetto silenzio, nascondersi alla vista, ed assaltare dalle ombre in caso di
necessita'. La sua gracilita' e' compensata da un'innata agilita' ed esplosivita', che lo
rende Inarrestabile.

#### Driade dei Boschi

Razza un albero.
Non puoi modificare l'equipaggiamento in questa forma.

Non modifica i tuoi punti ferita massimi.

Resistenza a Impatto : +25.
Resistenza a Perforazione : +25.
Resistenza a Taglio : +25.
Resistenza a Natura : +75.

Provera' ad usare autonomamente le seguenti abilita':
Colpo Fiammeggiante (in combattimento) (liv. min 15)
Dolore (in combattimento) (liv. min 35)

Descrizione:

Il Druido si trasforma in una creatura della foresta, guadagnando un bonus pari alla
meta' del suo livello in Danno Natura, ed efficacia migliorata sensibilmente per tutti
gli effetti derivanti da Canto della Foresta.

### Canto della foresta

| Attributo       | Valore                        |
| --------------- | ----------------------------- |
| Nome Inglese    | Song of the Forest            |
| Comando         | formula // cast nome abilita' |
| Restrizioni     | Solo Classe Principale        |
| Causa Ostilita' | No                            |
| Attesa          | 0.75 round (3 secondi)        |
| Pos. Minima     | In combattimento              |
| Usa Dadi Arma   | Si'                           |
| Scuola          | Natura                        |
| Costo Mana      | 10                            |
| Tag             | Allineamento: Nessuno         |

> Descrizione

Il Druido mormora parole di un canto antico e dimenticato, chiamando a se'
il supporto della Foresta e delle sue creature. All'inizio di ogni round, se il
Druido non e' in stato di attesa proseguira' la litania, influenzata dallo stato
del Cerchio della Vita: Tanto piu' e' spostato verso la Vita, tanto piu' e' facile
che l'aiuto sia di guarigione o supporto, tanto piu e' spostato verso la Morte,
tanto piu' e' facile che l'aiuto sia di carattere offensivo.

Dopo ogni aiuto ricevuto, un round di canto a vuoto e' necessario prima di riceverlo
nuovamente. Inoltre, passare troppi round senza proseguire il canto a causa dello stato
di attesa distrae il Druido e interrompe la litania, causando un cooldown di 6 round
prima di poterlo riutilizzare. Lo stesso accade qualora il Druido decida di interrompere
il canto volontariamente, utilizzando di nuovo l'abilita'.

### Morte Strisciante

| Attributo       | Valore                                 |
| --------------- | -------------------------------------- |
| Nome Inglese    | Creeping Death                         |
| Comando         | formula // cast nome abilita direzione |
| Restrizioni     | Nessuna.                               |
| Causa Ostilita' | No                                     |
| Attesa          | 0.75 round (3 secondi)                 |
| Pos. Minima     | In piedi                               |
| Usa Dadi Arma   | Si'                                    |
| Eff. Magica     | 2000%                                  |
| Scuola          | Natura                                 |
| Costo Mana      | 50                                     |
| Cooldown        | 300 round                              |

> Descrizione

Il Druido evoca una immensa massa di artropodi che si muove lentamente in una
direzione, consumando tutto quello che incontra. Se non e' in grado di muoversi o
proseguire nella direzione scelta, provera' a trovare altre strade, e finira' a
disperdersi dopo 5 movimenti.

Lo sciame non attacchera' giocatori al di fuori delle zone con PvP abilitato.
L'Abilita' riceve miglioramenti quando consuma l'affinita' del Cerchio della Vita:

-   1: +250% Eff. Magica, 250 round di cooldown.
-   2: +500% Eff. Magica, 150 round di cooldown.

### Tocco di gea

| Attributo       | Valore                                  |
| --------------- | --------------------------------------- |
| Nome Inglese    | Touch of gea                            |
| Comando         | formula // cast nome abilita' bersaglio |
| Restrizioni     | Nessuna.                                |
| Bersagli        | Creatura (stanza)                       |
| Causa Ostilita' | Si'                                     |
| Attesa          | 0.75 round (3 secondi)                  |
| Pos. Minima     | In combattimento                        |
| Usa Dadi Arma   | Si'                                     |
| Eff. Magica     | 300%                                    |
| Scuola          | Natura                                  |
| Costo Mana      | 20                                      |

Descrizione:

Il Druido convoglia la furia della Natura stessa nel suo bersaglio, causando danno
ingente e scuotendo le forze gia' in effetto: se il bersaglio e' affetto da Antiche Radici,
queste stringono la presa, se il bersaglio e' affetto da Arroventa Armatura, la temperatura
sale improvvisamente.

L'Abilita' riceve miglioramenti quando consuma l'affinita' del Cerchio della Vita:

-   1: +75% Eff. Magica
-   2: +125% Eff. Magica. Se il bersaglio e' affetto sia da
    Antiche Radici che da Arroventa Armatura, subisce uno shock violento che
    lo stordisce per 3 round, e rimuove gli effetti.

### Armonia della Natura

| Attributo       | Valore                        |
| --------------- | ----------------------------- |
| Nome Inglese    | Natural Harmony               |
| Comando         | formula // cast nome abilita' |
| Restrizioni     | Nessuna.                      |
| Causa Ostilita' | No                            |
| Attesa          | 0 round (0 secondi)           |
| Pos. Minima     | In combattimento              |
| Usa Dadi Arma   | Si'                           |
| Scuola          | Natura                        |

### Mestria con lo Scudo

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

### Armi a due mani

Impugnare un'arma a due mani riduce il numero di attacchi di uno, con un
minimo di 1. Per impugnare un'arma a due mani e' sufficiente avere la seconda
mano libera.
Un attacco a due mani ha un moltiplicatore base di 300%.
