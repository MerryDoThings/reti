# Reti — Banca domande per l'esame
Domande in quattro formati (Vero/Falso, scelta multipla, aperte, codice) su tutto il programma. Le risposte corrette sono indicate con ✓. Versione pensata per ripasso, stampa o import in altri strumenti (Anki, NotebookLM).

## 1 — Introduzione

**1. [Vero/Falso]** Con lo store-and-forward un router può iniziare a ritrasmettere un pacchetto su un collegamento prima di averlo ricevuto interamente.
- Risposta: **Falso** ✓
- Falso. Store-and-forward: l'intero pacchetto deve arrivare al router prima di poter essere trasmesso sul collegamento successivo. Ogni hop aggiunge quindi L/R di ritardo di trasmissione.
**2. [Vero/Falso]** Il ritardo di trasmissione di un pacchetto dipende dalla distanza fisica del collegamento.
- Risposta: **Falso** ✓
- Falso. La trasmissione è L/R (lunghezza pacchetto / velocità del link). È la propagazione (d/s) a dipendere dalla distanza. Trappola classica V/F.
**3. [Vero/Falso]** La commutazione di circuito riserva le risorse lungo il percorso per l'intera durata della comunicazione.
- Risposta: **Vero** ✓
- Vero. Risorse dedicate (FDM/TDM): prestazione garantita ma sprecata quando l'utente non trasmette.
**4. [Vero/Falso]** Nel multiplexing statistico le risorse del collegamento sono prenotate in anticipo per ciascun flusso.
- Risposta: **Falso** ✓
- Falso. Niente prenotazione: le risorse sono condivise on-demand. È proprio questo a rendere la commutazione di pacchetto efficiente col traffico bursty.
**5. [Vero/Falso]** Il ritardo di accodamento è l'unico dei quattro ritardi che varia con il livello di congestione.
- Risposta: **Vero** ✓
- Vero. Elaborazione è ~costante e piccola; trasmissione e propagazione sono fisse per dato pacchetto/link. La coda dipende dal traffico (La/R).
**6. [Vero/Falso]** Con intensità di traffico La/R che tende a 1, il ritardo medio di accodamento tende a zero.
- Risposta: **Falso** ✓
- Falso. Tende a crescere enormemente (verso l'infinito). La/R≈0 → coda piccola; La/R→1 → coda grande; La/R>1 → instabile.
**7. [Vero/Falso]** Il throughput end-to-end di un percorso è determinato dal collegamento collo di bottiglia (il più lento).
- Risposta: **Vero** ✓
- Vero. Potenziare gli altri link non aiuta finché non si tocca il bottleneck.
**8. [Vero/Falso]** Lo stack protocollare Internet ha 7 livelli, come il modello OSI.
- Risposta: **Falso** ✓
- Falso. Internet ne ha 5 (applicazione, trasporto, rete, collegamento, fisico). OSI ne ha 7: aggiunge presentazione e sessione.
**9. [Vero/Falso]** Durante l'incapsulamento, un segmento di trasporto viene incapsulato in un datagramma di rete.
- Risposta: **Vero** ✓
- Vero. Messaggio → segmento (trasporto) → datagramma (rete) → frame (collegamento).
**10. [Vero/Falso]** Lo spoofing dell'indirizzo IP consiste nell'iniettare pacchetti con un indirizzo sorgente falso.
- Risposta: **Vero** ✓
- Vero. È la falsificazione dell'indirizzo sorgente; diverso dallo sniffing (intercettazione) e dal DoS (saturazione).
**11. [Vero/Falso]** I livelli presentazione e sessione del modello OSI sono presenti anche nello stack Internet.
- Risposta: **Falso** ✓
- Falso. Mancano nello stack Internet; se servono, vengono implementati nell'applicazione.
**12. [Vero/Falso]** La perdita di pacchetti avviene quando il buffer (coda) di un collegamento è pieno.
- Risposta: **Vero** ✓
- Vero. Buffer finiti: a coda piena i nuovi pacchetti vengono scartati. Coda e perdita nascono dallo stesso meccanismo.
**13. [Scelta multipla]** Quali sono i quattro contributi del ritardo nodale?
- Andata, ritorno, coda, errore
- Solo trasmissione e propagazione
- DNS, TCP, IP, ARP
- Elaborazione, accodamento, trasmissione, propagazione ✓
- _Spiegazione:_ d_nodal = d_proc + d_queue + d_trans + d_prop.
**14. [Scelta multipla]** Il ritardo di trasmissione di un pacchetto di L bit su un link a R bps è:
- L·R
- R/L
- L/R ✓
- d/s
- _Spiegazione:_ Trasmissione = L/R. Propagazione = d/s. Non confonderle.
**15. [Scelta multipla]** Perché Internet adotta la commutazione di pacchetto invece di quella di circuito?
- Garantisce prestazioni costanti
- Non richiede protocolli
- Evita del tutto le perdite
- Traffico bursty + condivisione statistica = molti più utenti ✓
- _Spiegazione:_ Il traffico è a raffica: la condivisione on-demand serve molti più utenti della prenotazione. Il prezzo sono code e possibili perdite.
**16. [Scelta multipla]** Scendendo dall'applicazione, qual è l'ordine corretto dei nomi dell'unità dati?
- Frame, datagramma, segmento, messaggio
- Pacchetto, segmento, frame, bit
- Messaggio, segmento, datagramma, frame ✓
- Datagramma, frame, messaggio, segmento
- _Spiegazione:_ Catena dell'incapsulamento da recitare a memoria.
**17. [Scelta multipla]** Cosa rende variabile nel tempo il ritardo di accodamento?
- La lunghezza del cavo
- La velocità della luce
- Il numero di livelli OSI
- Il livello di congestione/traffico ✓
- _Spiegazione:_ Dipende da quanto traffico converge sul collegamento (La/R).
**18. [Scelta multipla]** Quale attacco rende un servizio indisponibile sommergendolo di traffico?
- Sniffing
- Caching
- Spoofing
- DoS/DDoS ✓
- _Spiegazione:_ Denial of Service: si esauriscono le risorse del bersaglio con traffico fasullo.
**19. [Scelta multipla]** Un pacchetto di 8000 bit viene trasmesso su un link a 1 Mbps (10^6 bps). Ritardo di trasmissione?
- 125 µs
- 8 s
- 8 ms ✓
- 80 ms
- _Spiegazione:_ L/R = 8000 / 1.000.000 = 0,008 s = 8 ms.
**20. [Scelta multipla]** Throughput end-to-end di tre link in serie a 10, 2 e 8 Mbps?
- 20 Mbps
- 10 Mbps
- 2 Mbps ✓
- 8 Mbps
- _Spiegazione:_ Lo determina il collo di bottiglia: il link più lento, 2 Mbps.
**21. [Domanda aperta]** Spiega la differenza tra commutazione di pacchetto e di circuito, e perché Internet ha scelto la prima.
- Punti chiave:
  - Circuito: risorse riservate lungo il percorso (FDM/TDM), prestazione garantita ma sprecata se inattivo, richiede call setup.
  - Pacchetto: store-and-forward, multiplexing statistico, nessuna prenotazione, possibili code e perdite, servono protocolli per affidabilità/congestione.
  - Internet sceglie il pacchetto perché il traffico è bursty: la condivisione on-demand serve molti più utenti a parità di banda.
**22. [Domanda aperta]** Elenca e descrivi i quattro componenti del ritardo nodale, indicando da cosa dipende ciascuno.
- Punti chiave:
  - Elaborazione: esame dell'header e scelta dell'uscita; tipicamente < µs.
  - Accodamento: attesa in coda; varia con la congestione, misurata da La/R.
  - Trasmissione = L/R: dipende da lunghezza pacchetto e velocità del link.
  - Propagazione = d/s: dipende dalla distanza fisica e dalla velocità di propagazione.
  - Trappola: non confondere trasmissione (spingere i bit) e propagazione (i bit che viaggiano).

## 2 — Strato Applicativo

**1. [Vero/Falso]** HTTP mantiene lo stato delle richieste precedenti del client (è stateful).
- Risposta: **Falso** ✓
- Falso. HTTP è stateless: ogni richiesta è indipendente. Lo stato si mantiene con i cookie.
**2. [Vero/Falso]** In HTTP non persistente serve una connessione TCP separata per ogni oggetto.
- Risposta: **Vero** ✓
- Vero. Una connessione per oggetto → ~2 RTT per oggetto. Il persistente riusa la connessione.
**3. [Vero/Falso]** HTTP persistente riduce il numero di RTT riusando la stessa connessione TCP per più oggetti.
- Risposta: **Vero** ✓
- Vero. È il vantaggio principale di HTTP/1.1 persistente.
**4. [Vero/Falso]** I cookie servono a mantenere stato applicativo nonostante HTTP sia senza stato.
- Risposta: **Vero** ✓
- Vero. Set-Cookie nella risposta, il browser lo rispedisce: abilita sessioni, carrelli, profilazione.
**5. [Vero/Falso]** SMTP è un protocollo 'pull' (il client preleva i messaggi dal server).
- Risposta: **Falso** ✓
- Falso. SMTP è 'push' (spinge i messaggi verso il server del destinatario). Il prelievo si fa con IMAP/web.
**6. [Vero/Falso]** Il DNS è centralizzato in un unico grande server per garantire coerenza.
- Risposta: **Falso** ✓
- Falso. È distribuito e gerarchico: un singolo server sarebbe SPOF, collo di bottiglia e lontano dagli utenti.
**7. [Vero/Falso]** In una query DNS iterativa il server contattato risponde indicando il prossimo server da interrogare.
- Risposta: **Vero** ✓
- Vero. 'Non lo so, chiedi a quest'altro server'. Nella ricorsiva il server si fa carico di risolvere tutto.
**8. [Vero/Falso]** Il caching DNS riduce il carico sui root server.
- Risposta: **Vero** ✓
- Vero. I resolver memorizzano le risposte (TTL): i root vengono interrogati molto raramente.
**9. [Vero/Falso]** Il DNS utilizza prevalentemente TCP sulla porta 53.
- Risposta: **Falso** ✓
- Falso. Usa prevalentemente UDP sulla 53: una query, una risposta, leggerezza prima dell'affidabilità.
**10. [Vero/Falso]** In BitTorrent la strategia tit-for-tat premia con più banda i peer che ricambiano caricando.
- Risposta: **Vero** ✓
- Vero. Scoraggia il free-riding; la selezione dei chunk segue invece il rarest-first.
**11. [Vero/Falso]** Nell'architettura P2P ogni nuovo peer aggiunge capacità di upload al sistema (auto-scalabilità).
- Risposta: **Vero** ✓
- Vero. È la proprietà chiave del P2P: più utenti → più banda totale.
**12. [Vero/Falso]** Nello streaming DASH è il server a decidere il bitrate da inviare al client.
- Risposta: **Falso** ✓
- Falso. L'intelligenza è nel client: misura la banda e sceglie il bitrate dei segmenti dal manifest.
**13. [Vero/Falso]** Una CDN passa al paradigma P2P per distribuire i contenuti.
- Risposta: **Falso** ✓
- Falso. La CDN resta logicamente centralizzata: replica/cache vicino agli utenti e reindirizza (spesso via DNS).
**14. [Vero/Falso]** La GET condizionale (If-Modified-Since) evita di ritrasmettere un oggetto se la copia in cache è aggiornata (risposta 304).
- Risposta: **Vero** ✓
- Vero. Se non è cambiato, il server risponde 304 Not Modified senza rispedire l'oggetto.
**15. [Scelta multipla]** Quale porta usa di default HTTP (non cifrato)?
- 80 ✓
- 25
- 443
- 53
- _Spiegazione:_ HTTP: 80. HTTPS (TLS): 443. SMTP: 25. DNS: 53.
**16. [Scelta multipla]** Qual è il limite strutturale principale dell'architettura client-server pura?
- Richiede troppe porte
- Non funziona su Internet
- Capacità centralizzata: il server è collo di bottiglia/SPOF ✓
- Non supporta TCP
- _Spiegazione:_ La capacità è concentrata sul server; all'aumentare dei client diventa il collo di bottiglia ed è un single point of failure.
**17. [Scelta multipla]** In HTTP non persistente, quanti RTT (circa) servono per ogni oggetto, escluso il tempo di trasmissione?
- 3
- 1
- 0
- 2 (uno per la connessione, uno per richiesta/risposta) ✓
- _Spiegazione:_ Setup TCP (1 RTT) + richiesta/prima parte risposta (1 RTT).
**18. [Scelta multipla]** Quale record DNS mappa un nome host nel suo indirizzo IPv4?
- CNAME
- NS
- MX
- A ✓
- _Spiegazione:_ A = nome→IPv4. AAAA = IPv6. NS = server dei nomi. CNAME = alias. MX = server di posta.
**19. [Scelta multipla]** Cosa fa un proxy / web cache?
- Instrada i pacchetti
- Cifra il traffico
- Memorizza copie vicino agli utenti per ridurre traffico e latenza ✓
- Traduce nomi in IP
- _Spiegazione:_ Agisce da client verso l'origine e da server verso il client; riduce il traffico sul link d'accesso.
**20. [Scelta multipla]** In una query DNS ricorsiva, il carico della risoluzione ricade su:
- Solo il root server
- Il browser
- Il client
- Il server contattato, che risolve per intero ✓
- _Spiegazione:_ La ricorsiva sposta l'onere sul server contattato; carica molto i livelli alti della gerarchia.
**21. [Scelta multipla]** Perché HTTP/3 abbandona TCP a favore di QUIC (UDP)?
- Evita l'head-of-line blocking di trasporto e velocizza l'handshake ✓
- Perché UDP è affidabile
- Per eliminare i cookie
- Per usare la porta 80
- _Spiegazione:_ QUIC fonde handshake e cifratura e gestisce flussi paralleli senza HOL blocking.
**22. [Scelta multipla]** Una pagina ha 1 file base + 10 immagini. Con HTTP non persistente e senza connessioni parallele (2 RTT/oggetto), quanti RTT per setup+richieste?
- 20
- 22 (2 × 11 oggetti) ✓
- 2
- 11
- _Spiegazione:_ 11 oggetti totali × 2 RTT = 22 RTT (escluso il tempo di trasmissione).
**23. [Domanda aperta]** Confronta Client-Server e P2P. Quali criticità affronta un 'Mega-Server' (Netflix/YouTube) e come si inseriscono le CDN?
- Punti chiave:
  - Client-Server: host sempre attivo con IP fisso e noto; i client comunicano solo col server; capacità centralizzata → collo di bottiglia all'aumentare dei client.
  - P2P: i peer agiscono da client e server insieme; auto-scalabilità (ogni peer aggiunge upload).
  - Criticità del Mega-Server: Single Point of Failure; congestione/saturazione dei link ISP vicini; latenza e buffering per i client lontani; costi e inefficienza dell'infrastruttura.
  - CDN (contesto logico): replica/caching del contenuto su server geograficamente dislocati + reindirizzamento (spesso via DNS) al server più vicino o meno carico.
  - CDN (contesto topologico): il contenuto resta logicamente centralizzato ma la topologia è distribuita, avvicinandolo al bordo della rete.
**24. [Domanda aperta]** Perché il DNS è un database distribuito e gerarchico? Differenza tra query iterativa e ricorsiva.
- Punti chiave:
  - Distribuito/gerarchico perché un singolo server sarebbe SPOF, collo di bottiglia, costoso da mantenere e lontano da molti utenti.
  - Gerarchia: root → TLD (.it, .com) → autoritativi; più il resolver DNS locale che interroga per conto dell'host.
  - Iterativa: il server contattato risponde indicando il prossimo server da contattare.
  - Ricorsiva: il server contattato si fa carico di risolvere completamente il nome.
  - Il caching dei resolver riduce drasticamente il carico, specie sui root.
**25. [Domanda aperta]** Spiega HTTP persistente vs non persistente e l'impatto sugli RTT.
- Punti chiave:
  - Non persistente: una connessione TCP per oggetto → ~2 RTT per oggetto (setup + richiesta/risposta) + overhead del SO.
  - Persistente (HTTP/1.1): la connessione resta aperta e serve più oggetti → meno RTT.
  - HTTP/2 multiplexa più richieste su una connessione per attenuare l'head-of-line blocking applicativo; HTTP/3 lo risolve anche a livello di trasporto con QUIC.

## 3 — Strato di Trasporto

**1. [Vero/Falso]** Il demultiplexing UDP usa solo (IP destinazione, porta destinazione).
- Risposta: **Vero** ✓
- Vero. Per questo due segmenti con stessa porta di destinazione ma origine diversa finiscono nello stesso socket.
**2. [Vero/Falso]** Il demultiplexing TCP usa la quadrupla (IP sorg., porta sorg., IP dest., porta dest.).
- Risposta: **Vero** ✓
- Vero. Ogni connessione ha il suo socket: è il motivo per cui il server TCP crea un socket nuovo per ogni client.
**3. [Vero/Falso]** Due segmenti UDP con stessa porta di destinazione ma IP sorgente diverso vengono consegnati a socket diversi.
- Risposta: **Falso** ✓
- Falso. UDP demultiplexa solo sulla destinazione → stesso socket. È TCP a distinguerli con la quadrupla.
**4. [Vero/Falso]** UDP effettua un handshake prima di inviare i dati.
- Risposta: **Falso** ✓
- Falso. UDP è connectionless: nessun handshake, il datagramma parte subito.
**5. [Vero/Falso]** UDP garantisce la consegna in ordine dei datagrammi.
- Risposta: **Falso** ✓
- Falso. Nessuna garanzia di consegna né di ordine. L'affidabilità, se serve, si implementa nell'applicazione.
**6. [Vero/Falso]** Il checksum UDP fornisce un rilevamento d'errore forte e corregge gli errori.
- Risposta: **Falso** ✓
- Falso. È un rilevamento d'errore debole (somma a complemento a uno) e non corregge nulla.
**7. [Vero/Falso]** Lo stop-and-wait ha bassa efficienza perché il mittente attende l'ACK prima del pacchetto successivo.
- Risposta: **Vero** ✓
- Vero. Per quasi tutto l'RTT il link è fermo: utilizzo bassissimo. Da qui il pipelining.
**8. [Vero/Falso]** In Go-Back-N il ricevitore bufferizza i pacchetti arrivati fuori ordine.
- Risposta: **Falso** ✓
- Falso. Il ricevitore GBN scarta il fuori ordine e re-invia l'ACK dell'ultimo ricevuto in ordine. È Selective Repeat a bufferizzare.
**9. [Vero/Falso]** In Go-Back-N gli ACK sono cumulativi.
- Risposta: **Vero** ✓
- Vero. ACK(n) conferma n e tutti i precedenti.
**10. [Vero/Falso]** In Go-Back-N, allo scadere del timer il mittente ritrasmette solo il pacchetto perso.
- Risposta: **Falso** ✓
- Falso. Ritrasmette TUTTI i pacchetti nella finestra (timer unico sul più vecchio non riscontrato). Da qui il nome.
**11. [Vero/Falso]** In Selective Repeat il ricevitore invia ACK individuali e bufferizza i fuori ordine.
- Risposta: **Vero** ✓
- Vero. Timer per pacchetto, ritrasmette solo i persi; finestra ≤ metà dello spazio dei numeri di sequenza.
**12. [Vero/Falso]** In TCP il numero di sequenza indica la posizione nel flusso di byte del primo byte del segmento.
- Risposta: **Vero** ✓
- Vero. TCP è un flusso di byte; gli ACK sono cumulativi e indicano il prossimo byte atteso.
**13. [Vero/Falso]** Il fast retransmit di TCP scatta dopo 3 ACK duplicati.
- Risposta: **Vero** ✓
- Vero. Ritrasmette subito il segmento mancante senza attendere il timeout.
**14. [Vero/Falso]** Il controllo di flusso protegge la rete dalla congestione.
- Risposta: **Falso** ✓
- Falso. Il flusso protegge il RICEVITORE (rwnd). La congestione riguarda la RETE (cwnd). Trappola ricorrente.
**15. [Vero/Falso]** Nello slow start la finestra di congestione cresce in modo lineare.
- Risposta: **Falso** ✓
- Falso. Cresce esponenzialmente (raddoppia ogni RTT) fino a ssthresh; poi diventa lineare (congestion avoidance).
**16. [Vero/Falso]** Il three-way handshake serve a sincronizzare i numeri di sequenza iniziali di entrambe le parti.
- Risposta: **Vero** ✓
- Vero. Sincronizza gli ISN nelle due direzioni ed evita connessioni fantasma da vecchi duplicati.
**17. [Vero/Falso]** QUIC gira sopra UDP e gestisce flussi multipli senza head-of-line blocking.
- Risposta: **Vero** ✓
- Vero. Fonde handshake e TLS, flussi paralleli, è la base di HTTP/3.
**18. [Vero/Falso]** In TCP la finestra di ricezione rwnd è annunciata dal mittente.
- Risposta: **Falso** ✓
- Falso. La annuncia il RICEVITORE (spazio libero nel suo buffer); il mittente non la supera.
**19. [Scelta multipla]** Cosa identifica univocamente un socket TCP?
- Solo la porta locale
- Il numero di sequenza
- L'indirizzo MAC
- La quadrupla IP/porta sorgente e destinazione ✓
- _Spiegazione:_ Connection-oriented demultiplexing: 4-tuple.
**20. [Scelta multipla]** Quale campo NON è presente nell'header UDP?
- Porta sorgente
- Checksum
- Numero di sequenza ✓
- Lunghezza
- _Spiegazione:_ UDP ha solo porte, lunghezza e checksum. I numeri di sequenza sono di TCP.
**21. [Scelta multipla]** In Go-Back-N, alla ricezione di ACK(n) il mittente:
- Chiude la connessione
- Scarta la finestra
- Ritrasmette n
- Fa scorrere la base della finestra a n+1 ✓
- _Spiegazione:_ ACK cumulativo: la base avanza e si liberano slot per nuovi invii.
**22. [Scelta multipla]** Quale relazione evita ambiguità in Selective Repeat?
- Finestra ≤ metà dello spazio dei numeri di sequenza ✓
- Finestra = 1
- Nessuna
- Finestra = spazio dei numeri
- _Spiegazione:_ Altrimenti il ricevitore non distingue pacchetti nuovi da ritrasmessi.
**23. [Scelta multipla]** Alla perdita rilevata per timeout, TCP (classico) imposta la finestra di congestione a:
- 1 MSS ✓
- rwnd
- Zero
- Metà
- _Spiegazione:_ Timeout → cwnd = 1 (ripartenza con slow start). 3 ACK duplicati → metà (Reno).
**24. [Scelta multipla]** Alla perdita rilevata per 3 ACK duplicati, TCP Reno:
- La porta a 1
- Non cambia
- La raddoppia
- Dimezza la finestra ✓
- _Spiegazione:_ Decremento moltiplicativo: la rete è congestionata ma 'meno grave' del timeout.
**25. [Scelta multipla]** Cos'è AIMD?
- Solo aumento
- Solo decremento
- Aumento additivo, decremento moltiplicativo ✓
- Aumento moltiplicativo, decremento additivo
- _Spiegazione:_ Additive Increase / Multiplicative Decrease: il classico 'dente di sega' di TCP.
**26. [Scelta multipla]** Perché il three-way handshake usa 3 fasi e non 2?
- Per il controllo di flusso
- Per sincronizzare in modo affidabile gli ISN di entrambe le parti ed evitare connessioni fantasma ✓
- Per cifrare
- È una scelta arbitraria
- _Spiegazione:_ Un 2-way non gestisce ritardi/riordino/duplicati: vecchi SYN potrebbero aprire connessioni fantasma.
**27. [Scelta multipla]** Quale di questi è un tipico uso di UDP?
- Trasferimento file affidabile
- Posta SMTP
- DNS ✓
- Transazioni bancarie
- _Spiegazione:_ DNS, streaming/VoIP, gaming, SNMP. Le applicazioni che esigono affidabilità usano TCP.
**28. [Scelta multipla]** La differenza chiave tra controllo di flusso e di congestione:
- Congestione riguarda il buffer del ricevitore
- Flusso riguarda i router
- Sono identici
- Flusso protegge il ricevitore, congestione protegge la rete ✓
- _Spiegazione:_ rwnd (ricevitore) vs cwnd (rete). Trappola d'esame frequentissima.
**29. [Domanda aperta]** Spiega il funzionamento del Go-Back-N, lato sender e lato receiver.
- Punti chiave:
  - Protocollo pipelined con finestra scorrevole di dimensione N (più efficiente dello stop-and-wait).
  - Sender — dati dall'app: se la finestra non è piena, numera il pacchetto, lo invia, sposta i puntatori; se piena, attende.
  - Sender — ACK cumulativo: ACK(n) conferma n e i precedenti → la base scorre a n+1, liberando slot.
  - Sender — timeout: timer unico sul pacchetto più vecchio non riscontrato; allo scadere ritrasmette TUTTI i pacchetti nella finestra e riavvia il timer.
  - Receiver: semplice, NON bufferizza il fuori ordine; tiene solo il numero di sequenza atteso.
  - Receiver — pacchetto atteso: lo consegna, invia ACK, incrementa l'atteso.
  - Receiver — fuori ordine/errato: lo scarta e re-invia l'ACK dell'ultimo ricevuto in ordine (ACK duplicato).
**30. [Domanda aperta]** Caratteristiche principali di UDP e tre scenari in cui è più idoneo di TCP.
- Punti chiave:
  - Connectionless: nessun handshake preliminare.
  - Senza stato: ogni datagramma è gestito in modo indipendente.
  - Consegna non affidabile: nessuna garanzia di consegna o ordine, nessun ACK/ritrasmissione.
  - Niente controllo di flusso o congestione; header minimo (porte, lunghezza, checksum debole).
  - Scenario A — Streaming/VoIP: conta la bassa latenza, un pacchetto perso si ignora.
  - Scenario B — DNS: una query, una risposta; se manca, si reinvia (niente connessione).
  - Scenario C — Gaming: conta solo lo stato più recente; ritrasmettere un pacchetto vecchio è inutile.
**31. [Domanda aperta]** Descrivi il controllo di congestione TCP: AIMD, slow start e cosa succede alla perdita.
- Punti chiave:
  - È end-to-end, basato sull'osservazione delle perdite.
  - AIMD: aumento additivo (+1 MSS per RTT) finché va bene; decremento moltiplicativo (dimezza) alla perdita.
  - Slow start: crescita esponenziale (raddoppia ogni RTT) fino alla soglia ssthresh.
  - Poi congestion avoidance: crescita lineare.
  - Perdita per timeout → cwnd = 1; per 3 ACK duplicati → cwnd dimezzata (Reno).
  - Estensioni: CUBIC (link veloci), ECN (router marcano invece di scartare), fairness ~ R/K.
**32. [Domanda aperta]** Un ricevitore Go-Back-N ha ricevuto in ordine fino al pacchetto 4; poi arriva il pacchetto 6 (manca il 5). Cosa fa e quale ACK invia?
- Punti chiave:
  - Scarta il pacchetto 6 (GBN non bufferizza il fuori ordine).
  - Re-invia l'ACK del pacchetto 4 (l'ultimo ricevuto correttamente in ordine).
  - Questo ACK duplicato dice al mittente fin dove è arrivato; alla scadenza del timer il mittente ritrasmetterà dal 5 in poi.

