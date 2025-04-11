---
page: paladino
---

# Paladino

Il Paladino e\` la classe che meglio incarna l\`onore nel combattimento, 
e la dedizione di un guerriero alla propria divinita\`, Jolnit.
Il Paladino nell\`affrontare l\`avversario oltre all\`aiuto delle armi potra\` 
quindi far valere l`aiuto del suo nume tutelare riuscendo a far valere il
suo onore anche contro ogni previsione.

Ad Alma (via delle gilde) e\` presente una il tempio di Jolnit con un 
maestro che iniziera` i giovani paladini ai primi rudimenti della loro
arte.

> Contro ogni previsione

Quando il Paladino si trova di fronte a situazioni disperate, ovvero quando
il numero dei nemici in stanza e\` almeno 2 volte il numero dei componenti del 
gruppo o se il paladino e\` in completa solitudine, la protezione di Jolnit
si fa piu\` intensa, raddoppiando i bonus ottenuti dalle abilita` di Voto.

> Voto

Il paladino fa una voto alla propria Divinita\` e tutti i personaggi in gruppo 
e stanza con il Paladino beneficiano dell\`effetto passivo del Voto attualmente
in corso.
Qualora il Paladino sia affetto da contro ogni previsione, il bonus del
Voto sul paladino stesso e\` raddoppiato.
Il Voto influenza le modalita\` di acquisizione dell`energia.

## Lista skill

