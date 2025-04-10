---
page: mago
---

# Il mago

Il mago e\` la classe piu` esperta per quanto riguarda incantesimi e arti 
magiche in generale, forte dei suoi profondi studi in materia.
Il mago e\` particolarmente ferrato nell`arte di offendere tramite magia il suo
avversario.

Ad Alma (via delle gilde) e` presente una gilda dei maghi con un maestro che 
iniziera` i giovani ai primi rudimenti della loro arte.

> Il mago riesce a dominare fuoco, freddo ed energia e con
> le sue arti riesce perfino ad entrare in risonanza con esse.

Quando il Mago genera un effetto allineato ad una delle tre correnti che e` in
grado di sfruttare, Fuoco, Freddo
o Energia, genera un accumulo di magia residua,
denominato Risonanza della Trama.

Se il Mago e\` gia\` allineato all`elemento, guadagna un punto di Risonanza,
fino ad un massimo di 5 punti, o 10 se e` in forma elementale.
Altrimenti, la Risonanza si allinea al nuovo elemento, torna ad
un punto, ed il Mago guadagna 30 punti Energia, +30 per ogni
punto di risonanza perso nel processo.

La Risonanza della Trama ha inoltre un effetto passivo che muta a
seconda dell`elemento:

-   Fuoco : +5 Letalita` per punto
-   Freddo : +5 Resistenza a Tutto per punto
-   Energia: +10 Penetrazione per punto

si vede nel Prompt come parte delle informazioni di Classe (%K) come:

-   Fuoco : Fx
-   Freddo : Cx
-   Energia: Ex

dove x rappresenta il numero di punti Risonanza accumulati.

## Lista skill

| Livello | Nome skill                                      | Note              |
| ------- | ----------------------------------------------- | ----------------- | --- |
| 1       | [Tocco Incandescente ](#tocco-Incandescente)    |
| 1       | [Dardo Incantato ](#dardo-incantato)            |
| 4       | [Tocco Congelante ](#tocco-congelante)          |
| 5       | [Lama Incantata ](#lama-incantata)              | Max 2 Classi      |     |
| 8       | [Cono di Freddo ](#cono-di-freddo)              |
| 10      | [Crea Acqua ](#crea-acqua)                      |
| 11      | [Scudo di Risonanza ](#scudo-di-risonanza)      | Classe Principale |     |
| 12      | [Serpente di Fiamme ](#serpente-di-fiamme)      | Max 2 Classi      |     |
| 16      | [Immagini Illusorie ](#immagini-illusorie)      | Max 2 Classi      |     |
| 17      | [Lancia di Ghiaccio ](#lancia-di-ghiaccio)      |
| 18      | [Venti Invernali ](#venti-invernali)            | Max 2 Classi      |     |
| 21      | [Catene Ghiacciate ](#catene-ghiacciate)        | Max 2 Classi      |     |
| 24      | [Fonte di Potere ](#fonte-di-potere)            | Classe Principale |     |
| 25      | [Palla di Fuoco ](#palla-di-fuoco)              |
| 30      | [Sentiero Astrale ](#sentiero-astrale)          |
| 31      | [Disperdi Magie ](#disperdi-magie)              |
| 35      | [Colpo Dirompente ](#colpo-dirompente)          | Max 2 Classi      |     |
| 36      | [Incendia Magie ](#incendia-magie)              |
| 41      | [Bomba Vivente ](#bomba-vivente)                | Max 2 Classi      |     |
| 48      | [Disintegrazione ](#disintegrazione)            |
| 50      | [Catalizzatore Arcano ](#catalizzatore-arcano)  |
| 50      | [Squarcia il Velo ](#squarcia-il-velo)          | Solo Monoclasse   |     |
| 50      | [Concentrazione Totale](#concentrazione-totale) |
| 50      | [Maestria con lo Scudo](#maestria-con-lo-scudo) |
| 50      | [Ambidestria ](#ambidestria)                    |
| 50      | [Armi a due Mani ](#armi-a-due-mani)            |

## Descrizione skill

### Tocco Incandescente

| Attributo        | Valore                                  |
| ---------------- | --------------------------------------- |
| Nome Inglese     | Molten Touch                            |
| Comando          | formula // cast nome abilita` bersaglio |
| Restrizioni      | Nessuna.                                |
| Bersagli         | Creatura (stanza)                       |
| Causa Ostilita\` | Si`                                     |
| Attesa           | 0.75 round (3 secondi)                  |
| Pos. Minima      | In combattimento                        |
| Usa Dadi Arma    | Si`                                     |
| Eff. Magica      | 75%                                     |
| Scuola           | Fuoco                                   |
| Costo Mana       | 10                                      |
| Tag              | Risonanza: Fuoco                        |

> Descrizione

Il Mago sfiora il bersaglio con un tocco incandescente. Questo incantesimo
genera sempre un'applicazione di Incendio, anche quando non infligge un colpo
critico.

### Dardo Incantato

| Attributo        | Valore                                  |
| ---------------- | --------------------------------------- |
| Nome Inglese     | Magic Missile                           |
| Comando          | formula // cast nome abilita` bersaglio |
| Restrizioni      | Nessuna.                                |
| Bersagli         | Creatura (stanza)                       |
| Causa Ostilita\` | Si`                                     |
| Attesa           | 0.75 round (3 secondi)                  |
| Pos. Minima      | In combattimento                        |
| Usa Dadi Arma    | Si`                                     |
| Eff. Magica      | 75% per dardo (max 3)                   |
| Scuola           | Energia                                 |
| Costo Mana       | 15                                      |
| Tag              | Risonanza: Energia                      |

> Descrizione

Il Mago evoca dardi di pura energia, scagliandoli verso il suo bersaglio.
Il numero di dardi dipende dalla percentuale di Punti Mana disponibile: 2 se
almeno 50%, 3 se almeno 75%.

Questo incantesimo viene potenziato da Magia Accumulata, ed i suoi effetti
sono completamente annullati da Scudo Magico.

### Tocco Congelante

| Attributo        | Valore                                  |
| ---------------- | --------------------------------------- |
| Nome Inglese     | Chill Touch                             |
| Comando          | formula // cast nome abilita` bersaglio |
| Restrizioni      | Nessuna.                                |
| Bersagli         | Creatura (stanza)                       |
| Causa Ostilita\` | Si`                                     |
| Attesa           | 0.75 round (3 secondi)                  |
| Pos. Minima      | In combattimento                        |
| Usa Dadi Arma    | Si`                                     |
| Eff. Magica      | 200%                                    |
| Scuola           | Freddo                                  |
| Costo Mana       | 15                                      |
| Tag              | Risonanza: Freddo                       |

> Descrizione

Il Mago congela il proprio bersaglio, causando 1 applicazione di Congelamento.

Se il bersaglio e` ingaggiato in corpo a corpo con il mago, causa invece 4 applicazioni
di Congelamento.