## 4 — Rete: Data Plane

**1. [Vero/Falso]** Il forwarding è un'azione locale del singolo router; il routing è un processo globale.
- Risposta: **Vero** ✓
- Vero. Forwarding = input→output di un router (data plane); routing = calcolo dei percorsi (control plane).
**2. [Vero/Falso]** Internet offre un servizio di rete best-effort, senza garanzie di consegna o ritardo.
- Risposta: **Vero** ✓
- Vero. Nessuna garanzia di banda, perdita, ordine o ritardo a livello di rete.
**3. [Vero/Falso]** Il longest prefix matching sceglie la voce con il prefisso corrispondente più lungo (più specifico).
- Risposta: **Vero** ✓
- Vero. A parità di più corrispondenze vince la più specifica.
**4. [Vero/Falso]** Il TTL del datagramma IP viene incrementato a ogni hop.
- Risposta: **Falso** ✓
- Falso. Viene DECREMENTATO: a zero il pacchetto è scartato. Serve a evitare i loop infiniti.
**5. [Vero/Falso]** La frammentazione IP viene riassemblata a ogni router intermedio.
- Risposta: **Falso** ✓
- Falso. Il riassemblaggio avviene solo a destinazione.
**6. [Vero/Falso]** Una subnet è un insieme di interfacce che si raggiungono senza attraversare un router.
- Risposta: **Vero** ✓
- Vero. Condividono lo stesso prefisso di rete.
**7. [Vero/Falso]** Nel subnetting si rubano bit alla parte host per creare l'identificativo di sottorete.
- Risposta: **Vero** ✓
- Vero. Si sposta il confine rete/host: più bit di prefisso, più sottoreti.
**8. [Vero/Falso]** Con un prefisso più lungo (/x maggiore) si hanno più sottoreti ma meno host per sottorete.
- Risposta: **Vero** ✓
- Vero. Più bit al prefisso = meno bit per gli host.
**9. [Vero/Falso]** Il NAT riscrive l'IP sorgente e la porta dei datagrammi in uscita e mantiene una tabella di traduzione.
- Risposta: **Vero** ✓
- Vero. Molti dispositivi privati condividono un IP pubblico; la tabella smista le risposte.
**10. [Vero/Falso]** IPv6 usa indirizzi a 64 bit.
- Risposta: **Falso** ✓
- Falso. IPv6 usa 128 bit (IPv4 ne usa 32).
**11. [Vero/Falso]** I router IPv6 frammentano i datagrammi troppo grandi lungo il percorso.
- Risposta: **Falso** ✓
- Falso. IPv6 non prevede frammentazione nei router intermedi; header fisso e semplificato (niente checksum).
**12. [Vero/Falso]** Il DHCP fornisce solo l'indirizzo IP, niente altro.
- Risposta: **Falso** ✓
- Falso. Fornisce anche maschera di sottorete, gateway predefinito e indirizzo del server DNS.
**13. [Vero/Falso]** L'inoltro generalizzato (OpenFlow) basa l'azione su più campi dell'header (match+action).
- Risposta: **Vero** ✓
- Vero. Confronta campi di livello collegamento/rete/trasporto ed esegue forward/drop/modify.
**14. [Vero/Falso]** L'indirizzamento gerarchico permette l'aggregazione delle rotte.
- Risposta: **Vero** ✓
- Vero. Un ISP annuncia un unico prefisso che riassume molti blocchi dei clienti.
**15. [Scelta multipla]** A cosa serve il TTL nel datagramma IP?
- Misurare la banda
- Frammentare
- Evitare che i pacchetti circolino all'infinito ✓
- Cifrare
- _Spiegazione:_ Decrementato a ogni hop; a zero il pacchetto viene scartato (e si genera un ICMP, sfruttato da traceroute).
**16. [Scelta multipla]** Quale di questi è un blocco di indirizzi privati?
- 1.1.1.0/24
- 8.8.8.0/24
- 192.168.0.0/16 ✓
- 200.23.16.0/20
- _Spiegazione:_ Blocchi privati: 10/8, 172.16/12, 192.168/16. Gli altri sono indirizzi pubblici.
**17. [Scelta multipla]** Con un prefisso /26, quanti indirizzi host assegnabili ci sono per sottorete?
- 254
- 62 (2^6 − 2) ✓
- 30
- 64
- _Spiegazione:_ 32−26 = 6 bit host → 2^6 = 64 indirizzi − 2 (rete e broadcast) = 62.
**18. [Scelta multipla]** Cosa indica la /x nella notazione CIDR a.b.c.d/x?
- Il numero di bit del prefisso di rete ✓
- La versione IP
- Il numero di router
- Il numero di host
- _Spiegazione:_ x = bit del prefisso; restano 32−x bit per gli host.
**19. [Scelta multipla]** Quale struttura trasferisce i pacchetti dalle porte di input a quelle di output in un router?
- Il TTL
- Il checksum
- La switching fabric ✓
- La tabella NAT
- _Spiegazione:_ Realizzata via memoria, bus o crossbar.
**20. [Scelta multipla]** Cosa NON contiene l'header IPv6 rispetto a IPv4?
- Indirizzo sorgente
- Hop limit
- Checksum e campi di frammentazione ✓
- Indirizzo destinazione
- _Spiegazione:_ Header semplificato per velocizzare l'elaborazione nei router.
**21. [Scelta multipla]** Quale politica di scheduling garantisce una banda minima per classe?
- FIFO
- Tail drop
- LIFO
- WFQ ✓
- _Spiegazione:_ Weighted Fair Queuing: Round Robin generalizzato con pesi per classe.
**22. [Scelta multipla]** La transizione da IPv4 a IPv6 usa spesso:
- Il NAT
- Il tunneling (IPv6 dentro IPv4) ✓
- Il DNS
- Il checksum
- _Spiegazione:_ 'Pacchetto dentro un pacchetto' per attraversare tratti ancora solo-IPv4.
**23. [Scelta multipla]** Data la rete 200.23.16.0/20, quanti indirizzi contiene il blocco?
- 4096 ✓
- 1024
- 256
- 65536
- _Spiegazione:_ 32−20 = 12 bit → 2^12 = 4096 indirizzi.
**24. [Scelta multipla]** Devi dividere un /24 in 4 sottoreti uguali. Prefisso e host per sottorete?
- /25, 126 host
- /26, 62 host ✓
- /26, 64 host
- /28, 14 host
- _Spiegazione:_ 4 sottoreti = 2 bit in più → /26; host = 2^6 − 2 = 62.
**25. [Domanda aperta]** Cosa sono le subnet? Che impatto hanno sugli indirizzi IP?
- Punti chiave:
  - Una subnet è una partizione logica di una rete IP più grande; il processo è il subnetting.
  - Motivazione: evitare lo spreco di indirizzi (es. 500 IP necessari vs blocco da 65k); isolare il traffico per sicurezza/gestione; tabelle di instradamento più efficienti.
  - Si creano segmenti più piccoli e gestibili separati da un router.
  - Impatto strutturale: cambia l'interpretazione dei 32 bit. Da Network ID + Host ID si 'rubano' bit all'host per creare il Subnet ID.
  - La maschera / la notazione CIDR (a.b.c.d/x) fissa il confine: più bit al prefisso = più sottoreti ma meno host ciascuna.
