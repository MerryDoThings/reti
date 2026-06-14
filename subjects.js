/* ============================================================================
   subjects.js — configurazione condivisa di tutte le materie.
   Usato sia dalla home (index.html) sia dal template unico (materia.html).
   Per aggiungere una materia: aggiungi una voce a SUBJECTS con i suoi file dati
   (bank/meta), il tema colore, i testi e la sponsorizzazione.
   ========================================================================== */

/* Link di supporto (donazioni) — condivisi tra home e pagine materia.
   Sono URL pubblici: nessun dato sensibile finisce nel repo. */
const SUPPORT = {
  message: "Questo strumento è gratis e resta gratis, senza pubblicità. " +
           "Se ti sta facendo risparmiare ore di studio (o qualche ripetizione), " +
           "puoi offrirmi un caffè: bastano pochi euro per tenerlo online e " +
           "aggiungere nuove materie. Nessun obbligo — davvero.",
  links: [
    { label: "Ko-fi",          url: "https://ko-fi.com/merrydothings" },
    { label: "Buy Me a Coffee", url: "https://buymeacoffee.com/MerryDoThings" }
  ]
};

const SUBJECTS = {

  /* ----------------------------------------------------------------- RETI */
  reti: {
    id: "reti",
    name: "Reti",
    kicker: "Laboratorio d'esame",
    sub: "Kurose–Ross · trainer interattivo",
    blurb: "Banca domande e quiz su tutto il programma: architettura, applicativo, trasporto, rete e laboratorio.",
    railHead: ["Gli strati", "protocolli"],
    key: "reti_trainer_v1",
    bank: "reti_bank.js",
    meta: "reti_meta.js",
    extras: null,
    /* palette accento (ambra) + colori dell'animazione di sfondo */
    accent: "#E0913A",
    canvas: { link: "214,178,120", dot: "220,180,120", pkt: "244,182,98", pktCore: "255,226,172" },
    sponsor: {
      type: "promo",
      badgeHtml: '<b>Riassunto scritto</b> Cap. 1–5 + Lab · 5€',
      html: `
        <div class="promo-tab">extra · facoltativo</div>
        <div class="promo-grid">
          <div class="promo-main">
            <span class="promo-eyebrow">Materiale aggiuntivo</span>
            <h2 class="promo-title">Riassunto scritto completo del corso</h2>
            <p class="promo-lede">Il quiz e la banca domande qui sopra sono e restano <b>gratuiti</b>.
            Ho preparato anche un riassunto scritto completo (Cap. 1–5 + Lab) — spiegazioni chiare passo
            per passo, pensate per chi deve recuperare in poco tempo.</p>
            <ul class="promo-list">
              <li>Spiegazioni discorsive capitolo per capitolo (Internet · Applicazione · Trasporto ·
                Rete Data Plane · Rete Control Plane), pensate per essere chiare dalla prima lettura
                anche senza aver seguito a lezione, con analogie ed esempi</li>
              <li>Tabelle dei concetti chiave per ogni capitolo</li>
              <li>Un riassunto finale che collega tutti gli argomenti</li>
              <li>Sezione di laboratorio (socket in C)</li>
            </ul>
            <div class="promo-coverage">
              <span class="dotline" aria-hidden="true"></span>
              copertura: Cap. 1–5 + Laboratorio — aggiornato 11/06/2026
            </div>
          </div>
          <aside class="promo-side">
            <div class="promo-price">
              <span class="promo-price-num">5€</span>
              <span class="promo-price-note">materiale inviato subito dopo<br>la ricezione del pagamento</span>
            </div>
            <div class="promo-block">
              <span class="promo-label">Come contattarmi</span>
              <ul class="promo-contacts">
                <li>Scrivimi in privato</li>
                <li>Taggami nel gruppo <b>"2° Anno Informatica VC 2025/26"</b> come <b>@[deleted]</b></li>
                <li>Oppure scrivi a <a href="mailto:20059736@studenti.uniupo.it">20059736@studenti.uniupo.it</a></li>
              </ul>
            </div>
            <div class="promo-block">
              <span class="promo-label">Metodi di pagamento</span>
              <div class="promo-pay">
                <span class="paychip">PayPal</span>
                <span class="paychip">Bonifico istantaneo (IBAN)</span>
                <span class="paychip">Revolut</span>
              </div>
            </div>
          </aside>
        </div>`
    }
  },

  /* --------------------------------------------------------------- ALGO 2 */
  algo2: {
    id: "algo2",
    name: "Algoritmi 2",
    kicker: "Laboratorio d'esame",
    sub: "Grafi · greedy · PD · NP · trainer interattivo",
    blurb: "Banca domande su tutto il programma + gli esercizi pratici tipici dello scritto, da svolgere passo passo.",
    railHead: ["Le aree", "argomenti"],
    key: "algo2_trainer_v1",
    bank: "algo2_bank.js",
    meta: "algo2_meta.js",
    extras: "algo2_exercises.js",
    /* palette accento (viola / indaco) + animazione di sfondo abbinata */
    accent: "#7C5CFC",
    canvas: { link: "150,130,210", dot: "162,140,224", pkt: "168,139,255", pktCore: "214,200,255" },
    sponsor: {
      type: "notice",
      badgeHtml: '<b>Appunti</b> · in lavorazione',
      html: `
        <div class="promo-tab">appunti · in lavorazione</div>
        <div class="promo-grid notice">
          <div class="promo-main">
            <span class="promo-eyebrow">Materiale aggiuntivo</span>
            <h2 class="promo-title">Appunti di Algoritmi 2 — in lavorazione</h2>
            <p class="promo-lede">Il quiz, la banca domande e gli esercizi d'esame qui sopra sono e restano
            <b>gratuiti</b> e coprono già tutto il programma. Nel tempo libero sto provando a mettere insieme
            anche degli appunti scritti, ma <b>non prometto niente</b>: nessuna data e nessuna garanzia che vengano
            davvero pubblicati.</p>
            <div class="promo-coverage">
              <span class="dotline" aria-hidden="true"></span>
              nessuna promessa — usa intanto il materiale gratuito qui sopra
            </div>
          </div>
          <aside class="promo-side">
            <div class="promo-price">
              <span class="promo-price-num">—</span>
              <span class="promo-price-note">nessuna data,<br>nessuna promessa</span>
            </div>
            <div class="promo-block">
              <span class="promo-label">Nel frattempo</span>
              <ul class="promo-contacts">
                <li>Usa la banca domande e gli <b>esercizi d'esame</b> qui sopra: coprono tutto il programma</li>
                <li>Se ti sono utili, puoi sostenere il progetto dai pulsanti di supporto</li>
              </ul>
            </div>
          </aside>
        </div>`
    }
  }

};