### Lama Incantata

| Attributo       | Valore                        |
| --------------- | ----------------------------- |
| Nome Inglese    | Enchanted Blade               |
| Comando         | formula // cast nome abilita` |
| Restrizioni     | Massimo due Classi            |
| Causa Ostilita` | No                            |
| Attesa          | 0.75 round (3 secondi)        |
| Pos. Minima     | In combattimento              |
| Usa Dadi Arma   | Si`                           |
| Eff. Fisica     | 75%                           |
| Eff. Magica     | 150%                          |
| Scuola          | Energia                       |
| Costo Mana      | 15                            |
| Tag             | Risonanza: Energia            |

> Descrizione

Il Mago evoca una lama di pura energia che si muove spontaneamente, e tenta
di colpire un bersaglio all'inizio di ogni round, se possibile preferendo
l'avversario ingaggiato dal Mago in corpo a corpo. Ogni attacco portato
a segno genera Risonanza di tipo Energia.

Al termine dell'effetto, la lama si dissolve, ripristinando il 5% dei
Punti Mana per ogni colpo portato a segno. Se il Mago ha meno del 25% di
Punti Mana disponibili, il recupero e` invece dell'8% per colpo a segno.

### Cono di freddo

| Attributo       | Valore                          |
| --------------- | ------------------------------- |
| Nome Inglese    | Cone of Cold                    |
| Comando         | formula // cast <nome abilita`> |
| Restrizioni     | Nessuna.                        |
| Causa Ostilita` | No                              |
| Attesa          | 0.75 round (3 secondi)          |
| Pos. Minima     | In combattimento                |
| Usa Dadi Arma   | Si`                             |
| Eff. Magica     | 300%                            |
| Scuola          | Freddo                          |
| Costo Mana      | 25                              |
| Tag             | Risonanza: Freddo               |

