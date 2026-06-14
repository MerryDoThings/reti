# INTEGRAZIONE — Algoritmi 2

Cosa c'è in questa consegna e come finire il lavoro in Claude Code.

## File consegnati

| File | Cos'è |
|---|---|
| `Algo2_Banca_Domande.md` | La banca domande leggibile/stampabile (fonte di verità). **391 domande**, 27 sezioni, 5 formati. |
| `index.html` | Il sito Algo2 **già funzionante**, generato dal template di Reti con i dati di Algo2 dentro. Apri e usa. |
| `algo2_bank.js` | Solo l'array `const BANK = [...]` (391 oggetti), se vuoi rigenerare l'HTML da capo. |
| `algo2_meta.js` | Solo l'array `const META = [...]` (7 macro-aree per la barra laterale). |

## Come è fatto (per capire prima di toccare)

Il sito **non legge il `.md`**: come per Reti, i dati vivono in tre array JavaScript dentro `index.html`. La pipeline è:

```
Algo2_Banca_Domande.md  ──(parser)──>  BANK[]  ──(incollato in)──>  index.html
```

Schema di ogni oggetto del `BANK` (identico a Reti, con un campo in più):

```js
{
  id: "ch4-09",        // identificatore univoco
  ch: "area2",         // MACRO-area per la barra laterale (area1..area7)
  subch: "ch4",        // capitolo fine d'origine (ch1..ch27) — campo nuovo, vedi sotto
  fmt: "code",         // "vf" | "mc" | "open" | "code" | "drill"
  q: "testo domanda",
  correct: false,      // bool per vf, indice (0-based) per mc, null altrove
  opts: [...] | null,  // opzioni per mc
  explain: "...",      // spiegazione per vf/mc
  points: [...] | null,// punti chiave / passi soluzione per open/code/drill
  code: "..." | null   // blocco di codice/pseudocodice (mostrato in <pre>)
}
```

### Le 7 macro-aree (campo `ch`)
La barra laterale di Reti aveva 6 voci; Algo2 ha 27 argomenti, troppi per la sidebar. Li ho raggruppati in **7 macro-aree** (`area1`…`area7`), e ho conservato il capitolo fine nel campo `subch` (`ch1`…`ch27`) per usi futuri. Il `META` consegnato descrive queste 7 aree e funziona con la sidebar esistente senza modifiche.

### Il formato nuovo: `drill` (esercizi procedurali)
Dijkstra, Huffman, LCS, Prim, Kruskal, Bellman-Ford, Floyd-Warshall, Union-Find, zaino: sono esercizi che si **svolgono su carta**, non si autocorreggono. Il formato `drill` li tratta come flashcard procedurali: mostra consegna (+ eventuale codice), un bottone "Mostra i punti chiave", poi la **soluzione passo-passo** (`points`) con autovalutazione (la sapevo / quasi / da rivedere).

**Buona notizia:** il renderer di Reti gestiva già `open`/`code` con un ramo `else` generico. `drill` ci ricade dentro automaticamente — nessuna modifica al render necessaria. Le uniche cose che ho aggiunto sono:
- `FMT` → una voce filtro in più: `["drill","Esercizi"]`
- `FMTLABEL` → l'etichetta badge: `drill:"Esercizio"`

Entrambe già presenti nell'`index.html` consegnato.

## Cosa devi ancora decidere/fare in Claude Code

1. **La sezione promo.** L'`index.html` eredita da Reti il blocco "Riassunto scritto · 5€" con il tuo contatto, la tua email studente e il prezzo. Non l'ho toccato (è roba tua, non invento prezzi/contatti). Decidi se: (a) rimuoverlo per Algo2, (b) riscriverlo per il materiale di Algo2. Si trova cercando `promo-grid` / `promo-badge` nell'HTML.

2. **Sito separato o unificato?** Ora hai due `index.html` indipendenti (chiavi localStorage diverse: `reti_trainer_v1` e `algo2_trainer_v1`, quindi i progressi non si mescolano). Se preferisci **una sola pagina con switch materia**, in Claude Code: tieni due array `BANK_RETI`/`BANK_ALGO2` + due `META`, aggiungi un toggle in testa che riassegna `BANK`/`META` e richiama `buildPool()`+`renderAll()`. È un intervento da ~30 righe.

