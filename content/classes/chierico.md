---
page: chierico
---

# Il Chierico

Il chierico e\` la classe che piu\` ha a cuore il rapporto con le divinita\`
e trae da questa relazione la capacita\` di operare attraverso arti magiche
clericali.
Il chierico ha come abilita\` preponderante quella di curare se stesso e gli
altri, tuttavia non disdegna di colpire gli avversari con mezzi sia fisici
che magici.

Ad Alma (via delle gilde) e\` presente una gilda dei chierici con un maestro che
iniziera\` i giovani chierici ai primi rudimenti della loro arte.
Nel causare danno, o guarire ferite attraverso le proprie abilita\` attive
il chierico genera energia proporzionale alla lag generata
dall\`abilita\` stessa.
Gli attacchi corpo a corpo generano 3 energia.

## Lista skill

| Livello | Nome skill                                      | Note              |
| ------- | ----------------------------------------------- | ----------------- |
| 1       | [Benedizione ](#benedizione)                    |
| 1       | [Tocco Guaritore ](#tocco-guaritore)            |
| 5       | [Crea Acqua ](#crea-acqua)                      |
| 8       | [Anima Cadavere ](#anima-cadavere)              |
| 8       | [Disincantare ](#disincantare)                  |
| 12      | [Liberazione ](#liberazione)                    |
| 15      | [Terremoto ](#terremoto)                        |
| 15      | [Colpo Fiammeggiante ](#colpo-fiammeggiante)    |
| 15      | [Maestria con lo Scudo](#maestria-con-lo-scudo) |
| 21      | [Invoca Disperazione ](#invoca-disperazione)    | Classe Principale |
| 21      | [Invoca Giustizia ](#invoca-giustizia)          | Classe Principale |
| 23      | [Silenzio ](#silenzio)                          |
| 24      | [Banchetto Degli Eroi ](#banchetto-degli-eroi)  |
| 25      | [Sentiero Astrale ](#sentiero-astrala)          |
| 30      | [Dolore ](#dolore)                              |
| 30      | [Guarigione ](#guarigione)                      |
| 31      | [Catena di Guarigione ](#catena-di-guarigione)  | Max 2 Classi      |
| 31      | [Invoca Salvezza ](#invoca-salvezza)            | Classe Principale |
| 31      | [Invoca Serenita ](#invoca-serenita)            | Classe Principale |
| 34      | [Armatura Della Fede ](#armatura-della-fede)    |
| 41      | [Brucia gli Eretici ](#brucia-gli-eretici)      |
| 41      | [Invoca Distruzione ](#invoca-distruzione)      | Classe Principale |
| 45      | [Scudo di Fuoco ](#scudo-di-fuoco)              |
| 48      | [Ira di Asgaard ](#ira-di-asgaard)              | Max 2 Classi      |
| 50      | [Implosione ](#implosione)                      | Max 2 Classi      |
| 50      | [Aura Divina ](#aura-divina)                    |
| 50      | [Ambidestria ](#ambidestria)                    |
| 50      | [Armi a due Mani ](#armi-a-due-mani)            |
| 50      | [Miracolo ](#miracolo)                          | Max 2 Classi      |

## Descrizione skill

### Benedizione

| Attributo       | Valore                                  |
| --------------- | --------------------------------------- |
| Nome Inglese    | Bless                                   |
| Comando         | formula // cast nome abilita` bersaglio |
| Restrizioni     | Nessuna.                                |
| Bersagli        | Creatura (stanza)                       |
| Causa Ostilita` | No                                      |
| Attesa          | 0.75 round (3 secondi)                  |
| Pos. Minima     | In piedi                                |
| Usa Dadi Arma   | Si`                                     |
| Eff. Fisica     | 5%                                      |
| Durata          | 3 tick                                  |
| Vs Dispersione  | 5                                       |
| Scuola          | Lumen                                   |
| Costo Mana      | 5                                       |

> Descrizione