> Descrizione

Il Mago crea un cono di aria gelida, che colpisce tutti gli avversari
ingaggiati in combattimento con lui, e guadagna 50% Eff. Magica per ogni
bersaglio colpito.

### Crea Acqua

| Attributo       | Valore                                      |
| --------------- | ------------------------------------------- |
| Nome Inglese    | Create Water                                |
| Comando         | formula // cast nome abilita` bersaglio     |
| Restrizioni     | Nessuna.                                    |
| Bersagli        | Oggetto (inventario) Oggetto (equipaggiato) |
| Causa Ostilita` | No                                          |
| Attesa          | 0.75 round (3 secondi)                      |
| Pos. Minima     | In piedi                                    |
| Usa Dadi Arma   | Si`                                         |
| Costo Mana      | 5                                           |

### Scudo di risonanza

| Attributo       | Valore                                                  |
| --------------- | ------------------------------------------------------- |
| Nome Inglese    | Resonance Shield                                        |
| Comando         | formula // cast nome abilita`                           |
| Restrizioni     | Solo Classe Principale                                  |
| Causa Ostilita` | No                                                      |
| Attesa          | 0.75 round (3 secondi)                                  |
| Pos. Minima     | In combattimento                                        |
| Usa Dadi Arma   | Si`                                                     |
| Scuola          | Energia                                                 |
| Costo Mana      | 25                                                      |
| Simbolo Prompt  | F                                                       |
| Aura            | NomePg e` protetto da uno scudo di pura energia magica. |
| Tag             | Risonanza: Mutevole                                     |

> Descrizione

Il Mago crea uno scudo elementale che dipende dalla Risonanza della Trama, mutando
in accordo con la stessa, ed ottiene un numero di applicazioni pari 30, piu` una per ogni
10 Energia spesa.

Lo scudo reagisce ai colpi in corpo a corpo subiti, danneggiando
l'aggressore, e consumando una carica. Lo scudo svanisce quando le cariche arrivano a zero.

La risposta, inoltre, viene negata qualora l'attaccante sia a sua volta protetto da uno
scudo elementale.

Lo scudo ha un effetto secondario dipendente dalla Risonanza della Trama corrente:

-   Fuoco : 4% di non consumare una carica per punto di Risonanza.
-   Freddo : 5% di applicare Congelamento per punto di Risonanza.
-   Energia : +3% Eff. Magica per punto di Risonanza.

### Serpente di fiamme

| Attributo        | Valore                                  |
| ---------------- | --------------------------------------- |
| Nome Inglese     | Flame Snake                             |
| Comando          | formula // cast nome abilita` bersaglio |
| Restrizioni      | Massimo due Classi                      |
| Bersagli         | Creatura (stanza)                       |
| Causa Ostilita\` | Si`                                     |
| Attesa           | 0.75 round (3 secondi)                  |
| Pos. Minima      | In combattimento                        |
| Usa Dadi Arma    | Si`                                     |
| Eff. Magica      | 100%                                    |
| Scuola           | Fuoco                                   |
| Costo Mana       | 15                                      |
| Tag              | Risonanza: Fuoco                        |

> Descrizione

Un serpente di fiamme nasce vicino ai piedi del Mago, saettando verso
la vittima desiderata, e saltando poi verso un massimo di altri 5 avversari.

L'incantesimo guadagna un bonus di 125% Eff. Magica ogni salto di bersaglio
in bersaglio.

### Immagini illusorie

| Attributo       | Valore                                                |
| --------------- | ----------------------------------------------------- |
| Nome Inglese    | Mirror Images                                         |
| Comando         | formula // cast nome abilita`                         |
| Restrizioni     | Massimo due Classi                                    |
| Causa Ostilita` | No                                                    |
| Attesa          | 0.75 round (3 secondi)                                |
| Pos. Minima     | In combattimento                                      |
| Usa Dadi Arma   | Si`                                                   |
| Scuola          | Energia                                               |
| Costo Mana      | 25                                                    |
| Simbolo Prompt  | I                                                     |
| Aura            | NomePg e` accompagnato da diverse copie di se stesso! |
| Tag             | Risonanza: Mutevole                                   |

> Descrizione

Il Mago evoca da 6 a 10 immagini illusorie, completamente indistinguibili dalla sua
forma reale, e cambia regolarmente posizione scambiandosi con una delle immagini.

Ogni colpo in corpo a corpo subito dal mago ha una possibilita` pari a 5% per numero
di immagini residue, con un minimo di 20%, di colpire una delle immagini, dissolvendola
e non causando danno.