**26. [Domanda aperta]** Spiega forwarding vs routing e descrivi i componenti principali di un router.
- Punti chiave:
  - Forwarding: azione locale, sposta il pacchetto dalla porta di input a quella di output usando la tabella (longest prefix matching).
  - Routing: processo globale, calcola i percorsi end-to-end (è il control plane, capitolo successivo).
  - Porte di input: terminazione del collegamento, livello collegamento, lookup.
  - Switching fabric: trasferisce i pacchetti verso l'uscita (memoria/bus/crossbar).
  - Porte di output: buffer e schedulazione (FIFO, priorità, RR, WFQ).
  - Code: HOL blocking in ingresso, perdita per buffer pieno in uscita; servizio best-effort.

## 5 — Rete: Control Plane

**1. [Vero/Falso]** Negli algoritmi link-state ogni nodo conosce l'intera topologia della rete.
- Risposta: **Vero** ✓
- Vero. Tramite flooding dello stato dei collegamenti; poi ognuno calcola i cammini minimi con Dijkstra.
**2. [Vero/Falso]** L'algoritmo distance-vector si basa sull'equazione di Bellman-Ford.
- Risposta: **Vero** ✓
- Vero. Programmazione dinamica: ogni nodo aggiorna le stime usando i vettori dei vicini.
**3. [Vero/Falso]** Nel distance-vector ogni nodo conosce solo il costo verso i vicini diretti e scambia il proprio vettore con loro.
- Risposta: **Vero** ✓
- Vero. Iterativo, asincrono, self-stopping.
**4. [Vero/Falso]** Il problema del count-to-infinity riguarda gli algoritmi link-state.
- Risposta: **Falso** ✓
- Falso. Riguarda il distance-vector ('le cattive notizie viaggiano lente'). Mitigazioni: poisoned reverse.
**5. [Vero/Falso]** OSPF è un protocollo di tipo link-state (usa Dijkstra).
- Risposta: **Vero** ✓
- Vero. Floods link-state advertisements direttamente su IP; organizzato in aree.
**6. [Vero/Falso]** BGP è il protocollo di instradamento inter-AS (tra sistemi autonomi).
- Risposta: **Vero** ✓
- Vero. È 'la colla che tiene insieme Internet'.
**7. [Vero/Falso]** Le decisioni di BGP sono guidate solo dal costo minimo, mai da politiche.
- Risposta: **Falso** ✓
- Falso. BGP è policy-based: contano gli accordi commerciali, non solo il numero di hop.
**8. [Vero/Falso]** L'attributo AS-PATH di BGP serve anche a rilevare i loop.
- Risposta: **Vero** ✓
- Vero. È la lista di AS attraversati; se il proprio AS compare già, c'è un loop.
**9. [Vero/Falso]** Nell'hot-potato routing un AS sceglie l'uscita con il minimo costo intra-dominio per liberarsi presto del traffico.
- Risposta: **Vero** ✓
- Vero. 'Patata bollente': si scarica il traffico il prima possibile, ignorando il costo inter-dominio.
**10. [Vero/Falso]** Nell'SDN il piano di controllo è distribuito su ogni router, come nell'approccio tradizionale.
- Risposta: **Falso** ✓
- Falso. L'SDN usa un controller logicamente centralizzato con visione globale.
**11. [Vero/Falso]** Dijkstra ha complessità O(n^2) con n nodi, migliorabile a O(n log n).
- Risposta: **Vero** ✓
- Vero. Ad ogni iterazione cerca il minimo non ancora incluso; ~n(n+1)/2 confronti.
**12. [Vero/Falso]** ICMP è usato da ping (echo) e da traceroute (TTL scaduto).
- Risposta: **Vero** ✓
- Vero. Trasporta messaggi di controllo/errore incapsulati in datagrammi IP.
**13. [Scelta multipla]** Differenza chiave tra link-state e distance-vector:
- DV usa Dijkstra
- Sono identici
- LS è decentralizzato
- LS: ogni nodo ha la topologia completa e calcola (Dijkstra); DV: gossip tra vicini (Bellman-Ford) ✓
- _Spiegazione:_ Mappa completa in mano a tutti vs voce passata tra vicini che converge.
**14. [Scelta multipla]** Perché si usano protocolli diversi intra-AS e inter-AS?
- Non c'è motivo
- Per usare TCP
- Intra: prestazioni; inter: politica, scalabilità, autonomia ✓
- Per il NAT
- _Spiegazione:_ Dentro un AS conta la performance; tra AS contano gli accordi commerciali e la scala.
**15. [Scelta multipla]** Quali sono due attributi importanti di una rotta BGP?
- rwnd e cwnd
- TTL e checksum
- AS-PATH e NEXT-HOP ✓
- SYN e ACK
- _Spiegazione:_ AS-PATH = sequenza di AS (anche anti-loop); NEXT-HOP = router interno verso l'AS successivo.
**16. [Scelta multipla]** Cosa fa il controller in una rete SDN?
- Risolve i nomi DNS
- Inoltra i pacchetti
- Fa NAT
- Ha la visione globale e calcola/installa le tabelle di inoltro (via OpenFlow) ✓
- _Spiegazione:_ Gli switch diventano 'stupidi' ed eseguono; il cervello è il controller centralizzato.
**17. [Scelta multipla]** OSPF distribuisce le informazioni di stato dei collegamenti tramite:
- DHCP
- Flooding (link-state advertisements) ✓
- DNS
- Scambio col solo vicino
- _Spiegazione:_ Ogni router inonda l'intero AS con lo stato dei propri collegamenti.
**18. [Scelta multipla]** Quale problema affligge il distance-vector quando un collegamento si guasta?
- Head-of-line blocking
- Count-to-infinity (le cattive notizie viaggiano lente) ✓
- Spoofing
- Frammentazione
- _Spiegazione:_ Le stime cattive si propagano lentamente; mitigato (parzialmente) dalla poisoned reverse.
**19. [Scelta multipla]** eBGP e iBGP indicano rispettivamente sessioni:
- TCP / UDP
- Tra AS diversi / dentro lo stesso AS ✓
- Client / server
- Dentro / tra
- _Spiegazione:_ eBGP = esterne (tra AS); iBGP = interne (entro l'AS).
**20. [Scelta multipla]** Il protocollo OpenFlow opera tra:
- Router e NAT
- Due host
- Client e DNS
- Controller e switch (su TCP) ✓
- _Spiegazione:_ Messaggi controller↔switch su TCP (cifratura opzionale).
**21. [Domanda aperta]** Confronta gli algoritmi link-state e distance-vector (conoscenza, calcolo, problemi).
- Punti chiave:
  - Link-state (Dijkstra): conoscenza globale via flooding → ogni nodo ha la topologia completa e calcola i cammini minimi; O(n^2) (o O(n log n)); possibili oscillazioni se i costi dipendono dal traffico.
  - Distance-vector (Bellman-Ford): conoscenza decentralizzata; ogni nodo conosce solo i vicini, mantiene un vettore delle distanze e lo scambia coi vicini; iterativo e self-stopping.
  - Problema del distance-vector: count-to-infinity (le cattive notizie viaggiano lente); poisoned reverse aiuta in parte.
  - Immagine: tutti hanno la mappa (LS) vs gossip tra vicini che converge (DV).
**22. [Domanda aperta]** Perché Internet separa instradamento intra-AS e inter-AS, e cosa fa BGP?
- Punti chiave:
  - Scala: gerarchia in AS → tabelle più piccole, meno traffico di aggiornamento.
  - Autonomia amministrativa: ogni AS gestisce la propria rete.
  - Politica vs prestazioni: dentro l'AS si ottimizza la performance (OSPF, link-state); tra AS contano le politiche commerciali (BGP).
  - BGP: protocollo a vettore di percorso, annuncia rotte con AS-PATH (anche anti-loop) e NEXT-HOP, decide per policy; hot-potato per scaricare presto il traffico.

## Lab — Socket in C

**1. [Vero/Falso]** In socket() il tipo SOCK_STREAM corrisponde a TCP e SOCK_DGRAM a UDP.
- Risposta: **Vero** ✓
- Vero. È l'interruttore che sceglie il protocollo.
**2. [Vero/Falso]** Il client TCP deve chiamare bind() per scegliere la propria porta.
- Risposta: **Falso** ✓
- Falso. Il SO assegna automaticamente una porta effimera; il client non fa bind.
**3. [Vero/Falso]** accept() su un server TCP restituisce un nuovo socket dedicato alla connessione con quel client.
- Risposta: **Vero** ✓
- Vero. Il socket 'padre' resta in ascolto; il 'figlio' gestisce quel client.
**4. [Vero/Falso]** Il socket in ascolto e il socket figlio sono lo stesso descrittore.
- Risposta: **Falso** ✓
- Falso. Sono due descrittori distinti: uno ascolta, l'altro parla con il client.
**5. [Vero/Falso]** htons/htonl convertono da host a network byte order, da usare prima di inviare in rete.
- Risposta: **Vero** ✓
- Vero. ntohs/ntohl fanno il contrario in ricezione. La rete è big-endian.
**6. [Vero/Falso]** La rete usa il little-endian come network byte order.
- Risposta: **Falso** ✓
- Falso. Il network byte order è big-endian.
**7. [Vero/Falso]** In UDP si usano sendto()/recvfrom(), che trasportano l'indirizzo del peer a ogni chiamata.
- Risposta: **Vero** ✓
- Vero. Essendo connectionless, non c'è uno stato che ricordi il peer.
**8. [Vero/Falso]** In UDP il server usa listen() e accept() come in TCP.
- Risposta: **Falso** ✓
- Falso. Niente listen/accept: UDP è connectionless. Il server fa socket → bind → recvfrom/sendto.
**9. [Vero/Falso]** Con un socket UDP non connesso, inviare a un server inesistente fa fallire subito la sendto().
- Risposta: **Falso** ✓
- Falso. La sendto riesce in silenzio; la recvfrom successiva resta bloccata per sempre.
**10. [Vero/Falso]** Con un socket UDP connesso (connect()), inviare a un server inesistente fa fallire la read() (ECONNREFUSED).
- Risposta: **Vero** ✓
- Vero. L'ICMP 'port unreachable' viene recapitato al socket connesso. È il punto dell'assignment.
**11. [Vero/Falso]** connect() su un socket UDP stabilisce una connessione affidabile come TCP.
- Risposta: **Falso** ✓
- Falso. Fissa solo un peer di default: nessuna affidabilità, ordine o controllo. Trappola.
**12. [Vero/Falso]** read() su un socket TCP può restituire meno byte di quelli richiesti.
- Risposta: **Vero** ✓
- Vero. TCP è un flusso di byte senza confini di messaggio: una read dà ciò che è disponibile in quel momento.
**13. [Scelta multipla]** Quale sequenza di chiamate è corretta per un SERVER TCP?
- socket → connect → write → close
- socket → recvfrom → sendto
- socket → bind → listen → accept → read/write → close ✓
- bind → socket → accept
- _Spiegazione:_ Togli listen e accept fallisce; togli bind e i client non sanno dove trovarti.
**14. [Scelta multipla]** Quale sequenza è corretta per un CLIENT TCP?
- connect → socket
- socket → connect → write/read → close ✓
- socket → bind → listen → accept
- socket → recvfrom
- _Spiegazione:_ Il client apre il socket, si connette (3-way handshake), scambia dati, chiude.
**15. [Scelta multipla]** Per passare da TCP a UDP nel codice, cosa cambi in socket()?
- La famiglia AF_INET
- La porta
- Niente
- Il tipo: da SOCK_STREAM a SOCK_DGRAM ✓
- _Spiegazione:_ È l'unica modifica necessaria a socket().
**16. [Scelta multipla]** Perché accept() restituisce un socket diverso da quello in ascolto?
- Per chiudere prima
- Per cifrare
- Per il byte order
- Ogni connessione è identificata dalla quadrupla e il socket in ascolto deve restare libero per nuove connessioni ✓
- _Spiegazione:_ È il connection-oriented demultiplexing: un socket per connessione.
**17. [Scelta multipla]** Cosa fa htons(porta)?
- Risolve il nome
- Legge dal socket
- Apre la connessione
- Converte la porta (16 bit) in network byte order ✓
- _Spiegazione:_ La porta è uno 'short' a 16 bit → htons. L'indirizzo a 32 bit → htonl.
**18. [Scelta multipla]** In UDP, quale chiamata riempie l'indirizzo del mittente del datagramma ricevuto?
- recvfrom() ✓
- listen()
- accept()
- read()
- _Spiegazione:_ recvfrom riempie la struttura del mittente, così il server può rispondergli con sendto.
**19. [Scelta multipla]** Cosa fa memset(buffer, 0, sizeof(buffer)) prima di una read()?
- Azzera il buffer: la stringa risulta terminata da \0 e senza spazzatura ✓
- Chiude il socket
- Converte il byte order
- Invia i dati
- _Spiegazione:_ Garantisce un terminatore oltre i byte letti; senza, il buffer conterrebbe valori casuali dallo stack.
**20. [Scelta multipla]** Un valore di ritorno 0 da read() su un socket TCP significa:
- Timeout
- La connessione è stata chiusa dall'altro lato ✓
- 0 byte ma connessione aperta per sempre
- Errore
- _Spiegazione:_ >0 byte letti; 0 = chiusura; −1 = errore.
**21. [Codice]** Commenta cosa fa questo blocco e perché si controlla il valore di ritorno.

```c
returnStatus = bind(simpleSocket, (struct sockaddr *)&simpleServer, sizeof(simpleServer));
if (returnStatus != 0) {
    fprintf(stderr, "Could not bind to address!\n");
    close(simpleSocket);
    exit(1);
}
```
- Punti chiave:
  - bind() lega il socket a IP + porta locali: da qui il socket 'possiede' quella porta.
  - Cast a (struct sockaddr *): la funzione vuole il tipo generico, gli passi la versione IPv4.
  - Ritorna 0 se ok; ≠0 in caso di errore.
  - Errore tipico: porta già occupata (EADDRINUSE) → si chiude il socket e si esce.
  - Controllare il ritorno serve a gestire l'errore invece di proseguire su uno stato non valido.
**22. [Codice]** Spiega cosa succede in questa riga del server TCP.

```c
simpleChildSocket = accept(simpleSocket,
                          (struct sockaddr *)&clientName,
                          &clientNameLength);
```
- Punti chiave:
  - accept() si BLOCCA finché un client non arriva.
  - Completa il three-way handshake con quel client.
  - Restituisce un NUOVO socket (figlio) dedicato a quella connessione.
  - Riempie clientName con l'indirizzo del client (IP e porta).
  - Il socket originale (simpleSocket) resta in ascolto per i prossimi client.
**23. [Codice]** Cosa fanno esattamente queste due righe e come collaborano?

```c
memset(buffer, '\0', sizeof(buffer));
returnStatus = read(simpleChildSocket, buffer, sizeof(buffer));
```
- Punti chiave:
  - memset azzera tutti i 256 byte di buffer: niente spazzatura e terminatore garantito.
  - read legge dal socket FIGLIO (non da quello in ascolto), al massimo sizeof(buffer) byte.
  - read si blocca finché non ci sono dati; ritorna n byte (>0 letti, 0 chiusura, −1 errore).
  - Insieme: i byte ricevuti + gli zeri residui formano una stringa C valida per la printf.
  - Sottigliezza: read NON termina la stringa; lo fa il memset (o un esplicito buffer[n]='\0').
**24. [Codice]** Perché qui si usano write()/read() invece di sendto()/recvfrom(), e cosa succede se il server non esiste?

```c
connect(simpleSocket, (struct sockaddr*)&simpleServer, sizeof(simpleServer));
write(simpleSocket, buffer, strlen(buffer));
returnStatus = read(simpleSocket, buffer, sizeof(buffer));
```
- Punti chiave:
  - connect() su un socket UDP NON apre una connessione: fissa solo un peer di default nel kernel.
  - Con il peer fissato puoi usare write()/read() senza ripetere l'indirizzo a ogni chiamata.
  - Non è TCP: nessuna affidabilità, ordine o controllo di flusso/congestione.
  - Verso un server inesistente: l'ICMP 'port unreachable' torna al socket connesso → la read() FALLISCE (ECONNREFUSED).
  - Contrasto: con socket NON connesso la sendto riesce in silenzio e la recvfrom resta bloccata.
