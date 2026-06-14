/* ============================================================================
   algo2_exercises.js — Esercizi pratici tipici dello scritto di Algoritmi 2.
   Fonte: "100 Esercizi_TOT.pdf" (slide del corso). I grafi sono ridisegnati in
   SVG dal renderer in materia.html a partire dalle specifiche `figure` qui sotto.

   Schema di ogni esercizio:
   {
     id, topic, title,
     consegna : stringa HTML (il testo dell'esercizio),
     figure   : null | { type:"graph", directed, w, h, nodes:[{id,x,y}], edges:[{a,b,w?}] }
                     | { type:"html", html:"..." }   (tabelle/dati),
     solution : [ "passo 1", "passo 2", ... ]         (rivelati con "Mostra soluzione")
   }
   Le soluzioni dei grafi (Dijkstra, Prim, Kruskal, Bellman) usano i pesi
   ricavati direttamente dalle slide originali.
   ========================================================================== */

/* grafo orientato condiviso da DFS e BFS (vertici 0..6) */
const G_DFS = {
  type: "graph", directed: true, w: 510, h: 330,
  nodes: [
    { id: 0, x: 250, y: 55 }, { id: 6, x: 80, y: 70 }, { id: 2, x: 70, y: 175 },
    { id: 1, x: 250, y: 168 }, { id: 3, x: 432, y: 168 }, { id: 4, x: 182, y: 278 }, { id: 5, x: 338, y: 278 }
  ],
  edges: [
    { a: 0, b: 1 }, { a: 0, b: 3 }, { a: 1, b: 3 }, { a: 1, b: 4 }, { a: 1, b: 5 },
    { a: 2, b: 0 }, { a: 2, b: 6 }, { a: 4, b: 2 }, { a: 4, b: 5 }
  ]
};