Quando un immagine viene colpita, genera un effetto secondario dipendente dalla
Risonanza della Trama corrente:

-                                                                       Fuoco   : Il Mago recupera 3 applicazioni di Scudo di Risonanza.
-                                                                       Freddo  : Genera un'applicazione di Congelamento sull'attaccante.
-                                                                       Energia : Il Mago recupera 3% dei propri Punti Mana.

### Lancia di Ghiaccio

| Attributo        | Valore                                  |
| ---------------- | --------------------------------------- |
| Nome Inglese     | Ice Spike                               |
| Comando          | formula // cast nome abilita` bersaglio |
| Restrizioni      | Nessuna.                                |
| Bersagli         | Creatura (stanza)                       |
| Causa Ostilita\` | Si`                                     |
| Attesa           | 0.75 round (3 secondi)                  |
| Pos. Minima      | In combattimento                        |
| Usa Dadi Arma    | Si`                                     |
| Eff. Magica      | 150%                                    |
| Scuola           | Freddo                                  |
| Costo Mana       | 25                                      |
| Tag              | Risonanza: Freddo                       |

> Descrizione

Il Mago scaglia una lancia di ghiaccio verso il bersaglio, che guadagna
50% Eff. Magica (o 4% Eff. Magica se Passiva) per ogni applicazione di
Congelamento sul bersaglio.

### Venti Invernali

| Attributo        | Valore                        |
| ---------------- | ----------------------------- |
| Nome Inglese     | Winds of Winter               |
| Comando          | formula // cast nome abilita` |
| Restrizioni      | Massimo due Classi            |
| Causa Ostilita\` | Si`                           |
| Attesa           | 0.75 round (3 secondi)        |
| Pos. Minima      | In combattimento              |
| Usa Dadi Arma    | Si`                           |
| Scuola           | Freddo                        |
| Costo Mana       | 15                            |
| Tag              | Risonanza: Freddo             |

> Descrizione

Il Mago evoca un turbine di venti gelidi, che applicano Congelamento ed
Ipotermia a tutti i bersagli presenti nella locazione, immediatamente, e per
i successivi 2 round.

### Catene Ghiacciate

| Attributo        | Valore                                  |
| ---------------- | --------------------------------------- |
| Nome Inglese     | Frozen Chains                           |
| Comando          | formula // cast nome abilita` bersaglio |
| Restrizioni      | Massimo due Classi                      |
| Bersagli         | Creatura (stanza)                       |
| Causa Ostilita\` | Si`                                     |
| Attesa           | 0.75 round (3 secondi)                  |
| Pos. Minima      | In combattimento                        |
| Usa Dadi Arma    | Si`                                     |
| Eff. Magica      | 100%                                    |
| Durata           | 4 round                                 |
| Scuola           | Freddo                                  |
| Costo Mana       | 25                                      |
| Tag              | Risonanza: Freddo                       |

> Descrizione

Il Mago crea robuste catene di ghiaccio, che avvolgono e stritolano il bersaglio,
danneggiandolo e impacciandone i movimenti, rendendolo Azzoppato per la durata
dell'effetto.

### Fonte di Potere

| Attributo       | Valore                          |
| --------------- | ------------------------------- |
| Nome Inglese    | Power Surge                     |
| Comando         | formula // cast nome abilita`   |
| Restrizioni     | Solo Classe Principale          |
| Causa Ostilita` | No                              |
| Attesa          | 0.75 round (3 secondi)          |
| Pos. Minima     | In combattimento                |
| Usa Dadi Arma   | Si`                             |
| Eff. Magica     | 125% + 1% per Energia consumata |
| Scuola          | Energia                         |
| Costo Mana      | 50                              |
| Tag             | Risonanza: Mutevole             |

