import { useState } from "react";
import { EnglishSite } from "./EnglishSite.jsx";

const steps = [
  ["01", "Votre projet", "Nous cadrons votre activité, vos associés et votre calendrier."],
  ["02", "La structure", "Nous vous aidons à choisir la forme juridique adaptée."],
  ["03", "La création", "Nous coordonnons les formalités et les documents nécessaires."],
  ["04", "Le démarrage", "Comptabilité, fiscalité et paie sont préparées dès le départ."],
  ["05", "Le suivi", "Votre équipe CAF reste votre interlocuteur unique au Maroc."],
];

const services = [
  ["01", "Création d’entreprise", "Choix de la structure, constitution du dossier et accompagnement administratif."],
  ["02", "Conseil fiscal", "Une organisation fiscale claire, conforme et adaptée à votre projet."],
  ["03", "Comptabilité", "Une gestion complète, des clôtures fiables et une visibilité régulière."],
  ["04", "Juridique & RH", "Contrats, droit du travail, paie et obligations sociales sous un même toit."],
  ["05", "Business plan", "Prévisions, financement et feuille de route pour lancer votre activité."],
  ["06", "Accompagnement", "Un suivi durable pour votre installation, votre croissance et vos décisions."],
];

const faqs = [
  ["Puis-je créer mon entreprise au Maroc depuis la France ?", "Oui. CAF Management vous accompagne à distance pour cadrer le projet, préparer les documents et organiser les formalités qui peuvent être traitées avant votre venue."],
  ["Quel type de société choisir ?", "Le bon choix dépend de l’activité, des associés, du financement et de votre situation fiscale. Un premier échange permet d’identifier la structure la plus pertinente."],
  ["CAF peut-il gérer la comptabilité après la création ?", "Oui. Le cabinet réunit création, comptabilité, fiscalité, paie, juridique, audit et conseil afin de rester votre interlocuteur unique."],
  ["Combien de temps faut-il prévoir ?", "Le calendrier dépend de la structure choisie et de la disponibilité des pièces. Après étude de votre projet, l’équipe vous remet les étapes et le planning correspondant."],
];

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function FrenchLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const navigate = (id) => {
    setMenuOpen(false);
    scrollToId(id);
  };

  const submitLead = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      <div className="topbar">
        <div className="shell topbar-inner">
          <span>Conseil · Audit · Finance</span>
          <span>Casablanca · Depuis 1993</span>
        </div>
      </div>

      <header className="site-header">
        <div className="shell header-inner">
          <button className="brand" onClick={() => navigate("accueil")} aria-label="Retour à l’accueil">
            <img src="/assets/brand/caf-primary-mark.webp" alt="CAF Management" />
          </button>
          <nav className={menuOpen ? "nav nav-open" : "nav"} aria-label="Navigation principale">
            <button onClick={() => navigate("services")}>Services</button>
            <button onClick={() => navigate("methode")}>Notre méthode</button>
            <button onClick={() => navigate("cabinet")}>Le cabinet</button>
            <button onClick={() => navigate("questions")}>Questions</button>
            <a className="language-link" href="/en/" lang="en">EN</a>
          </nav>
          <button className="header-cta" onClick={() => navigate("contact")}>Parler à un conseiller</button>
          <button className="menu-button" onClick={() => setMenuOpen((value) => !value)} aria-expanded={menuOpen}>
            {menuOpen ? "Fermer" : "Menu"}
          </button>
        </div>
      </header>

      <section className="hero" id="accueil">
        <img className="hero-background" src="/assets/generated/caf-casablanca-hero.webp" alt="Casablanca au crépuscule depuis une terrasse d’affaires contemporaine" fetchPriority="high" />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="shell hero-shell">
          <div className="hero-copy">
            <p className="eyebrow light">Créer et entreprendre au Maroc</p>
            <h1>Votre projet au Maroc.<br /><span>Pris en charge de <i className="nowrap">A à Z.</i></span></h1>
            <p className="hero-intro">Depuis la France, avancez avec une équipe locale qui réunit création, fiscalité, comptabilité, juridique et paie.</p>
            <div className="hero-actions">
              <button className="button button-cyan" onClick={() => navigate("contact")}>Présenter mon projet</button>
              <button className="button button-ghost" onClick={() => navigate("methode")}>Voir les étapes</button>
            </div>
            <div className="hero-note">
              <strong>CAF Management</strong>
              <span>Votre interlocuteur unique au Maroc depuis 1993.</span>
            </div>
          </div>
          <div className="hero-card">
            <span>France → Maroc</span>
            <strong>Un accompagnement clair, humain et local.</strong>
          </div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Chiffres clés">
        <div className="proof-item"><strong>30+</strong><span>années d’expérience</span></div>
        <div className="proof-item"><strong>300+</strong><span>clients actifs</span></div>
        <div className="proof-item"><strong>5</strong><span>domaines d’expertise</span></div>
        <div className="proof-item"><strong>1</strong><span>interlocuteur unique</span></div>
      </section>

      <section className="section section-white" id="methode">
        <div className="shell">
          <div className="section-heading heading-split">
            <div>
              <p className="eyebrow">One stop shop</p>
              <h2>Nous nous occupons de tout.</h2>
            </div>
            <p>Vous gardez une vision claire du projet pendant que nos équipes coordonnent les démarches au Maroc.</p>
          </div>
          <div className="steps-grid">
            {steps.map(([number, title, text]) => (
              <article className="step-card" key={number}>
                <span className="step-number">{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="audience-section">
        <div className="audience-image">
          <img src="/assets/generated/caf-cross-border-advisory.webp" alt="Séance de conseil entre un entrepreneur et deux experts à Casablanca" loading="lazy" />
          <div className="image-caption"><span>France → Maroc</span><strong>Décider avec une équipe qui connaît le terrain.</strong></div>
        </div>
        <div className="audience-copy">
          <p className="eyebrow light">Depuis la France</p>
          <h2>Un projet marocain mérite une équipe qui connaît le terrain.</h2>
          <div className="audience-columns">
            <article>
              <span>01</span>
              <h3>Vous souhaitez entreprendre ou revenir au Maroc</h3>
              <p>Nous transformons votre idée en étapes concrètes et vous accompagnons dans sa mise en place.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Votre entreprise veut s’implanter au Maroc</h3>
              <p>Nous coordonnons l’entrée sur le marché et le suivi administratif, financier et fiscal.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="shell">
          <div className="services-intro">
            <div className="section-heading">
              <p className="eyebrow light">Nos services</p>
              <h2>Une expertise complète.<br />Un seul cabinet.</h2>
              <p className="services-lede">De la première décision à la gestion quotidienne, CAF réunit les compétences nécessaires pour vous éviter de coordonner plusieurs interlocuteurs.</p>
            </div>
            <div className="signature-visual">
              <img src="/assets/generated/caf-architectural-signature.webp" alt="Architecture contemporaine marocaine en pierre et verre bleu" loading="lazy" />
              <span>L’exigence dans chaque détail</span>
            </div>
          </div>
          <div className="services-grid">
            {services.map(([number, title, text]) => (
              <article className="service-card" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section cabinet-section" id="cabinet">
        <div className="shell cabinet-grid">
          <div className="cabinet-copy">
            <p className="eyebrow">Pourquoi CAF Management</p>
            <h2>La proximité d’une équipe locale. La rigueur d’un partenaire expérimenté.</h2>
            <p>Depuis 1993, CAF Management accompagne des entreprises de toutes tailles dans leur création, leur gestion et leur développement.</p>
            <div className="values-row">
              <span>Qualité</span><span>Rigueur</span><span>Transparence</span><span>Proximité</span>
            </div>
            <button className="button button-navy" onClick={() => navigate("contact")}>Échanger avec l’équipe</button>
          </div>
          <div className="cabinet-visual">
            <img src="/assets/extracted/deck2-p06-01.jpg" alt="Équipe de CAF Management" />
            <div className="portrait-card">
              <img src="/assets/extracted/deck1-p07-06.jpg" alt="Abdelmjid Samri, Managing Partner" />
              <div><strong>Abdelmjid Samri</strong><span>Managing Partner</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section faq-section" id="questions">
        <div className="shell faq-grid">
          <div className="section-heading">
            <p className="eyebrow">Questions fréquentes</p>
            <h2>Les premières réponses pour avancer sereinement.</h2>
          </div>
          <div className="faq-list">
            {faqs.map(([question, answer], index) => (
              <article className="faq-item" key={question}>
                <button onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}>
                  <span>{question}</span>
                  <b>{openFaq === index ? "Moins" : "Plus"}</b>
                </button>
                {openFaq === index && <p>{answer}</p>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="shell contact-grid">
          <div className="contact-copy">
            <p className="eyebrow light">Parlons de votre projet</p>
            <h2>Vous pensez au Maroc.<br />Construisons la suite ensemble.</h2>
            <p>Expliquez-nous simplement votre projet. Un membre de l’équipe CAF vous recontactera pour organiser un premier échange.</p>
            <div className="contact-details">
              <span>+212 5 22 94 53 82 / 83 / 84</span>
              <span>info@caf.ma</span>
              <span>Casablanca, Maroc</span>
            </div>
          </div>

          <div className="form-card">
            {submitted ? (
              <div className="success-state" role="status">
                <span>Demande reçue</span>
                <h3>Merci pour votre confiance.</h3>
                <p>L’équipe CAF reviendra vers vous pour comprendre votre projet et convenir de la prochaine étape.</p>
                <button className="button button-navy" onClick={() => setSubmitted(false)}>Envoyer une autre demande</button>
              </div>
            ) : (
              <form onSubmit={submitLead}>
                <div className="form-heading">
                  <span>Premier échange</span>
                  <h3>Présentez votre projet</h3>
                </div>
                <label>Nom et prénom<input name="name" required autoComplete="name" /></label>
                <div className="field-row">
                  <label>Email professionnel<input type="email" name="email" required autoComplete="email" /></label>
                  <label>Téléphone<input type="tel" name="phone" autoComplete="tel" /></label>
                </div>
                <label>Où en êtes-vous ?
                  <select name="stage" defaultValue="" required>
                    <option value="" disabled>Sélectionnez une situation</option>
                    <option>J’explore une idée</option>
                    <option>Je prépare la création</option>
                    <option>Mon entreprise existe déjà</option>
                    <option>Je représente une entreprise française</option>
                  </select>
                </label>
                <label>Votre projet au Maroc<textarea name="message" rows="4" required /></label>
                <button className="button button-cyan form-submit" type="submit">Être recontacté</button>
                <small>En envoyant ce formulaire, vous acceptez d’être recontacté par CAF Management.</small>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer>
        <div className="shell footer-inner">
          <img src="/assets/brand/caf-primary-mark.webp" alt="CAF Management" />
          <p>Création · Comptabilité · Fiscalité · Audit · Juridique · RH · Stratégie</p>
          <div><a href="https://www.caf.ma">caf.ma</a><a href="https://www.linkedin.com/company/caf-management">LinkedIn</a></div>
        </div>
      </footer>
    </main>
  );
}

export function App() {
  return window.location.pathname.startsWith("/en") ? <EnglishSite /> : <FrenchLanding />;
}