La benedizione degli Dei dona confidenza, aumentando l'efficacia di
tutte le abilita` utilizzate dal bersaglio.

### Tocco Guaritore

| Attributo       | Valore                                  |
| --------------- | --------------------------------------- |
| Nome Inglese    | Healing Touch                           |
| Comando         | formula // cast nome abilita` bersaglio |
| Restrizioni     | Nessuna.                                |
| Bersagli        | Creatura (stanza)                       |
| In Combatt.     | Se non specificato, va su se stessi.    |
| Causa Ostilita` | No                                      |
| Attesa          | 0.75 round (3 secondi)                  |
| Pos. Minima     | In combattimento                        |
| Usa Dadi Arma   | Si`                                     |
| Eff. Magica     | 60%                                     |
| Scuola          | Lumen                                   |
| Costo Mana      | 10                                      |

> Descrizione:

La tecnica piu` basilare insegnata ai giovani Chierici per la guarigione
in battaglia. A dispetto della sua semplicita`, rimane efficiente ed utile.

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

### Anima Cadavere

| Attributo       | Valore                                  |
| --------------- | --------------------------------------- |
| Nome Inglese    | Animate Dead                            |
| Comando         | formula // cast nome abilita` bersaglio |
| Restrizioni     | Nessuna.                                |
| Bersagli        | Oggetto (stanza)                        |
| Causa Ostilita` | No                                      |
| Attesa          | 0.75 round (3 secondi)                  |
| Pos. Minima     | In piedi                                |
| Usa Dadi Arma   | Si`                                     |
| Costo Mana      | 5                                       |

### Disincantare

| Attributo       | Valore                                  |
| --------------- | --------------------------------------- |
| Nome Inglese    | Disenchant                              |
| Comando         | formula // cast nome abilita` bersaglio |
| Restrizioni     | Nessuna.                                |
| Bersagli        | Creatura (stanza)                       |
| Causa Ostilita` | Solo su bersagli ostili                 |
| Attesa          | 0.75 round (3 secondi)                  |
| Pos. Minima     | In combattimento                        |
| Usa Dadi Arma   | Si`                                     |
| Costo Mana      | 30                                      |

> Descrizione

Il Chierico tenta di rimuovere tutti gli incantesimi su un bersaglio
a sua scelta. La volonta` del bersaglio gioca un ruolo rilevante, aumentando
la forza dell'effetto a 5 su bersagli amichevoli.

### Liberazione

| Attributo       | Valore                                  |
| --------------- | --------------------------------------- |
| Nome Inglese    | Unshackle                               |
| Comando         | formula // cast nome abilita` bersaglio |
| Restrizioni     | Nessuna.                                |
| Bersagli        | Creatura (stanza)                       |
| In Combatt.     | Se non specificato, va su se stessi.    |
| Causa Ostilita` | No                                      |
| Attesa          | 0.75 round (3 secondi)                  |
| Pos. Minima     | In combattimento                        |
| Usa Dadi Arma   | Si`                                     |
| Scuola          | Lumen                                   |
| Costo Mana      | 15                                      |

> Descrizione