Descrizione:

Il Mago convoglia tutta l'Energia accumulata in una scarica di potere che scorre nel suo
corpo, guarendolo e ripristinando Punti Mana pari alla meta` della guarigione. Per i seguenti
4 round, il Mago recupera ulteriore mana, pari al 25% della guarigione iniziale. Se l'abilita`
viene usata nuovamente durante questo effetto, causa 1.5 round di attesa, replica l'effetto
iniziale di guarigione aumentato del 25%, entra in cooldown per 8 round e rende il Mago
Spossato per lo stesso periodo di tempo.

L'abilita` ha inoltre un effetto secondario dipendente dalla Risonanza della Trama corrente:

-                                                           Fuoco   : Rimuove tutti gli effetti negativi sul Mago, a potenza 1. L'effetto e` aumentato a potenza 5 per gli effetti di tipo Trauma.
-                                                           Freddo  : Rende il Mago Incrollabile per 2 round.
-                                                           Energia : Il recupero di Punti Mana e` aumentato del 50%, e tutti gli effetti positivi presenti sul Mago guadagnano 1 punto di Resistenza alla Dissoluzione.

### Palla di Fuoco

| Attributo        | Valore                        |
| ---------------- | ----------------------------- |
| Nome Inglese     | Fireball                      |
| Comando          | formula // cast nome abilita` |
| Restrizioni      | Nessuna.                      |
| Causa Ostilita\` | Si`                           |
| Attesa           | 0.75 round (3 secondi)        |
| Pos. Minima      | In combattimento              |
| Usa Dadi Arma    | Si`                           |
| Eff. Magica      | 180%                          |
| Scuola           | Fuoco                         |
| Costo Mana       | 25                            |
| Tag              | Risonanza: Fuoco              |

> Descrizione

Il Mago crea una sfera infuocata, che esplode nella locazione colpendo tutti
i bersagli ostili, fino ad un massimo di 15.

### Sentiero Astrale

| Attributo       | Valore                        |
| --------------- | ----------------------------- |
| Nome Inglese    | Astral Walk                   |
| Comando         | formula // cast nome abilita` |
| Restrizioni     | Nessuna.                      |
| Causa Ostilita` | No                            |
| Attesa          | 0.75 round (3 secondi)        |
| Pos. Minima     | In piedi                      |
| Usa Dadi Arma   | Si`                           |
| Costo Mana      | 25                            |

### Disperdi Magie

| Attributo       | Valore                                  |
| --------------- | --------------------------------------- |
| Nome Inglese    | Dispel Magic                            |
| Comando         | formula // cast nome abilita` bersaglio |
| Restrizioni     | Nessuna.                                |
| Bersagli        | Creatura (stanza)                       |
| Causa Ostilita` | No                                      |
| Attesa          | 0.75 round (3 secondi)                  |
| Pos. Minima     | In combattimento                        |
| Usa Dadi Arma   | Si`                                     |
| Scuola          | Energia                                 |
| Costo Mana      | 15                                      |
| Tag             | Risonanza: Mutevole                     |

Descrizione:

Il Mago disperde le energie magiche attorno ad un bersaglio.
La Potenza di Dissoluzione e` aumentata di 1 per ogni 50 Energia spesa, ed il numero
di effetti influenzati e` aumentato di 1 per ogni 20 Energia spesa.

Se il bersaglio e\` ostile, l'abilita` ha un effetto secondario dipendente
dalla Risonanza della Trama per ogni effetto influenzato o rimosso:

-                                                   Fuoco   : Genera 2 applicazioni di Scudo di Risonanza.
-                                                   Freddo  : Genera 1 applicazione di Congelamento.
-                                                   Energia : Il Mago recupera 3% Punti Mana.

### Colpo Dirompente