| Livello | Nome skill                                      | Note              |
| ------- | ----------------------------------------------- | ----------------- |
| 1       | [Sfondare le Porte ](#sfondare-le-porte)        |
| 1       | [Scassinare ](#scassinare)                      |
| 1       | [Cambiare Nemico ](#cambiare-nemico)            |
| 1       | [Punizione ](#punizione)                        | Classe Principale |
| 5       | [Imporre le Mani ](#imporre-le-mani)            |
| 5       | [Atto Eroico ](#atto-eroico)                    |
| 5       | [Maestria con lo Scudo](#maestria-con-lo-scudo) |
| 11      | [Voto di Vendetta ](#voto-di-vendetta)          | Classe Principale |
| 15      | [Armi a due Mani ](#armi-a-due-mani)            |
| 16      | [Presenza Imponente ](#presenza-imponente)      | Classe Principale |
| 16      | [Verdetto Divino ](#verdetto-divino)            | Classe Principale |
| 21      | [Voto di Gloria ](#voto-di-gloria)              | Classe Principale |
| 26      | [Accusa Celestiale ](#accusa-celestiale)        | Classe Principale |
| 31      | [Bastione di Luce ](#bastione-di-luce)          | Classe Principale |
| 36      | [Assoluzione ](#assoluzione)                    |
| 40      | [Ambidestria ](#ambidestria)                    |
| 42      | [Carica Sacra ](#carica-sacra)                  |
| 46      | [Marchio del Templare ](#marchio-del-templare)  | Classe Principale |
| 50      | [Ascensione ](#ascensione)                      |

## Descrizione skill

### Sfondare le Porte

Dove l\`astuzia e l\`abilita\` non arriva, facciamoci aiutare dalla forza bruta.
Se un uscita e` chiusa, possiamo sempre provare a sfondare la porta con il
comando:

sfonda uscita/direzione<br>
doorbash uscita/direzione

Attenzione che non e\` attivita` priva di rischi: se la porta non si apre si
rischia di restare storditi

Ovviamente sarebbe un po\` complicato sfondare un\`uscita posta in alto, quindi 
per vie bloccate in quella direzione, bisognera` trovare soluzioni alternative..

### Scassinare

Come i migliori ladri, potete imparare a scassinare le porte, abilita\` una volta
nota solo ai professionisti e poi resa disponibile tramite l\`uso di costosi e
fragili attrezzi, oggi e` nelle mani (letteralmente) di tutti, tramite il
comando:

scassina oggetto/uscita<br>
pick oggetto/uscita

### Cambiare Nemico

Ti consente di cambiare avversario se sei coinvolto con piu` attaccanti, o 
se nella locazione sono presenti piu` avversari.

colpisci avversario<br>
hit avversario

Se fallisci smetti di attaccare chiunque (ma quello che stavi attaccando
non smette di attaccare te!).

### Punizione

| Attributo        | Valore                                  |
| ---------------- | --------------------------------------- |
| Nome Inglese     | Smite                                   |
| Comando          | formula // cast nome abilita` bersaglio |
| Restrizioni      | Solo Classe Principale                  |
| Bersagli         | Creatura (stanza)                       |
| Causa Ostilita\` | Si`                                     |
| Attesa           | 0.75 round (3 secondi)                  |
| Pos. Minima      | In combattimento                        |
| Usa Dadi Arma    | Si`                                     |
| Eff. Fisica      | 300%                                    |
| Eff. Magica      | 175%                                    |
| Scuola           | Lumen                                   |
| Costo Mana       | 15                                      |

> Descrizione

Il Paladino porta un attacco, seguito da una potente scarica di energia divina,
che guadagna ulteriore potenza (80% Eff. Fisica, 40% Eff. Magica) se il bersaglio
e` Vulnerabile.

### Imporre le Mani

| Attributo       | Valore                                  |
| --------------- | --------------------------------------- |
| Nome Inglese    | Lay on Hands                            |
| Comando         | formula // cast nome abilita` bersaglio |
| Restrizioni     | Nessuna.                                |
| Bersagli        | Creatura (stanza)                       |
| Causa Ostilita` | No                                      |
| Attesa          | 0.75 round (3 secondi)                  |
| Pos. Minima     | In combattimento                        |
| Usa Dadi Arma   | Si`                                     |
| Eff. Fisica     | 90%                                     |
| Eff. Magica     | 45%                                     |
| Scuola          | Lumen                                   |
| Costo Mana      | 25                                      |

> Descrizione

Il Paladino impone le mani sulle ferite di un bersaglio, guarendole.
L'abilita\` guadagna 100% Eff. Fisica e 50% Eff. Magica se il bersaglio e`
al di sotto del 50% di Punti Ferita.

### Atto Eroico

| Attributo        | Valore                        |
| ---------------- | ----------------------------- |
| Nome Inglese     | Heroic act                    |
| Comando          | formula // cast nome abilita` |
| Restrizioni      | Nessuna.                      |
| Causa Ostilita\` | Si`                           |
| Attesa           | 0 round (0 secondi)           |
| Pos. Minima      | In combattimento              |
| Usa Dadi Arma    | Si`                           |
| Scuola           | Lumen                         |
| Costo Mana       | 15                            |

> Descrizione

Il Paladino si lancia in un atto di indomito eroismo, attirando su di se`
le attenzioni di tutti gli avversari, e rendendoli Ossessionati. Sotto l'effetto
di Ascensione, la durata e` aumentata a 5 round, e gli avversari vengono anche
Azzoppati.

### Mestria con lo Scudo

### Voto di Vendetta

| Attributo       | Valore                        |
| --------------- | ----------------------------- |
| Nome Inglese    | Oath of Vengeance             |
| Comando         | formula // cast nome abilita` |
| Restrizioni     | Solo Classe Principale        |
| Causa Ostilita` | No                            |
| Attesa          | 0.75 round (3 secondi)        |
| Pos. Minima     | In combattimento              |
| Usa Dadi Arma   | Si`                           |
| Eff. Fisica     | 60%                           |
| Scuola          | Lumen                         |
| Costo Mana      | 20                            |
| Tag             | Voto                          |

> Descrizione

Il Paladino promette vendetta, guadagnando un bonus del 5% a tutto il
danno causato, e ritrovando vigore nel furore della battaglia, ottenendo 15
Energia per ogni attacco ricevuto in corpo a corpo, e 10 punti ulteriori
se il bersaglio e` affetto dall'Accusa Celestiale del Paladino stesso.

### Armi a due mani

Impugnare un'arma a due mani riduce il numero di attacchi di uno, con un
minimo di 1. Per impugnare un'arma a due mani e' sufficiente avere la seconda
mano libera.
Un attacco a due mani ha un moltiplicatore base di 300%.

### Presenza Imponente

| Attributo        | Valore                                  |
| ---------------- | --------------------------------------- |
| Nome Inglese     | Imposing Presence                       |
| Comando          | formula // cast nome abilita` bersaglio |
| Restrizioni      | Solo Classe Principale                  |
| Bersagli         | Creatura (stanza)                       |
| Causa Ostilita\` | Si`                                     |
| Attesa           | 0.75 round (3 secondi)                  |
| Pos. Minima      | In combattimento                        |
| Usa Dadi Arma    | Si`                                     |
| Scuola           | Lumen                                   |
| Costo Mana       | 15                                      |

> Descrizione

Il Paladino impone la sua presenza, impedendo al bersaglio di concentrarsi
altrove, costringendolo ad attaccarlo e rendendolo Ossessionato per 3 round.

### Verdetto Divino

| Attributo        | Valore                                  |
| ---------------- | --------------------------------------- |
| Nome Inglese     | Divine Verdict                          |
| Comando          | formula // cast nome abilita` bersaglio |
| Restrizioni      | Solo Classe Principale                  |
| Bersagli         | Creatura (stanza)                       |
| Causa Ostilita\` | Si`                                     |
| Attesa           | 0.75 round (3 secondi)                  |
| Pos. Minima      | In combattimento                        |
| Usa Dadi Arma    | Si`                                     |
| Eff. Fisica      | 400%                                    |
| Eff. Magica      | 200%                                    |
| Scuola           | Lumen                                   |
| Costo Mana       | 25                                      |

> Descrizione

Il Paladino condanna un bersaglio per i suoi peccati, richiamando l'ira divina
nei suoi confronti. L'abilita\` guadagna un bonus crescente all'Eff. Fisica
in funzione dell'Energia consumata, fino ad un massimo di 400%, ed un bonus
ulteriore di 150% Eff. Fisica se il bersaglio e` in corpo a corpo con il Paladino.

Se utilizzato su bersaglio con Marchio del Templare, lo rimuove e viene replicato
su tutti gli avversari del Paladino.

### Voto di Gloria

| Attributo       | Valore                        |
| --------------- | ----------------------------- |
| Nome Inglese    | Oath of Glory                 |
| Comando         | formula // cast nome abilita` |
| Restrizioni     | Solo Classe Principale        |
| Causa Ostilita` | No                            |
| Attesa          | 0.75 round (3 secondi)        |
| Pos. Minima     | In combattimento              |
| Usa Dadi Arma   | Si`                           |
| Scuola          | Lumen                         |
| Costo Mana      | 20                            |
| Tag             | Voto                          |

> Descrizione

Il Paladino promette gloria, guadagnando un bonus del 10% a tutte le
cure generate, e ritrovando vigore nel castigare i propri nemici, ottenendo 30
Energia con l'utilizzo di Punizione, e 5 punti ulteriori per ogni attacco
portato a segno in corpo a corpo.

### Accusa Celestiale

| Attributo        | Valore                                  |
| ---------------- | --------------------------------------- |
| Nome Inglese     | Celestial Indictment                    |
| Comando          | formula // cast nome abilita` bersaglio |
| Restrizioni      | Solo Classe Principale                  |
| Bersagli         | Creatura (stanza)                       |
| Causa Ostilita\` | Si`                                     |
| Attesa           | 0.75 round (3 secondi)                  |
| Pos. Minima      | In combattimento                        |
| Usa Dadi Arma    | Si`                                     |
| Eff. Fisica      | 250%                                    |
| Eff. Magica      | 125%                                    |
| Scuola           | Lumen                                   |
| Costo Mana       | 15                                      |
| Cooldown         | 8 round                                 |

> Descrizione

Il Paladino accusa il bersaglio, mettendo i suoi peccati sotto esame.
L'effetto varia in funzione del Voto del Paladino:
Vendetta : Il bersaglio subisce danno Lumen quando colpisce il Paladino.
Gloria : Il bersaglio diventa Vulnerabile per la durata dell'effetto.

Se il bersaglio affetto da Accusa Celestiale muore, il Cooldown dell'abilita` viene
azzerato.

### Bastione di Luce

| Attributo       | Valore                        |
| --------------- | ----------------------------- |
| Nome Inglese    | Aegis of Light                |
| Comando         | formula // cast nome abilita` |
| Restrizioni     | Solo Classe Principale        |
| Causa Ostilita` | No                            |
| Attesa          | 0.75 round (3 secondi)        |
| Pos. Minima     | In combattimento              |
| Usa Dadi Arma   | Si`                           |
| Eff. Fisica     | 150%                          |
| Eff. Magica     | 75%                           |
| Scuola          | Lumen                         |
| Costo Mana      | 200                           |
| Cooldown        | 20 round                      |

> Descrizione

Il Paladino crea uno scudo di luce protettivo attorno a se` e ai suoi alleati,
in grado di assorbire danni. Se utilizzata durante Ascensione, la luce e` talmente
potente da abbagliare tutti gli avversari, rendendoli Accecati per 3 round.

### Assoluzione

| Attributo       | Valore                                  |
| --------------- | --------------------------------------- |
| Nome Inglese    | Absolution                              |
| Comando         | formula // cast nome abilita` bersaglio |
| Restrizioni     | Nessuna.                                |
| Bersagli        | Creatura (stanza)                       |
| Causa Ostilita` | No                                      |
| Attesa          | 0.75 round (3 secondi)                  |
| Pos. Minima     | In combattimento                        |
| Usa Dadi Arma   | Si`                                     |
| Eff. Fisica     | 75%                                     |
| Eff. Magica     | 30%                                     |
| Scuola          | Lumen                                   |
| Costo Mana      | 25                                      |

> Descrizione

Il Paladino assolve un bersaglio dai suoi peccati, guarendolo, ripristinando
fame e sete, e proteggendolo con Santuario. L'abilita` guadagna un bonus crescente
all'Eff. Fisica in funzione dell'Energia consumata, fino ad un massimo di 400%.

Se utilizzata su bersaglio con Marchio del Templare, lo rimuove e viene replicata
su tutti gli alleati del Paladino.

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

### Carica Sacra

| Attributo        | Valore                                  |
| ---------------- | --------------------------------------- |
| Nome Inglese     | Sacred Charge                           |
| Comando          | formula // cast nome abilita` bersaglio |
| Restrizioni      | Nessuna.                                |
| Bersagli         | Creatura (stanza)                       |
| Causa Ostilita\` | Si`                                     |
| Attesa           | 0.75 round (3 secondi)                  |
| Pos. Minima      | In combattimento                        |
| Usa Dadi Arma    | Si`                                     |
| Eff. Fisica      | 120%                                    |
| Eff. Magica      | 60%                                     |
| Scuola           | Lumen                                   |
| Costo Mana       | 15                                      |
| Cooldown         | 8 round                                 |

> Descrizione

Il Paladino si lancia in una carica verso il bersaglio, mandandolo in
terra, causando 2 round di attesa e lasciandolo Confuso per 4 round per la
violenza dell'impatto.

Se utilizzata durante Ascensione lo rende invece
Stordito per 2 round. Se il bersaglio non e` ingaggiato in combattimento
con il Paladino, inoltre, l'abilita` guadagna 300% Eff. Fisica.

### Marchio del templare

| Attributo       | Valore                                  |
| --------------- | --------------------------------------- |
| Nome Inglese    | Mark of the Templar                     |
| Comando         | formula // cast nome abilita` bersaglio |
| Restrizioni     | Solo Classe Principale                  |
| Bersagli        | Creatura (stanza)                       |
| Causa Ostilita` | No                                      |
| Attesa          | 0.5 round (2 secondi)                   |
| Pos. Minima     | In combattimento                        |
| Usa Dadi Arma   | Si`                                     |
| Eff. Fisica     | 300%                                    |
| Eff. Magica     | 150%                                    |
| Durata          | 6 round                                 |
| Scuola          | Lumen                                   |
| Costo Mana      | 60                                      |

> Descrizione

Il Paladino marchia il bersaglio con un'aura di luce divina, guarendolo se alleato
e danneggiandolo altrimenti. Utilizzare Verdetto Divino o Assoluzione su un bersaglio
affetto da Marchio del Templare lo rimuove, e propaga l'abilita` utilizzata su tutti i
bersagli consoni presenti nella locazione.

### Ascensione

| Attributo       | Valore                                              |
| --------------- | --------------------------------------------------- |
| Nome Inglese    | Ascension                                           |
| Comando         | formula // cast nome abilita`                       |
| Restrizioni     | Nessuna.                                            |
| Causa Ostilita` | No                                                  |
| Attesa          | 0.75 round (3 secondi)                              |
| Pos. Minima     | In combattimento                                    |
| Usa Dadi Arma   | Si`                                                 |
| Scuola          | Lumen                                               |
| Cooldown        | 35 round                                            |
| Simbolo Prompt  | A                                                   |
| Aura            | NomePg e` asceso in una figura di pura luce divina! |

> Descrizione

Il Paladino ascende temporaneamente ad uno stato semi-divino, guadagnando
un bonus pari alla meta` del suo livello al Danno Lumen, convertendo i suoi
attacchi in corpo a corpo in Lumen, e diventando Invulnerabile per 1 round.

In questo stato, tutte le abilita` ripristinano punti mana pari al doppio
del loro costo invece di consumarlo, e Carica Sacra, Bastione di Luce,
Atto Eroico, Assoluzione e Verdetto Divino hanno effetti aumentati.