Il Chierico garantisce liberta` di azione e movimento al bersaglio,
rimuovendo con potenza 5 tutti gli effetti che causano Azzoppato,
Immobilizzato o Terrorizzato.

### Terremoto

| Attributo        | Valore                        |
| ---------------- | ----------------------------- |
| Nome Inglese     | Earthquake                    |
| Comando          | formula // cast nome abilita` |
| Restrizioni      | Nessuna.                      |
| Causa Ostilita\` | Si`                           |
| Attesa           | 0.75 round (3 secondi)        |
| Pos. Minima      | In combattimento              |
| Usa Dadi Arma    | Si`                           |
| Eff. Magica      | 225%                          |
| Scuola           | Trauma                        |
| Costo Mana       | 20                            |

> Descrizione

Il Chierico fa appello alla collera divina per scuotere la terra,
colpendo tutti i bersagli non alleati nella stessa stanza.

### Colpo Fiammeggiante

| Attributo        | Valore                                  |
| ---------------- | --------------------------------------- |
| Nome Inglese     | Flamestrike                             |
| Comando          | formula // cast nome abilita` bersaglio |
| Restrizioni      | Nessuna.                                |
| Bersagli         | Creatura (stanza)                       |
| Causa Ostilita\` | Si`                                     |
| Attesa           | 0.75 round (3 secondi)                  |
| Pos. Minima      | In combattimento                        |
| Usa Dadi Arma    | Si`                                     |
| Eff. Magica      | 250%                                    |
| Scuola           | Fuoco                                   |
| Costo Mana       | 20                                      |

> Descrizione

Il Chierico richiama una colonna di fuoco dal cielo, che si abbatte sul
bersaglio. Se l'effetto Bruciare e` presente sulla vittima, la sua Eff. Magica
e` aumentata del 25% per la durata restante, che non viene modificata, fino ad
un massimo di 200%. Inoltre, l'uso dell'incantesimo riduce di 1 round il cooldown
di [Implosione](#implosione).

### Maestria Con Lo Scudo

### Invoca Disperazione

| Attributo        | Valore                                  |
| ---------------- | --------------------------------------- |
| Nome Inglese     | Invoke Despair                          |
| Comando          | formula // cast nome abilita` bersaglio |
| Restrizioni      | Solo Classe Principale                  |
| Bersagli         | Creatura (stanza)                       |
| Causa Ostilita\` | Si`                                     |
| Attesa           | 0.75 round (3 secondi)                  |
| Pos. Minima      | In combattimento                        |
| Usa Dadi Arma    | Si`                                     |
| Eff. Magica      | 300%                                    |
| Scuola           | Umbra                                   |
| Costo Energia    | 100                                     |

> Descrizione

Il Chierico invoca la Disperazione Divina su un bersaglio, rendendolo
Accecato, Accecato e Vulnerabile per 3 round, e mandandolo in terra
per 2 round.

### Invoca Giustizia

| Attributo       | Valore                        |
| --------------- | ----------------------------- |
| Nome Inglese    | Invoke Justice                |
| Comando         | formula // cast nome abilita` |
| Restrizioni     | Solo Classe Principale        |
| Causa Ostilita` | Solo su bersagli ostili       |
| Attesa          | 0.75 round (3 secondi)        |
| Pos. Minima     | In combattimento              |
| Usa Dadi Arma   | Si`                           |
| Scuola          | Lumen                         |
| Costo Energia   | 100                           |

> Descrizione

