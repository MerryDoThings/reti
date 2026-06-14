# Algoritmi 2 — Banca domande per l'esame

Domande in cinque formati su tutto il programma:

- **[Vero/Falso]** — affermazione da giudicare e motivare (formato d'esame: l'Esercizio 5 chiede sempre V/F *con motivazione*).
- **[Scelta multipla]** — una sola risposta corretta, segnata con ✓.
- **[Domanda aperta]** — risposta discorsiva; sotto trovi i punti chiave attesi.
- **[Codice/Pseudocodice]** — leggere, commentare o scrivere pseudocodice (l'esame chiede spesso di scrivere o modificare un algoritmo).
- **[Esercizio]** — esercizio procedurale da svolgere su carta (Dijkstra, Huffman, LCS, …), con **soluzione passo-passo**. Sono il cuore dello scritto: vanno *eseguiti*, non solo riconosciuti.

Le risposte corrette sono indicate con ✓. Versione pensata per ripasso, stampa o import nel sito (vedi `INTEGRAZIONE.md`).

> **Nota sul programma.** Il foglio ufficiale "100 Esercizi" avverte che lo scritto può contenere anche: (1) dire su quale tecnica algoritmica si basa un algoritmo; (2) domande teoriche V/F con motivazione; (3) modifica di algoritmi noti. La banca copre tutti e tre i tipi, oltre agli esercizi procedurali.

---
## 1 — Introduzione e Teoria della Complessità (di base)

**1. [Vero/Falso]** La complessità di un *problema* coincide con la complessità di un *algoritmo* che lo risolve.
- Risposta: **Falso** ✓
- Falso. La complessità di un problema è quella del *migliore* algoritmo che lo risolve (noto o ipotizzato): rappresenta le risorse di calcolo minime necessarie. Un algoritmo specifico può essere molto peggiore dell'ottimo.

**2. [Vero/Falso]** La complessità di un problema dipende dal linguaggio di programmazione e dal calcolatore usato.
- Risposta: **Falso** ✓
- Falso. Non dipende né dal linguaggio né dalla macchina, purché il modello di calcolo sia Turing-completo (Turing-equivalente). È proprio questo a rendere lo studio "generale".

**3. [Vero/Falso]** Un problema di decisione ha insieme delle soluzioni S = {0,1}.
- Risposta: **Vero** ✓
- Vero. Decisione = verificare una proprietà sull'input (sì/no). Es.: "dato G, è connesso?". Diverso dai problemi di ricerca (trova una soluzione ammissibile) e di ottimizzazione (trova la migliore).

**4. [Vero/Falso]** Tutti i modelli di calcolo che si studiano in un corso di algoritmi sono al massimo Turing-completi.
- Risposta: **Vero** ✓
- Vero. La macchina di Turing fissa il limite superiore di ciò che è calcolabile con questi modelli; esistono modelli teorici "più potenti", ma esulano dal corso.

**5. [Vero/Falso]** Un problema di ottimizzazione può essere sempre associato a un problema di decisione corrispondente.
- Risposta: **Vero** ✓
- Vero. A "trovare la soluzione ottima" si associa "esiste una soluzione di costo ≤ k?". Il problema decisionale è in genere *non più difficile* di quello di ottimizzazione.

**6. [Vero/Falso]** Formalmente un problema P è una relazione P ⊆ I × S, dove I sono le istanze e S le soluzioni.
- Risposta: **Vero** ✓
- Vero. È la definizione data a lezione: la relazione associa a ogni istanza le sue soluzioni ammissibili.

**7. [Scelta multipla]** Quale di questi è un problema di *ottimizzazione*?
- Dato G, dire se è connesso
- Dato G connesso, trovare un albero ricoprente qualsiasi
- Dato G connesso, trovare un albero ricoprente di peso minimo ✓
- Dato un BST, dire se un elemento vi appartiene
- _Spiegazione:_ "di peso minimo" = si cerca la soluzione migliore secondo un criterio. Il primo è decisione, il secondo ricerca.

**8. [Scelta multipla]** "Dato G, trovare un albero ricoprente (uno qualsiasi)" è un problema di:
- Decisione
- Ricerca ✓
- Ottimizzazione
- Conteggio
- _Spiegazione:_ Si chiede *una* soluzione ammissibile, senza criterio di ottimalità: è ricerca.

**9. [Scelta multipla]** Cosa misura TIME(f(n))?
- Lo spazio di memoria usato
- L'insieme dei problemi risolvibili in tempo O(f(n)) ✓
- Il numero di vertici di un grafo
- La profondità della ricorsione
- _Spiegazione:_ TIME(f(n)) è la classe dei problemi risolvibili in tempo O(f(n)); SPACE(f(n)) è l'analoga per lo spazio.

**10. [Domanda aperta]** Definisci e distingui problemi di decisione, di ricerca e di ottimizzazione, con un esempio ciascuno sui grafi.
- Punti chiave:
  - Un problema è una relazione P ⊆ I × S (istanze × soluzioni).
  - Decisione: S = {0,1}; verifica una proprietà. Es.: G è connesso?
  - Ricerca: data x ∈ I, trovare s con (x,s) ∈ P. Es.: trovare un albero ricoprente di G.
  - Ottimizzazione: trovare s* ottimo (min o max) tra gli ammissibili. Es.: minimo albero ricoprente.
  - A ogni problema di ottimizzazione si può associare un problema decisionale (più "facile").

**11. [Domanda aperta]** Perché lo studio della complessità di un problema è "robusto" rispetto al modello di calcolo?
- Punti chiave:
  - La complessità di un problema è quella del miglior algoritmo possibile, non di un'implementazione.
  - Per la tesi di Church-Turing, tutti i modelli ragionevoli si simulano a vicenda con overhead polinomiale.
  - Quindi la classificazione (P, NP, …) non cambia cambiando linguaggio o macchina (Turing-equivalenti).

---

## 2 — Grafi: definizioni e proprietà

**1. [Vero/Falso]** In un grafo non orientato la somma dei gradi di tutti i vertici è pari al numero di archi.
- Risposta: **Falso** ✓
- Falso. È pari al *doppio* del numero di archi (ogni arco contribuisce 2 al totale dei gradi). È il "lemma della stretta di mano".

**2. [Vero/Falso]** In un grafo orientato vale sempre Σ grado-entrante = Σ grado-uscente = m.
- Risposta: **Vero** ✓
- Vero. Ogni arco orientato dà +1 a un grado uscente e +1 a un grado entrante: entrambe le somme valgono m.

**3. [Vero/Falso]** Un grafo completo con n vertici ha n(n−1)/2 archi (caso non orientato).
- Risposta: **Vero** ✓
- Vero. Ogni coppia di vertici è collegata: C(n,2) = n(n−1)/2. È l'applicazione del "teorema del piccolo Gauss" (1+2+…+(n−1)).

**4. [Vero/Falso]** Un albero libero con n vertici ha esattamente n−1 archi.
- Risposta: **Vero** ✓
- Vero. Un albero libero è connesso e aciclico; queste due proprietà insieme forzano esattamente n−1 archi. Aggiungere un arco crea un ciclo, toglierne uno lo disconnette.

**5. [Vero/Falso]** Un albero libero ha grado massimo 2.
- Risposta: **Falso** ✓
- Falso. Misconcezione frequente: un albero libero può avere vertici di grado alto (es. una "stella" con un centro di grado n−1). Il vincolo è "connesso + aciclico", non sul grado.

**6. [Vero/Falso]** Un grafo connesso con n vertici ha almeno n−1 archi.
- Risposta: **Vero** ✓
- Vero. Con meno di n−1 archi è impossibile collegare tutti i vertici. Il minimo (n−1) si raggiunge esattamente quando è un albero.

**7. [Vero/Falso]** In un grafo non orientato, un arco (u,v) è una coppia *non ordinata* di vertici.
- Risposta: **Vero** ✓
- Vero. Non orientato = relazioni simmetriche → coppie non ordinate {u,v}. Orientato = coppie ordinate ⟨u,v⟩, con un verso.

**8. [Vero/Falso]** In un grafo orientato l'arco ⟨u,v⟩ e l'arco ⟨v,u⟩ sono lo stesso arco.
- Risposta: **Falso** ✓
- Falso. Sono coppie *ordinate* distinte: ⟨u,v⟩ va da u a v, ⟨v,u⟩ da v a u. Possono esistere entrambi, uno solo, o nessuno.

**9. [Vero/Falso]** Un cammino è semplice se non ripete archi.
- Risposta: **Falso** ✓
- Falso. Semplice = non ripete *vertici* (e di conseguenza nemmeno archi). La definizione si basa sui vertici.

**10. [Vero/Falso]** Un ciclo è un cammino chiuso (stesso vertice di partenza e arrivo) di lunghezza ≥ 1.
- Risposta: **Vero** ✓
- Vero. Un ciclo torna al punto di partenza. In un grafo non orientato si richiede di solito lunghezza ≥ 3 (no archi/vertici ripetuti banalmente).

**11. [Vero/Falso]** La relazione di raggiungibilità in un DAG è una relazione d'ordine parziale.
- Risposta: **Vero** ✓
- Vero. In un DAG "è raggiungibile da" è riflessiva, antisimmetrica (niente cicli) e transitiva: un ordine parziale. È ciò che rende possibile l'ordinamento topologico.

**12. [Scelta multipla]** Quanti archi ha al massimo un grafo orientato semplice con n vertici (senza cappi)?
- n−1
- n(n−1)/2
- n(n−1) ✓
- n²
- _Spiegazione:_ Per ogni coppia ordinata (u,v) con u≠v può esistere un arco: n(n−1). Nel non orientato è la metà.

**13. [Scelta multipla]** Un cammino in cui non si ripetono vertici si dice:
- Circuito
- Cammino semplice ✓
- Ciclo
- Passeggiata euleriana
- _Spiegazione:_ Semplice = nessun vertice ripetuto. Un ciclo è un cammino chiuso (stesso vertice di inizio e fine).

**14. [Scelta multipla]** Quale affermazione su un DAG è corretta?
- Contiene almeno un ciclo orientato
- È non orientato per definizione
- È orientato e privo di cicli, e possiede sempre un ordine topologico ✓
- Ha sempre un solo ordine topologico
- _Spiegazione:_ DAG = Directed Acyclic Graph. Possiede sempre almeno un ordine topologico, e in generale più di uno.

**15. [Scelta multipla]** In un grafo non orientato connesso, il numero minimo di archi è:
- n
- n−1 ✓
- n(n−1)/2
- 2n
- _Spiegazione:_ Con esattamente n−1 archi e connessione si ha un albero; meno archi → disconnesso.

**16. [Scelta multipla]** Cosa significa che un grafo è "sparso"?
- m ≈ n² (molti archi)
- m ≪ n² (pochi archi rispetto al massimo) ✓
- Ha pochi vertici
- È non connesso
- _Spiegazione:_ Sparso: numero di archi molto inferiore al massimo n². Per questi conviene la rappresentazione a liste di adiacenza.

**17. [Scelta multipla]** Il grado di un vertice v in un grafo non orientato è:
- Il numero di vertici raggiungibili da v
- Il numero di archi incidenti in v ✓
- La distanza massima da v
- Il numero di cicli che passano per v
- _Spiegazione:_ Grado δ(v) = numero di archi incidenti in v. Nel grafo orientato si distingue grado entrante e uscente.

**18. [Domanda aperta]** Cosa cambia, nelle proprietà di base, tra "connesso" (non orientato), "fortemente connesso" e "debolmente connesso" (orientato)?
- Punti chiave:
  - Connesso (non orientato): da ogni vertice si raggiunge ogni altro percorrendo gli archi.
  - Fortemente connesso (orientato): per ogni coppia (u,v) esiste cammino orientato u→v *e* v→u.
  - Debolmente connesso (orientato): è connesso se si ignora l'orientamento degli archi (lo si tratta come non orientato).
  - Trappola: "completo" ≠ "connesso/raggiungibile". Completo significa che *tutti* gli archi possibili esistono; un grafo può essere connesso senza essere completo.

**19. [Domanda aperta]** Spiega perché in un grafo non orientato la somma dei gradi è pari a 2m (lemma della stretta di mano) e una conseguenza notevole.
- Punti chiave:
  - Ogni arco {u,v} contribuisce +1 al grado di u e +1 al grado di v → +2 al totale.
  - Quindi Σ δ(v) = 2m, sempre pari.
  - Conseguenza: il numero di vertici di grado dispari è sempre pari.

**20. [Domanda aperta]** Modella tre situazioni reali come grafi, indicando cosa sono vertici e archi e se il grafo è orientato.
- Punti chiave:
  - Internet: vertici = calcolatori/router, archi = collegamenti; tipicamente non orientato (link bidirezionali).
  - Rete sociale "amico di": vertici = persone, archi = amicizie; non orientato (relazione simmetrica).
  - Mappa stradale con sensi unici: vertici = incroci/luoghi, archi = strade; orientato (relazione asimmetrica).

---

## 3 — Rappresentazioni dei grafi

**1. [Vero/Falso]** La matrice di adiacenza occupa sempre Θ(n²) spazio, indipendentemente dal numero di archi.
- Risposta: **Vero** ✓
- Vero. È una matrice n×n: lo spazio è Θ(n²) anche per grafi sparsi (pochi archi). Per questo è inefficiente sui grafi sparsi.

**2. [Vero/Falso]** Con le liste di adiacenza, verificare se l'arco (u,v) esiste costa O(1).
- Risposta: **Falso** ✓
- Falso. Bisogna scorrere la lista di u: costa O(grado(u)), fino a O(n). È la matrice di adiacenza a dare il test O(1).

**3. [Vero/Falso]** Le liste di adiacenza occupano Θ(n+m) spazio.
- Risposta: **Vero** ✓
- Vero. Un nodo testa per ogni vertice (n) più un elemento per ogni arco (m, o 2m nel non orientato): Θ(n+m). Efficiente sui grafi sparsi.

**4. [Vero/Falso]** La lista di archi occupa O(n+m) spazio.
- Risposta: **Vero** ✓
- Vero. Si memorizza l'insieme dei vertici (n) e l'insieme degli archi (m) → O(n+m). È la rappresentazione più vicina alla definizione G=(V,E).

**5. [Vero/Falso]** Con la lista di archi, l'aggiunta di un vertice o di un arco è efficiente, ma quasi tutte le altre operazioni costano O(m).
- Risposta: **Vero** ✓
- Vero. PRO: inserimenti rapidi. CONTRO: grado, adiacenza, archi incidenti richiedono di scorrere tutta la lista degli archi → O(m).

**6. [Vero/Falso]** Nelle liste di adiacenza di un grafo non orientato, ogni arco compare due volte (una per ciascun estremo).
- Risposta: **Vero** ✓
- Vero. L'arco {u,v} appare nella lista di u e in quella di v. Da qui la difficoltà di mantenere la consistenza (es. nella rimozione).

**7. [Vero/Falso]** Per un grafo pesato con liste di adiacenza, il peso si memorizza accanto al vertice adiacente nella lista.
- Risposta: **Vero** ✓
- Vero. Ogni elemento della lista porta il vertice destinazione e il peso dell'arco corrispondente.

**8. [Vero/Falso]** Nella lista di incidenza ogni vertice punta agli *archi* a esso incidenti, non ai vertici adiacenti.
- Risposta: **Vero** ✓
- Vero. È la differenza con le liste di adiacenza: qui i riferimenti sono agli archi (utile quando gli archi sono oggetti con attributi).

**9. [Scelta multipla]** Per un grafo *sparso* (m ≈ n) su cui si fanno molte visite (BFS/DFS), la rappresentazione migliore è:
- Matrice di adiacenza, per il test O(1)
- Liste di adiacenza, per spazio Θ(n+m) e scansione efficiente dei vicini ✓
- Lista di archi, perché è la più compatta in assoluto
- Matrice di incidenza
- _Spiegazione:_ Le visite scorrono i vicini: le liste danno Θ(n+m) totale. La matrice darebbe O(n²) solo per scorrere i vicini.

**10. [Scelta multipla]** Enumerare *tutti* gli archi del grafo costa Θ(n²) con quale rappresentazione?
- Liste di adiacenza
- Lista di archi
- Matrice di adiacenza ✓
- Nessuna
- _Spiegazione:_ Con la matrice bisogna ispezionare tutte le n² celle. Con liste/lista di archi si enumerano in Θ(n+m).

**11. [Scelta multipla]** Con la matrice di adiacenza, ottenere il grado di un vertice v (non orientato) costa:
- O(1)
- O(n) ✓
- O(m)
- O(grado(v))
- _Spiegazione:_ Bisogna scorrere l'intera riga di v (n celle) e contare gli 1. Con liste di adiacenza è O(grado(v)) o O(1) se memorizzato.

**12. [Scelta multipla]** Quale operazione è il punto di forza della matrice di adiacenza?
- Aggiungere un vertice
- Test di adiacenza sonoAdiacenti(u,v) in O(1) ✓
- Spazio minimo sui grafi sparsi
- Enumerare gli archi in O(n+m)
- _Spiegazione:_ La cella [u][v] dice subito se l'arco esiste: O(1). È il vantaggio principale.

**13. [Scelta multipla]** Aggiungere un vertice a un grafo rappresentato con matrice di adiacenza:
- È O(1)
- Richiede di ridimensionare la matrice → costoso (fino a O(n²)) ✓
- Non è possibile
- Costa O(grado)
- _Spiegazione:_ La matrice ha dimensione fissa n×n: aggiungere un vertice impone una nuova matrice più grande. Le liste invece aggiungono un vertice facilmente.

**14. [Domanda aperta]** Confronta matrice di adiacenza e liste di adiacenza su: spazio, test di esistenza arco (u,v), scansione dei vicini di u, enumerazione di tutti gli archi.
- Punti chiave:
  - Spazio: matrice Θ(n²) sempre; liste Θ(n+m).
  - Test arco (u,v): matrice O(1); liste O(grado(u)).
  - Vicini di u: matrice O(n) (scorre l'intera riga); liste O(grado(u)) (ottimale).
  - Tutti gli archi: matrice Θ(n²); liste Θ(n+m).
  - Conclusione: densi + tanti test d'arco → matrice; sparsi + tante visite → liste (scelta di default nel corso e nei lab).

**15. [Domanda aperta]** Elenca le operazioni "semplici" su un grafo (ADT) e indica quale rappresentazione le favorisce.
- Punti chiave:
  - grado(v), archiIncidenti(v), sonoAdiacenti(v,w), aggiungiVertice, aggiungiArco, rimuoviVertice, rimuoviArco.
  - sonoAdiacenti → matrice (O(1)).
  - archiIncidenti / scansione vicini → liste di adiacenza/incidenza (O(grado)).
  - aggiungiVertice/aggiungiArco → lista di archi e liste di adiacenza (rapide); matrice costosa per i vertici.
  - rimuoviArco in liste di adiacenza non orientate → attenzione alla consistenza (due liste da aggiornare).
## 4 — Visita generica e BFS (visita in ampiezza)

**1. [Vero/Falso]** Nel sistema dei colori, un vertice *grigio* è stato scoperto ma ha ancora adiacenti non esplorati.
- Risposta: **Vero** ✓
- Vero. Bianco = non scoperto; grigio = scoperto, frontiera ancora aperta; nero = scoperto e completamente esplorato (adiacenti tutti scoperti).

**2. [Vero/Falso]** Durante una visita, può esistere un arco che va da un vertice nero a un vertice bianco.
- Risposta: **Falso** ✓
- Falso. Proprietà del cambiamento di colore: se u è nero, tutti i suoi adiacenti sono grigi o neri (mai bianchi). Un nodo diventa nero solo quando i vicini sono già stati scoperti.

**3. [Vero/Falso]** La BFS usa una coda (FIFO) per gestire la frontiera dei vertici grigi.
- Risposta: **Vero** ✓
- Vero. È proprio la coda a garantire che i vertici siano visitati in ordine di distanza crescente dalla sorgente.

**4. [Vero/Falso]** La BFS da s calcola il numero minimo di archi (distanza non pesata) da s a ogni vertice raggiungibile.
- Risposta: **Vero** ✓
- Vero. Teorema della BFS: d[v] = δ(s,v), la distanza in numero di archi. Vale solo per grafi non pesati (o pesi unitari).

**5. [Vero/Falso]** La BFS su grafo con liste di adiacenza ha complessità O(n·m).
- Risposta: **Falso** ✓
- Falso. È O(n+m): ogni vertice è accodato una volta, ogni arco è esaminato una volta (due nel non orientato).

**6. [Vero/Falso]** Al termine della BFS, se v non è raggiungibile da s allora d[v] resta ∞.
- Risposta: **Vero** ✓
- Vero. I vertici non raggiungibili non vengono mai scoperti: restano bianchi con d=∞, coerente con δ(s,v)=∞.

**7. [Vero/Falso]** La visita generica diventa BFS se la struttura per i vertici grigi è una coda, e DFS se è una pila.
- Risposta: **Vero** ✓
- Vero. È lo stesso schema "generico": l'ordine di estrazione dei grigi (FIFO vs LIFO) distingue le due politiche.

**8. [Vero/Falso]** Nella BFS un vertice viene colorato di nero nel momento esatto in cui viene scoperto.
- Risposta: **Falso** ✓
- Falso. Alla scoperta diventa *grigio* (entra in coda). Diventa nero solo dopo essere stato estratto e aver esaminato tutti i suoi adiacenti.

**9. [Scelta multipla]** Nella BFS, quando un vertice viene scoperto per la prima volta (passa da bianco a grigio):
- Viene subito colorato di nero
- Si registra il suo predecessore e la sua distanza, e si accoda ✓
- Viene rimosso dalla coda
- Si ricalcolano tutte le distanze
- _Spiegazione:_ Alla scoperta: π[v] = u, d[v] = d[u]+1, enqueue(v). Diventerà nero quando uscirà dalla coda e avrà esplorato i suoi vicini.

**10. [Scelta multipla]** L'albero BFS dei predecessori contiene cammini che sono:
- I cammini di peso minimo (grafo pesato)
- I cammini con il minimo numero di archi dalla sorgente ✓
- Tutti i cicli del grafo
- I cammini più lunghi
- _Spiegazione:_ La BFS minimizza il numero di archi, non il peso (per i pesi serve Dijkstra).

**11. [Scelta multipla]** Perché il web crawling è modellato come una visita di grafo con marcatura dei nodi?
- Per ordinare le pagine per peso
- Per evitare di indicizzare più volte la stessa pagina (e non ciclare all'infinito) ✓
- Per calcolare i cammini minimi
- Per comprimere le pagine
- _Spiegazione:_ Senza marcare i nodi già visitati, i cicli di hyperlink farebbero ripetere pagine all'infinito.

**12. [Scelta multipla]** Qual è la struttura dati che caratterizza la BFS?
- Pila (LIFO)
- Coda (FIFO) ✓
- Heap
- Albero binario di ricerca
- _Spiegazione:_ La FIFO processa i vertici in ordine di distanza non decrescente dalla sorgente.

**13. [Scelta multipla]** In un grafo non pesato, per trovare la distanza minima (in archi) da s a tutti i vertici si usa:
- DFS
- BFS ✓
- Dijkstra
- Floyd-Warshall
- _Spiegazione:_ La BFS dà direttamente δ(s,v) per i grafi non pesati ed è la più economica.

**14. [Domanda aperta]** Descrivi l'algoritmo BFS (colori, coda, aggiornamento di d e π) e dimostra a parole perché d[v] = δ(s,v).
- Punti chiave:
  - Inizializza tutti bianchi, d=∞, π=nil; s grigio, d[s]=0, in coda.
  - Estrai u dalla coda; per ogni v bianco adiacente: colora grigio, d[v]=d[u]+1, π[v]=u, accoda. Poi u diventa nero.
  - La coda FIFO processa i vertici in ordine di distanza non decrescente: quando v è scoperto, lo è da un vertice u a distanza minima → d[v]=d[u]+1 è minima.
  - Complessità O(n+m) con liste di adiacenza.

**15. [Domanda aperta]** Spiega il significato dei tre colori nella visita generica e perché servono.
- Punti chiave:
  - Bianco: non ancora scoperto (inesplorato).
  - Grigio: scoperto ma con adiacenti non tutti esplorati (aperto, sulla frontiera).
  - Nero: scoperto e con tutti gli adiacenti già scoperti (chiuso).
  - Servono a non rivisitare nodi (terminazione) e a definire le proprietà delle visite (cambi di colore, classificazione archi).

**16. [Codice/Pseudocodice]** Scrivi (pseudocodice) un algoritmo che, dato un grafo orientato non pesato G e un vertice t, restituisca un vettore che in posizione i contiene "V" se dist(i,t) ∈ [0,1], "M" se ∈ [2,3], "L" se ≥ 4. (Esercizio-tipo dal foglio "100 Esercizi".)
- Punti chiave (idea):
  - Le distanze sono *verso* t: serve la BFS sul **grafo trasposto** Gᵀ con sorgente t (così d[i] = dist(i→t)). In alternativa BFS multi-sorgente invertendo gli archi.
  - Dopo la BFS, mappa ogni d[i] nella lettera: 0–1→V, 2–3→M, ≥4 (o ∞)→L.
- Pseudocodice:
```
DISTANZE-ETICHETTA(G, t)
  Gt <- trasposto di G            // inverti l'orientamento di ogni arco
  BFS(Gt, t)                      // calcola d[i] = numero di archi da i a t
  R <- nuovo vettore di n elementi
  for i = 0..n-1 do
    if d[i] <= 1 then      R[i] <- "V"
    else if d[i] <= 3 then R[i] <- "M"
    else                  R[i] <- "L"   // copre anche d[i] = infinito
  return R
```
- Trappola: senza trasposto calcoleresti dist(t→i), non dist(i→t). Sul grafo dell'esempio con t=0 il risultato atteso è `V V M V M M L`.

**17. [Codice/Pseudocodice]** Scrivi lo pseudocodice della BFS standard che calcola d[] e π[] da una sorgente s.
- Punti chiave: coda FIFO, colori, aggiornamento alla scoperta.
- Pseudocodice:
```
BFS(G, s)
  for ogni u in V: color[u]<-bianco; d[u]<-infinito; π[u]<-nil
  color[s]<-grigio; d[s]<-0; π[s]<-nil
  Q <- coda vuota; enqueue(Q, s)
  while Q non vuota do
    u <- dequeue(Q)
    for ogni v in Adj[u] do
      if color[v]=bianco then
        color[v]<-grigio; d[v]<-d[u]+1; π[v]<-u
        enqueue(Q, v)
    color[u]<-nero
```

**18. [Codice/Pseudocodice]** Modifica la BFS per contare quanti vertici sono raggiungibili da s a distanza esattamente k.
- Punti chiave (idea): esegui la BFS; conta i vertici con d[v]==k. Una sola scansione finale di d[] basta.
- Pseudocodice:
```
CONTA-A-DISTANZA(G, s, k)
  BFS(G, s)
  c <- 0
  for ogni v in V do
    if d[v] = k then c <- c+1
  return c
```

---

## 5 — DFS, aciclicità e classificazione degli archi

**1. [Vero/Falso]** La DFS può essere implementata ricorsivamente o con una pila (LIFO) esplicita.
- Risposta: **Vero** ✓
- Vero. La ricorsione usa implicitamente lo stack delle chiamate; in alternativa si gestisce una pila esplicita. La differenza con la BFS è proprio coda (FIFO) vs pila (LIFO).

**2. [Vero/Falso]** In una DFS, i tempi di scoperta/fine visita di due vertici o sono disgiunti o uno è contenuto nell'altro (mai parzialmente sovrapposti).
- Risposta: **Vero** ✓
- Vero. È il "teorema delle parentesi": gli intervalli [d[u], f[u]] formano una struttura ben annidata, come parentesi bilanciate.

**3. [Vero/Falso]** In un grafo *non orientato*, una DFS può produrre archi all'indietro e archi in avanti.
- Risposta: **Falso** ✓
- Falso. Nei grafi non orientati la DFS classifica gli archi solo come archi dell'albero (T) o archi all'indietro (B). Forward e Cross compaiono solo nei grafi orientati.

**4. [Vero/Falso]** Un grafo orientato è aciclico se e solo se una sua DFS non produce alcun arco all'indietro (back edge).
- Risposta: **Vero** ✓
- Vero. È il teorema fondamentale: presenza di un back edge ⟺ esiste un ciclo. È la base dell'algoritmo CICLICO.

**5. [Vero/Falso]** La complessità del test di aciclicità basato su DFS è O(n+m).
- Risposta: **Vero** ✓
- Vero. È una DFS con controllo del colore degli adiacenti: O(n+m) con liste di adiacenza.

**6. [Vero/Falso]** Nel teorema delle parentesi, se gli intervalli [d[u],f[u]] e [d[v],f[v]] sono disgiunti, allora né u è discendente di v né viceversa nella foresta DFS.
- Risposta: **Vero** ✓
- Vero. Intervalli disgiunti ⟺ nessuna relazione antenato-discendente. Annidamento ⟺ relazione di discendenza.

**7. [Vero/Falso]** Un back edge (u,v) indica che v è un *antenato* di u nella foresta DFS.
- Risposta: **Vero** ✓
- Vero. L'arco torna verso un vertice ancora aperto (grigio), che è un antenato di u: chiude un ciclo.

**8. [Scelta multipla]** Durante una DFS su grafo orientato, incontri l'arco (u,v) con v **grigio**. Che arco è?
- Arco dell'albero (Tree)
- Arco in avanti (Forward)
- Arco all'indietro (Back) ✓
- Arco di attraversamento (Cross)
- _Spiegazione:_ v grigio = ancora aperto = u è discendente di v → (u,v) torna verso un antenato = back edge. È il segnale di ciclo.

**9. [Scelta multipla]** Arco (u,v) con v **bianco** al momento dell'esame:
- Tree edge ✓
- Back edge
- Forward edge
- Cross edge
- _Spiegazione:_ v non ancora scoperto → la visita lo scopre attraverso (u,v) → arco dell'albero. v diventa figlio di u nella foresta DFS.

**10. [Scelta multipla]** Arco (u,v) con v **nero** e d[u] < d[v]:
- Tree edge
- Back edge
- Forward edge ✓
- Cross edge
- _Spiegazione:_ v già chiuso ed è discendente di u (scoperto dopo u) → forward. Se invece d[u] > d[v] (v in un sottoalbero/precedente già chiuso, non antenato) → cross.

**11. [Scelta multipla]** Arco (u,v) con v **nero** e d[u] > d[v]:
- Tree edge
- Back edge
- Forward edge
- Cross edge ✓
- _Spiegazione:_ v è già chiuso e non è un discendente di u (è stato scoperto e chiuso prima/in un altro sottoalbero) → arco di attraversamento.

**12. [Scelta multipla]** Quale struttura distingue la DFS dalla BFS nella visita generica?
- La coda FIFO
- La pila LIFO (o la ricorsione) ✓
- L'heap
- La matrice di adiacenza
- _Spiegazione:_ DFS = pila/ricorsione (va "in profondità"); BFS = coda (va "in ampiezza").

**13. [Scelta multipla]** Quante categorie di archi può produrre una DFS su un grafo *orientato*?
- 2 (T, B)
- 3 (T, B, F)
- 4 (T, B, F, C) ✓
- 1 (solo T)
- _Spiegazione:_ Tree, Back, Forward, Cross. Nel non orientato solo Tree e Back.

**14. [Domanda aperta]** Spiega come la DFS rileva i cicli in un grafo orientato e perché basta cercare un back edge.
- Punti chiave:
  - Si colora bianco/grigio/nero e si fa DFS ricorsiva.
  - Se durante la visita di u si trova un adiacente v **grigio**, allora v è un antenato ancora aperto: (u,v) chiude un ciclo (back edge).
  - Viceversa, se non c'è alcun back edge, ogni arco va verso vertici bianchi (albero) o già chiusi (forward/cross): nessun ritorno verso antenati → nessun ciclo.
  - Complessità O(n+m).

**15. [Domanda aperta]** Enuncia il teorema delle parentesi e spiega cosa implica sulla struttura della foresta DFS.
- Punti chiave:
  - Per ogni coppia u,v: gli intervalli [d[u],f[u]] e [d[v],f[v]] sono o disgiunti o uno contenuto nell'altro.
  - Contenimento ⟺ relazione antenato/discendente nella foresta DFS.
  - Disgiunti ⟺ nessuna relazione di discendenza (rami diversi).
  - È la base per definire back/forward/cross edge in funzione di d[] e f[].

**16. [Codice/Pseudocodice]** Scrivi (pseudocodice) un algoritmo che, dato un grafo orientato G con liste di adiacenza ed eventualmente non connesso, restituisca un insieme ordinato di archi C che nell'ordine formano un ciclo (insieme vuoto se aciclico). (Esercizio 4, esame 15/02/2021.)
- Punti chiave (idea):
  - DFS con colori; quando da u si trova v **grigio**, si è chiuso un ciclo: l'arco ⟨u,v⟩ ne fa parte e v è l'antenato che chiude.
  - Si ricostruisce il ciclo risalendo i predecessori π da u fino a v, raccogliendo gli archi nell'ordine.
  - Iterare su tutti i vertici bianchi gestisce il caso non connesso.
- Pseudocodice:
```
TROVA-CICLO(G)
  for ogni u in V: color[u] <- bianco; π[u] <- nil
  C <- lista vuota
  for ogni u in V do
    if color[u] = bianco then
      if DFS-CICLO(G, u, C) then return C
  return C    // vuoto: nessun ciclo

DFS-CICLO(G, u, C)
  color[u] <- grigio
  for ogni v in Adj[u] do
    if color[v] = grigio then          // back edge: ciclo trovato
      x <- u
      addFirst(C, <x, v>)              // l'arco che chiude
      while x != v do
        addFirst(C, <π[x], x>)
        x <- π[x]
      return true
    else if color[v] = bianco then
      π[v] <- u
      if DFS-CICLO(G, v, C) then return true
  color[u] <- nero
  return false
```

**17. [Codice/Pseudocodice]** Scrivi lo pseudocodice della DFS con tempi di scoperta d[] e fine f[].
- Punti chiave: contatore globale di tempo, ricorsione, colori.
- Pseudocodice:
```
DFS(G)
  for ogni u in V: color[u]<-bianco; π[u]<-nil
  time <- 0
  for ogni u in V do
    if color[u]=bianco then DFS-VISIT(G,u)

DFS-VISIT(G,u)
  time<-time+1; d[u]<-time; color[u]<-grigio
  for ogni v in Adj[u] do
    if color[v]=bianco then π[v]<-u; DFS-VISIT(G,v)
  color[u]<-nero; time<-time+1; f[u]<-time
```

**18. [Esercizio]** Dato un grafo orientato a 7 nodi, sorgente 0, liste in ordine alfabetico: eseguire la DFS indicando d[] e f[] per ogni vertice, classificare ogni arco (T/B/F/C) e dire se il grafo è aciclico. (Foglio "100 Esercizi".)
- Soluzione (metodo):
  - Avvia DFS-VISIT(0); a ogni passo segui l'adiacente bianco in ordine alfabetico, incrementando `time` alla scoperta (d) e alla chiusura (f).
  - Classifica ogni arco (u,v) al momento in cui lo esamini: v bianco→T, v grigio→B, v nero con d[u]<d[v]→F, v nero con d[u]>d[v]→C.
  - Il grafo è **aciclico se e solo se non hai trovato alcun arco B** (back edge).
  - Da riportare: tabella d/f per i 7 vertici, etichetta su ogni arco, conclusione aciclico sì/no. (I numeri esatti dipendono dal grafo della tua copia: ricostruiscili seguendo l'ordine alfabetico degli adiacenti.)

---

## 6 — Ordinamento topologico

**1. [Vero/Falso]** Solo i DAG ammettono un ordinamento topologico.
- Risposta: **Vero** ✓
- Vero. Un ordine topologico esiste *se e solo se* il grafo è orientato e aciclico. Un ciclo renderebbe impossibile ordinare i suoi vertici senza un arco all'indietro.

**2. [Vero/Falso]** Un DAG ha sempre un solo ordinamento topologico.
- Risposta: **Falso** ✓
- Falso. Un DAG può avere molti ordini topologici validi (es. vertici "paralleli" senza vincoli reciproci si possono ordinare in più modi).

**3. [Vero/Falso]** Un ordinamento topologico dispone i vertici in modo che non esista alcun arco all'indietro nell'ordine scelto.
- Risposta: **Vero** ✓
- Vero. Per ogni arco (u,v), u precede v nell'ordine: tutti gli archi "vanno in avanti".

**4. [Vero/Falso]** In un DAG esistono sempre almeno un nodo sorgente (grado entrante 0) e almeno un nodo pozzo (grado uscente 0).
- Risposta: **Vero** ✓
- Vero. È una proprietà dei DAG e garantisce che l'algoritmo "scegli una sorgente, rimuovila, ripeti" termini sempre.

**5. [Vero/Falso]** Un nodo sorgente è un nodo senza archi *uscenti*.
- Risposta: **Falso** ✓
- Falso. Sorgente = nessun arco *entrante*. Pozzo = nessun arco *uscente*. (Scambio classico da non fare.)

**6. [Vero/Falso]** L'ordinamento topologico via DFS emette i vertici in ordine crescente di tempo di fine visita.
- Risposta: **Falso** ✓
- Falso. Si inseriscono in testa a una lista al momento della chiusura → ordine *decrescente* di f[]. Emetterli in ordine crescente di f darebbe l'ordine inverso.

**7. [Scelta multipla]** L'algoritmo classico di ordinamento topologico via DFS inserisce i vertici:
- In testa a una lista, in ordine *crescente* di tempo di fine visita
- In testa a una lista man mano che diventano neri (ordine *decrescente* di f[]) ✓
- In coda appena diventano grigi
- In ordine alfabetico
- _Spiegazione:_ Si fa DFS e si fa push in testa al completamento (quando il vertice diventa nero). Il risultato è l'ordine decrescente dei tempi di fine f[].

**8. [Scelta multipla]** Qual è la complessità dell'ordinamento topologico?
- O(n²)
- O(n+m) ✓
- O(m log n)
- O(n³)
- _Spiegazione:_ È una DFS con inserimenti O(1) in testa alla lista: O(n+m).

**9. [Scelta multipla]** Nell'algoritmo di Kahn (gradi entranti), un vertice è pronto per essere emesso quando:
- Ha grado uscente 0
- Il suo grado entrante è sceso a 0 ✓
- È stato colorato di nero
- È l'unico rimasto
- _Spiegazione:_ Si emettono le sorgenti correnti (grado entrante 0); rimuovendole si aggiornano i gradi entranti dei successori.

**10. [Scelta multipla]** Se l'algoritmo di Kahn termina senza aver emesso tutti i vertici, allora:
- L'input non era un grafo
- Il grafo contiene un ciclo (non è un DAG) ✓
- L'ordinamento è comunque valido
- Mancano archi
- _Spiegazione:_ I vertici rimasti hanno grado entrante > 0 reciprocamente → c'è un ciclo, quindi nessun ordine topologico esiste.

**11. [Domanda aperta]** Descrivi due strategie per l'ordinamento topologico (DFS e Kahn/gradi entranti) e su quale proprietà si fondano.
- Punti chiave:
  - DFS-based: DFS completa; ogni volta che un vertice diventa nero lo si mette in testa alla lista risultato → ordine decrescente di f[].
  - Kahn (gradi entranti): si parte dai vertici con grado entrante 0, li si emette, si "rimuovono" decrementando i gradi entranti dei successori; chi arriva a 0 entra nella coda dei pronti.
  - Entrambe O(n+m). Se Kahn non riesce a emettere tutti i vertici → il grafo ha un ciclo (non è un DAG).

**12. [Domanda aperta]** Perché l'esistenza di un nodo sorgente garantisce che si possa costruire un ordinamento topologico per induzione?
- Punti chiave:
  - In un DAG c'è sempre una sorgente s (grado entrante 0).
  - s può essere il primo dell'ordine: nessun arco lo precede.
  - Rimuovendo s si ottiene ancora un DAG (più piccolo), che per induzione ha un ordine topologico.
  - Anteporre s a quell'ordine dà un ordine topologico del grafo originale.

**13. [Esercizio]** Dato il grafo orientato con 6 nodi e archi ⟨0,3⟩ ⟨0,4⟩ ⟨1,5⟩ ⟨2,3⟩ ⟨2,4⟩ ⟨3,1⟩ ⟨3,5⟩ ⟨4,1⟩, calcolare un ordinamento topologico descrivendo il procedimento. (Foglio "100 Esercizi".)
- Soluzione (metodo gradi entranti / Kahn):
  - Gradi entranti iniziali: 0→0, 1→2 (da 3,4), 2→0, 3→2 (da 0,2), 4→2 (da 0,2), 5→2 (da 1,3).
  - Pronti (grado 0): {0, 2}. Emetti 0 → aggiorna: 3→1, 4→1. Emetti 2 → 3→0, 4→0. Pronti: {3,4}.
  - Emetti 3 → 1→1, 5→1. Emetti 4 → 1→0. Pronti: {1}. Emetti 1 → 5→0. Emetti 5.
  - **Ordine topologico:** 0, 2, 3, 4, 1, 5 (uno dei validi; scegliendo i vertici in ordine crescente a parità di pronti).
  - Verifica: ogni arco va "in avanti" in questa sequenza. ✓

**14. [Esercizio]** Per lo stesso grafo dell'esercizio precedente, trovare un ordinamento topologico con il metodo DFS (push in testa alla chiusura), partendo dal vertice 0 e seguendo gli adiacenti in ordine crescente.
- Soluzione (metodo):
  - DFS-VISIT(0): scopre 0; adiacenti {3,4} in ordine → visita 3.
  - Da 3: adiacenti {1,5} → visita 1 → da 1 adiacente {5} → visita 5 (pozzo) → chiudi 5 (push), torna a 1, chiudi 1 (push), torna a 3, visita 5? già nero; chiudi 3 (push). Torna a 0, visita 4 → da 4 {1} già nero, chiudi 4 (push), chiudi 0 (push).
  - Visita i vertici rimasti non scoperti (2): DFS-VISIT(2) → {3,4} già neri, chiudi 2 (push).
  - Lista in testa (ordine di push inverso): l'ordine finale è **2, 0, 4, 3, 1, 5** (uno degli ordini validi; può differire da quello di Kahn ma è comunque topologico).
  - Verifica: ogni arco va in avanti nell'ordine ottenuto. ✓

---

## 7 — Componenti connesse e fortemente connesse

**1. [Vero/Falso]** In un grafo non orientato, le componenti connesse si calcolano con una serie di visite (BFS o DFS) in tempo O(n+m).
- Risposta: **Vero** ✓
- Vero. Si visita da un vertice non ancora visitato, marcando tutta la sua componente; si ripete finché restano vertici. Costo totale O(n+m).

**2. [Vero/Falso]** Una componente fortemente connessa (cfc) è un sottoinsieme massimale di vertici mutuamente raggiungibili tramite cammini orientati.
- Risposta: **Vero** ✓
- Vero. In una cfc, per ogni coppia (u,v) esiste cammino u→v e v→u. "Massimale" = non si può aggiungere altro vertice mantenendo la proprietà.

**3. [Vero/Falso]** Le cfc sono le classi di equivalenza della relazione di connessione forte.
- Risposta: **Vero** ✓
- Vero. La connessione forte (u raggiunge v e v raggiunge u) è una relazione di equivalenza; le sue classi sono esattamente le cfc.

**4. [Vero/Falso]** Il grafo delle componenti fortemente connesse (grafo di condensazione) è sempre un DAG.
- Risposta: **Vero** ✓
- Vero. Contraendo ogni cfc in un super-nodo si ottiene un DAG: se ci fosse un ciclo tra cfc diverse, queste sarebbero in realtà un'unica cfc.

**5. [Vero/Falso]** L'algoritmo di Kosaraju usa due DFS e il grafo trasposto Gᵀ.
- Risposta: **Vero** ✓
- Vero. (1) DFS su G registrando i tempi di fine; (2) calcola Gᵀ; (3) DFS su Gᵀ visitando i vertici in ordine decrescente di f[]. Ogni albero della seconda DFS è una cfc.

**6. [Vero/Falso]** Un grafo orientato è fortemente connesso se e solo se ha un'unica cfc che contiene tutti i vertici.
- Risposta: **Vero** ✓
- Vero. "Fortemente connesso" = ogni vertice raggiunge ogni altro = un'unica classe di equivalenza = una sola cfc.

**7. [Vero/Falso]** Calcolare le componenti connesse di un grafo non orientato richiede il grafo trasposto.
- Risposta: **Falso** ✓
- Falso. Nel non orientato basta una serie di visite (il trasposto serve solo per le *fortemente* connesse nei grafi orientati).

**8. [Scelta multipla]** Qual è la complessità del calcolo delle cfc (Kosaraju) con liste di adiacenza?
- O(n²)
- O(n+m) ✓
- O(n·m)
- O(m log n)
- _Spiegazione:_ Tre fasi da O(n+m): DFS su G, costruzione di Gᵀ, DFS su Gᵀ. Totale O(n+m).

**9. [Scelta multipla]** Nel grafo di condensazione, ogni super-nodo rappresenta:
- Un singolo vertice
- Una componente fortemente connessa ✓
- Un arco
- Un ciclo
- _Spiegazione:_ Si contrae ogni cfc in un nodo; gli archi tra cfc diverse diventano archi del DAG di condensazione.

**10. [Scelta multipla]** Perché la seconda DFS di Kosaraju si fa sul grafo *trasposto*?
- Per dimezzare la complessità
- Per impedire alla visita di "uscire" dalla cfc corrente verso altre componenti ✓
- Per ordinare i vertici
- Per eliminare i cicli
- _Spiegazione:_ Sul trasposto, partendo dal vertice con f[] massimo, la DFS resta confinata in una singola cfc per albero.

**11. [Domanda aperta]** Spiega l'algoritmo di Kosaraju e perché la seconda DFS, fatta in ordine decrescente di f[] su Gᵀ, isola esattamente le cfc.
- Punti chiave:
  - Fase 1: DFS su G, push dei vertici in pila per tempo di fine (l'ultimo a finire in cima).
  - Fase 2: costruisci Gᵀ (archi invertiti).
  - Fase 3: DFS su Gᵀ estraendo i vertici in ordine decrescente di f[]; ogni albero generato è una cfc.
  - Intuizione: invertendo gli archi, da una cfc non si "sfugge" verso le cfc che la precedono nel DAG di condensazione; partire dal vertice con f[] massimo (una sorgente del DAG) confina la DFS dentro una sola cfc per volta.

**12. [Domanda aperta]** Perché la connessione forte è una relazione di equivalenza e cosa implica per la partizione dei vertici?
- Punti chiave:
  - Riflessiva (u raggiunge sé stesso), simmetrica (per definizione di forte: u↔v), transitiva (u↔v e v↔w ⇒ u↔w).
  - Quindi partiziona V in classi disgiunte: le cfc.
  - Ogni vertice appartiene a esattamente una cfc; il grafo di condensazione è aciclico.

**13. [Esercizio]** Dato il grafo orientato con 6 nodi e archi ⟨0,3⟩ ⟨0,4⟩ ⟨1,5⟩ ⟨2,3⟩ ⟨3,1⟩ ⟨3,5⟩ ⟨4,1⟩ ⟨5,2⟩, calcolare la componente fortemente connessa contenente il vertice 2. (Foglio "100 Esercizi".)
- Soluzione (raggiungibili da 2 ∩ che raggiungono 2):
  - Raggiungibili **da** 2 in G: 2→3→{1,5}, 1→5, 5→2, 3→5 ⇒ {1,2,3,5}.
  - Che **raggiungono** 2 (raggiungibili da 2 in Gᵀ): chi va a 2? 5. Chi va a 5? 1,3. Chi va a 1? 3,4. Chi va a 3? 0,2 ⇒ {0,1,2,3,4,5} potenzialmente, ma serve l'intersezione.
  - **cfc(2) = {raggiungibili da 2} ∩ {che raggiungono 2}** = {1,2,3,5} (il 4 non è raggiungibile da 2 → escluso; lo 0 nemmeno).
  - Verifica: 2→3→1→5→2 è un ciclo che li tocca tutti → mutuamente raggiungibili. **cfc(2) = {1, 2, 3, 5}.** ✓

**14. [Esercizio]** Per lo stesso grafo, indicare tutte le cfc e disegnare (a parole) il grafo di condensazione.
- Soluzione (metodo):
  - cfc(2) = {1,2,3,5} (vista sopra). Restano 0 e 4.
  - 0: nessuno lo raggiunge (grado entrante 0) → cfc singoletto {0}.
  - 4: 0→4 e 4→1; nessun cammino torna a 4 → cfc singoletto {4}.
  - **cfc: {0}, {4}, {1,2,3,5}.**
  - Condensazione: super-nodi A={0}, B={4}, C={1,2,3,5}; archi A→B (da 0→4), A→C (da 0→3), B→C (da 4→1). È un DAG (sorgente A, pozzo C). ✓
## 8 — Tecnica Greedy (golosa)

**1. [Vero/Falso]** Un algoritmo greedy compie a ogni passo la scelta localmente ottima, senza tornare indietro sulle decisioni prese.
- Risposta: **Vero** ✓
- Vero. È la definizione: scelta locale "miope", irrevocabile. Funziona solo se il problema ha sottostruttura ottima + proprietà della scelta greedy.

**2. [Vero/Falso]** Il greedy garantisce sempre la soluzione ottima per qualsiasi problema di ottimizzazione.
- Risposta: **Falso** ✓
- Falso. Garantisce l'ottimo solo per problemi con la "proprietà della scelta greedy". Es.: per lo zaino *frazionario* è ottimo, per lo zaino *0-1* non lo è.

**3. [Vero/Falso]** La "proprietà della scelta greedy" afferma che esiste una soluzione ottima che include la scelta greedy del primo passo.
- Risposta: **Vero** ✓
- Vero. È la condizione che, insieme alla sottostruttura ottima, giustifica la correttezza del greedy.

**4. [Vero/Falso]** Per dimostrare l'ottimalità di un greedy si usa spesso un argomento di scambio ("exchange argument").
- Risposta: **Vero** ✓
- Vero. Si mostra che una qualunque soluzione ottima può essere trasformata, scambiando elementi, nella soluzione greedy senza peggiorare il valore.

**5. [Vero/Falso]** Sottostruttura ottima significa che la soluzione ottima del problema contiene soluzioni ottime di suoi sottoproblemi.
- Risposta: **Vero** ✓
- Vero. È la proprietà condivisa da greedy e programmazione dinamica; ciò che cambia è il modo di sfruttarla.

**6. [Scelta multipla]** Quale problema è risolto *ottimamente* da un greedy?
- Zaino 0-1
- Zaino frazionario (prendi prima il maggior valore/peso) ✓
- Commesso viaggiatore (TSP) in generale
- Cammino più lungo
- _Spiegazione:_ Nel frazionario si ordina per rapporto valore/peso e si riempie: greedy ottimo. Lo 0-1 richiede programmazione dinamica.

**7. [Scelta multipla]** Cosa distingue greedy e programmazione dinamica?
- Il greedy usa una tabella, la PD no
- Il greedy fa una scelta locale irrevocabile; la PD considera più alternative e le combina ✓
- Sono identici
- La PD è sempre più veloce
- _Spiegazione:_ Entrambi sfruttano la sottostruttura ottima, ma il greedy "scommette" sulla scelta locale, la PD esplora i sottoproblemi.

**8. [Scelta multipla]** Il rapporto usato dal greedy per lo zaino frazionario è:
- peso/valore
- valore/peso ✓
- valore × peso
- solo il valore
- _Spiegazione:_ Si ordina per valore per unità di peso (vᵢ/pᵢ) decrescente e si riempie lo zaino.

**9. [Domanda aperta]** Quali due proprietà deve avere un problema perché un greedy sia corretto, e come si dimostra l'ottimalità?
- Punti chiave:
  - Sottostruttura ottima: l'ottimo si compone di ottimi di sottoproblemi.
  - Proprietà della scelta greedy: esiste un ottimo che contiene la prima scelta greedy.
  - Dimostrazione tipica: argomento di scambio (trasforma un ottimo nella soluzione greedy senza peggiorarlo) + induzione sul sottoproblema residuo.

**10. [Esercizio]** Zaino *frazionario*, capienza P = 80. Oggetti (peso pᵢ / costo cᵢ): 1:(10/60) 2:(20/100) 3:(30/120) 4:(10/70) 5:(10/10) 6:(20/60). Trovare la soluzione ottima. (Foglio "100 Esercizi".)
- Soluzione:
  - Rapporto cᵢ/pᵢ: o1=6, o2=5, o3=4, o4=7, o5=1, o6=3.
  - Ordine decrescente: o4(7), o1(6), o2(5), o3(4), o6(3), o5(1).
  - Riempimento (P=80): o4 peso10→rimane 70 (val 70); o1 peso10→60 (130); o2 peso20→40 (230); o3 peso30→10 (350); o6: resta 10 su peso20 → metà → +30 (380).
  - **Valore ottimo = 380**, prendendo o4, o1, o2, o3 interi e metà di o6. o5 escluso.

**11. [Esercizio]** Zaino frazionario, P = 50. Oggetti (pᵢ/vᵢ): A:(10/60) B:(20/100) C:(30/120). Trovare la soluzione ottima e indicare le frazioni.
- Soluzione:
  - Rapporti v/p: A=6, B=5, C=4. Ordine: A, B, C.
  - Prendi A intero (peso 10, val 60), resta 40. Prendi B intero (peso 20, val 100), resta 20. Di C (peso 30) prendi 20/30 = 2/3 → val 120·(2/3) = 80.
  - **Valore ottimo = 60+100+80 = 240**, con A e B interi e 2/3 di C.

---

## 9 — Greedy: selezione di intervalli disgiunti

**1. [Vero/Falso]** Per massimizzare il numero di intervalli mutuamente disgiunti, la scelta greedy corretta è ordinare per *tempo di fine* crescente.
- Risposta: **Vero** ✓
- Vero. Si sceglie sempre l'intervallo che finisce prima tra quelli compatibili: lascia più spazio per i successivi. Ordinare per tempo di inizio o per durata NON è ottimo.

**2. [Vero/Falso]** Ordinare per durata crescente dà sempre il massimo numero di intervalli disgiunti.
- Risposta: **Falso** ✓
- Falso. Controesempio classico: un intervallo breve ma "centrale" può bloccarne due lunghi. La chiave è il tempo di *fine*.

**3. [Vero/Falso]** Ordinare per tempo di *inizio* crescente è una strategia greedy corretta per gli intervalli disgiunti.
- Risposta: **Falso** ✓
- Falso. Un intervallo che inizia prestissimo ma finisce tardissimo può bloccarne molti altri. Solo l'ordinamento per tempo di fine è ottimo.

**4. [Vero/Falso]** Due intervalli [a,b) e [c,d) sono compatibili (disgiunti) se c ≥ b (il secondo inizia non prima che il primo finisca).
- Risposta: **Vero** ✓
- Vero. Con estremi semiaperti, c ≥ b garantisce nessuna sovrapposizione.

**5. [Scelta multipla]** Dopo aver ordinato per tempo di fine, l'algoritmo seleziona un intervallo se:
- Inizia prima dell'ultimo selezionato
- Il suo inizio è ≥ alla fine dell'ultimo selezionato ✓
- Ha durata minima
- Ha il valore più alto
- _Spiegazione:_ Compatibilità: non si sovrappone all'ultimo preso. Greedy ottimo, complessità O(n log n) per l'ordinamento.

**6. [Scelta multipla]** La complessità dominante della selezione di intervalli disgiunti è:
- O(n²) per i confronti
- O(n log n) per l'ordinamento iniziale ✓
- O(2ⁿ)
- O(n)
- _Spiegazione:_ Ordinare per tempo di fine costa O(n log n); la scansione successiva è O(n).

**7. [Domanda aperta]** Spiega perché l'ordinamento per tempo di fine è la scelta greedy corretta e accenna alla dimostrazione.
- Punti chiave:
  - Scegliere l'intervallo che finisce prima lascia la massima "risorsa" (tempo) disponibile per i restanti.
  - Argomento di scambio: data una soluzione ottima, si può sostituire il suo primo intervallo con quello a fine minima senza ridurre il numero di intervalli.
  - Si itera sul sottoproblema rimanente (intervalli compatibili con quello scelto).

**8. [Esercizio]** Dati gli intervalli I1[5,10) I2[6,9) I3[8,13) I4[10,15) I5[17,20) I6[21,30) I7[24,25) I8[21,23), trovare il massimo sottoinsieme di intervalli disgiunti. (Foglio "100 Esercizi".)
- Soluzione (ordina per estremo destro crescente):
  - Ordinati per fine: I2[6,9), I1[5,10), I3[8,13), I4[10,15), I5[17,20), I8[21,23), I7[24,25), I6[21,30).
  - Seleziona I2 (fine 9). Prossimo con inizio ≥9: I4[10,15) ✓ (I3 inizia a 8, scarta). Fine 15.
  - Inizio ≥15: I5[17,20) ✓. Fine 20. Inizio ≥20: I8[21,23) ✓. Fine 23. Inizio ≥23: I7[24,25) ✓.
  - **Soluzione ottima: {I2, I4, I5, I8, I7} → 5 intervalli.**

**9. [Esercizio]** Dati gli intervalli A[1,4) B[3,5) C[0,6) D[5,7) E[3,8) F[5,9) G[6,10) H[8,11), trovare il massimo numero di intervalli disgiunti.
- Soluzione (ordina per fine):
  - Per fine: A[1,4), B[3,5), C[0,6), D[5,7), E[3,8), F[5,9), G[6,10), H[8,11).
  - A (fine 4). Inizio ≥4: D[5,7) ✓ (B inizia 3, C 0, scartati). Fine 7. Inizio ≥7: H[8,11) ✓ (E,F,G iniziano <7? E3,F5,G6 → scartati). Fine 11.
  - **Soluzione ottima: {A, D, H} → 3 intervalli.**

---

## 10 — Greedy: algoritmo di Moore (minimizzare i lavori in ritardo)

**1. [Vero/Falso]** L'algoritmo di Moore minimizza il *numero* di lavori che terminano in ritardo (oltre la scadenza).
- Risposta: **Vero** ✓
- Vero. Massimizza i lavori completati in tempo (⇔ minimizza i ritardatari), su singola macchina.

**2. [Vero/Falso]** Moore ordina i lavori per *durata* crescente.
- Risposta: **Falso** ✓
- Falso. Ordina per *scadenza* crescente (EDD, Earliest Due Date) e, quando un lavoro renderebbe la sequenza infattibile, scarta dal sottoinsieme corrente il lavoro di durata massima.

**3. [Vero/Falso]** In Moore, quando si supera una scadenza si rimuove dal set accettato il lavoro di durata massima.
- Risposta: **Vero** ✓
- Vero. Togliere il lavoro più lungo libera il massimo tempo possibile, mantenendo il maggior numero di lavori puntuali.

**4. [Vero/Falso]** Il numero di lavori puntuali trovato da Moore può dipendere da quale lavoro di durata massima si sceglie di scartare a parità di durata.
- Risposta: **Falso** ✓
- Falso. Il *numero* di lavori puntuali è ottimo e invariante; può cambiare *quali* lavori, non quanti.

**5. [Scelta multipla]** Nell'algoritmo di Moore, quando il lavoro corrente sfora la scadenza, si rimuove dall'insieme accettato:
- Il lavoro corrente
- Il lavoro con la scadenza più vicina
- Il lavoro di durata *massima* tra quelli accettati finora ✓
- Il primo lavoro inserito
- _Spiegazione:_ Rimuovere il più lungo libera più tempo possibile mantenendo il maggior numero di lavori puntuali.

**6. [Scelta multipla]** Con quale criterio Moore ordina inizialmente i lavori?
- Per durata decrescente
- Per scadenza crescente (EDD) ✓
- Per ordine di arrivo
- Per durata × scadenza
- _Spiegazione:_ Earliest Due Date: si processano i lavori in ordine di scadenza, mantenendo un sottoinsieme fattibile.

**7. [Domanda aperta]** Descrivi l'algoritmo di Moore passo per passo e spiega l'idea dietro lo scarto del lavoro più lungo.
- Punti chiave:
  - Ordina i lavori per scadenza crescente (EDD).
  - Scorri i lavori aggiungendoli; mantieni il tempo cumulativo t.
  - Se aggiungendo un lavoro t supera la sua scadenza, rimuovi dal sottoinsieme il lavoro di durata massima (e aggiorna t).
  - Idea: a parità di lavori, conviene tenere i più corti per massimizzarne il numero entro le scadenze.

**8. [Esercizio]** Applicare Moore a: L1(d3,s6) L2(d3,s5) L3(d1,s5) L4(d3,s8) L5(d3,s10) L6(d2,s8). (Foglio "100 Esercizi".)
- Soluzione (EDD, t = tempo cumulativo):
  - Ordine EDD: L2(3,5), L3(1,5), L1(3,6), L4(3,8), L6(2,8), L5(3,10).
  - +L2: t=3≤5 ✓. +L3: t=4≤5 ✓. +L1: t=7>6 ✗ → scarta il più lungo tra {L2,L3,L1} (durata 3) → t torna a 4.
  - +L4: t=4+3=7≤8 ✓. +L6: t=9>8 ✗ → scarta un d=3 tra gli accettati → t=6. +L5: t=6+3=9≤10 ✓.
  - **In tempo: 4 lavori** (es. L3, L2, L4, L5). Ritardatari minimizzati a 2.

---

## 11 — Greedy: codifica di Huffman

**1. [Vero/Falso]** La codifica di Huffman produce un codice a prefisso (nessun codice è prefisso di un altro).
- Risposta: **Vero** ✓
- Vero. Costruendo l'albero binario con i simboli sulle foglie, ogni codice è una foglia: nessuno è prefisso di un altro → decodifica univoca.

**2. [Vero/Falso]** Huffman assegna codici più *corti* ai simboli più frequenti.
- Risposta: **Vero** ✓
- Vero. È l'idea che minimizza la lunghezza media: i simboli frequenti finiscono vicino alla radice (codici brevi).

**3. [Vero/Falso]** Huffman è un algoritmo di programmazione dinamica.
- Risposta: **Falso** ✓
- Falso. È **greedy**: a ogni passo fonde i due nodi di frequenza minima. (Domanda d'esame ricorrente: "su quale tecnica si basa?" → greedy.)

**4. [Vero/Falso]** In Huffman i simboli si trovano sempre sulle foglie dell'albero, mai nei nodi interni.
- Risposta: **Vero** ✓
- Vero. I nodi interni sono fusioni (somme di frequenze); i simboli dell'alfabeto sono solo foglie → codice a prefisso.

**5. [Vero/Falso]** La lunghezza media della codifica di Huffman si calcola come Σ (frequenza × profondità della foglia).
- Risposta: **Vero** ✓
- Vero. La profondità di una foglia è la lunghezza del suo codice; pesando per la frequenza si ottiene la lunghezza media (bit/simbolo).

**6. [Scelta multipla]** Quale struttura dati rende efficiente la scelta dei due elementi di frequenza minima a ogni passo?
- Pila
- Coda FIFO
- Coda di priorità (min-heap) ✓
- Tabella hash
- _Spiegazione:_ Min-heap: estrai i due minimi, inserisci il nodo fuso. Complessità O(n log n).

**7. [Scelta multipla]** La complessità della costruzione del codice di Huffman con un min-heap è:
- O(n)
- O(n log n) ✓
- O(n²)
- O(2ⁿ)
- _Spiegazione:_ n−1 fusioni, ciascuna con un numero costante di operazioni su heap (O(log n)).

**8. [Scelta multipla]** Perché il codice di Huffman è "a prefisso" e perché serve?
- Per risparmiare memoria
- Perché ogni simbolo è una foglia: nessun codice è prefisso di un altro, quindi la decodifica è univoca ✓
- Per ordinare i simboli
- Per cifrare il messaggio
- _Spiegazione:_ La proprietà di prefisso permette di decodificare il flusso di bit senza ambiguità, leggendo da sinistra.

**9. [Domanda aperta]** Descrivi l'algoritmo di Huffman e spiega perché è ottimo (idea della dimostrazione).
- Punti chiave:
  - Inserisci tutti i simboli in un min-heap per frequenza.
  - Ripeti n−1 volte: estrai i due nodi di frequenza minima, creane uno padre con frequenza pari alla somma, reinseriscilo.
  - I codici si leggono dai rami radice→foglia.
  - Ottimalità (greedy): i due simboli meno frequenti possono sempre essere fratelli alla massima profondità in un albero ottimo (lemma della scelta greedy) + sottostruttura ottima sull'albero ridotto.

**10. [Esercizio]** Alfabeto a,b,c,d,e,f,g con frequenze a:0.20 b:0.08 c:0.12 d:0.15 e:0.10 f:0.10 g:0.25. Calcolare una codifica di Huffman, mostrando l'evoluzione della coda di priorità. (Foglio "100 Esercizi".)
- Soluzione (fusione iterativa dei due minimi):
  - {b.08, e.10, f.10, c.12, d.15, a.20, g.25}.
  - b+e=.18 → {f.10, c.12, d.15, (be).18, a.20, g.25}.
  - f+c=.22 → {d.15, (be).18, a.20, (fc).22, g.25}.
  - d+(be).18=.33 → {a.20, (fc).22, g.25, (dbe).33}.
  - a+(fc).22=.42 → {g.25, (dbe).33, (afc).42}.
  - g+(dbe).33=.58 → {(afc).42, (gdbe).58}.
  - .42+.58=1.00 → radice.
  - Le lunghezze dei codici sono date dalle profondità delle foglie; tecnica = **greedy**.

**11. [Esercizio]** Alfabeto a,b,c,d,e con frequenze a:0.10 b:0.15 c:0.30 d:0.16 e:0.29. Costruire l'albero di Huffman e dare le lunghezze dei codici.
- Soluzione:
  - {a.10, b.15, d.16, e.29, c.30}.
  - a+b=.25 → {d.16, (ab).25, e.29, c.30}.
  - d+(ab).25=.41 → {e.29, c.30, (dab).41}.
  - e+c=.59 → {(dab).41, (ec).59}.
  - .41+.59=1.00 → radice.
  - Profondità: c,e a profondità 2 (codici lunghi 2 bit); d a 2; a,b a profondità 3 (3 bit). Lunghezza media = Σ freq·prof.

---
## 12 — Cammini minimi: rilassamento e Dijkstra

**1. [Vero/Falso]** Il rilassamento dell'arco (u,v) aggiorna D[v] solo se D[u] + w(u,v) < D[v].
- Risposta: **Vero** ✓
- Vero. È l'operazione base: si "rilassa" la stima D[v] sfruttando un cammino migliore passante per u. Si aggiorna anche il predecessore π[v]=u.

**2. [Vero/Falso]** Applicando esaustivamente il rilassamento su un grafo *senza cicli negativi*, le stime D[s,v] convergono a δ(s,v).
- Risposta: **Vero** ✓
- Vero. È la proprietà di convergenza del rilassamento. Con cicli negativi le stime divergono (−∞) e il cammino minimo non è definito.

**3. [Vero/Falso]** Dijkstra funziona correttamente anche con pesi negativi sugli archi.
- Risposta: **Falso** ✓
- Falso. Dijkstra assume pesi *non negativi*: rende "definitivo" il vertice di stima minima, ma un arco negativo successivo potrebbe migliorarlo, violando l'invariante. Con pesi negativi serve Bellman-Ford.

**4. [Vero/Falso]** Quando Dijkstra estrae un vertice u (lo rende nero/definitivo), D[u] = δ(s,u) è già il valore finale.
- Risposta: **Vero** ✓
- Vero. È l'invariante chiave: il vertice estratto dalla coda di priorità ha già la distanza minima definitiva (grazie ai pesi non negativi).

**5. [Vero/Falso]** Il teorema "d[v] = δ(s,v) al termine della BFS" vale anche per grafi pesati con pesi qualsiasi.
- Risposta: **Falso** ✓
- Falso. Per i grafi pesati la BFS non dà la distanza pesata (conta solo gli archi). Per i pesi (non negativi) serve Dijkstra.

**6. [Vero/Falso]** Nel rilassamento, oltre a D[v] si aggiorna il predecessore π[v] per ricostruire il cammino.
- Risposta: **Vero** ✓
- Vero. π[v]=u registra da dove proviene il miglioramento; seguendo π a ritroso si ricostruisce il cammino minimo.

**7. [Vero/Falso]** Dijkstra è un algoritmo greedy.
- Risposta: **Vero** ✓
- Vero. A ogni passo sceglie golosamente il vertice con stima minima e lo rende definitivo. La correttezza dipende dai pesi non negativi.

**8. [Scelta multipla]** Con una coda di priorità a min-heap, la complessità di Dijkstra è:
- O(n²)
- O((n+m) log n) ✓
- O(n·m)
- O(n³)
- _Spiegazione:_ n estrazioni e fino a m decrease-key, ciascuno O(log n). Con array semplice è O(n²) (meglio sui grafi densi).

**9. [Scelta multipla]** Su quale tecnica algoritmica si basa Dijkstra?
- Programmazione dinamica pura
- Divide et impera
- Greedy (scelta del minimo non ancora definitivo) ✓
- Backtracking
- _Spiegazione:_ A ogni passo sceglie golosamente il vertice con stima minima e lo fissa. Domanda d'esame tipica.

**10. [Scelta multipla]** Perché Dijkstra fallisce con un arco di peso negativo?
- Perché la coda di priorità non lo accetta
- Perché un vertice reso "definitivo" potrebbe essere migliorato da un cammino con arco negativo scoperto dopo ✓
- Perché aumenta la complessità
- Perché il grafo diventa non connesso
- _Spiegazione:_ L'invariante "il minimo estratto è definitivo" si rompe: un arco negativo successivo può ridurre una distanza già fissata.

**11. [Scelta multipla]** Implementando Dijkstra con un array semplice (non heap), la complessità è:
- O(m log n)
- O(n²) ✓
- O(n+m)
- O(2ⁿ)
- _Spiegazione:_ n iterazioni, ciascuna con una ricerca lineare del minimo O(n) → O(n²). Conviene sui grafi densi (m ≈ n²).

**12. [Domanda aperta]** Descrivi Dijkstra (inizializzazione, ciclo, rilassamento) e l'invariante che ne garantisce la correttezza.
- Punti chiave:
  - Init: D[s]=0, D[v]=∞, π=nil; tutti in coda di priorità.
  - Ciclo: estrai u con D minimo (diventa definitivo/nero); per ogni arco (u,v) rilassa.
  - Invariante: alla estrazione, D[u]=δ(s,u). Vale perché i pesi sono ≥0: nessun cammino futuro può migliorare un vertice già estratto.
  - Mantiene l'albero dei cammini minimi tramite π.

**13. [Domanda aperta]** Cos'è il rilassamento di un arco e perché applicarlo esaustivamente fa convergere le stime?
- Punti chiave:
  - Rilassare (u,v): se D[u]+w(u,v) < D[v], poni D[v]=D[u]+w(u,v) e π[v]=u.
  - L'operazione non aumenta mai le stime e le mantiene ≥ δ(s,v).
  - Applicandola finché nessun arco si rilassa più (e senza cicli negativi), ogni D[v] raggiunge δ(s,v) (proprietà di convergenza).

**14. [Esercizio]** Applicare Dijkstra con sorgente A, liste in ordine alfabetico; compilare la tabella d a ogni ciclo e l'albero π. Grafo: A–B 1, A–C 4, A–F 7, B–C 2, B–F 1, C–D 2, C–E 5, D–E 6, E–F 1 (verificare i pesi sulla propria copia del foglio "100 Esercizi").
- Soluzione (metodo; adatta ai pesi esatti):
  - Ciclo 0: D=[A:0, resto ∞]. Estrai A → D[B]=1, D[C]=4, D[F]=7 (π=A).
  - Estrai B(1) → C via B=3<4 (π[C]=B); F via B=2<7 (π[F]=B).
  - Estrai F(2) → E via F=3 (π[E]=F).
  - Estrai C(3) e E(3) → D via C=5 (π[D]=C).
  - Estrai D(5). Fine.
  - **Distanze:** A0, B1, F2, C3, E3, D5. **π:** B←A, F←B, C←B, E←F, D←C.

**15. [Esercizio]** Applicare Dijkstra al grafo orientato con sorgente S e archi pesati S→A 2, S→B 5, A→B 1, A→C 7, B→C 3, C→T 1, B→T 6. Compilare la tabella delle distanze.
- Soluzione:
  - D0: S0, resto ∞. Estrai S → A=2, B=5.
  - Estrai A(2) → B via A=2+1=3<5 (π[B]=A); C via A=2+7=9.
  - Estrai B(3) → C via B=3+3=6<9 (π[C]=B); T via B=3+6=9.
  - Estrai C(6) → T via C=6+1=7<9 (π[T]=C).
  - Estrai T(7). Fine.
  - **Distanze:** S0, A2, B3, C6, T7. **Cammino minimo S→T:** S→A→B→C→T, peso 7.

---

## 13 — Cammini minimi: A* (cenni)

**1. [Vero/Falso]** A* è una variante di Dijkstra che usa una funzione euristica h(v) per guidare la ricerca verso la destinazione.
- Risposta: **Vero** ✓
- Vero. A* ordina la frontiera per f(v)=g(v)+h(v), dove g è il costo dalla sorgente e h è una stima del costo residuo alla meta.

**2. [Vero/Falso]** Se l'euristica h è *ammissibile* (non sovrastima mai il costo reale residuo), A* trova il cammino ottimo.
- Risposta: **Vero** ✓
- Vero. Ammissibilità (e consistenza) garantiscono l'ottimalità. Con h≡0, A* degenera in Dijkstra.

**3. [Vero/Falso]** A* con h(v) = 0 per ogni v si comporta esattamente come Dijkstra.
- Risposta: **Vero** ✓
- Vero. Senza informazione euristica f=g: l'ordinamento è quello di Dijkstra.

**4. [Scelta multipla]** In A*, la funzione di valutazione di un nodo è:
- f(v) = h(v) soltanto
- f(v) = g(v) + h(v), con g costo accumulato e h stima residua ✓
- f(v) = g(v) − h(v)
- f(v) = costo massimo
- _Spiegazione:_ f combina il costo già pagato (g) e la stima ottimistica del rimanente (h).

**5. [Scelta multipla]** Cosa significa che un'euristica è "ammissibile"?
- Sovrastima sempre il costo
- Non sovrastima mai il costo reale residuo verso la meta ✓
- È sempre 0
- Dipende dal grafo
- _Spiegazione:_ Ammissibile = ottimistica (h(v) ≤ costo reale residuo); è ciò che garantisce l'ottimalità di A*.

---

## 14 — Cammini minimi: Bellman-Ford

**1. [Vero/Falso]** Bellman-Ford gestisce archi di peso negativo e rileva i cicli negativi.
- Risposta: **Vero** ✓
- Vero. È il suo vantaggio su Dijkstra: con n−1 passate rilassa tutti gli archi; una n-esima passata che migliora ancora qualcosa segnala un ciclo negativo.

**2. [Vero/Falso]** Bellman-Ford esegue n−1 iterazioni, rilassando in ciascuna *tutti* gli archi del grafo.
- Risposta: **Vero** ✓
- Vero. Un cammino minimo (senza cicli) ha al più n−1 archi: n−1 passate complete bastano a farlo convergere.

**3. [Vero/Falso]** La complessità di Bellman-Ford è O(n·m).
- Risposta: **Vero** ✓
- Vero. n−1 iterazioni × m rilassamenti = O(n·m). Più lento di Dijkstra ma più generale.

**4. [Vero/Falso]** Se dopo n−1 iterazioni un'ulteriore passata di rilassamento migliora ancora una stima, esiste un ciclo negativo.
- Risposta: **Vero** ✓
- Vero. Senza cicli negativi le stime sono già convergite a n−1; un ulteriore miglioramento implica un cammino con più di n−1 archi che riduce il costo → ciclo negativo.

**5. [Vero/Falso]** Bellman-Ford è essenzialmente un'applicazione della programmazione dinamica.
- Risposta: **Vero** ✓
- Vero. Calcola le distanze minime usando al più k archi, k=0..n−1, in modo incrementale (equazione di Bellman). È PD.

**6. [Vero/Falso]** L'ordine in cui si rilassano gli archi in Bellman-Ford può cambiare il risultato finale (le distanze).
- Risposta: **Falso** ✓
- Falso. Le distanze finali sono le stesse; l'ordine può solo cambiare *quante* iterazioni servono per convergere (mai oltre n−1).

**7. [Scelta multipla]** Come rileva Bellman-Ford un ciclo negativo?
- Conta gli archi
- Dopo n−1 passate, una ulteriore passata rilassa ancora con successo almeno un arco ✓
- Controlla se il grafo è connesso
- Usa una coda di priorità
- _Spiegazione:_ Se dopo n−1 iterazioni una stima migliora ancora, esiste un cammino con >n−1 archi che riduce il costo → ciclo negativo.

**8. [Scelta multipla]** Su un DAG, i cammini minimi si calcolano più velocemente:
- Con Dijkstra e heap di Fibonacci
- Rilassando gli archi in ordine topologico in una sola passata → O(n+m) ✓
- Con Floyd-Warshall
- Non è possibile
- _Spiegazione:_ L'ordine topologico garantisce che, quando si rilassa l'arco (u,v), D[u] è già definitivo: basta una passata.

**9. [Scelta multipla]** Quante iterazioni complete di rilassamento esegue Bellman-Ford nel caso peggiore?
- n
- n−1 ✓
- m
- log n
- _Spiegazione:_ Un cammino minimo semplice ha ≤ n−1 archi; n−1 passate bastano per propagare le distanze.

**10. [Domanda aperta]** Confronta Dijkstra e Bellman-Ford: quando usare l'uno e quando l'altro.
- Punti chiave:
  - Dijkstra: pesi non negativi; greedy; O((n+m)log n); più veloce.
  - Bellman-Ford: ammette pesi negativi; PD; O(n·m); più lento ma rileva cicli negativi.
  - Se ci sono archi negativi (o serve rilevare cicli negativi) → Bellman-Ford. Altrimenti → Dijkstra.
  - Su DAG → rilassamento in ordine topologico, O(n+m).

**11. [Esercizio]** Applicare Bellman-Ford con archi nell'ordine (A,B) (A,C) (C,D) (C,B) (E,D) (B,E) (B,D), pesi 5, 3, −1, 1, −4, −1, −2; sorgente A. Compilare d a ogni ciclo. (Foglio "100 Esercizi".)
- Soluzione (init D[A]=0, resto ∞):
  - **Iter 1:** (A,B):D[B]=5. (A,C):D[C]=3. (C,D):3−1=2→D[D]=2. (C,B):3+1=4<5→D[B]=4. (E,D):E=∞ skip. (B,E):4−1=3→D[E]=3. (B,D):4−2=2, non <2.
    - → A0, B4, C3, D2, E3.
  - **Iter 2:** (E,D):3−4=−1<2→D[D]=−1. Resto invariato.
    - → A0, B4, C3, D−1, E3.
  - **Iter 3-4:** nessun miglioramento → convergenza, nessun ciclo negativo.
  - **Distanze finali:** A0, B4, C3, D−1, E3.

**12. [Esercizio]** Per lo stesso grafo, applicare l'ottimizzazione per DAG (se applicabile): rilassare gli archi in ordine topologico. (Foglio "100 Esercizi".)
- Soluzione (metodo):
  - Verifica che il grafo sia un DAG (nessun ciclo). Calcola un ordinamento topologico dei vertici.
  - Rilassa gli archi *una sola volta*, seguendo l'ordine topologico dei vertici: quando processi u, D[u] è già definitivo.
  - Ottieni le stesse distanze finali della versione standard (A0, B4, C3, D−1, E3) in O(n+m) invece di O(n·m).
  - Riporta l'ordine topologico usato e la tabella d dopo l'unica passata.

---

## 15 — Cammini minimi tra tutte le coppie: Floyd-Warshall

**1. [Vero/Falso]** Floyd-Warshall calcola i cammini minimi tra *tutte* le coppie di vertici.
- Risposta: **Vero** ✓
- Vero. È un algoritmo all-pairs: produce la matrice delle distanze D e quella dei predecessori P.

**2. [Vero/Falso]** Floyd-Warshall è un algoritmo di programmazione dinamica.
- Risposta: **Vero** ✓
- Vero. Definisce D^k[i,j] = cammino minimo i→j usando come intermedi solo {1..k}, e aggiorna D^k[i,j]=min(D^{k−1}[i,j], D^{k−1}[i,k]+D^{k−1}[k,j]).

**3. [Vero/Falso]** Floyd-Warshall ha complessità O(n³) e gestisce pesi negativi (senza cicli negativi).
- Risposta: **Vero** ✓
- Vero. Tre cicli annidati su n. Tollera archi negativi; un valore D[i,i]<0 finale segnala un ciclo negativo.

**4. [Vero/Falso]** In Floyd-Warshall, un valore negativo sulla diagonale di D al termine indica un ciclo negativo.
- Risposta: **Vero** ✓
- Vero. D[i,i] < 0 significa che da i si torna a i con costo negativo → ciclo negativo passante per i.

**5. [Vero/Falso]** Floyd-Warshall richiede che il grafo sia un DAG.
- Risposta: **Falso** ✓
- Falso. Funziona su qualunque grafo orientato; tollera anche pesi negativi (purché senza cicli negativi). Non richiede aciclicità.

**6. [Scelta multipla]** Nel ciclo esterno k, l'idea è:
- Aggiungere un arco alla volta
- Permettere k come nuovo possibile vertice *intermedio* nei cammini ✓
- Ordinare i vertici
- Rilassare in ordine topologico
- _Spiegazione:_ Si amplia progressivamente l'insieme degli intermedi consentiti da {} a {1..n}.

**7. [Scelta multipla]** La ricorrenza di Floyd-Warshall è:
- D[i,j] = D[i,j] + D[k,k]
- D[i,j] = min(D[i,j], D[i,k] + D[k,j]) ✓
- D[i,j] = max(D[i,k], D[k,j])
- D[i,j] = D[i,k] · D[k,j]
- _Spiegazione:_ A ogni k, si verifica se passare per k migliora il cammino i→j.

**8. [Domanda aperta]** Spiega la struttura di Floyd-Warshall (significato di D^k, ricorrenza, ordine dei cicli) e come rilevare cicli negativi.
- Punti chiave:
  - D^k[i,j] = costo minimo i→j usando intermedi solo in {1..k}.
  - Ricorrenza: D^k[i,j] = min(D^{k−1}[i,j], D^{k−1}[i,k] + D^{k−1}[k,j]).
  - Tre cicli: esterno su k (intermedi), interni su i e j. O(n³).
  - P (predecessori) aggiornata quando il cammino via k è migliore.
  - Ciclo negativo ⟺ qualche D[i,i] < 0 al termine.

**9. [Esercizio]** Dato il grafo con matrice D0 (A,B,C): A[0,1,−2], B[−1,0,∞], C[5,2,0], applicare Floyd-Warshall mostrando D e P dopo ogni ciclo esterno. (Foglio "100 Esercizi".)
- Soluzione (k = A, B, C):
  - **D0:** AB1 AC−2 / BA−1 BC∞ / CA5 CB2 (diagonale 0).
  - **k=A:** BC via A = −1+(−2)=−3 < ∞ → BC=−3 (P[B,C]=A). Altri non migliorano.
  - **k=B:** CA via B = 2+(−1)=1 < 5 → CA=1 (P[C,A]=B). AC via B =1+(−3)=−2 = AC (resta).
  - **k=C:** AB via C = −2+2=0 < 1 → AB=0 (P[A,B]=C). Controlla la diagonale: AA via C = −2+1=−1 < 0 ⇒ **D[A,A] < 0 → ciclo negativo** (A→C→A se i pesi lo confermano).
  - **Conclusione:** se al termine compaiono D[i,i] < 0, i cammini minimi non sono definiti per le coppie coinvolte: va dichiarato (come chiede l'esercizio). Verifica i pesi esatti sulla tua copia.

**10. [Esercizio]** Dato il grafo orientato con matrice D0 (1,2,3): 1[0,4,∞], 2[∞,0,1], 3[2,∞,0], calcolare le distanze tra tutte le coppie con Floyd-Warshall.
- Soluzione (k=1,2,3):
  - **D0:** 1→2=4, 2→3=1, 3→1=2; resto ∞ (diagonale 0).
  - **k=1:** 3→2 via 1 = 2+4=6 → D[3,2]=6.
  - **k=2:** 1→3 via 2 = 4+1=5 → D[1,3]=5. 3→3 via 2 = 6+1=7 (no, diag 0).
  - **k=3:** 2→1 via 3 = 1+2=3 → D[2,1]=3. 1→1 via 3 = 5+2=7 (no). 2→2 via 3 = 1+? ; 3→? aggiornamenti minori.
  - **Distanze finali (esempio):** 1→2=4, 1→3=5, 2→3=1, 2→1=3, 3→1=2, 3→2=6. Nessun ciclo negativo (diagonale resta 0).

---
## 16 — Minimo albero ricoprente (MST): algoritmo generico

**1. [Vero/Falso]** Un MST di un grafo connesso e pesato ha esattamente n−1 archi.
- Risposta: **Vero** ✓
- Vero. È un albero ricoprente: connette tutti gli n vertici senza cicli → n−1 archi.

**2. [Vero/Falso]** Se tutti i pesi degli archi sono distinti, l'MST è unico.
- Risposta: **Vero** ✓
- Vero. Con pesi tutti diversi non c'è ambiguità nelle scelte: l'MST è unico. Con pesi ripetuti possono esistere più MST dello stesso peso.

**3. [Vero/Falso]** Un taglio è una partizione di V in due parti non vuote (S, V−S).
- Risposta: **Vero** ✓
- Vero. Un arco (u,v) "attraversa" il taglio se u ∈ S e v ∈ V−S (estremi in parti opposte).

**4. [Vero/Falso]** La "proprietà del taglio": per ogni taglio del grafo, l'arco di peso minimo che lo attraversa appartiene a qualche MST.
- Risposta: **Vero** ✓
- Vero. È il teorema che giustifica sia Prim sia Kruskal: l'arco leggero che attraversa un taglio è "sicuro" da aggiungere.

**5. [Vero/Falso]** Un arco "sicuro" è un arco che, aggiunto all'insieme corrente, mantiene quest'ultimo sottoinsieme di un MST.
- Risposta: **Vero** ✓
- Vero. L'algoritmo generico aggiunge archi sicuri finché non ne ha n−1.

**6. [Vero/Falso]** La proprietà del ciclo afferma che l'arco di peso massimo (unico) di un ciclo non appartiene a nessun MST.
- Risposta: **Vero** ✓
- Vero. Se fosse nell'MST, sostituendolo con un altro arco del ciclo si otterrebbe un albero ricoprente di peso minore: contraddizione.

**7. [Scelta multipla]** L'algoritmo generico per l'MST aggiunge a ogni passo un arco:
- Qualsiasi
- "Sicuro" (che mantiene l'insieme corrente sottoinsieme di un MST) ✓
- Di peso massimo
- Che crea un ciclo
- _Spiegazione:_ Si aggiunge un arco sicuro finché non si hanno n−1 archi. Prim e Kruskal sono due strategie per individuarlo.

**8. [Scelta multipla]** Quale arco è garantito essere "sicuro" da un taglio che rispetta gli archi già scelti?
- L'arco di peso massimo che attraversa il taglio
- Un arco interno a S
- L'arco di peso minimo che attraversa il taglio ✓
- Un arco qualsiasi
- _Spiegazione:_ Proprietà del taglio: l'arco leggero che lo attraversa appartiene a un MST.

**9. [Domanda aperta]** Enuncia la proprietà del taglio e la proprietà del ciclo, e spiega come giustificano Prim e Kruskal.
- Punti chiave:
  - Taglio: dato un taglio che rispetta gli archi già scelti, l'arco leggero che lo attraversa è sicuro.
  - Ciclo: in un ciclo, l'arco di peso massimo (se unico) non appartiene ad alcun MST.
  - Prim: fa crescere un unico albero; il taglio separa l'albero dal resto, e si aggiunge sempre l'arco leggero uscente.
  - Kruskal: considera gli archi in ordine di peso crescente e ne aggiunge uno se non crea ciclo (proprietà del ciclo + taglio tra le componenti correnti).

**10. [Domanda aperta]** Perché con pesi tutti distinti l'MST è unico? Argomenta brevemente.
- Punti chiave:
  - Con pesi distinti, ogni taglio ha un unico arco di peso minimo, forzato a stare nell'MST.
  - Ogni ciclo ha un unico arco di peso massimo, escluso da ogni MST.
  - Queste forzature non lasciano gradi di libertà → un solo MST possibile.

---

## 17 — MST: algoritmo di Prim

**1. [Vero/Falso]** Prim fa crescere un *unico* albero, aggiungendo a ogni passo l'arco di peso minimo che collega l'albero a un vertice esterno.
- Risposta: **Vero** ✓
- Vero. Parte da un vertice e amplia l'albero scegliendo sempre l'arco leggero della frontiera (taglio albero/resto).

**2. [Vero/Falso]** Prim con coda di priorità a min-heap ha complessità O((n+m) log n).
- Risposta: **Vero** ✓
- Vero. Simile a Dijkstra: estrazioni e decrease-key su heap. Con array semplice O(n²).

**3. [Vero/Falso]** In Prim la "chiave" di un vertice è il peso del minimo arco che lo collega all'albero corrente.
- Risposta: **Vero** ✓
- Vero. Diversamente da Dijkstra (distanza cumulativa), qui conta solo il peso dell'arco di collegamento.

**4. [Vero/Falso]** Prim può partire da qualsiasi vertice e produce comunque un MST (di peso minimo).
- Risposta: **Vero** ✓
- Vero. Il vertice di partenza non cambia il peso totale dell'MST (può cambiare l'albero se ci sono pesi ripetuti).

**5. [Scelta multipla]** Prim è essenzialmente:
- Divide et impera
- Una variante greedy (come Dijkstra) che usa il peso dell'arco invece della distanza ✓
- Programmazione dinamica
- Backtracking
- _Spiegazione:_ Stessa struttura di Dijkstra, ma la "chiave" è il peso dell'arco di collegamento, non la distanza cumulativa dalla sorgente.

**6. [Scelta multipla]** Qual è la differenza chiave tra la chiave usata da Prim e quella di Dijkstra?
- Nessuna
- Prim usa il peso del singolo arco di collegamento; Dijkstra la distanza cumulativa dalla sorgente ✓
- Dijkstra usa i pesi negativi
- Prim non usa una coda di priorità
- _Spiegazione:_ È l'unica vera differenza algoritmica tra i due: cosa si minimizza nell'estrazione.

**7. [Domanda aperta]** Descrivi Prim e spiega in che senso la proprietà del taglio ne garantisce la correttezza.
- Punti chiave:
  - Mantieni un albero T (inizialmente un vertice) e una chiave[v] = peso minimo per collegare v a T.
  - A ogni passo estrai il vertice esterno con chiave minima, aggiungilo a T, aggiorna le chiavi dei suoi vicini.
  - Il taglio (T, V−T) rispetta gli archi già in T; l'arco leggero che lo attraversa è sicuro → aggiungerlo mantiene T ⊆ MST.

**8. [Esercizio]** Applicare Prim con partenza A, liste in ordine alfabetico; per ogni iterazione la tabella d e i vertici inclusi. Grafo: A–B 3, A–C 1, A–F 2, B–C 3, B–E 2, C–D 1, C–F 3, D–E 2, D–F 1, E–F 2 (verificare sulla copia).
- Soluzione:
  - Riga 0: d=[A:0, resto ∞]. Includi A → d[B]=3, d[C]=1, d[F]=2.
  - Min C(1) → includi C; d[D]=1, d[F]=min(2,3)=2, d[B]=3.
  - Min D(1) → includi D; d[F]=min(2,1)=1, d[E]=2.
  - Min F(1) → includi F; d[E]=min(2,2)=2.
  - Min E(2) → includi E; d[B]=min(3,2)=2.
  - Min B(2) → includi B. Fine.
  - **Archi MST:** A–C(1), C–D(1), D–F(1), D–E(2), B–E(2). Peso totale = 7.

**9. [Esercizio]** Applicare Prim con partenza A al grafo: A–B 4, A–C 1, B–C 2, B–D 5, C–D 8, C–E 10, D–E 2.
- Soluzione:
  - Riga 0: A0. Includi A → d[B]=4, d[C]=1.
  - Min C(1) → d[B]=min(4,2)=2, d[D]=8, d[E]=10.
  - Min B(2) → d[D]=min(8,5)=5.
  - Min D(5) → d[E]=min(10,2)=2.
  - Min E(2) → fine.
  - **Archi MST:** A–C(1), C–B(2), B–D(5), D–E(2). Peso totale = 10.

---

## 18 — Strutture Union-Find (insiemi disgiunti)

**1. [Vero/Falso]** In una Quick-Find, l'operazione find costa O(1) ma union costa O(n).
- Risposta: **Vero** ✓
- Vero. Quick-Find tiene un identificatore di insieme per elemento: find è immediato, ma union deve aggiornare tutti gli elementi di un insieme → O(n).

**2. [Vero/Falso]** In una Quick-Union semplice, find può costare O(n) nel caso peggiore.
- Risposta: **Vero** ✓
- Vero. Senza bilanciamento gli alberi possono degenerare in liste: risalire alla radice costa O(n).

**3. [Vero/Falso]** Quick-Find usa alberi a 2 livelli; Quick-Union usa alberi che possono avere più livelli.
- Risposta: **Vero** ✓
- Vero. In Quick-Find ogni elemento punta direttamente al rappresentante (2 livelli); in Quick-Union punta al genitore (catene più lunghe possibili).

**4. [Vero/Falso]** L'ottimizzazione "union by size" (o by rank) appende l'albero più piccolo sotto la radice del più grande, limitando l'altezza a O(log n).
- Risposta: **Vero** ✓
- Vero. Bilanciando le union, l'altezza resta O(log n), quindi find costa O(log n).

**5. [Vero/Falso]** La compressione dei cammini (path compression) appiattisce l'albero durante l'operazione find.
- Risposta: **Vero** ✓
- Vero. Durante find si fanno puntare i nodi attraversati direttamente alla radice: le find successive diventano più rapide.

**6. [Vero/Falso]** Union by rank + path compression danno un costo ammortizzato O(α(n)), praticamente costante.
- Risposta: **Vero** ✓
- Vero. α(n) è l'inversa della funzione di Ackermann, ≤ 4 per ogni n pratico: il costo è quasi costante per operazione.

**7. [Scelta multipla]** Quale ottimizzazione, combinata con union-by-rank, porta il costo ammortizzato quasi a costante (α(n))?
- Path splitting casuale
- Compressione dei cammini (path compression) ✓
- Quick-Find
- Heapify
- _Spiegazione:_ La path compression "appiattisce" l'albero durante find; insieme a union-by-rank dà O(α(n)) ammortizzato, praticamente costante.

**8. [Scelta multipla]** In Quick-Find, perché union costa O(n)?
- Deve ordinare gli elementi
- Deve aggiornare l'identificatore di tutti gli elementi di uno dei due insiemi ✓
- Deve costruire un heap
- Deve fare una DFS
- _Spiegazione:_ Fondendo due insiemi, tutti gli elementi di uno cambiano rappresentante → fino a O(n) aggiornamenti.

**9. [Scelta multipla]** A cosa serve principalmente la struttura Union-Find negli algoritmi su grafi?
- A ordinare gli archi
- A gestire insiemi disgiunti di vertici e verificare se due vertici sono nella stessa componente (es. in Kruskal) ✓
- A calcolare i cammini minimi
- A colorare i vertici
- _Spiegazione:_ In Kruskal serve a evitare i cicli: find(u)≠find(v) → arco accettabile, poi union(u,v).

**10. [Domanda aperta]** Confronta Quick-Find e Quick-Union (con ottimizzazioni) sui costi di find e union.
- Punti chiave:
  - Quick-Find: find O(1), union O(n) (aggiorna tutti gli elementi di un insieme).
  - Quick-Union semplice: union O(1) collegando due radici, ma find O(n) nel peggiore (catene).
  - Quick-Union + union by size/rank: altezza O(log n) → find O(log n).
  - + path compression: ammortizzato O(α(n)) ≈ costante.

**11. [Esercizio]** Quick-Union con union by-size. Operazioni: makeSet(A), makeSet(B), makeSet(C), union(A,B), union(C,A), makeSet(D), find(B), makeSet(E), union(E,D), union(D,B), find(D). Mostrare la struttura dopo ogni operazione e gli output. (Foglio "100 Esercizi".)
- Soluzione:
  - makeSet A/B/C/D/E: alberi singoli, size 1.
  - union(A,B): size pari → B sotto A; A size2.
  - union(C,A): C size1 sotto A size2; A size3.
  - find(B): risale a **A** → output A.
  - union(E,D): pari → D sotto E; E size2.
  - union(D,B): radice di D è E(size2), di B è A(size3) → E sotto A; A size5.
  - find(D): D→E→A → output **A**.
  - Struttura finale: radice A(size5), figli B, C, E; E ha figlio D. Output find: A, A.

**12. [Esercizio]** Quick-Union by-size: makeSet(1..4), union(1,2), union(3,4), union(2,3), find(4). Mostrare la struttura e l'output.
- Soluzione:
  - makeSet 1,2,3,4: singoli, size 1.
  - union(1,2): 2 sotto 1; size(1)=2.
  - union(3,4): 4 sotto 3; size(3)=2.
  - union(2,3): radice di 2 è 1 (size2), di 3 è 3 (size2) → pari, attacca la seconda alla prima: 3 sotto 1; size(1)=4.
  - find(4): 4→3→1 → output **1**.
  - Struttura: radice 1 (size4), figli 2 e 3; 3 ha figlio 4.

---

## 19 — MST: algoritmo di Kruskal

**1. [Vero/Falso]** Kruskal considera gli archi in ordine di peso *crescente* e aggiunge un arco se non forma un ciclo.
- Risposta: **Vero** ✓
- Vero. Mantiene una foresta; un arco è accettato se collega due alberi diversi (verificato con Union-Find), scartato se i due estremi sono già nello stesso insieme (ciclo).

**2. [Vero/Falso]** Kruskal usa una struttura Union-Find per verificare in modo efficiente se due vertici sono già connessi.
- Risposta: **Vero** ✓
- Vero. find(u) ≠ find(v) → arco accettabile; poi union(u,v). È il cuore dell'efficienza dell'algoritmo.

**3. [Vero/Falso]** La complessità di Kruskal è dominata dall'ordinamento degli archi: O(m log m) = O(m log n).
- Risposta: **Vero** ✓
- Vero. Ordinare gli m archi costa O(m log m); le operazioni Union-Find aggiungono O(m·α(n)), trascurabile. Poiché m ≤ n², log m = O(log n).

**4. [Vero/Falso]** Kruskal fa crescere un unico albero come Prim.
- Risposta: **Falso** ✓
- Falso. Kruskal mantiene una *foresta* di più alberi che si fondono via via; Prim invece fa crescere un singolo albero dalla sorgente.

**5. [Vero/Falso]** In Kruskal, un arco è scartato quando i suoi due estremi appartengono già allo stesso insieme Union-Find.
- Risposta: **Vero** ✓
- Vero. Aggiungerlo creerebbe un ciclo: find(u)==find(v) → scarta.

**6. [Scelta multipla]** In Kruskal, quando un arco (u,v) viene scartato?
- Quando ha peso massimo
- Quando find(u) = find(v) (stesso insieme → creerebbe un ciclo) ✓
- Quando u o v sono isolati
- Mai
- _Spiegazione:_ L'arco si scarta se collega due vertici già nella stessa componente.

**7. [Scelta multipla]** Quante volte Kruskal esegue un'operazione di union nel costruire l'MST di un grafo connesso con n vertici?
- m
- n−1 ✓
- n
- log n
- _Spiegazione:_ Ogni union riduce di 1 il numero di componenti; da n componenti iniziali a 1 servono n−1 union (= archi dell'MST).

**8. [Domanda aperta]** Descrivi Kruskal passo per passo e il ruolo della Union-Find.
- Punti chiave:
  - Ordina gli archi per peso crescente.
  - Inizializza una foresta: ogni vertice è un insieme (makeSet).
  - Per ogni arco (u,v) in ordine: se find(u) ≠ find(v), aggiungilo all'MST e fai union(u,v); altrimenti scartalo (ciclo).
  - Termina con n−1 archi. La Union-Find rende il test di ciclo quasi O(1) ammortizzato.

**9. [Esercizio]** Applicare Kruskal al grafo: A–B 3, A–C 8, A–D 1, B–C 2, B–E 5, C–E 1, D–E 2, C–D 5. Mostrare l'evoluzione di foresta e Union-Find. (Foglio "100 Esercizi".)
- Soluzione (ordina per peso crescente):
  - Ordine: A–D(1), C–E(1), B–C(2), D–E(2), A–B(3), B–E/C–D(5), A–C(8).
  - A–D(1): diversi → accetta {A,D}.
  - C–E(1): diversi → accetta {C,E}.
  - B–C(2): diversi → accetta {B,C,E}.
  - D–E(2): {A,D} vs {B,C,E} → diversi → accetta, fonde → {A,B,C,D,E}.
  - A–B(3): stesso insieme → scarta. Abbiamo n−1=4 archi → stop.
  - **Archi MST:** A–D(1), C–E(1), B–C(2), D–E(2). Peso totale = 6.

**10. [Esercizio]** Applicare Kruskal al grafo: 1–2 4, 1–3 1, 2–3 2, 2–4 5, 3–4 8, 4–5 3, 3–5 7.
- Soluzione (ordine crescente): 1–3(1), 2–3(2), 4–5(3), 1–2(4), 2–4(5), 3–5(7), 3–4(8).
  - 1–3(1): accetta {1,3}. 2–3(2): accetta {1,2,3}. 4–5(3): accetta {4,5}. 1–2(4): stesso insieme → scarta. 2–4(5): {1,2,3} vs {4,5} → accetta, fonde tutto.
  - 4 archi (n−1 con 5 vertici) → stop.
  - **Archi MST:** 1–3(1), 2–3(2), 4–5(3), 2–4(5). Peso totale = 11.

---

## 20 — Programmazione dinamica (PD): principi

**1. [Vero/Falso]** La programmazione dinamica si applica a problemi con sottostruttura ottima e sottoproblemi sovrapposti.
- Risposta: **Vero** ✓
- Vero. Sottostruttura ottima: la soluzione ottima si compone di soluzioni ottime di sottoproblemi. Sovrapposizione: gli stessi sottoproblemi ricorrono → conviene memorizzarli.

**2. [Vero/Falso]** La PD "classica" è bottom-up; la memoization è la sua variante top-down.
- Risposta: **Vero** ✓
- Vero. Bottom-up riempie la tabella dai casi base; memoization ricorre e salva i risultati in cache. All'esame "la PD adotta tecniche top-down" come affermazione secca è considerata falsa.

**3. [Vero/Falso]** La differenza tra PD e divide-et-impera è che la PD risolve sottoproblemi sovrapposti una sola volta, memorizzandoli.
- Risposta: **Vero** ✓
- Vero. Divide-et-impera ricorre su sottoproblemi *indipendenti*; la PD evita di ricalcolare i sottoproblemi *condivisi* salvandone i risultati.

**4. [Vero/Falso]** La memoization e la tabulazione hanno la stessa complessità asintotica.
- Risposta: **Vero** ✓
- Vero. Calcolano gli stessi sottoproblemi una volta sola; differiscono per overhead (ricorsione vs cicli) e ordine di calcolo, non per l'asintotico.

**5. [Vero/Falso]** Senza sottoproblemi sovrapposti, la memoization non porta alcun vantaggio.
- Risposta: **Vero** ✓
- Vero. Se i sottoproblemi sono tutti distinti (come nel merge sort), memorizzarli non fa risparmiare nulla: è il caso del divide-et-impera puro.

**6. [Scelta multipla]** I quattro passi nella costruzione di un algoritmo di PD sono:
- Ordinare, dividere, fondere, restituire
- Caratterizzare la struttura della soluzione ottima → definire ricorsivamente il valore ottimo → calcolarlo (di solito bottom-up) → eventualmente ricostruire la soluzione ✓
- Greedy choice + induzione
- Solo scrivere la ricorsione
- _Spiegazione:_ È lo schema canonico. Spesso si aggiunge la fase di ricostruzione della soluzione (non solo il valore).

**7. [Scelta multipla]** Quale problema NON è un buon candidato per la PD?
- LCS
- Zaino 0-1
- Cammini minimi (Bellman-Ford)
- Un problema senza sottoproblemi sovrapposti e senza sottostruttura ottima ✓
- _Spiegazione:_ La PD richiede entrambe le proprietà; senza di esse non offre vantaggi (o non è corretta).

**8. [Domanda aperta]** Spiega memoization vs tabulazione (bottom-up) e quando preferire l'una o l'altra.
- Punti chiave:
  - Memoization (top-down): ricorsione naturale + tabella cache; calcola solo i sottoproblemi effettivamente necessari.
  - Tabulazione (bottom-up): riempie la tabella in ordine dai casi base; nessun overhead di ricorsione, ordine di calcolo esplicito.
  - Stessa complessità asintotica; bottom-up spesso più efficiente in costanti e spazio (a volte ottimizzabile a poche righe).

**9. [Domanda aperta]** Esempio MSI (massima sequenza indipendente di intervalli pesati): come si imposta la ricorrenza di PD?
- Punti chiave:
  - Ordina gli intervalli e definisci A[i] = valore ottimo considerando i primi i intervalli.
  - Ricorrenza: A[i] = max( A[i−1] (escludo i), A[p(i)] + Vᵢ (includo i) ), dove p(i) è l'ultimo intervallo compatibile prima di i.
  - Casi base e riempimento bottom-up; la soluzione è A[n].
  - È PD perché i sottoproblemi (prefissi) si sovrappongono e c'è sottostruttura ottima.

---

## 21 — PD: massima sottosequenza comune (LCS)

**1. [Vero/Falso]** Una sottosequenza, a differenza di una sottostringa, non deve essere fatta di caratteri contigui.
- Risposta: **Vero** ✓
- Vero. Una sottosequenza mantiene l'ordine ma può "saltare" caratteri. La LCS è la più lunga comune a due stringhe.

**2. [Vero/Falso]** La ricorrenza LCS: se X[i]=Y[j] allora L[i,j]=L[i−1,j−1]+1, altrimenti L[i,j]=max(L[i−1,j], L[i,j−1]).
- Risposta: **Vero** ✓
- Vero. È la ricorrenza fondamentale. Caso base: L[0,j]=L[i,0]=0.

**3. [Vero/Falso]** Il calcolo della LCS con la tabella ha complessità O(|X|·|Y|).
- Risposta: **Vero** ✓
- Vero. Si riempie una matrice (|X|+1)×(|Y|+1), ogni cella in O(1) → O(|X|·|Y|) tempo e spazio.

**4. [Vero/Falso]** La lunghezza della LCS tra due stringhe è unica, ma la LCS in sé può non esserlo.
- Risposta: **Vero** ✓
- Vero. Possono esistere più sottosequenze comuni della stessa lunghezza massima; il valore (lunghezza) è però univoco.

**5. [Vero/Falso]** Le "frecce" nella matrice LCS servono a ricostruire una LCS risalendo dall'angolo in basso a destra.
- Risposta: **Vero** ✓
- Vero. Le frecce registrano la provenienza di ogni cella (diagonale = match, su/sinistra = max), e si seguono a ritroso per ricostruire la sottosequenza.

**6. [Scelta multipla]** Su quale tecnica si basa l'algoritmo LCS?
- Greedy
- Divide et impera
- Programmazione dinamica ✓
- Backtracking puro
- _Spiegazione:_ Sottoproblemi sovrapposti (prefissi) + sottostruttura ottima. Domanda d'esame tipica (con eventuale sottocategoria: bottom-up).

**7. [Scelta multipla]** Nella matrice LCS, una mossa "diagonale" corrisponde a:
- Saltare un carattere di X
- Saltare un carattere di Y
- Un match X[i]=Y[j] (si estende la LCS di 1) ✓
- Un errore
- _Spiegazione:_ Diagonale = caratteri uguali → L[i,j]=L[i−1,j−1]+1; le mosse su/sinistra corrispondono a scartare un carattere.

**8. [Domanda aperta]** Spiega la ricorrenza LCS, i casi base e come si ricostruisce la sottosequenza.
- Punti chiave:
  - Casi base: L[0,j]=L[i,0]=0 (prefisso vuoto → LCS vuota).
  - Se X[i]=Y[j]: L[i,j]=L[i−1,j−1]+1 (estendi il match).
  - Altrimenti: L[i,j]=max(L[i−1,j], L[i,j−1]).
  - Ricostruzione: da L[|X|,|Y|] segui le frecce; su una diagonale (match) aggiungi il carattere alla LCS e vai a (i−1,j−1).

**9. [Esercizio]** Trovare la LCS tra "FLILFAI" e "LIFIAI", usando l'ottimizzazione delle frecce. (Esame 15/02/2021.)
- Soluzione (metodo): riempi la matrice L con la ricorrenza; segui le diagonali a ritroso per ricostruire.
  - Una LCS valida è **"LIAI"** (lunghezza 4). Verifica seguendo le frecce della tua matrice.
  - Indicare la tecnica: **PD bottom-up**.

**10. [Esercizio]** Trovare la LCS tra "ETUTZE" e "TZUETE". (Foglio "100 Esercizi".)
- Soluzione (metodo): matrice L con la ricorrenza, frecce per la ricostruzione.
  - Lunghezza LCS = 4 (es. **"TUTE"** o **"TZTE"** secondo il percorso scelto). Il valore è univoco; la sequenza può non esserlo.
  - Tecnica: **PD bottom-up**.

**11. [Esercizio]** Trovare la LCS tra "ABCBDAB" e "BDCAB".
- Soluzione (metodo): riempi la matrice (8×6 con prefissi vuoti).
  - Una LCS valida è **"BCAB"** (lunghezza 4) — oppure "BDAB". Lunghezza = 4.
  - Da riportare: la matrice L e il percorso delle frecce per la ricostruzione.

---

## 22 — PD: problema dello zaino (0-1, intero)

**1. [Vero/Falso]** Lo zaino 0-1 (oggetti non frazionabili) si risolve con programmazione dinamica, non con un greedy.
- Risposta: **Vero** ✓
- Vero. Il greedy per rapporto valore/peso NON è ottimo per lo 0-1; serve la PD sulla tabella V[i,j].

**2. [Vero/Falso]** Nella ricorrenza dello zaino 0-1, se il peso dell'oggetto i supera la capacità j corrente, allora V[i,j]=V[i−1,j].
- Risposta: **Vero** ✓
- Vero. Se non ci sta, non lo si può prendere: si eredita la soluzione senza l'oggetto i. Altrimenti V[i,j]=max(V[i−1,j], V[i−1,j−pᵢ]+vᵢ) (escludo / includo i).

**3. [Vero/Falso]** La matrice di memoization per lo zaino 0-1 ha dimensioni (n+1)×(P+1).
- Risposta: **Vero** ✓
- Vero. Indici i=0..n (nessun oggetto…tutti) e j=0..P (capienza 0…P). Casi base: V[0,j]=0 e V[i,0]=0.

**4. [Vero/Falso]** La complessità O(n·P) dello zaino 0-1 è polinomiale nel numero di bit dell'input.
- Risposta: **Falso** ✓
- Falso. È *pseudo-polinomiale*: dipende dal valore numerico P, che richiede log P bit. Per P molto grande l'algoritmo è esponenziale nella dimensione (in bit) dell'input.

**5. [Vero/Falso]** Per sapere *quali* oggetti compongono la soluzione ottima dello zaino 0-1 si risale la tabella V dal basso a destra.
- Risposta: **Vero** ✓
- Vero. Se V[i,j] ≠ V[i−1,j] l'oggetto i è stato preso (vai a j−pᵢ); altrimenti no (vai a i−1).

**6. [Scelta multipla]** La complessità dell'algoritmo PD per lo zaino 0-1 è:
- O(n)
- O(n·P) ✓
- O(2ⁿ)
- O(n log P)
- _Spiegazione:_ Si riempie la tabella (n+1)×(P+1) in O(1) per cella → O(n·P). È pseudo-polinomiale.

**7. [Scelta multipla]** Perché il greedy valore/peso NON risolve lo zaino 0-1?
- Perché è troppo lento
- Perché non potendo frazionare gli oggetti, la scelta golosa può lasciare spazio sprecato e non essere ottima ✓
- Perché i pesi sono negativi
- Perché serve una coda di priorità
- _Spiegazione:_ Nel frazionario riempi sempre lo zaino; nello 0-1 prendere l'oggetto col rapporto migliore può precludere combinazioni migliori.

**8. [Codice/Pseudocodice]** Scrivi l'algoritmo PD per lo zaino 0-1 (struttura di memoization, casi base, riempimento, soluzione). (Foglio "100 Esercizi".)
- Soluzione:
```
Zaino(n, P, v[], p[])           // v[]=valori, p[]=pesi interi
  V <- nuova matrice (n+1) x (P+1)
  for i = 0..n do V[i,0] <- 0           // capienza 0
  for j = 0..P do V[0,j] <- 0           // nessun oggetto
  for i = 1..n do
    for j = 1..P do
      if j < p[i] then
        V[i,j] <- V[i-1,j]                       // l'oggetto i non ci sta
      else
        V[i,j] <- max(V[i-1,j], V[i-1, j-p[i]] + v[i])   // escludo / includo i
  return V[n,P]
```
  - Memoization: matrice (n+1)×(P+1), stato = (oggetto i, capienza j). Casi base: V[0,j]=0, V[i,0]=0.
  - Ricostruzione oggetti: risali da V[n,P] confrontando V[i,j] con V[i−1,j].

**9. [Esercizio]** Zaino 0-1, P=10. Oggetti i:(pᵢ,vᵢ) = 1:(2, 12.7) 2:(7, 6.4) 3:(6, 1.7) 4:(4, 0.3). Trovare l'ottimo. (Foglio "100 Esercizi".)
- Soluzione (riga=oggetto, colonna=capienza):
  - Riga1 (o1, p2 v12.7): da j=2 vale 12.7.
  - Riga2 (+o2 p7 v6.4): a j=9 → 12.7+6.4=19.1.
  - Riga3 (+o3 p6 v1.7): a j=8 → 14.4; j=9,10 → 19.1.
  - Riga4 (+o4 p4 v0.3): a j=6 → 13; j=8 → 14.4; j=9,10 → 19.1.
  - **Ottimo V[4,10] = 19.1**, oggetti 1 e 2 (peso 9 ≤ 10).

**10. [Esercizio]** Zaino 0-1, P=8. Oggetti (pᵢ,vᵢ): 1:(3,4) 2:(4,5) 3:(5,6). Trovare il valore ottimo e gli oggetti scelti.
- Soluzione (tabella V, j=0..8):
  - Solo o1: da j≥3 vale 4.
  - +o2 (p4,v5): a j=4→5, a j=7→ o1+o2=4+5=9.
  - +o3 (p5,v6): a j=5→6, a j=8→ max(V senza o3 a 8 = 9, o3+V[2,3]=6+4=10) = **10**.
  - **Ottimo = 10**, oggetti 1 e 3 (peso 3+5=8). (o1+o2 darebbe 9 con peso 7.)

---
## 23 — NP-completezza e classi di complessità

**1. [Vero/Falso]** La classe P è l'insieme dei problemi risolvibili in tempo polinomiale rispetto alla dimensione dell'input.
- Risposta: **Vero** ✓
- Vero. P = ∪_c TIME(n^c). È storicamente la classe dei problemi "trattabili".

**2. [Vero/Falso]** Vale P ⊆ PSPACE ⊆ EXPTIME.
- Risposta: **Vero** ✓
- Vero. Con un numero polinomiale di operazioni si fanno al più polinomiali accessi in memoria (P⊆PSPACE); con spazio n^c gli stati sono al più 2^(n^c) (PSPACE⊆EXPTIME).

**3. [Vero/Falso]** L'unica inclusione propria *dimostrata* tra P, PSPACE, EXPTIME è P ⊂ EXPTIME.
- Risposta: **Vero** ✓
- Vero. Esiste almeno un problema in EXPTIME non in P. Se P⊂PSPACE e PSPACE⊂EXPTIME siano proprie sono problemi *aperti*.

**4. [Vero/Falso]** Un problema è in NP se una soluzione proposta può essere *verificata* in tempo polinomiale.
- Risposta: **Vero** ✓
- Vero. NP = problemi con certificato verificabile in tempo polinomiale (equivalentemente: risolvibili in tempo polinomiale da una macchina non deterministica).

**5. [Vero/Falso]** "Un algoritmo non deterministico è un algoritmo NP-completo."
- Risposta: **Falso** ✓
- Falso. Confonde concetti diversi: il non determinismo è una caratteristica del *modello di calcolo*; NP-completo è una proprietà di un *problema*. (Esame 15/02/2021, 5b.)

**6. [Vero/Falso]** Un problema è NP-completo se è in NP ed è NP-arduo (ogni problema in NP vi si riduce in tempo polinomiale).
- Risposta: **Vero** ✓
- Vero. NP-completo = NP ∩ NP-hard. Sono i problemi "più difficili" di NP.

**7. [Vero/Falso]** Se un solo problema NP-completo fosse risolvibile in tempo polinomiale, allora P = NP.
- Risposta: **Vero** ✓
- Vero. Ogni problema in NP si riduce in poly-time a un NP-completo; risolverlo in P significherebbe risolvere tutta NP in P.

**8. [Vero/Falso]** P ⊆ NP.
- Risposta: **Vero** ✓
- Vero. Se un problema si risolve in poly-time, lo si verifica anche in poly-time (banalmente risolvendolo). Se P = NP è la domanda aperta centrale.

**9. [Vero/Falso]** Tutti i problemi NP-completi sono problemi di ottimizzazione.
- Risposta: **Falso** ✓
- Falso. La teoria si formula su problemi di *decisione*. A ogni problema di ottimizzazione si associa un decisionale, ma gli NP-completi sono per definizione decisionali.

**10. [Vero/Falso]** Per dimostrare che B è NP-arduo si riduce in tempo polinomiale un problema NP-completo noto A a B (A ≤ₚ B).
- Risposta: **Vero** ✓
- Vero. Se A (NP-completo) si riduce a B, allora B è almeno tanto difficile quanto A → NP-arduo. Aggiungendo B ∈ NP si ha NP-completezza.

**11. [Scelta multipla]** Cosa misura TIME(f(n))?
- Lo spazio di memoria
- L'insieme dei problemi risolvibili in tempo O(f(n)) ✓
- Il numero di archi
- Il grado di un vertice
- _Spiegazione:_ Classe dei problemi risolvibili in tempo O(f(n)); SPACE(f(n)) è l'analoga per lo spazio.

**12. [Scelta multipla]** Per dimostrare che un problema B è NP-completo si tipicamente:
- Si verifica solo che sia in P
- Si mostra B ∈ NP e si riduce un problema NP-completo noto A a B (A ≤ₚ B) ✓
- Si conta il numero di soluzioni
- Si esibisce un algoritmo greedy
- _Spiegazione:_ La riduzione polinomiale da un NP-completo noto (es. SAT, 3-SAT) a B prova la NP-arduità; l'appartenenza a NP completa la dimostrazione.

**13. [Scelta multipla]** Il problema SAT (soddisfacibilità di formule booleane in CNF):
- È banalmente in P
- Appartiene a PSPACE; è il capostipite degli NP-completi (Cook-Levin) ✓
- Non è un problema di decisione
- Si risolve con un greedy
- _Spiegazione:_ SAT è il primo problema dimostrato NP-completo (teorema di Cook-Levin); appartiene anche a PSPACE.

**14. [Scelta multipla]** Una formula in forma normale congiuntiva (CNF) è:
- Una disgiunzione di congiunzioni
- Una congiunzione di disgiunzioni (clausole) di letterali ✓
- Una singola variabile
- Un albero binario
- _Spiegazione:_ CNF = AND di clausole, ogni clausola è un OR di letterali. Es.: (x₁∨x₂)∧(x₁∨x₃).

**15. [Scelta multipla]** Cosa si intende per "certificato" di un problema in NP?
- L'algoritmo che lo risolve
- Una soluzione candidata verificabile in tempo polinomiale ✓
- Il numero di vertici
- La complessità spaziale
- _Spiegazione:_ Un certificato è una prova della risposta "sì" controllabile rapidamente (es. un'assegnazione che soddisfa la formula).

**16. [Domanda aperta]** Definisci P, NP, NP-completo e spiega l'importanza della domanda P = NP.
- Punti chiave:
  - P: risolvibili in tempo polinomiale.
  - NP: certificato verificabile in tempo polinomiale (o risolvibili in poly-time non deterministico).
  - NP-arduo: ogni problema NP vi si riduce in poly-time. NP-completo: NP-arduo e in NP.
  - P=NP? è aperto: se un solo NP-completo fosse in P, lo sarebbero tutti. La maggioranza congettura P≠NP.
  - Conseguenza pratica: per gli NP-completi si ricorre ad approssimazione, euristiche, ricerca locale.

**17. [Domanda aperta]** Spiega la differenza tra complessità di un problema e di un algoritmo, e come si organizzano le classi P, PSPACE, EXPTIME.
- Punti chiave:
  - Complessità del problema = del miglior algoritmo possibile (non di un'implementazione specifica).
  - TIME/SPACE(f(n)): classi base per tempo/spazio.
  - Classi unione: P (∪ TIME(n^c)), PSPACE (∪ SPACE(n^c)), EXPTIME (∪ TIME(2^(n^c))).
  - Inclusioni: P ⊆ PSPACE ⊆ EXPTIME; l'unica propria dimostrata è P ⊂ EXPTIME.

---

## 24 — Algoritmi di approssimazione, ricerca locale e TSP

**1. [Vero/Falso]** Un algoritmo ρ(n)-approssimato garantisce che il costo C soddisfi max(C/C*, C*/C) ≤ ρ(n), con C* costo ottimo.
- Risposta: **Vero** ✓
- Vero. ρ(n) è il fattore di approssimazione moltiplicativo; per minimizzazione C ≤ ρ·C*, per massimizzazione C ≥ C*/ρ.

**2. [Vero/Falso]** Una copertura di vertici di G=(V,E) è un sottoinsieme V'⊆V tale che ogni arco ha almeno un estremo in V'.
- Risposta: **Vero** ✓
- Vero. Definizione esatta: per ogni (u,v) ∈ E, u ∈ V' oppure v ∈ V'. Il problema chiede la V' di dimensione minima.

**3. [Vero/Falso]** Decidere se una data copertura di vertici è di dimensione minima è un problema NP-completo.
- Risposta: **Vero** ✓
- Vero. Per questo si ricorre a un algoritmo approssimato (APPROX-COVER) invece che cercare l'ottimo esatto.

**4. [Vero/Falso]** L'algoritmo APPROX-VERTEX-COVER (scegli un arco, prendi entrambi gli estremi, rimuovi gli archi incidenti) è 2-approssimato.
- Risposta: **Vero** ✓
- Vero. Gli archi scelti formano un matching: ogni copertura ottima deve contenere almeno un estremo per ciascuno → |C| ≤ 2·|C*|. Complessità O(n+m).

**5. [Vero/Falso]** L'insieme A degli archi scelti da APPROX-COVER è un limite inferiore per la dimensione della copertura ottima C*.
- Risposta: **Vero** ✓
- Vero. Gli archi di A non condividono estremi (matching): ogni copertura deve usare ≥ |A| vertici, quindi |C*| ≥ |A|. E |C|=2|A| → |C| ≤ 2|C*|.

**6. [Vero/Falso]** Il TSP generale (senza disuguaglianza triangolare) non ammette algoritmo di approssimazione a fattore costante, a meno che P=NP.
- Risposta: **Vero** ✓
- Vero. Approssimare il TSP generale entro qualsiasi costante è NP-arduo. Con disuguaglianza triangolare esistono approssimazioni (es. 2-approssimato via MST).

**7. [Vero/Falso]** Nel TSP metrico i pesi degli archi rispettano la disuguaglianza triangolare.
- Risposta: **Vero** ✓
- Vero. w(u,w) ≤ w(u,v) + w(v,w). È la condizione che permette gli "shortcut" e quindi le approssimazioni a fattore costante.

**8. [Vero/Falso]** Nella ricerca locale per il TSP, la tecnica dei k-scambi (k-opt) genera il vicinato rimuovendo k archi del ciclo e ricollegandolo in modo diverso.
- Risposta: **Vero** ✓
- Vero. Con k=2 (2-opt) si rimuovono 2 archi e si riconnette il tour invertendo un segmento. Si itera verso un minimo locale.

**9. [Vero/Falso]** La ricerca locale garantisce sempre di trovare l'ottimo globale.
- Risposta: **Falso** ✓
- Falso. Converge a un *minimo locale* rispetto al vicinato definito; può non essere l'ottimo globale. Si usano riavvii/perturbazioni per mitigare.

**10. [Scelta multipla]** Su quale struttura si basa l'algoritmo 2-approssimato per il TSP metrico?
- Coda di priorità per Dijkstra
- Minimo albero ricoprente (MST) ✓
- Tabella di programmazione dinamica
- Union-Find isolata
- _Spiegazione:_ MST + visita pre-order + shortcut (disuguaglianza triangolare) → tour ≤ 2·ottimo.

**11. [Scelta multipla]** Qual è il fattore di approssimazione di APPROX-VERTEX-COVER?
- 1 (è esatto)
- 2 ✓
- log n
- n
- _Spiegazione:_ Restituisce una copertura al più doppia dell'ottima: 2-approssimato.

**12. [Scelta multipla]** Cosa rende possibile lo "shortcut" nell'approssimazione TSP via MST?
- I pesi negativi
- La disuguaglianza triangolare ✓
- L'ordinamento topologico
- La coda di priorità
- _Spiegazione:_ Saltare i vertici già visitati non aumenta il costo grazie a w(u,w) ≤ w(u,v)+w(v,w).

**13. [Scelta multipla]** Un "minimo locale" nella ricerca locale è:
- L'ottimo globale
- Una soluzione che nessuna mossa del vicinato riesce a migliorare ✓
- La soluzione iniziale
- Una soluzione infattibile
- _Spiegazione:_ Nessun vicino ha costo inferiore; può comunque non essere l'ottimo globale.

**14. [Domanda aperta]** Spiega l'algoritmo APPROX-VERTEX-COVER e dimostra che è 2-approssimato.
- Punti chiave:
  - C←∅; finché restano archi: scegli un arco (u,v), aggiungi u e v a C, rimuovi tutti gli archi incidenti in u o v.
  - Gli archi scelti A formano un matching (non condividono estremi).
  - Ogni copertura, anche l'ottima, deve coprire ciascun arco di A con almeno un suo estremo → |C*| ≥ |A|.
  - C contiene esattamente 2|A| vertici → |C| = 2|A| ≤ 2|C*|. Quindi 2-approssimato. Complessità O(n+m).

**15. [Domanda aperta]** Descrivi l'approssimazione 2-approssimata del TSP metrico basata sull'MST.
- Punti chiave:
  - Costruisci un MST T del grafo completo metrico.
  - Fai una visita pre-order di T a partire da una radice, elencando i vertici nell'ordine di prima visita.
  - Chiudi il ciclo tornando alla radice; quando incontri un vertice già visitato, fai shortcut (disuguaglianza triangolare).
  - Costo del tour ≤ 2·peso(MST) ≤ 2·ottimo (perché MST ≤ ciclo ottimo privato di un arco). Fattore 2.

**16. [Esercizio]** Dato il grafo con matrice di adiacenza (A–F) dell'esame 15/02/2021, trovare con l'algoritmo approssimato un ciclo Hamiltoniano di peso ≤ 2× l'ottimo (scelte arbitrarie in ordine alfabetico).
  ```
      A  B  C  D  E  F
   A  0  5 12 17 18 11
   B  5  0 13 12 15 12
   C 12 13  0 11 13  4
   D 17 12 11  0 16  8
   E 18 15 13 16  0  9
   F 11 12  4  8  9  0
  ```
- Soluzione (MST + pre-order + shortcut):
  1. Calcola l'MST (Prim/Kruskal). Archi leggeri: C–F(4), A–B(5), D–F(8), E–F(9), e l'arco minimo che unisce {A,B} al resto: A–C(12) o B–D(12) → in ordine alfabetico A–C(12).
  2. Radice A; visita pre-order dell'MST seguendo l'ordine alfabetico dei figli.
  3. Elenca i vertici nell'ordine di prima visita, chiudi tornando ad A (shortcut sui già visitati).
  4. Somma i pesi del ciclo: è ≤ 2× il ciclo Hamiltoniano minimo.
  - Riporta: MST scelto, ordine pre-order, ciclo finale e peso.

**17. [Esercizio]** Dati un grafo e un ciclo Hamiltoniano, generare il vicinato 2-opt (k-scambi con k=2). (Foglio "100 Esercizi".)
- Soluzione (metodo 2-opt):
  - Per ogni coppia di archi non adiacenti (a,b) e (c,d) del ciclo, rimuoverli.
  - Riconnettere come (a,c) e (b,d), invertendo il segmento tra b e c.
  - Ogni coppia rimossa genera un vicino: l'insieme di tutti questi tour è il vicinato 2-opt.
  - Si accettano gli scambi che riducono il peso totale, iterando fino a un minimo locale.

---

## 25 — "Su quale tecnica si basa?" (riepilogo trasversale)

Domanda d'esame ricorrente. Tabella di riferimento:

| Algoritmo | Tecnica |
|---|---|
| BFS / DFS | Visita di grafo |
| Ordinamento topologico | DFS (o gradi entranti) |
| Componenti fortemente connesse (Kosaraju) | DFS (doppia) |
| Selezione intervalli disgiunti | Greedy (per tempo di fine) |
| Algoritmo di Moore | Greedy (EDD + scarto del più lungo) |
| Huffman | Greedy |
| Zaino frazionario | Greedy (rapporto valore/peso) |
| Dijkstra | Greedy (con rilassamento) |
| Prim | Greedy (proprietà del taglio) |
| Kruskal | Greedy (+ Union-Find) |
| Bellman-Ford | Programmazione dinamica |
| Floyd-Warshall | Programmazione dinamica |
| LCS | Programmazione dinamica |
| Zaino 0-1 / intero | Programmazione dinamica |
| MSI (intervalli pesati) | Programmazione dinamica |
| APPROX-VERTEX-COVER, TSP-MST | Approssimazione |
| 2-opt / k-scambi | Ricerca locale |

**1. [Scelta multipla]** Bellman-Ford e Floyd-Warshall condividono quale paradigma?
- Greedy
- Programmazione dinamica ✓
- Divide et impera
- Ricerca locale
- _Spiegazione:_ Entrambi combinano ottimi di sottoproblemi (rilassamento iterato / intermedi {1..k}).

**2. [Scelta multipla]** Quale gruppo è interamente greedy?
- Dijkstra, Prim, Kruskal, Huffman ✓
- Floyd-Warshall, LCS, Zaino 0-1
- BFS, DFS, Topologico
- 2-opt, APPROX-COVER
- _Spiegazione:_ Tutti e quattro fanno scelte localmente ottime irrevocabili.

**3. [Scelta multipla]** Su quale tecnica si basa l'algoritmo di Moore?
- Programmazione dinamica
- Greedy ✓
- Divide et impera
- Approssimazione
- _Spiegazione:_ Sceglie golosamente in ordine di scadenza e scarta il lavoro più lungo: greedy.

**4. [Scelta multipla]** L'algoritmo per la copertura di vertici visto a lezione è di tipo:
- Esatto polinomiale
- Approssimato (2-approssimato) ✓
- Greedy ottimo
- Programmazione dinamica
- _Spiegazione:_ Il problema esatto è NP-completo; si usa un algoritmo 2-approssimato.

**5. [Domanda aperta]** Classifica per paradigma tutti gli algoritmi principali del corso e spiega in una frase il criterio di ciascun paradigma.
- Punti chiave:
  - Visite (BFS/DFS, topologico, SCC): esplorazione sistematica del grafo.
  - Greedy (intervalli, Moore, Huffman, zaino frazionario, Dijkstra, Prim, Kruskal): scelta locale ottima irrevocabile.
  - PD (Bellman-Ford, Floyd-Warshall, LCS, zaino 0-1, MSI): combinazione di ottimi di sottoproblemi sovrapposti.
  - Approssimazione (vertex cover, TSP-MST): soluzione vicina all'ottimo per problemi NP-ardui.
  - Ricerca locale (2-opt): miglioramento iterativo nel vicinato fino a un minimo locale.

---

## 26 — Esercizi V/F d'esame (da motivare)

Replica del formato dell'Esercizio 5 (motivare *sempre*).

**1. [Vero/Falso]** La programmazione dinamica adotta tecniche top-down.
- Risposta: **Falso** ✓
- Falso. La formulazione standard è bottom-up (tabulazione dai casi base). Il top-down è la variante con memoization. (Esame 15/02/2021, 5a.)

**2. [Vero/Falso]** Un algoritmo non deterministico è un algoritmo NP-completo.
- Risposta: **Falso** ✓
- Falso. Il non determinismo è una proprietà del modello di calcolo; NP-completo qualifica un *problema*, non un algoritmo. (Esame 15/02/2021, 5b.)

**3. [Vero/Falso]** Con l'algoritmo di Bellman-Ford è possibile rilevare cicli negativi.
- Risposta: **Vero** ✓
- Vero. Dopo n−1 iterazioni, se un'ulteriore passata rilassa ancora un arco, esiste un ciclo negativo raggiungibile. (Esame 15/02/2021, 5c.)

**4. [Vero/Falso]** Dijkstra può essere usato su grafi con archi di peso negativo purché non ci siano cicli negativi.
- Risposta: **Falso** ✓
- Falso. Anche senza cicli negativi, un singolo arco negativo può violare l'invariante (un vertice "fissato" potrebbe essere migliorato dopo). Serve Bellman-Ford.

**5. [Vero/Falso]** Kruskal e Prim, sullo stesso grafo connesso con pesi distinti, producono lo stesso MST.
- Risposta: **Vero** ✓
- Vero. Con pesi tutti distinti l'MST è unico, quindi qualunque algoritmo corretto lo trova.

**6. [Vero/Falso]** Il greedy per rapporto valore/peso risolve ottimamente lo zaino 0-1.
- Risposta: **Falso** ✓
- Falso. È ottimo solo per lo zaino *frazionario*. Per lo 0-1 può sbagliare; serve la PD.

**7. [Vero/Falso]** La BFS può essere usata per trovare il cammino di costo minimo in un grafo con pesi arbitrari positivi.
- Risposta: **Falso** ✓
- Falso. La BFS minimizza il *numero di archi*, non il costo pesato. Per i pesi serve Dijkstra (o Bellman-Ford con pesi negativi).

**8. [Vero/Falso]** Ogni DAG ammette almeno un ordinamento topologico, e se ha più di una "sorgente" può averne diversi.
- Risposta: **Vero** ✓
- Vero. L'esistenza è garantita dall'aciclicità; la molteplicità dipende dai gradi di libertà nell'ordinare vertici non vincolati tra loro.

**9. [Vero/Falso]** L'algoritmo di Dijkstra è un algoritmo di programmazione dinamica.
- Risposta: **Falso** ✓
- Falso. Dijkstra è *greedy* (sceglie il minimo non ancora fissato). Sono Bellman-Ford e Floyd-Warshall a essere PD.

**10. [Vero/Falso]** Floyd-Warshall può rilevare la presenza di cicli negativi.
- Risposta: **Vero** ✓
- Vero. Al termine, un valore D[i,i] < 0 indica un ciclo negativo passante per i.

**11. [Vero/Falso]** Un albero ricoprente minimo contiene sempre l'arco di peso minimo del grafo.
- Risposta: **Vero** ✓
- Vero. L'arco di peso minimo attraversa un qualche taglio come arco leggero → appartiene a un MST (con pesi distinti, a ogni MST).

**12. [Vero/Falso]** Huffman produce un codice a lunghezza fissa.
- Risposta: **Falso** ✓
- Falso. Produce un codice a lunghezza *variabile* (a prefisso): simboli frequenti → codici corti, rari → codici lunghi.

**13. [Vero/Falso]** Il problema della copertura di vertici è risolvibile esattamente in tempo polinomiale.
- Risposta: **Falso** ✓
- Falso. Nella sua versione esatta è NP-completo; a lezione si usa un algoritmo 2-approssimato.

**14. [Vero/Falso]** Su un DAG i cammini minimi si possono calcolare in O(n+m) rilassando gli archi in ordine topologico.
- Risposta: **Vero** ✓
- Vero. L'ordine topologico garantisce che D[u] sia definitivo quando si rilassa (u,v): basta una passata.

---

## 27 — Tracce d'esame (svolgimento autonomo)

Usa queste come simulazioni a tempo (2 ore, 32 punti come l'originale).

**Traccia A — basata sull'esame 15/02/2021**
1. (8 pt) Ciclo Hamiltoniano 2-approssimato sulla matrice A–F (vedi §24.16). Scelte arbitrarie in ordine alfabetico; descrivere i passaggi.
2. (7 pt) Huffman su a–g con frequenze 0.06, 0.02, 0.30, 0.20, 0.09, 0.08, 0.25; mostrare la struttura a ogni iterazione. Indicare la tecnica (→ greedy).
3. (6 pt) LCS tra "FLILFAI" e "LIFIAI" con ottimizzazione delle frecce; indicare la tecnica (→ PD bottom-up).
4. (7 pt) Pseudocodice: dato G orientato non pesato con liste di adiacenza, restituire un insieme ordinato di archi che formano un ciclo (vuoto se aciclico). (Vedi §5.16.)
5. (4 pt) V/F da motivare: (a) la PD è top-down; (b) un algoritmo non deterministico è NP-completo; (c) Bellman-Ford rileva cicli negativi. (Vedi §26.1–3.)

**Traccia B — composta dal foglio "100 Esercizi"**
1. DFS sul grafo a 7 nodi (sorgente 0, liste alfabetiche): tempi di inizio/fine, classificazione archi T/B/F/C, dire se è aciclico.
2. Dijkstra (§12.14) oppure Prim (§17.8) sul grafo dato, compilando la tabella d a ogni ciclo.
3. Bellman-Ford (§14.11), poi rifarlo con l'ottimizzazione per DAG.
4. Zaino 0-1 in PD (§22.8–9): pseudocodice + esecuzione su un'istanza.
5. V/F da motivare misti (vedi §26).

**Traccia C — focus grafi e tecniche**
1. Ordinamento topologico (Kahn) su un DAG dato + dire perché esiste sempre.
2. Componenti fortemente connesse (Kosaraju): elencare le cfc e disegnare la condensazione.
3. Kruskal su un grafo pesato, mostrando la Union-Find a ogni passo.
4. Floyd-Warshall su una matrice 3×3, mostrando D e P dopo ogni k; dire se ci sono cicli negativi.
5. "Su quale tecnica si basa?" per cinque algoritmi a scelta (vedi §25).

---

## Appendice — Come usare gli esercizi procedurali

Gli esercizi [Esercizio] non sono autocorreggibili con un click: vanno **svolti su carta** riempiendo tabelle/alberi, poi confrontati con la soluzione passo-passo. Consiglio operativo:
1. Copri la soluzione, svolgi l'esercizio per intero.
2. Confronta *il metodo* (ordine delle scelte, struttura mantenuta), non solo il risultato.
3. Per Dijkstra/Prim/Bellman-Ford/Floyd-Warshall: la tabella a ogni iterazione vale più del risultato finale (è ciò che l'esame chiede di mostrare).
4. Per Huffman/Kruskal/Union-Find: mostra l'evoluzione della struttura dati a ogni passo.

> I valori numerici di alcuni esercizi presi dai grafi del foglio "100 Esercizi" sono stati ricostruiti dalle immagini delle slide: **verifica i pesi sulla tua copia** prima di fidarti dei totali. Il *metodo* resta corretto in ogni caso.
## 2 — Grafi: definizioni e proprietà

**1. [Vero/Falso]** In un grafo non orientato connesso con n vertici e esattamente n−1 archi, aggiungere un qualsiasi arco crea sempre un ciclo.
- Risposta: **Vero** ✓
- Vero. Con n−1 archi e connessione è un albero; ogni nuovo arco collega due vertici già connessi da un cammino → ciclo.

**2. [Vero/Falso]** Il numero di vertici di grado dispari in un grafo non orientato è sempre pari.
- Risposta: **Vero** ✓
- Vero. Conseguenza del lemma della stretta di mano (Σδ=2m, pari): la somma dei gradi dispari deve essere pari → sono in numero pari.

**3. [Vero/Falso]** In un grafo orientato, grado entrante e grado uscente di uno stesso vertice sono sempre uguali.
- Risposta: **Falso** ✓
- Falso. Possono differire: un vertice sorgente ha grado entrante 0 ma uscente >0. Solo le *somme totali* su tutti i vertici coincidono (entrambe = m).

**4. [Vero/Falso]** Un multigrafo ammette più archi tra la stessa coppia di vertici.
- Risposta: **Vero** ✓
- Vero. Nei multigrafi sono consentiti archi paralleli (e a volte cappi). Nei grafi semplici, no.

**5. [Vero/Falso]** Un cappio (self-loop) contribuisce 2 al grado del vertice in un grafo non orientato.
- Risposta: **Vero** ✓
- Vero. Per convenzione, un cappio conta 2 nel grado (entrambi gli estremi coincidono col vertice).

**6. [Scelta multipla]** Quanti archi ha un albero libero con 12 vertici?
- 12
- 11 ✓
- 13
- 24
- _Spiegazione:_ Un albero con n vertici ha n−1 archi: 12−1=11.

**7. [Scelta multipla]** Un grafo non orientato con n vertici e più di n−1 archi:
- È sempre disconnesso
- Contiene sicuramente almeno un ciclo ✓
- È sempre completo
- È un albero
- _Spiegazione:_ Più di n−1 archi rompe l'aciclicità: per forza c'è un ciclo (un albero ha esattamente n−1 archi).

**8. [Scelta multipla]** Due grafi sono isomorfi se:
- Hanno lo stesso numero di archi soltanto
- Esiste una biiezione tra i vertici che preserva l'adiacenza ✓
- Hanno lo stesso grado massimo
- Sono entrambi connessi
- _Spiegazione:_ Isomorfismo = corrispondenza biunivoca tra vertici che conserva gli archi; stessi numeri di nodi/archi sono necessari ma non sufficienti.

**9. [Domanda aperta]** Cosa distingue un grafo "completo" da un grafo "connesso"? Dai un esempio di grafo connesso ma non completo.
- Punti chiave:
  - Completo Kₙ: esistono *tutti* gli archi possibili (n(n−1)/2 nel non orientato).
  - Connesso: esiste un cammino tra ogni coppia, ma non necessariamente un arco diretto.
  - Esempio: un cammino lineare A−B−C−D è connesso ma non completo (manca, es., A−C).
  - Trappola d'esame: "completo" ≠ "tutti raggiungibili"; ogni completo è connesso, non viceversa.

**10. [Domanda aperta]** Definisci sottografo, sottografo indotto e sottografo ricoprente.
- Punti chiave:
  - Sottografo: G'=(V',E') con V'⊆V, E'⊆E e gli estremi degli archi in V'.
  - Indotto da V': contiene *tutti* gli archi di E con entrambi gli estremi in V'.
  - Ricoprente (spanning): V'=V (tutti i vertici), sottoinsieme degli archi (es. albero ricoprente).

---

## 3 — Rappresentazioni dei grafi

**1. [Vero/Falso]** Per un grafo *denso* (m ≈ n²) la matrice di adiacenza non spreca spazio in modo significativo rispetto alle liste.
- Risposta: **Vero** ✓
- Vero. Con m ≈ n², le liste occupano comunque Θ(n+m)=Θ(n²): lo svantaggio di spazio della matrice sparisce, mentre resta il vantaggio del test O(1).

**2. [Vero/Falso]** La matrice di adiacenza di un grafo non orientato è simmetrica.
- Risposta: **Vero** ✓
- Vero. (u,v)∈E ⟺ (v,u)∈E → M[u][v]=M[v][u]. Per i grafi orientati la matrice in generale non è simmetrica.

**3. [Vero/Falso]** Per un grafo pesato, la matrice di adiacenza memorizza i pesi al posto degli 1 (e ∞/0 dove non c'è arco).
- Risposta: **Vero** ✓
- Vero. M[u][v]=w(u,v) se l'arco esiste, un valore convenzionale (∞ o 0) altrimenti.

**4. [Vero/Falso]** Rimuovere un arco in un grafo non orientato rappresentato con liste di adiacenza richiede di aggiornare due liste.
- Risposta: **Vero** ✓
- Vero. L'arco {u,v} compare nella lista di u e in quella di v: entrambe vanno aggiornate per mantenere la consistenza.

**5. [Vero/Falso]** Con la matrice di adiacenza, enumerare i vicini di un vertice costa O(grado(v)).
- Risposta: **Falso** ✓
- Falso. Costa O(n): bisogna scorrere l'intera riga, anche se i vicini sono pochi. Le liste danno O(grado(v)).

**6. [Scelta multipla]** Quale rappresentazione è più adatta quando si fanno molti test "esiste l'arco (u,v)?" su un grafo denso?
- Lista di archi
- Liste di adiacenza
- Matrice di adiacenza ✓
- Liste di incidenza
- _Spiegazione:_ Test arco O(1) con la matrice; su grafo denso lo spazio Θ(n²) non è uno svantaggio.

**7. [Scelta multipla]** Lo spazio della matrice di incidenza (vertici × archi) è:
- Θ(n+m)
- Θ(n·m) ✓
- Θ(n²)
- Θ(m)
- _Spiegazione:_ Una matrice n×m (una riga per vertice, una colonna per arco): Θ(n·m). Raramente conveniente.

**8. [Domanda aperta]** Un'applicazione fa pochissimi inserimenti ma moltissime query di adiacenza e scansioni dei vicini su un grafo sparso. Quale rappresentazione scegli e perché?
- Punti chiave:
  - Grafo sparso → matrice spreca Θ(n²) di spazio.
  - Tante scansioni dei vicini → le liste di adiacenza danno O(grado) per scansione (ottimale).
  - Pochi inserimenti → non penalizzano (comunque rapidi sulle liste).
  - Se i test "arco (u,v)?" puntuali fossero dominanti e il grafo fosse piccolo/denso, valuterei la matrice; ma qui le liste di adiacenza sono la scelta migliore.

---

## 4 — Visita generica e BFS (visita in ampiezza)

**1. [Vero/Falso]** Nella BFS, due vertici nella coda in un dato istante hanno distanze dalla sorgente che differiscono al più di 1.
- Risposta: **Vero** ✓
- Vero. È la proprietà della coda BFS: contiene solo vertici a distanza d e d+1, processati in ordine non decrescente.

**2. [Vero/Falso]** Eseguire la BFS da una sorgente s permette di stabilire quali vertici sono raggiungibili da s.
- Risposta: **Vero** ✓
- Vero. I vertici scoperti (non bianchi) al termine sono esattamente i raggiungibili da s; gli altri restano bianchi con d=∞.

**3. [Vero/Falso]** La BFS su un grafo non orientato individua le componenti connesse se ripetuta da ogni vertice non ancora visitato.
- Risposta: **Vero** ✓
- Vero. Ogni "ondata" di BFS marca una componente; ripetendo dai vertici ancora bianchi si coprono tutte le componenti, in O(n+m).

**4. [Vero/Falso]** Nella BFS, un vertice può essere inserito nella coda più di una volta.
- Risposta: **Falso** ✓
- Falso. Viene accodato solo quando passa da bianco a grigio, una volta sola. È ciò che garantisce il costo O(n+m).

**5. [Scelta multipla]** L'albero BFS è anche un albero dei cammini minimi quando:
- Il grafo è pesato con pesi positivi
- Il grafo è non pesato (o con pesi unitari) ✓
- Il grafo è un DAG
- Sempre
- _Spiegazione:_ La BFS minimizza il numero di archi; coincide col cammino minimo solo se ogni arco "pesa" 1.

**6. [Scelta multipla]** In una visita BFS da s, l'ordine in cui i vertici diventano neri è:
- Per profondità decrescente
- Per distanza non decrescente da s ✓
- Alfabetico
- Casuale
- _Spiegazione:_ La FIFO processa prima i vertici più vicini; i vertici diventano neri in ordine di distanza non decrescente.

**7. [Domanda aperta]** Come si adatta la BFS per trovare il cammino minimo (in archi) tra due vertici specifici s e t, e come si ricostruisce il cammino?
- Punti chiave:
  - Esegui BFS da s; puoi fermarti appena t diventa grigio (scoperto).
  - d[t] è il numero minimo di archi; se t resta bianco, non è raggiungibile.
  - Ricostruzione: segui i predecessori π da t a ritroso fino a s, poi inverti la sequenza.

**8. [Codice/Pseudocodice]** Scrivi lo pseudocodice che, data una BFS già eseguita (vettore π), ricostruisce il cammino da s a t.
- Punti chiave: risali π da t; se π[t] e t≠s non collegati, nessun cammino.
- Pseudocodice:
```
CAMMINO(π, s, t)
  if t = s then return [s]
  if π[t] = nil then return "nessun cammino"
  P <- CAMMINO(π, s, π[t])
  if P = "nessun cammino" then return P
  accoda t a P
  return P
```

---

## 5 — DFS, aciclicità e classificazione degli archi

**1. [Vero/Falso]** In una DFS su grafo non orientato, ogni arco è classificato come arco dell'albero oppure arco all'indietro.
- Risposta: **Vero** ✓
- Vero. Nei grafi non orientati non esistono forward né cross: solo Tree e Back.

**2. [Vero/Falso]** Se durante una DFS tutti gli archi risultano Tree o Forward o Cross (nessun Back), il grafo orientato è aciclico.
- Risposta: **Vero** ✓
- Vero. Aciclicità ⟺ assenza di back edge. Gli altri tipi non chiudono cicli.

**3. [Vero/Falso]** Il tempo di fine f[u] di un vertice è sempre maggiore del suo tempo di scoperta d[u].
- Risposta: **Vero** ✓
- Vero. Un vertice si scopre (d) e solo più tardi si chiude (f) dopo aver esplorato i discendenti: d[u] < f[u] sempre.

**4. [Vero/Falso]** In un grafo orientato aciclico, per ogni arco (u,v) vale f[u] > f[v].
- Risposta: **Vero** ✓
- Vero. È la proprietà che lega DFS e ordinamento topologico: in un DAG ogni arco va da un vertice con f maggiore a uno con f minore.

**5. [Scelta multipla]** In una DFS, il vertice da cui parte la visita (radice di un albero DFS) ha:
- Il tempo di fine minimo del suo albero
- Il tempo di scoperta minimo e il tempo di fine massimo del suo albero ✓
- Sempre grado 0
- d[u]=f[u]
- _Spiegazione:_ La radice è scoperta per prima (d minimo) e chiusa per ultima (f massimo): l'intervallo [d,f] contiene quelli di tutti i discendenti.

**6. [Scelta multipla]** Quanti alberi DFS produce una DFS completa su un grafo orientato con 3 componenti debolmente connesse e nessun arco tra esse?
- 1
- Almeno 3 (uno per "blocco" non raggiungibile dagli altri) ✓
- Esattamente n
- 0
- _Spiegazione:_ La foresta DFS ha un albero per ogni avvio da vertice bianco; blocchi non raggiungibili tra loro generano alberi distinti.

**7. [Domanda aperta]** Spiega come, usando i tempi d[] e f[], si classifica un arco (u,v) nei quattro tipi (grafo orientato).
- Punti chiave:
  - v bianco quando esamini (u,v) → Tree.
  - v grigio → Back (v antenato ancora aperto).
  - v nero con d[u] < d[v] → Forward (v discendente già chiuso).
  - v nero con d[u] > d[v] → Cross (v in un sottoalbero/blocco già chiuso, non antenato).

---

## 8 — Tecnica Greedy (golosa)

**1. [Vero/Falso]** Un algoritmo greedy esamina tipicamente gli elementi in un ordine fissato (spesso dopo un ordinamento) e prende decisioni definitive.
- Risposta: **Vero** ✓
- Vero. Molti greedy iniziano con un ordinamento (per fine, per rapporto, per scadenza…) e poi decidono in un'unica passata senza ripensamenti.

**2. [Vero/Falso]** Se un problema ha sottostruttura ottima ma NON la proprietà della scelta greedy, un greedy può comunque essere ottimo.
- Risposta: **Falso** ✓
- Falso. Servono entrambe. Senza la proprietà della scelta greedy, la scelta locale può precludere l'ottimo globale (es. zaino 0-1).

**3. [Vero/Falso]** Il "matroide" è una struttura teorica che caratterizza una classe di problemi risolvibili ottimamente con un greedy.
- Risposta: **Vero** ✓
- Vero. Se il problema si formula su un matroide pesato, il greedy è garantito ottimo (es. foresta ricoprente → Kruskal).

**4. [Scelta multipla]** Quale strategia NON è greedy?
- Riempire lo zaino frazionario per rapporto valore/peso decrescente
- Scegliere a ogni passo l'arco leggero che attraversa il taglio (Prim)
- Riempire una tabella V[i,j] combinando sottoproblemi (zaino 0-1) ✓
- Selezionare l'intervallo che finisce prima
- _Spiegazione:_ Riempire una tabella combinando sottoproblemi è programmazione dinamica, non greedy.

**5. [Domanda aperta]** Spiega con un controesempio perché il greedy fallisce sullo zaino 0-1.
- Punti chiave:
  - Es.: capacità 10; oggetti A(peso6,valore10, rapporto 1.67), B(peso5,valore9), C(peso5,valore9).
  - Greedy per rapporto prende A (rapporto migliore), poi non c'è spazio per B/C → valore 10.
  - L'ottimo è B+C = peso 10, valore 18.
  - La scelta locale (A) preclude la combinazione migliore: manca la proprietà della scelta greedy → serve PD.

---

## 11 — Greedy: codifica di Huffman

**1. [Vero/Falso]** In un albero di Huffman ottimo, i due simboli con frequenza minima sono fratelli alla massima profondità.
- Risposta: **Vero** ✓
- Vero. È il lemma alla base della correttezza: esiste un albero ottimo in cui i due simboli meno frequenti sono foglie sorelle al livello più profondo.

**2. [Vero/Falso]** Se tutti i simboli hanno la stessa frequenza, Huffman degenera in un codice a lunghezza (quasi) fissa.
- Risposta: **Vero** ✓
- Vero. Con frequenze uguali l'albero è (quasi) bilanciato: i codici hanno lunghezze ⌈log₂ k⌉ o simili → praticamente a lunghezza fissa.

**3. [Scelta multipla]** Codificando un testo di N simboli con Huffman, la dimensione compressa (in bit) è:
- N × (numero di simboli distinti)
- Σ (occorrenze del simbolo × lunghezza del suo codice) ✓
- N × 8 sempre
- log₂ N
- _Spiegazione:_ Si somma, per ogni simbolo, le occorrenze per la lunghezza del codice assegnato.

**4. [Domanda aperta]** Perché due simboli a frequenza più bassa ricevono codici di lunghezza ≥ degli altri? Lega alla profondità nell'albero.
- Punti chiave:
  - Huffman fonde per primi i due nodi meno frequenti → finiscono più in basso (più profondi).
  - Profondità maggiore = codice (cammino radice→foglia) più lungo.
  - Pesando lunghezza × frequenza, dare codici lunghi ai rari minimizza la lunghezza media: è esattamente l'obiettivo.

---

## 12 — Cammini minimi: rilassamento e Dijkstra

**1. [Vero/Falso]** Durante Dijkstra, le stime D[v] dei vertici non ancora estratti possono solo diminuire.
- Risposta: **Vero** ✓
- Vero. Il rilassamento aggiorna D[v] solo verso il basso; una volta estratto, D[v] non cambia più.

**2. [Vero/Falso]** In Dijkstra, un vertice può essere estratto dalla coda di priorità più di una volta.
- Risposta: **Falso** ✓
- Falso. Ogni vertice è estratto (reso definitivo) una sola volta. Si aggiornano solo le chiavi dei vertici ancora in coda (decrease-key).

**3. [Vero/Falso]** Se a un grafo con pesi non negativi si aggiunge una costante c>0 a tutti gli archi, i cammini minimi calcolati da Dijkstra restano gli stessi.
- Risposta: **Falso** ✓
- Falso. Aggiungere c penalizza i cammini con più archi: il cammino minimo può cambiare. (Trappola classica: lo shift uniforme non preserva i cammini minimi se i cammini hanno lunghezze diverse in numero di archi.)

**4. [Scelta multipla]** Per quale motivo Dijkstra rende "definitivo" il vertice di stima minima a ogni passo?
- Per ordinare i vertici alfabeticamente
- Perché con pesi ≥0 nessun cammino futuro può ridurne ulteriormente la distanza ✓
- Per ridurre lo spazio
- Perché lo richiede la coda FIFO
- _Spiegazione:_ Con pesi non negativi, qualunque cammino alternativo passa per vertici a stima ≥, quindi non migliora il minimo estratto.

**5. [Domanda aperta]** Mostra con un piccolo esempio perché Dijkstra può sbagliare con un arco di peso negativo.
- Punti chiave:
  - Es.: s→a peso 2, s→b peso 1, b→a peso −2.
  - Dijkstra estrae b (D=1), poi a con D=2 (via s→a) e lo fissa.
  - Ma s→b→a costa 1+(−2)=−1 < 2: l'arco negativo scoperto "dopo" avrebbe migliorato a, già fissato.
  - L'invariante si rompe → risultato errato. Serve Bellman-Ford.

---

## 14 — Cammini minimi: Bellman-Ford

**1. [Vero/Falso]** Bellman-Ford, se non ci sono cicli negativi, restituisce le distanze minime corrette anche in presenza di archi negativi.
- Risposta: **Vero** ✓
- Vero. È esattamente il suo dominio: pesi negativi ammessi, purché senza cicli negativi raggiungibili dalla sorgente.

**2. [Vero/Falso]** Se in Bellman-Ford nessuna stima cambia durante un'intera iterazione, si può terminare in anticipo.
- Risposta: **Vero** ✓
- Vero. Stabilità in una passata = convergenza raggiunta: si può uscire prima delle n−1 iterazioni (ottimizzazione comune).

**3. [Scelta multipla]** Un ciclo negativo raggiungibile dalla sorgente implica che:
- Dijkstra lo gestisce comunque
- Le distanze verso i vertici del ciclo (e a valle) non sono ben definite (−∞) ✓
- Il grafo non è connesso
- L'MST non esiste
- _Spiegazione:_ Ripercorrendo il ciclo si abbassa indefinitamente il costo: la distanza tende a −∞, non è definita.

**4. [Domanda aperta]** Perché bastano n−1 iterazioni e a cosa serve la n-esima?
- Punti chiave:
  - Un cammino minimo semplice ha al più n−1 archi; dopo k iterazioni sono corrette le distanze dei cammini con ≤ k archi → n−1 bastano.
  - La n-esima iterazione è un *test*: se rilassa ancora qualcosa, esiste un cammino con >n−1 archi che migliora → ciclo negativo.

---

## 16 — Minimo albero ricoprente (MST): algoritmo generico

**1. [Vero/Falso]** Se un arco è l'unico di peso minimo che attraversa un certo taglio, allora appartiene a *ogni* MST.
- Risposta: **Vero** ✓
- Vero. Versione forte della proprietà del taglio: l'arco leggero *unico* è in tutti gli MST (non solo in qualcuno).

**2. [Vero/Falso]** Rimuovere l'arco di peso massimo da un ciclo del grafo non può mai impedire di costruire un MST.
- Risposta: **Vero** ✓
- Vero. Proprietà del ciclo: l'arco più pesante di un ciclo non serve a nessun MST, quindi può essere scartato senza perdere l'ottimo.

**3. [Scelta multipla]** Un albero ricoprente di un grafo connesso con n vertici e m archi richiede di rimuovere quanti archi (se si parte da tutti gli m)?
- m − n
- m − n + 1 ✓
- n − 1
- m
- _Spiegazione:_ Un albero ha n−1 archi; da m archi se ne tolgono m−(n−1)=m−n+1 (gli archi in eccesso che chiudono cicli).

**4. [Domanda aperta]** Spiega perché l'algoritmo generico ("aggiungi un arco sicuro finché non ne hai n−1") termina con un MST.
- Punti chiave:
  - Invariante: l'insieme A di archi scelti è sempre sottoinsieme di qualche MST.
  - Un arco sicuro mantiene l'invariante (proprietà del taglio).
  - Dopo n−1 aggiunte, A è un albero ricoprente; essendo ⊆ MST ed avendo n−1 archi, *è* un MST.

---

## 18 — Strutture Union-Find (insiemi disgiunti)

**1. [Vero/Falso]** Con sola union-by-rank (senza compressione dei cammini), il costo di find è O(log n) nel caso peggiore.
- Risposta: **Vero** ✓
- Vero. Il bilanciamento per rango limita l'altezza degli alberi a O(log n), quindi find risale al più O(log n) nodi.

**2. [Vero/Falso]** makeSet, union e find sono le tre operazioni fondamentali di una struttura per insiemi disgiunti.
- Risposta: **Vero** ✓
- Vero. makeSet crea un insieme singoletto; find restituisce il rappresentante; union fonde due insiemi.

**3. [Scelta multipla]** La compressione dei cammini agisce:
- Durante union
- Durante find, facendo puntare i nodi attraversati direttamente alla radice ✓
- Durante makeSet
- Mai
- _Spiegazione:_ Mentre find risale alla radice, ricollega i nodi visitati direttamente alla radice, appiattendo l'albero per le query future.

**4. [Domanda aperta]** Perché union-by-rank da sola NON basta a ottenere il costo quasi-costante e serve anche la compressione?
- Punti chiave:
  - Union-by-rank limita l'altezza a O(log n): find resta O(log n), non quasi-costante.
  - La compressione dei cammini appiattisce gli alberi a ogni find, riducendo l'altezza ammortizzata.
  - Solo combinando le due tecniche si ottiene O(α(n)) ammortizzato (α inversa di Ackermann, ≤4 in pratica).

---

## 20 — Programmazione dinamica (PD): principi

**1. [Vero/Falso]** In un algoritmo di PD bottom-up, l'ordine di riempimento della tabella deve rispettare le dipendenze tra sottoproblemi.
- Risposta: **Vero** ✓
- Vero. Un sottoproblema va calcolato dopo quelli da cui dipende (es. in LCS, L[i,j] dipende da celle con indici minori).

**2. [Vero/Falso]** La PD può ridurre un tempo esponenziale (ricorsione naïve con ricalcoli) a polinomiale.
- Risposta: **Vero** ✓
- Vero. Memorizzando i sottoproblemi sovrapposti si evita la ricomputazione esponenziale (es. Fibonacci ricorsivo O(φⁿ) → O(n) con memoization).

**3. [Scelta multipla]** Il numero di sottoproblemi distinti × il costo per sottoproblema dà tipicamente:
- Lo spazio della ricorsione naïve
- La complessità temporale dell'algoritmo di PD ✓
- Il numero di archi
- Il fattore di approssimazione
- _Spiegazione:_ In PD, tempo ≈ (numero stati) × (lavoro per stato). Es.: LCS ha Θ(|X||Y|) stati × O(1) → O(|X||Y|).

**4. [Domanda aperta]** Quali due condizioni rendono un problema adatto alla PD e come le riconosci?
- Punti chiave:
  - Sottostruttura ottima: l'ottimo si esprime tramite ottimi di sottoproblemi (verifica scrivendo una ricorrenza).
  - Sottoproblemi sovrapposti: gli stessi sottoproblemi ricorrono (l'albero della ricorsione naïve ripete gli stessi nodi).
  - Se mancano i ricalcoli (sottoproblemi indipendenti) → è divide-et-impera, non PD.

---

## 22 — PD: problema dello zaino (0-1, intero)

**1. [Vero/Falso]** Nello zaino *intero* (un oggetto può essere preso più volte) la ricorrenza usa V[i−1,…] sostituito da V[i,…] nel ramo "includo".
- Risposta: **Vero** ✓
- Vero. Potendo riprendere lo stesso oggetto, includendolo si resta su riga i: V[i,j]=max(V[i−1,j], V[i, j−pᵢ]+vᵢ).

**2. [Vero/Falso]** Lo spazio dello zaino 0-1 può essere ridotto a O(P) usando una sola riga aggiornata da destra a sinistra.
- Risposta: **Vero** ✓
- Vero. Poiché V[i,·] dipende solo da V[i−1,·], si tiene un solo vettore; scorrendo j da P a pᵢ si evita di riusare l'oggetto nella stessa iterazione.

**3. [Scelta multipla]** "Pseudo-polinomiale" significa che la complessità è polinomiale in:
- Numero di bit dell'input
- Valore numerico di un parametro (qui la capacità P), non nella sua lunghezza in bit ✓
- Numero di oggetti soltanto
- Logaritmo della capacità
- _Spiegazione:_ O(n·P) è polinomiale in P ma P si scrive con log P bit: rispetto alla dimensione dell'input è esponenziale.

**4. [Domanda aperta]** Confronta zaino frazionario e zaino 0-1: tecnica risolutiva, ottimalità del greedy, complessità.
- Punti chiave:
  - Frazionario: greedy per rapporto valore/peso, ottimo, O(n log n) (ordinamento).
  - 0-1: greedy NON ottimo; serve PD su tabella V[i,j], O(n·P) (pseudo-polinomiale).
  - Differenza chiave: la frazionabilità garantisce la proprietà della scelta greedy; senza di essa serve esplorare le combinazioni (PD).

---

## 23 — NP-completezza e classi di complessità

**1. [Vero/Falso]** Se un problema è NP-arduo ma non è noto appartenere a NP, non lo si può dire NP-completo.
- Risposta: **Vero** ✓
- Vero. NP-completo richiede *entrambe*: NP-arduo e appartenenza a NP. Alcuni problemi sono NP-ardui ma (forse) fuori da NP.

**2. [Vero/Falso]** La riduzione polinomiale A ≤ₚ B è transitiva.
- Risposta: **Vero** ✓
- Vero. Se A ≤ₚ B e B ≤ₚ C allora A ≤ₚ C (componendo due trasformazioni polinomiali se ne ottiene una polinomiale).

**3. [Vero/Falso]** Verificare un certificato e trovarlo hanno, per i problemi NP, la stessa complessità.
- Risposta: **Falso** ✓
- Falso. NP garantisce la *verifica* polinomiale; *trovare* il certificato potrebbe richiedere tempo esponenziale (è il cuore di P vs NP).

**4. [Scelta multipla]** Il problema del ciclo Hamiltoniano (esiste un ciclo che tocca ogni vertice una volta?) è:
- In P
- NP-completo ✓
- Non un problema di decisione
- Risolvibile con BFS
- _Spiegazione:_ È uno dei classici NP-completi; non si conosce algoritmo polinomiale.

**5. [Domanda aperta]** Spiega cosa significa "ridurre" il problema A al problema B e perché serve a classificare la difficoltà.
- Punti chiave:
  - Riduzione A ≤ₚ B: una trasformazione polinomiale che converte istanze di A in istanze di B preservando la risposta sì/no.
  - Se esiste, B è "almeno tanto difficile" quanto A: un risolutore per B risolve anche A.
  - Per provare B NP-arduo si riduce un NP-completo noto A a B.
  - È lo strumento per propagare la difficoltà tra problemi.

---

## 24 — Algoritmi di approssimazione, ricerca locale e TSP

**1. [Vero/Falso]** Un PTAS (schema di approssimazione polinomiale) fornisce, per ogni ε>0, una (1+ε)-approssimazione in tempo polinomiale in n.
- Risposta: **Vero** ✓
- Vero. Un PTAS avvicina arbitrariamente l'ottimo; il tempo è polinomiale in n (può dipendere male da 1/ε).

**2. [Vero/Falso]** La ricerca locale dipende dalla definizione del "vicinato" delle soluzioni.
- Risposta: **Vero** ✓
- Vero. Il vicinato determina quali mosse sono possibili e quindi quali minimi locali esistono (es. 2-opt vs 3-opt nel TSP).

**3. [Scelta multipla]** Nel TSP metrico, l'algoritmo basato su MST garantisce un tour di costo:
- Esattamente ottimo
- Al più 2 volte l'ottimo ✓
- Al più log n volte l'ottimo
- Illimitato
- _Spiegazione:_ Tour ≤ 2·peso(MST) ≤ 2·ottimo, grazie alla disuguaglianza triangolare e al fatto che l'MST ≤ tour ottimo.

**4. [Domanda aperta]** Perché per il TSP *senza* disuguaglianza triangolare non esiste approssimazione a fattore costante (salvo P=NP)?
- Punti chiave:
  - Da un'istanza di ciclo Hamiltoniano si costruisce un TSP dove gli archi "presenti" pesano 1 e gli "assenti" pesano un valore enorme M.
  - Un'ipotetica approssimazione a fattore costante distinguerebbe "esiste ciclo Hamiltoniano" (tour ≈ n) da "non esiste" (tour ≥ M), risolvendo un problema NP-completo in tempo polinomiale.
  - Quindi tale approssimazione implicherebbe P=NP.

---