const EXERCISES = [

  /* 1 — DFS ------------------------------------------------------------ */
  {
    id: "ex-dfs",
    topic: "Visite di grafi",
    title: "Visita in profondità (DFS) e classificazione degli archi",
    consegna: "Effettua una visita in profondità (DFS) di tutti i vertici con sorgente <b>0</b> e liste di adiacenza in ordine crescente. Indica per ogni vertice il tempo di <b>inizio/fine</b> visita ed etichetta ogni arco con <b>T</b> (albero), <b>B</b> (indietro), <b>F</b> (in avanti), <b>C</b> (di attraversamento). Infine: <b>il grafo è aciclico?</b>",
    figure: G_DFS,
    solution: [
      "Liste di adiacenza: 0:[1,3] · 1:[3,4,5] · 2:[0,6] · 4:[2,5]  (3, 5, 6 non hanno archi uscenti).",
      "Tempi inizio/fine: 0 → 1/14 · 1 → 2/13 · 3 → 3/4 · 4 → 5/12 · 2 → 6/9 · 6 → 7/8 · 5 → 10/11.",
      "Archi dell'albero (T): 0→1, 1→3, 1→4, 4→2, 2→6, 4→5.",
      "Arco all'indietro (B): 2→0  (0 è un antenato ancora grigio quando lo si raggiunge da 2).",
      "Archi in avanti (F): 0→3 e 1→5  (puntano a un discendente già chiuso).",
      "Aciclico? NO: l'arco all'indietro 2→0 chiude il ciclo 0→1→4→2→0. Un grafo orientato è aciclico se e solo se la DFS non trova archi all'indietro."
    ]
  },

  /* 2 — SCC ------------------------------------------------------------ */
  {
    id: "ex-scc",
    topic: "Visite di grafi",
    title: "Componente fortemente connessa che contiene il vertice 2",
    consegna: "Dato il grafo orientato con 6 nodi e archi ⟨0,3⟩ ⟨0,4⟩ ⟨1,5⟩ ⟨2,3⟩ ⟨3,1⟩ ⟨3,5⟩ ⟨4,1⟩ ⟨5,2⟩, calcola (descrivendo il procedimento) la <b>componente fortemente connessa</b> che contiene il vertice <b>2</b>.",
    figure: {
      type: "graph", directed: true, w: 520, h: 300,
      nodes: [
        { id: 0, x: 80, y: 70 }, { id: 1, x: 260, y: 55 }, { id: 2, x: 440, y: 70 },
        { id: 4, x: 80, y: 240 }, { id: 5, x: 260, y: 255 }, { id: 3, x: 440, y: 240 }
      ],
      edges: [
        { a: 0, b: 3 }, { a: 0, b: 4 }, { a: 1, b: 5 }, { a: 2, b: 3 },
        { a: 3, b: 1 }, { a: 3, b: 5 }, { a: 4, b: 1 }, { a: 5, b: 2 }
      ]
    },
    solution: [
      "La SCC di 2 = (discendenti di 2) ∩ (antenati di 2): i vertici raggiungibili da 2 e dai quali si raggiunge 2.",
      "Da 2 si raggiunge: 2→3→1→5→2 e 3→5, quindi {1,2,3,5}.",
      "Verso 2 arrivano: 5→2, 1→5, 3→1, 2→3 ⇒ {1,2,3,5} tornano tutti in 2.",
      "SCC(2) = {1, 2, 3, 5}. Il vertice 4 (solo 4→1, nessun ritorno) e il vertice 0 (sorgente) restano fuori.",
      "Metodo a lezione: algoritmo di Kosaraju/Tarjan, oppure DFS in G e in G trasposto e intersezione delle due visite da 2."
    ]
  },

  /* 3 — BFS V/M/L ------------------------------------------------------ */
  {
    id: "ex-bfs-vml",
    topic: "Visite di grafi",
    title: "Etichettatura per distanza (Vicino / Medio / Lontano)",
    consegna: "Scrivi (in pseudocodice) un algoritmo che, dato un grafo non pesato orientato G e un vertice t, restituisce un vettore con in posizione i: <b>V</b> se dist(t,i) ∈ [0,1], <b>M</b> se ∈ [2,3], <b>L</b> se ≥ 4. Esempio: con t = 0 sul grafo a lato deve restituire <code>[V V M V M M L]</code>.",
    figure: G_DFS,
    solution: [
      "L'idea: una sola BFS da t calcola dist[i] = numero minimo di archi da t a i; poi si mappa la distanza nella lettera.",
      "Pseudocodice:  etichetta(G, t):",
      "  per ogni v: dist[v] ← ∞ ;  dist[t] ← 0 ;  coda Q ← {t}",
      "  while Q non vuota:  u ← dequeue(Q);  per ogni (u,w) ∈ E:  if dist[w] = ∞ then dist[w] ← dist[u]+1; enqueue(Q,w)",
      "  per ogni i:  if dist[i] ≤ 1 → out[i]='V'  elif dist[i] ≤ 3 → out[i]='M'  else → out[i]='L'   (∞ ⇒ 'L')",
      "Verifica con t=0: dist = [0,1,3,1,2,2,4] per i vertici 0..6 ⇒ [V, V, M, V, M, M, L]. Complessità O(n+m)."
    ]
  },

  /* 4 — Ordinamento topologico ---------------------------------------- */
  {
    id: "ex-topo",
    topic: "Visite di grafi",
    title: "Ordinamento topologico",
    consegna: "Dato il grafo orientato con 6 nodi e archi ⟨0,3⟩ ⟨0,4⟩ ⟨1,5⟩ ⟨2,3⟩ ⟨2,4⟩ ⟨3,1⟩ ⟨3,5⟩ ⟨4,1⟩, calcola un <b>ordinamento topologico</b> descrivendo il procedimento.",
    figure: {
      type: "graph", directed: true, w: 520, h: 300,
      nodes: [
        { id: 0, x: 80, y: 70 }, { id: 2, x: 260, y: 55 }, { id: 3, x: 440, y: 70 },
        { id: 4, x: 80, y: 240 }, { id: 1, x: 260, y: 255 }, { id: 5, x: 440, y: 240 }
      ],
      edges: [
        { a: 0, b: 3 }, { a: 0, b: 4 }, { a: 1, b: 5 }, { a: 2, b: 3 },
        { a: 2, b: 4 }, { a: 3, b: 1 }, { a: 3, b: 5 }, { a: 4, b: 1 }
      ]
    },
    solution: [
      "Metodo dei gradi entranti (Kahn): in-deg = 0:0, 2:0, 3:2, 4:2, 1:2, 5:2.",
      "Si estraggono via via i vertici con in-deg 0, aggiornando i successori.",
      "Estrai 0 → cala in-deg di 3,4. Estrai 2 → 3 e 4 vanno a 0. Estrai 3 → 1,5. Estrai 4 → 1 va a 0. Estrai 1 → 5 va a 0. Estrai 5.",
      "Un ordinamento valido: 0, 2, 3, 4, 1, 5.",
      "In alternativa: DFS e ordinamento decrescente per tempo di fine visita (post-order invertito)."
    ]
  },

  /* 5 — Zaino frazionario --------------------------------------------- */
  {
    id: "ex-knap-frac",
    topic: "Greedy",
    title: "Zaino frazionario (greedy)",
    consegna: "Zaino di capienza <b>P = 80</b>. Trova una soluzione ottima per il problema dello zaino <b>frazionario</b>.",
    figure: {
      type: "html",
      html: '<table class="extab"><thead><tr><th>i</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th></tr></thead><tbody>' +
            '<tr><th>p<sub>i</sub></th><td>10</td><td>20</td><td>30</td><td>10</td><td>10</td><td>20</td></tr>' +
            '<tr><th>c<sub>i</sub></th><td>60</td><td>100</td><td>120</td><td>70</td><td>10</td><td>60</td></tr></tbody></table>'
    },
    solution: [
      "Si ordina per valore specifico c/p decrescente:  4 → 7 ,  1 → 6 ,  2 → 5 ,  3 → 4 ,  6 → 3 ,  5 → 1.",
      "Si riempie lo zaino in quest'ordine finché c'è capienza: 4 (p10), 1 (p10), 2 (p20), 3 (p30) → usati 70, restano 10.",
      "Con i 10 rimasti si prende metà dell'oggetto 6 (p20): frazione 1/2 → valore 30.",
      "Composizione ottima: oggetti 4, 1, 2, 3 interi + ½ dell'oggetto 6. Peso = 80.",
      "Valore ottimo = 70 + 60 + 100 + 120 + 30 = 380."
    ]
  },

  /* 6 — Huffman -------------------------------------------------------- */
  {
    id: "ex-huffman",
    topic: "Greedy",
    title: "Codifica di Huffman",
    consegna: "Dato l'alfabeto {a, b, c, d, e, f, g} con le frequenze in tabella, calcola una codifica binaria a lunghezza variabile secondo l'algoritmo di <b>Huffman</b> (mostra come la struttura cambia a ogni iterazione).",
    figure: {
      type: "html",
      html: '<table class="extab"><thead><tr><th>car.</th><th>a</th><th>b</th><th>c</th><th>d</th><th>e</th><th>f</th><th>g</th></tr></thead><tbody>' +
            '<tr><th>freq.</th><td>0.20</td><td>0.08</td><td>0.12</td><td>0.15</td><td>0.10</td><td>0.10</td><td>0.25</td></tr></tbody></table>'
    },
    solution: [
      "Si fondono ripetutamente i due nodi di frequenza minima (coda di priorità).",
      "1) b(.08)+e(.10) = .18    2) f(.10)+c(.12) = .22    3) d(.15)+[be](.18) = .33",
      "4) a(.20)+[fc](.22) = .42    5) g(.25)+[dbe](.33) = .58    6) [afc](.42)+[gdbe](.58) = 1.00",
      "Lunghezze dei codici risultanti: g = 2 bit; a, c, d, f = 3 bit; b, e = 4 bit.",
      "Lunghezza media ≈ .25·2 + (.20+.12+.15+.10)·3 + (.08+.10)·4 = 2.93 bit/simbolo (le code esatte dipendono dai pari merito 0/1)."
    ]
  },

  /* 7 — Moore ---------------------------------------------------------- */
  {
    id: "ex-moore",
    topic: "Greedy",
    title: "Algoritmo di Moore (minimizzare i lavori in ritardo)",
    consegna: "Applica l'algoritmo di <b>Moore</b> ai seguenti lavori, dove d è la durata e s la scadenza. Massimizza il numero di lavori completati <b>in tempo</b>.",
    figure: {
      type: "html",
      html: '<table class="extab"><thead><tr><th>lavoro</th><th>L1</th><th>L2</th><th>L3</th><th>L4</th><th>L5</th><th>L6</th></tr></thead><tbody>' +
            '<tr><th>durata d</th><td>3</td><td>3</td><td>1</td><td>3</td><td>3</td><td>2</td></tr>' +
            '<tr><th>scadenza s</th><td>6</td><td>5</td><td>5</td><td>8</td><td>10</td><td>8</td></tr></tbody></table>'
    },
    solution: [
      "Si considerano i lavori in ordine di scadenza crescente, mantenendo un insieme S e il tempo totale T.",
      "Si aggiunge il lavoro corrente; se T supera la sua scadenza, si rimuove da S il lavoro di durata massima (così cala di più T).",
      "Ordine per scadenza: L3,L2 (s5), L1 (s6), L4,L6 (s8), L5 (s10). Ad ogni superamento si scarta un lavoro lungo (d=3).",
      "Risultato: 4 lavori in tempo (es. L3, L1, L6, L5) e 2 lavori in ritardo.",
      "L'algoritmo di Moore-Hodgson è ottimo: massimizza il numero di lavori puntuali in O(n log n)."
    ]
  },

  /* 8 — Intervalli disgiunti ------------------------------------------ */
  {
    id: "ex-intervals",
    topic: "Greedy",
    title: "Selezione di intervalli disgiunti (massimo numero)",
    consegna: "Dati gli intervalli [inizio, fine), trova un sottoinsieme di intervalli <b>tutti disgiunti</b> di cardinalità massima.",
    figure: {
      type: "html",
      html: '<table class="extab small"><tbody>' +
            '<tr><th>I1</th><td>[5,10)</td><th>I2</th><td>[6,9)</td><th>I3</th><td>[8,13)</td><th>I4</th><td>[10,15)</td></tr>' +
            '<tr><th>I5</th><td>[17,20)</td><th>I6</th><td>[21,30)</td><th>I7</th><td>[24,25)</td><th>I8</th><td>[21,23)</td></tr></tbody></table>'
    },
    solution: [
      "Greedy classico: si ordinano gli intervalli per estremo di <b>fine</b> crescente e si sceglie ogni volta il primo compatibile (inizio ≥ fine dell'ultimo scelto).",
      "Ordine per fine: I2(9), I1(10), I3(13), I4(15), I5(20), I8(23), I7(25), I6(30).",
      "Scelta: I2 [6,9) → I4 [10,15) → I5 [17,20) → I8 [21,23) → I7 [24,25).",
      "Soluzione ottima: { I2, I4, I5, I8, I7 } → 5 intervalli.",
      "La strategia 'fine più vicina' è ottima: lascia la massima risorsa libera per i successivi."
    ]
  },

  /* 9 — Dijkstra ------------------------------------------------------- */
  {
    id: "ex-dijkstra",
    topic: "Cammini minimi",
    title: "Algoritmo di Dijkstra",
    consegna: "Applica <b>Dijkstra</b> con vertice di partenza <b>A</b> e liste di adiacenza in ordine alfabetico. Per ogni ciclo compila la tabella delle distanze stimate d, l'insieme dei vertici definitivi e l'albero dei predecessori.",
    figure: {
      type: "graph", directed: true, w: 600, h: 430,
      nodes: [
        { id: "A", x: 70, y: 130 }, { id: "B", x: 375, y: 110 }, { id: "F", x: 560, y: 215 },
        { id: "C", x: 280, y: 250 }, { id: "D", x: 120, y: 385 }, { id: "E", x: 470, y: 385 }
      ],
      edges: [
        { a: "A", b: "C", w: 1 }, { a: "A", b: "D", w: 4 }, { a: "B", b: "A", w: 7 },
        { a: "C", b: "B", w: 7 }, { a: "C", b: "D", w: 2 }, { a: "C", b: "E", w: 6 },
        { a: "D", b: "E", w: 2 }, { a: "E", b: "B", w: 1 }, { a: "F", b: "B", w: 1 }, { a: "F", b: "E", w: 5 }
      ]
    },
    solution: [
      "Si estrae sempre il vertice non definitivo con d minimo e si rilassano i suoi archi uscenti.",
      "Ordine di estrazione: A(0) → C(1) → D(3, via A→C→D) → E(5, via D) → B(6, via E→B).",
      "Distanze finali δ(A,·):  A=0 · C=1 · D=3 · E=5 · B=6.",
      "F = ∞: F ha solo archi uscenti, non è raggiungibile da A.",
      "Albero dei predecessori: A→C→D→E→B (π[C]=A, π[D]=C, π[E]=D, π[B]=E)."
    ]
  },

  /* 10 — Union-Find ---------------------------------------------------- */
  {
    id: "ex-unionfind",
    topic: "MST & Union-Find",
    title: "Union-Find — Quick Union con unione by-size",
    consegna: "Struttura Union-Find <b>Quick Union</b> con ottimizzazione <b>by-size</b>. Mostra la struttura dopo ogni operazione e gli output: <code>makeSet(A), makeSet(B), makeSet(C), union(A,B), union(C,A), makeSet(D), find(B), makeSet(E), union(E,D), union(D,B), find(D)</code>.",
    figure: null,
    solution: [
      "By-size: nell'unione l'albero più piccolo si appende alla radice di quello più grande (a parità, si tiene come radice il primo).",
      "makeSet A,B,C → tre alberi singoletti (size 1).",
      "union(A,B): size pari → radice A, size 2 → {A,B}.  union(C,A): C(1) sotto A(2) → A size 3 → {A,B,C}.",
      "makeSet(D).  find(B) → risale a radice A (output: A).  makeSet(E).",
      "union(E,D): size pari → radice E, size 2 → {E,D}.  union(D,B): root(D)=E(2) si appende a root(B)=A(3) → A size 5 → {A,B,C,E,D}.",
      "find(D) → risale fino ad A (output: A). Albero finale: radice A con size 5."
    ]
  },

  /* 11 — Prim ---------------------------------------------------------- */
  {
    id: "ex-prim",
    topic: "MST & Union-Find",
    title: "Albero ricoprente minimo — algoritmo di Prim",
    consegna: "Applica <b>Prim</b> con vertice di partenza <b>A</b> e liste di adiacenza in ordine alfabetico. Dopo ogni iterazione compila la tabella delle distanze d e l'insieme dei vertici definitivi.",
    figure: {
      type: "graph", directed: false, w: 600, h: 430,
      nodes: [
        { id: "A", x: 110, y: 120 }, { id: "B", x: 470, y: 120 }, { id: "C", x: 300, y: 245 },
        { id: "F", x: 555, y: 255 }, { id: "D", x: 150, y: 400 }, { id: "E", x: 450, y: 400 }
      ],
      edges: [
        { a: "A", b: "B", w: 3 }, { a: "A", b: "C", w: 1 }, { a: "A", b: "D", w: 3 },
        { a: "C", b: "B", w: 2 }, { a: "C", b: "D", w: 1 }, { a: "C", b: "E", w: 2 },
        { a: "B", b: "E", w: 1 }, { a: "B", b: "F", w: 3 }, { a: "E", b: "F", w: 2 }, { a: "D", b: "E", w: 2 }
      ]
    },
    solution: [
      "Si parte da A e si aggiunge ogni volta il vertice più vicino all'albero corrente, aggiornando d[v] = peso dell'arco minimo che lo collega all'albero.",
      "A → si sceglie C (A-C = 1). Poi D (C-D = 1). Poi B (C-B = 2, pari merito con E, vince l'ordine alfabetico).",
      "Da B: B-E = 1 migliora E. Si sceglie E (1). Infine F (E-F = 2).",
      "Archi dell'MST: A-C(1), C-D(1), C-B(2), B-E(1), E-F(2).",
      "Peso totale dell'MST = 1 + 1 + 2 + 1 + 2 = 7."
    ]
  },

  /* 12 — Kruskal ------------------------------------------------------- */
  {
    id: "ex-kruskal",
    topic: "MST & Union-Find",
    title: "Albero ricoprente minimo — algoritmo di Kruskal",
    consegna: "Applica <b>Kruskal</b> al grafo. Mostra come la foresta e la Union-Find cambiano a ogni iterazione.",
    figure: {
      type: "graph", directed: false, w: 600, h: 430,
      nodes: [
        { id: "A", x: 110, y: 110 }, { id: "B", x: 510, y: 110 }, { id: "C", x: 310, y: 250 },
        { id: "D", x: 150, y: 400 }, { id: "E", x: 490, y: 400 }
      ],
      edges: [
        { a: "A", b: "B", w: 3 }, { a: "A", b: "C", w: 8 }, { a: "A", b: "D", w: 1 },
        { a: "B", b: "C", w: 2 }, { a: "B", b: "E", w: 1 }, { a: "C", b: "D", w: 5 },
        { a: "C", b: "E", w: 2 }, { a: "D", b: "E", w: 5 }
      ]
    },
    solution: [
      "Si ordinano gli archi per peso crescente e si aggiunge ognuno se collega due componenti diverse (find diversi), poi union.",
      "Ordine: A-D(1), B-E(1), B-C(2), C-E(2), A-B(3), C-D(5), D-E(5), A-C(8).",
      "A-D(1) ✓ {A,D} · B-E(1) ✓ {B,E} · B-C(2) ✓ {B,E,C} · C-E(2) ✗ (ciclo, stessa componente).",
      "A-B(3) ✓ unisce {A,D} e {B,E,C} → tutto connesso (4 archi su 5 vertici): stop.",
      "Archi dell'MST: A-D(1), B-E(1), B-C(2), A-B(3). Peso totale = 7."
    ]
  },

  /* 13 — LCS 1 -------------------------------------------------------- */
  {
    id: "ex-lcs1",
    topic: "Programmazione dinamica",
    title: "Più lunga sottosequenza comune (LCS) — ETUTZE / TZUETE",
    consegna: "Trova la più lunga sottosequenza comune (<b>LCS</b>) tra <b>\"ETUTZE\"</b> e <b>\"TZUETE\"</b>, costruendo la matrice LCS con l'ottimizzazione delle frecce.",
    figure: null,
    solution: [
      "Si riempie la matrice L[i][j]: se i caratteri coincidono L = L(diag)+1 (freccia ↖), altrimenti L = max(sopra, sinistra).",
      "Il valore in basso a destra è la lunghezza della LCS: L = 4.",
      "Ripercorrendo le frecce ↖ si ottiene la sottosequenza.",
      "Una LCS è \"TUTE\" (lunghezza 4)."
    ]
  },

  /* 14 — LCS 2 (DNA) -------------------------------------------------- */
  {
    id: "ex-lcs2",
    topic: "Programmazione dinamica",
    title: "Più lunga sottosequenza comune (LCS) — sequenze di DNA",
    consegna: "Trova la <b>LCS</b> tra <b>\"AGCCGGATCGAGT\"</b> e <b>\"TCAGTACGTTA\"</b>, usando la matrice con l'ottimizzazione delle frecce.",
    figure: null,
    solution: [
      "Stessa ricorrenza dell'esercizio precedente, su una matrice 14×12 (incluse riga/colonna 0).",
      "Lunghezza della LCS: L = 6.",
      "Ripercorrendo le frecce ↖ si ricava una sottosequenza di 6 caratteri.",
      "Una LCS valida è \"AGCGTA\" (lunghezza 6)."
    ]
  },

  /* 15 — Bellman-Ford -------------------------------------------------- */
  {
    id: "ex-bellman",
    topic: "Cammini minimi",
    title: "Algoritmo di Bellman-Ford",
    consegna: "Applica <b>Bellman-Ford</b> dal vertice <b>A</b> rilassando gli archi nell'ordine: (A,B) (A,C) (C,D) (C,B) (E,D) (B,E) (B,D). Compila la tabella d a ogni iterazione (passata completa su tutti gli archi).",
    figure: {
      type: "graph", directed: true, w: 600, h: 360,
      nodes: [
        { id: "A", x: 80, y: 110 }, { id: "B", x: 360, y: 95 }, { id: "E", x: 545, y: 175 },
        { id: "C", x: 180, y: 300 }, { id: "D", x: 470, y: 300 }
      ],
      edges: [
        { a: "A", b: "B", w: 5 }, { a: "A", b: "C", w: 3 }, { a: "C", b: "B", w: 1 },
        { a: "C", b: "D", w: -1 }, { a: "B", b: "D", w: -2 }, { a: "B", b: "E", w: -1 }, { a: "E", b: "D", w: -4 }
      ]
    },
    solution: [
      "Init: d[A]=0, tutti gli altri = ∞. Si rilassano gli archi nell'ordine dato, per |V|−1 = 4 passate.",
      "Passata 1: (A,B) d[B]=5; (A,C) d[C]=3; (C,D) d[D]=2; (C,B) d[B]=4; (E,D) E=∞ salta; (B,E) d[E]=3; (B,D) 4−2=2 (nessun miglioramento).",
      "Passata 2: (E,D) 3−4 = −1 < 2 ⇒ d[D] = −1. Nessun altro miglioramento.",
      "Passata 3: nessun cambiamento ⇒ l'algoritmo è converso.",
      "Distanze finali: A=0 · B=4 · C=3 · D=−1 · E=3. Nessun ciclo negativo (l'ultima passata non migliora nulla)."
    ]
  },

  /* 16 — Bellman-Ford DAG --------------------------------------------- */
  {
    id: "ex-bellman-dag",
    topic: "Cammini minimi",
    title: "Bellman-Ford con ottimizzazione per DAG",
    consegna: "Sullo stesso grafo (che è un DAG), applica la versione di Bellman-Ford <b>ottimizzata per DAG</b>: un solo rilassamento per arco nell'ordine topologico.",
    figure: {
      type: "graph", directed: true, w: 600, h: 360,
      nodes: [
        { id: "A", x: 80, y: 110 }, { id: "B", x: 360, y: 95 }, { id: "E", x: 545, y: 175 },
        { id: "C", x: 180, y: 300 }, { id: "D", x: 470, y: 300 }
      ],
      edges: [
        { a: "A", b: "B", w: 5 }, { a: "A", b: "C", w: 3 }, { a: "C", b: "B", w: 1 },
        { a: "C", b: "D", w: -1 }, { a: "B", b: "D", w: -2 }, { a: "B", b: "E", w: -1 }, { a: "E", b: "D", w: -4 }
      ]
    },
    solution: [
      "Si calcola prima un ordinamento topologico: A, C, B, E, D.",
      "Si processano i vertici in quest'ordine, rilassando solo gli archi uscenti (una volta ciascuno).",
      "A: d[B]=5, d[C]=3.  C: d[B]=min(5,3+1)=4, d[D]=3−1=2.  B: d[E]=4−1=3, d[D]=min(2,4−2)=2.  E: d[D]=min(2,3−4)=−1.",
      "Distanze finali: A=0 · C=3 · B=4 · E=3 · D=−1 (identiche a Bellman-Ford classico).",
      "Vantaggio: su un DAG basta una sola passata in ordine topologico ⇒ complessità O(V+E) invece di O(V·E)."
    ]
  },

  /* 17 — Floyd-Warshall ----------------------------------------------- */
  {
    id: "ex-floyd",
    topic: "Cammini minimi",
    title: "Algoritmo di Floyd-Warshall",
    consegna: "Dal grafo descritto dalla matrice di adiacenza, trova i cammini minimi tra tutte le coppie con <b>Floyd-Warshall</b>. Mostra le matrici D (pesi) e P (predecessori) dopo ogni ciclo esterno. Se i cammini minimi non esistono, spiega perché.",
    figure: {
      type: "html",
      html: '<table class="extab"><thead><tr><th>D<sub>0</sub></th><th>A</th><th>B</th><th>C</th></tr></thead><tbody>' +
            '<tr><th>A</th><td>0</td><td>1</td><td>−2</td></tr>' +
            '<tr><th>B</th><td>−1</td><td>0</td><td>∞</td></tr>' +
            '<tr><th>C</th><td>5</td><td>2</td><td>0</td></tr></tbody></table>'
    },
    solution: [
      "Si aggiorna D[i][j] = min(D[i][j], D[i][k] + D[k][j]) per k = A, B, C (ciclo esterno sul vertice intermedio).",
      "Dopo k = A:  B→C diventa −3 (B→A→C = −1−2).",
      "Dopo k = B:  compare D[C][C] = C→B→A→C = 2 + (−1) + (−2) = −1 < 0: un elemento della diagonale è negativo.",
      "Una diagonale negativa segnala un <b>ciclo di peso negativo</b> (qui A→C... in realtà C→B→A→C = −1).",
      "Conclusione: i cammini minimi NON esistono — con un ciclo negativo si può diminuire il costo all'infinito ripetendolo."
    ]
  },

  /* 18 — TSP 2-approssimato ------------------------------------------- */
  {
    id: "ex-tsp",
    topic: "NP & Approssimazione",
    title: "Ciclo Hamiltoniano 2-approssimato (TSP metrico)",
    consegna: "Con l'algoritmo approssimato visto a lezione, trova un ciclo Hamiltoniano di peso al più <b>2 volte</b> il minimo, sul grafo completo G(V,E).",
    figure: {
      type: "graph", directed: false, w: 600, h: 470,
      nodes: [
        { id: 1, x: 300, y: 60 }, { id: 2, x: 510, y: 210 }, { id: 3, x: 425, y: 425 },
        { id: 4, x: 175, y: 425 }, { id: 5, x: 90, y: 210 }
      ],
      edges: [
        { a: 1, b: 2, w: 6 }, { a: 1, b: 3, w: 4 }, { a: 1, b: 4, w: 3 }, { a: 1, b: 5, w: 2 },
        { a: 2, b: 3, w: 3 }, { a: 2, b: 4, w: 6 }, { a: 2, b: 5, w: 3 },
        { a: 3, b: 4, w: 5 }, { a: 3, b: 5, w: 1 }, { a: 4, b: 5, w: 5 }
      ]
    },
    solution: [
      "Algoritmo: 1) costruisci un MST; 2) fai una visita in preordine dell'MST; 3) il ciclo è l'ordine di preordine (scorciatoie sui vertici già visitati).",
      "MST (Kruskal): 3-5(1), 1-5(2), 1-4(3), 2-3(3) → peso MST = 9.",
      "Visita in preordine dell'MST radicata in 1: 1, 4, 5, 3, 2.",
      "Ciclo Hamiltoniano: 1 → 4 → 5 → 3 → 2 → 1, peso = 3 + 5 + 1 + 3 + 6 = 18.",
      "Garanzia: peso ≤ 2 · peso(MST) = 18, perché un giro completo dell'MST 'raddoppiato' lo limita superiormente (vale con disuguaglianza triangolare)."
    ]
  },

  /* 19 — 2-scambi (2-opt) --------------------------------------------- */
  {
    id: "ex-2opt",
    topic: "NP & Approssimazione",
    title: "Vicinato per ricerca locale — tecnica dei k-scambi (k = 2)",
    consegna: "Dato un grafo e un ciclo Hamiltoniano in esso contenuto, genera il <b>vicinato</b> con la tecnica dei <b>k-scambi con k = 2</b> (2-opt).",
    figure: null,
    solution: [
      "Un 2-scambio rimuove dal tour due archi non adiacenti (i, i+1) e (j, j+1).",
      "Li sostituisce con i due archi (i, j) e (i+1, j+1), invertendo il segmento del tour tra i+1 e j.",
      "Ogni coppia di archi non adiacenti genera un vicino: il vicinato è l'insieme di tutti i tour così ottenibili.",
      "Dimensione del vicinato ≈ O(n²) (numero di coppie di archi non adiacenti).",
      "La ricerca locale 2-opt parte da un tour, valuta i vicini e si sposta su quelli di costo minore finché non trova un minimo locale."
    ]
  },

  /* 20 — Zaino 0-1 (costruzione DP) ----------------------------------- */
  {
    id: "ex-knap01",
    topic: "Programmazione dinamica",
    title: "Zaino 0-1 — costruzione dell'algoritmo di programmazione dinamica",
    consegna: "Oggetti non frazionabili, zaino di capienza <b>P = 10</b>. (1) Descrivi la struttura di memoizzazione; (2) definisci i casi base; (3) scrivi lo pseudocodice; (4) risolvi sull'istanza in tabella e di' quali oggetti entrano nella soluzione.",
    figure: {
      type: "html",
      html: '<table class="extab"><thead><tr><th>i</th><th>1</th><th>2</th><th>3</th><th>4</th></tr></thead><tbody>' +
            '<tr><th>p<sub>i</sub></th><td>2</td><td>7</td><td>6</td><td>4</td></tr>' +
            '<tr><th>v<sub>i</sub></th><td>12.7</td><td>6.4</td><td>1.7</td><td>0.3</td></tr></tbody></table>'
    },
    solution: [
      "Memoizzazione: matrice V di dimensione (n+1)×(P+1); V[i][j] = valore ottimo usando i primi i oggetti con capienza j. La soluzione cercata è V[n][P].",
      "Casi base: V[0][j] = 0 (nessun oggetto) e V[i][0] = 0 (capienza nulla).",
      "Ricorrenza: se j < p[i] → V[i][j] = V[i−1][j]; altrimenti V[i][j] = max( V[i−1][j], V[i−1][j−p[i]] + v[i] ).",
      "Pseudocodice: inizializza la riga 0 e la colonna 0 a 0; riempi per i = 1..n, j = 1..P con la ricorrenza; restituisci V[n][P].",
      "Su questa istanza: V[4][10] = 19.1 (valore ottimo).",
      "Oggetti selezionati (ricostruzione con la matrice K dei sì/no, dall'angolo in basso a destra): oggetto 1 e oggetto 2 (12.7 + 6.4 = 19.1)."
    ]
  }

];