| Attributo        | Valore                                  |
| ---------------- | --------------------------------------- |
| Nome Inglese     | Disrupting Blast                        |
| Comando          | formula // cast nome abilita` bersaglio |
| Restrizioni      | Massimo due Classi                      |
| Bersagli         | Creatura (stanza)                       |
| Causa Ostilita\` | Si`                                     |
| Attesa           | 0.75 round (3 secondi)                  |
| Pos. Minima      | In combattimento                        |
| Usa Dadi Arma    | Si`                                     |
| Scuola           | Energia                                 |
| Costo Mana       | 25                                      |
| Cooldown         | 12 round                                |
| Tag              | Risonanza: Energia                      |

> Descrizione

Il Mago crea un'esplosione di energia pura in prossimita` del bersaglio,
mandandolo a terra e causando 2 round di attesa. Questo incantesimo viene
potenziato da Magia Accumulata.

### Incendia Magie

| Attributo        | Valore                                  |
| ---------------- | --------------------------------------- |
| Nome Inglese     | Ignite Magic                            |
| Comando          | formula // cast nome abilita` bersaglio |
| Restrizioni      | Nessuna.                                |
| Bersagli         | Creatura (stanza)                       |
| Causa Ostilita\` | Si`                                     |
| Attesa           | 0.75 round (3 secondi)                  |
| Pos. Minima      | In combattimento                        |
| Usa Dadi Arma    | Si`                                     |
| Eff. Magica      | 50%                                     |
| Scuola           | Fuoco                                   |
| Costo Mana       | 30                                      |

> Descrizione:

Il Mago sfrutta le energie magiche intorno al bersaglio, incendiandole
improvvisamente. Il danno causato guadagna 150% Eff.

Magica se il bersaglio ha almeno un effetto magico, ed ulteriore 25% Eff. Magica
per ogni applicazione di Incendio sul Mago.

### Bomba Vivente

| Attributo        | Valore                                    |
| ---------------- | ----------------------------------------- |
| Nome Inglese     | Living Bomb                               |
| Comando          | formula // cast nome abilita` bersaglio   |
| Restrizioni      | Massimo due Classi                        |
| Bersagli         | Creatura (stanza)                         |
| Causa Ostilita\` | Si`                                       |
| Attesa           | 0.75 round (3 secondi)                    |
| Pos. Minima      | In combattimento                          |
| Usa Dadi Arma    | Si`                                       |
| Eff. Magica      | 100% + 100% per round, +200% su uccisione |
| Durata           | 4 round                                   |
| Scuola           | Fuoco                                     |
| Costo Mana       | 25                                        |
| Tag              | Risonanza: Fuoco                          |

> Descrizione

Il Mago pianta un seme infernale nel corpo di un bersaglio, che acquista
potenza nel tempo, fino ad esplodere quando il Mago utilizza di nuovo l'incantesimo,
oppure al termine della durata o alla morte del bersaglio.

### Disintegrazione

| Attributo        | Valore                                  |
| ---------------- | --------------------------------------- |
| Nome Inglese     | Disintegrate                            |
| Comando          | formula // cast nome abilita` bersaglio |
| Restrizioni      | Nessuna.                                |
| Bersagli         | Creatura (stanza)                       |
| Causa Ostilita\` | Si`                                     |
| Attesa           | 0.75 round (3 secondi)                  |
| Pos. Minima      | In combattimento                        |
| Usa Dadi Arma    | Si`                                     |
| Eff. Magica      | 400%                                    |
| Scuola           | Energia                                 |
| Costo Mana       | 40                                      |
| Tag              | Risonanza: Energia                      |

> Descrizione

Il Mago crea un raggio disintegrante di energia purissima, dirigendolo
verso un bersaglio. Se ucciso da questo incantesimo, l'avversario viene ridotto
in polvere, e non lascia cadavere.

Questo incantesimo viene potenziato da Magia Accumulata, e guadagna bonus raddoppiato in funzione della percentuale
di Punti Mana del Mago, per gli effetti di Risonanza della Trama.

### Catalizzatore Arcano

| Attributo        | Valore                                  |
| ---------------- | --------------------------------------- |
| Nome Inglese     | Arcane Catalyst                         |
| Comando          | formula // cast nome abilita` bersaglio |
| Restrizioni      | Nessuna.                                |
| Bersagli         | Creatura (stanza)                       |
| Causa Ostilita\` | Si`                                     |
| Attesa           | 0.75 round (3 secondi)                  |
| Pos. Minima      | In combattimento                        |
| Usa Dadi Arma    | Si`                                     |
| Eff. Magica      | 50%                                     |
| Scuola           | Energia                                 |
| Costo Mana       | 10                                      |
| Tag              | Risonanza: Energia                      |

> Descrizione

Il Mago assorbe l'energia magica attorno al bersaglio, accumulandola attorno
a se` per prepararsi a scaricarla in seguito. Genera un'applicazione di Magia
Accumulata, fino ad un massimo di 3 applicazioni.