Il Chierico invoca la Giustizia Divina, richiamando un incantesimo di Guarigione
su tutti gli alleati, ed un incantesimo di [Dolore](#dolore) su tutti gli avversari.

### Silenzio

| Attributo        | Valore                                  |
| ---------------- | --------------------------------------- |
| Nome Inglese     | Silence                                 |
| Comando          | formula // cast nome abilita` bersaglio |
| Restrizioni      | Nessuna.                                |
| Bersagli         | Creatura (stanza)                       |
| Causa Ostilita\` | Si`                                     |
| Attesa           | 0.75 round (3 secondi)                  |
| Pos. Minima      | In combattimento                        |
| Usa Dadi Arma    | Si`                                     |
| Durata           | 2 round                                 |
| Costo Mana       | 30                                      |
| Cooldown         | 12 round                                |

> Descrizione

Il Chierico impone la volonta` divina sul proprio bersaglio, impedendogli
di produrre qualsiasi tipo di suono, rendendolo Silenziato.

### Banchetto Degli Eroi

| Attributo       | Valore                        |
| --------------- | ----------------------------- |
| Nome Inglese    | Heroes Feast                  |
| Comando         | formula // cast nome abilita` |
| Restrizioni     | Nessuna.                      |
| Causa Ostilita` | No                            |
| Attesa          | 0.75 round (3 secondi)        |
| Pos. Minima     | In piedi                      |
| Usa Dadi Arma   | Si`                           |
| Costo Mana      | 40                            |

> Descrizione

Riconosciuta come una delle colonne portanti del trionfo militare dell'impero
Almiriano, la preghiera in questione invoca l'intervento divino per quietare fame,
sete e stanchezza in tutto il gruppo, senza effetti collaterali degni di nota.

### Sentiero Astrale

| Attributo       | Valore                          |
| --------------- | ------------------------------- |
| Nome Inglese    | Astral Walk                     |
| Comando         | formula // cast <nome abilita`> |
| Restrizioni     | Nessuna.                        |
| Causa Ostilita` | No                              |
| Attesa          | 0.75 round (3 secondi)          |
| Pos. Minima     | In piedi                        |
| Usa Dadi Arma   | Si`                             |
| Costo Mana      | 25                              |

### Dolore

| Attributo        | Valore                                  |
| ---------------- | --------------------------------------- |
| Nome Inglese     | Harm                                    |
| Comando          | formula // cast nome abilita` bersaglio |
| Restrizioni      | Nessuna.                                |
| Bersagli         | Creatura (stanza)                       |
| Causa Ostilita\` | Si`                                     |
| Attesa           | 0.75 round (3 secondi)                  |
| Pos. Minima      | In combattimento                        |
| Usa Dadi Arma    | Si`                                     |
| Eff. Magica      | 400%                                    |
| Scuola           | Umbra                                   |
| Costo Mana       | 30                                      |

> Descrizione

Il Chierico scatena un'ondata di energia negativa nel suo bersaglio,
che viene sopraffatto dal dolore. L'incantesimo guadagna 50% Eff. Magica
per ogni effetto negativo presente sulla vittima, e 75% Eff. Magica ulteriore
per ogni effetto di Controllo.

### Guarigione

| Attributo       | Valore                                  |
| --------------- | --------------------------------------- |
| Nome Inglese    | Heal                                    |
| Comando         | formula // cast nome abilita` bersaglio |
| Restrizioni     | Nessuna.                                |
| Bersagli        | Creatura (stanza)                       |
| Causa Ostilita` | No                                      |
| Attesa          | 0.75 round (3 secondi)                  |
| Pos. Minima     | In combattimento                        |
| Usa Dadi Arma   | Si`                                     |
| Eff. Magica     | 150%                                    |
| Scuola          | Lumen                                   |
| Costo Mana      | 40                                      |

> Descrizione

Il piu` noto e comune tra gli incantesimi in grado di guarire le ferite
riportate in battaglia. Riduce, se presente, il cooldown di [Miracolo](#miracolo) di un
round per ogni utilizzo.

### Catena Di Guarigione

| Attributo       | Valore                                  |
| --------------- | --------------------------------------- |
| Nome Inglese    | Chain Heal                              |
| Comando         | formula // cast nome abilita` bersaglio |
| Restrizioni     | Massimo due Classi                      |
| Bersagli        | Creatura (stanza)                       |
| In Combatt.     | Se non specificato, va su se stessi.    |
| Causa Ostilita` | No                                      |
| Attesa          | 0.75 round (3 secondi)                  |
| Pos. Minima     | In combattimento                        |
| Usa Dadi Arma   | Si`                                     |
| Eff. Magica     | 75%                                     |
| Scuola          | Lumen                                   |
| Costo Mana      | 60                                      |

> Descrizione

Il Chierico crea un flusso di energia guaritrice che si propaga tra i suoi
alleati, guadagnando 50% Eff. Magica con ogni salto, fino ad un
massimo di 5 bersagli.

### Invoca Salvezza

| Attributo       | Valore                        |
| --------------- | ----------------------------- |
| Nome Inglese    | Invoke Salvation              |
| Comando         | formula // cast nome abilita` |
| Restrizioni     | Solo Classe Principale        |
| Causa Ostilita` | No                            |
| Attesa          | 0.75 round (3 secondi)        |
| Pos. Minima     | In combattimento              |
| Usa Dadi Arma   | Si`                           |
| Scuola          | Lumen                         |
| Costo Energia   | 100                           |

> Descrizione

Il Chierico invoca la Salvezza Divina, richiamando un incantesimo di [Miracolo](#miracolo)
e Santuario su tutti i bersagli amichevoli in stanza.

### Invoca Serenita

| Attributo       | Valore                        |
| --------------- | ----------------------------- |
| Nome Inglese    | Invoke Serenity               |
| Comando         | formula // cast nome abilita` |
| Restrizioni     | Solo Classe Principale        |
| Causa Ostilita` | No                            |
| Attesa          | 0.75 round (3 secondi)        |
| Pos. Minima     | In combattimento              |
| Usa Dadi Arma   | Si`                           |
| Eff. Magica     | 75%                           |
| Scuola          | Lumen                         |
| Costo Energia   | 100                           |

> Descrizione

Il Chierico invoca la Serenita` Divina, ripristinando Mana ed Energia sia al Chierico
che, in misura minore, ai suoi alleati.

### Armatura Della Fede

| Attributo       | Valore                                  |
| --------------- | --------------------------------------- |
| Nome Inglese    | Armor of Faith                          |
| Comando         | formula // cast nome abilita` bersaglio |
| Restrizioni     | Nessuna.                                |
| Bersagli        | Creatura (stanza)                       |
| Causa Ostilita` | No                                      |
| Attesa          | 0.75 round (3 secondi)                  |
| Pos. Minima     | In piedi                                |
| Usa Dadi Arma   | Si`                                     |
| Scuola          | Lumen                                   |
| Costo Mana      | 20                                      |

> Descrizione

Il Chierico invoca l'intervento divino per guarire le ferite piu` gravi.
Il cooldown dell'abilita\` puo` essere ridotto con l'utilizzo di [Guarigione](#guarigione).

### Brucia Gli Eretici

| Attributo        | Valore                                  |
| ---------------- | --------------------------------------- |
| Nome Inglese     | Burn the Wicked                         |
| Comando          | formula // cast nome abilita` bersaglio |
| Restrizioni      | Nessuna.                                |
| Bersagli         | Creatura (stanza)                       |
| Causa Ostilita\` | Si`                                     |
| Attesa           | 0.75 round (3 secondi)                  |
| Pos. Minima      | In combattimento                        |
| Usa Dadi Arma    | Si`                                     |
| Eff. Magica      | 80%                                     |
| Durata           | 6 round                                 |
| Scuola           | Fuoco                                   |
| Costo Mana       | 15                                      |

> Descrizione

Il Chierico brucia il bersaglio nelle fiamme purificatrici, applicando
l'effetto Bruciare, che causa danno ogni round per 30% Eff. Fisica e 60% Eff.
Magica. Se il bersaglio e\` gia` affetto da Bruciare, la durata dell'effetto
viene riportata al suo massimo, ed eventuali cambiamenti causati dall'utilizzo
di [Colpo Fiammeggiante](#colpo-fiammeggiante) o [Implosione](#implosione) sono persi.

### Invoca Distruzione

| Attributo        | Valore                        |
| ---------------- | ----------------------------- |
| Nome Inglese     | Invoke Destruction            |
| Comando          | formula // cast nome abilita` |
| Restrizioni      | Solo Classe Principale        |
| Causa Ostilita\` | Si`                           |
| Attesa           | 0.75 round (3 secondi)        |
| Pos. Minima      | In combattimento              |
| Usa Dadi Arma    | Si`                           |
| Scuola           | Fuoco                         |
| Costo Energia    | 100                           |

> Descrizione

Il Chierico invoca la Distruzione Divina, richiamando un incantesimo di [Miracolo](#miracolo)
e Santuario su tutti i bersagli amichevoli in stanza.

### Scudo Di Fuoco

| Attributo       | Valore                                       |
| --------------- | -------------------------------------------- |
| Nome Inglese    | Fireshield                                   |
| Comando         | formula // cast nome abilita`                |
| Restrizioni     | Nessuna.                                     |
| Causa Ostilita` | No                                           |
| Attesa          | 0.75 round (3 secondi)                       |
| Pos. Minima     | In combattimento                             |
| Usa Dadi Arma   | No                                           |
| Scuola          | Fuoco                                        |
| Costo Mana      | 25                                           |
| Simbolo Prompt  | F                                            |
| Aura            | NomePg e` avvolto in una luce fiammeggiante! |

> Descrizione

Il Chierico evoca un imponente scudo infuocato attorno a se`, che reagisce
ai colpi in corpo a corpo subiti, attaccando in risposta l'aggressore, consumando
una carica. In partenza, e ad ogni utilizzo, le cariche vengono riportate a 40.
Lo scudo svanisce quando le cariche arrivano a zero. La risposta, inoltre, viene negata
qualora l'attaccante sia a sua volta protetto da uno scudo elementale.

### Ira di Asgaard

| Attributo        | Valore                                  |
| ---------------- | --------------------------------------- |
| Nome Inglese     | Wrath of Asgaard                        |
| Comando          | formula // cast nome abilita` bersaglio |
| Restrizioni      | Massimo due Classi                      |
| Bersagli         | Creatura (stanza)                       |
| Causa Ostilita\` | Si`                                     |
| Attesa           | 3 round (12 secondi)                    |
| Pos. Minima      | In combattimento                        |
| Usa Dadi Arma    | Si`                                     |
| Eff. Magica      | 800%                                    |
| Scuola           | Lumen                                   |
| Costo Mana       | 90                                      |

> Descrizione

Il Chierico richiama l'ira incontrollata degli Dei, scatenando un turbine
di energie divine sul bersaglio. Se l'incantesimo uccide il bersaglio, la convinzione
del Chierico si rinnova, riducendo il tempo di attesa a 0.75 round.

### Implosione

| Attributo        | Valore                                  |
| ---------------- | --------------------------------------- |
| Nome Inglese     | Implosion                               |
| Comando          | formula // cast nome abilita` bersaglio |
| Restrizioni      | Massimo due Classi                      |
| Bersagli         | Creatura (stanza)                       |
| Causa Ostilita\` | Si`                                     |
| Attesa           | 0.75 round (3 secondi)                  |
| Pos. Minima      | In combattimento                        |
| Usa Dadi Arma    | Si`                                     |
| Eff. Magica      | 500%                                    |
| Scuola           | Umbra                                   |
| Costo Mana       | 35                                      |

> Descrizione

Il Chierico crea un manto di tenebre attorno al bersaglio, e ne causa
la successiva implosione. Se l'effetto Bruciare e` presente sul bersaglio,
l'efficacia di quest'ultimo e` aumentata del 50%, fino ad un massimo di 200%,
e la durata residua dell'effetto e` riportata a 6 round.

### Aura Divina

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

### Armi a due Mani

Impugnare un'arma a due mani riduce il numero di attacchi di uno, con un
minimo di 1. Per impugnare un'arma a due mani e' sufficiente avere la seconda
mano libera.
Un attacco a due mani ha un moltiplicatore base di 300%.

### Miracolo

| Attributo       | Valore                                  |
| --------------- | --------------------------------------- |
| Nome Inglese    | Miracle                                 |
| Comando         | formula // cast nome abilita` bersaglio |
| Restrizioni     | Massimo due Classi                      |
| Bersagli        | Creatura (stanza)                       |
| Causa Ostilita` | No                                      |
| Attesa          | 0.75 round (3 secondi)                  |
| Pos. Minima     | In combattimento                        |
| Usa Dadi Arma   | Si`                                     |
| Eff. Magica     | 300%                                    |
| Scuola          | Lumen                                   |
| Costo Mana      | 25                                      |
| Cooldown        | 8 round                                 |

> Descrizione

Il Chierico invoca l'intervento divino per guarire le ferite piu` gravi.
Il cooldown dell'abilita' puo' essere ridotto con l'utilizzo di [Guarigione](#guarigione).