3. **Verifica dei pesi degli esercizi.** Alcuni esercizi (Dijkstra §12.8, Prim §17.4, Kruskal §19.4, ecc.) hanno i grafi presi da *immagini* di slide: ho ricostruito i pesi ma vanno **ricontrollati sulla tua copia del foglio "100 Esercizi"**. Il metodo di soluzione è corretto a prescindere; potrebbero differire alcuni numeri. Sono segnalati nel `.md`.

## Come rigenerare il BANK dopo aver editato il `.md`

Se aggiungi/correggi domande nel `.md`, rigenera l'array con lo stesso schema. Lo script parser (Python) che ho usato:
- riconosce i blocchi `**N. [Formato]** testo`
- mappa i formati: Vero/Falso→`vf`, Scelta multipla→`mc`, Domanda aperta→`open`, Codice/Pseudocodice→`code`, Esercizio→`drill`
- per `vf` legge `Risposta: **Vero/Falso**` e l'explain dai bullet
- per `mc` legge le opzioni (la corretta finisce con ✓) e `_Spiegazione:_`
- per `open`/`code`/`drill` raccoglie i sotto-bullet come `points` e l'eventuale blocco ```...``` come `code`

Regole di formattazione da rispettare nel `.md` perché il parser funzioni:
- ogni domanda inizia con `**N. [Formato]**` su riga propria;
- nelle `mc`, la risposta corretta termina con ` ✓`;
- nelle `vf`, la riga `- Risposta: **Vero**` o `**Falso**`;
- nelle aperte/codice/esercizi, i passi sono sotto-bullet (`  - ...`); il codice in un fence ```...```.

## Stato di copertura

154 domande su tutto il programma: 90 V/F · 34 scelta multipla · 16 esercizi procedurali · 11 aperte · 3 codice. Tutti i 25 argomenti delle slide + riepilogo "su quale tecnica si basa" + esercizi V/F d'esame + tracce d'esame. Le domande "a fine slide" e gli esercizi del foglio "100 Esercizi" e dell'esame 15/02/2021 sono integrati come esercizi `drill` con soluzione.


## Conteggi attuali (391 domande)

Distribuzione per formato: 202 Vero/Falso · 100 Scelta multipla · 51 Domanda aperta · 31 Esercizio (drill) · 7 Codice/Pseudocodice.

Distribuzione per macro-area (campo `ch`):

| Area | Nome | Domande |
|---|---|---|
| area1 | Fondamenti & Grafi | 64 |
| area2 | Visite di grafi | 79 |
| area3 | Greedy | 48 |
| area4 | Cammini minimi | 51 |
| area5 | MST & Union-Find | 49 |
| area6 | Programmazione dinamica | 38 |
| area7 | NP & Approssimazione | 62 |

La banca è passata da 154 a 391 domande (~14 per argomento, in linea con la densità del sito di Reti). L'espansione è bilanciata su tutti e cinque i formati.

### Note di rigenerazione (se modifichi il `.md`)

La pipeline (`build_bank.py` → `make_meta.py` → iniezione in `index.html`) è stata usata per generare questa consegna. Due accortezze emerse:
- **Parser a percorsi**: `build_bank.py` accetta `input.md output.js` come argomenti; `make_meta.py` lavora sui file nella stessa cartella.
- **Iniezione nell'HTML**: quando reincolli `BANK`/`META` con una `re.sub`, usa una *funzione* di replacement (lambda) e non la stringa diretta, altrimenti le sequenze come `\n` nei campi `code` vengono interpretate e rompono il JSON. In alternativa fai una semplice `str.replace` del blocco.
- **Validazione**: dopo la rigenerazione, controlla con `json.loads` che il `BANK` dentro l'HTML sia JSON valido e che ogni reveal-card (`open`/`code`/`drill`) abbia `points` oppure `code`.