> Magia Accumulata

Qualora il Mago disponga di magia accumulata tramite catalizzatore arcano
gli incantesimi disintegrazione, colpo dirompente, dardo incantato
e scarica arcana vedono il proprio costo in mana aumentato del 50%
per ogni applicazione di magia accumulata, la consumano, e guadagnano un bonus
al danno del 15% per ogni applicazione.

### Squarcia il velo

| Attributo       | Valore                        |
| --------------- | ----------------------------- |
| Nome Inglese    | Pierce the Veil               |
| Comando         | formula // cast nome abilita` |
| Restrizioni     | Solo Classe Singola           |
| Causa Ostilita` | No                            |
| Attesa          | 0 round (0 secondi)           |
| Pos. Minima     | In combattimento              |
| Usa Dadi Arma   | Si`                           |
| Scuola          | Energia                       |
| Cooldown        | 20 round                      |
| Tag             | Risonanza: Mutevole           |

> Descrizione

Il Mago si abbandona alla Trama, trasformandosi temporaneamente in una forma elementale
relativa alla Risonanza della Trama corrente.

Durante la trasformazione, l'Energia viene
recuperata automaticamente, ed il mago guadagna accesso ad abilita` uniche, dipendenti
dalla forma, e non puo\` usare abilita` con Risonanza differente.

Le abilita` guadagnate sono:

-                           Fuoco   : Sciame di Meteore, Nube Incendiaria
-                           Freddo  : Incastona nel Ghiaccio, Frantumazione
-                           Energia : Scarica Arcana, Assorbi Magia

### Sciame di Meteore

| Attributo       | Valore                                  |
| --------------- | --------------------------------------- |
| Nome Inglese    | Meteor Swarm                            |
| Comando         | formula // cast nome abilita` bersaglio |
| Restrizioni     | Nessuna.                                |
| Bersagli        | Creatura (stanza)                       |
| Causa Ostilita` | No                                      |
| Attesa          | 0.75 round (3 secondi)                  |
| Pos. Minima     | In combattimento                        |
| Usa Dadi Arma   | Si`                                     |
| Eff. Magica     | 320% immediata, Speciale per durata     |
| Durata          | 12 round                                |
| Scuola          | Fuoco                                   |
| Costo Mana      | 25                                      |
| Tag             | Risonanza: Fuoco                        |

> Descrizione

Il Mago sceglie un bersaglio, e procede ad aprire un portale magico che lo
segue nei suoi movimenti da cui iniziano a piovere meteore infuocate.
La prima, immediata, colpisce il bersaglio scelto.

Le successive, in numero e ad
intervalli casuali, possono colpire bersagli ostili nella locazione per 320% Eff.
Magica, o schiantarsi al suolo per 120% Eff. Magica su tutti i bersagli ostili.

Occasionalmente, una mastodontica stella cadente attraversa il portale. Quando
questo accade, il Mago puo\` usare nuovamente l'abilita` per indirizzarla verso
un bersaglio specifico per 720% Eff. Magica.

### Nube Incendiaria

| Attributo        | Valore                        |
| ---------------- | ----------------------------- |
| Nome Inglese     | Incendiary Cloud              |
| Comando          | formula // cast nome abilita` |
| Restrizioni      | Nessuna.                      |
| Causa Ostilita\` | Si`                           |
| Attesa           | 0.75 round (3 secondi)        |
| Pos. Minima      | In combattimento              |
| Usa Dadi Arma    | Si`                           |
| Eff. Magica      | 180%                          |
| Durata           | 4 round                       |
| Scuola           | Fuoco                         |
| Costo Mana       | 25                            |
| Tag              | Risonanza: Fuoco              |

> Descrizione

Il Mago crea una nube di gas che viene immediatamente incendiata, e continua
a bruciare nella locazione in cui e` stata creata, causando danno immediatamente,
ed all'inizio di ogni round fino al termine. I colpi critici causati da questo
incantesimo generano 2 applicazioni di Incendio.

### Incastona nel Ghiaccio

| Attributo       | Valore                                  |
| --------------- | --------------------------------------- |
| Nome Inglese    | Encase in ice                           |
| Comando         | formula // cast nome abilita` bersaglio |
| Restrizioni     | Nessuna.                                |
| Bersagli        | Creatura (stanza)                       |
| Causa Ostilita` | No                                      |
| Attesa          | 0.75 round (3 secondi)                  |
| Pos. Minima     | In combattimento                        |
| Usa Dadi Arma   | Si`                                     |
| Scuola          | Freddo                                  |
| Costo Mana      | 25                                      |
| Tag             | Risonanza: Freddo                       |

> Descrizione

Il Mago crea un blocco di ghiaccio attorno ad un bersaglio, rendendolo
Invulnerabile e Stordito per la durata dell'effetto. Se il bersaglio e`
amichevole, recupera il 5% dei propri Punti Ferita massimi per round.

Se il bersaglio e` il Mago stesso, l'effetto Stordito non viene applicato, il
recupero aumenta a 20% dei Punti Ferita massimi, e la durata e` ridotta a
2 round.

### Frantumazione

| Attributo        | Valore                                  |
| ---------------- | --------------------------------------- |
| Nome Inglese     | Shatter                                 |
| Comando          | formula // cast nome abilita` bersaglio |
| Restrizioni      | Nessuna.                                |
| Bersagli         | Creatura (stanza)                       |
| Causa Ostilita\` | Si`                                     |
| Attesa           | 0.75 round (3 secondi)                  |
| Pos. Minima      | In combattimento                        |
| Usa Dadi Arma    | Si`                                     |
| Eff. Magica      | 50%                                     |
| Scuola           | Freddo                                  |
| Costo Mana       | 15                                      |
| Tag              | Risonanza: Freddo                       |

> Descrizione

Il Mago frantuma i microscopici cristalli di ghiaccio nel corpo del bersaglio
causando danni in funzione delle applicazioni di Congelamento. Se il bersaglio ha
10 applicazioni, viene anche Stordito per 3 round. Nel caso il bersaglio venga
ucciso, l'esplosione risultante e` forte a sufficienza da generare Venti Invernali.

### Scarica Arcana

| Attributo        | Valore                                                    |
| ---------------- | --------------------------------------------------------- |
| Nome Inglese     | Arcane Discharge                                          |
| Comando          | formula // cast nome abilita` bersaglio                   |
| Restrizioni      | Nessuna.                                                  |
| Bersagli         | Creatura (stanza)                                         |
| Causa Ostilita\` | Si`                                                       |
| Attesa           | 0.75 round (3 secondi)                                    |
| Pos. Minima      | In combattimento                                          |
| Usa Dadi Arma    | Si`                                                       |
| Eff. Magica      | 300% + 2% ogni 3 Punti Mana consumati oltre il costo base |
| Scuola           | Energia                                                   |
| Costo Mana       | 10                                                        |
| Tag              | Risonanza: Energia                                        |

> Descrizione

Il Mago scarica tutta l'energia magica che ha a disposizione in un attacco
di potenza inaudita.

### Assorbi Magia

### Concentrazione Totale

| Attributo       | Valore                        |
| --------------- | ----------------------------- |
| Nome Inglese    | Complete Focus                |
| Comando         | formula // cast nome abilita` |
| Restrizioni     | Nessuna.                      |
| Causa Ostilita` | No                            |
| Attesa          | 0 round (0 secondi)           |
| Pos. Minima     | In combattimento              |
| Usa Dadi Arma   | Si`                           |
| Scuola          | Energia                       |

### Maestria con lo Scudo

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
