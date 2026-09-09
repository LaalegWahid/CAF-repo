export interface QA {
  q: string;
  a: string;
}

/**
 * FAQ for the "Création de société" page.
 * The same array feeds <Faq> and the FAQPage JSON-LD — Google requires the visible
 * text and the structured data to match, so only edit here.
 */
export const creationFaqs: QA[] = [
  {
    q: "Une entreprise française peut-elle détenir 100 % d'une société marocaine ?",
    a: "Oui. La très grande majorité des secteurs sont ouverts à 100 % aux capitaux étrangers, sans obligation d'associé local. Quelques activités réglementées (certains transports, la pêche hauturière, l'exploitation de ressources naturelles) imposent un actionnariat marocain ou une autorisation préalable ; nous le vérifions dès le cadrage.",
  },
  {
    q: 'Faut-il résider au Maroc pour créer sa société ?',
    a: "Non. Le gérant d'une SARL ou le président d'une SA peut être non-résident. Un déplacement reste utile pour l'ouverture du compte bancaire professionnel ; à défaut, nous mettons en place les procurations nécessaires.",
  },
  {
    q: "Combien de temps prend la création d'une SARL au Maroc ?",
    a: "En pratique 4 à 6 semaines entre l'obtention du certificat négatif et l'inscription au Registre du Commerce, selon la nature de l'activité et les délais des administrations (OMPIC, Direction Générale des Impôts, CNSS).",
  },
  {
    q: "Quel est le capital social minimum d'une SARL ?",
    a: "Il n'y a plus de minimum légal pour une SARL : le capital est fixé librement dans les statuts, souvent entre 10 000 et 100 000 MAD selon l'activité et les besoins de crédibilité bancaire. Une société anonyme (SA) exige, elle, un capital minimum de 300 000 MAD.",
  },
  {
    q: 'Qu\'est-ce que le statut Casablanca Finance City (CFC) ?',
    a: "C'est un statut réservé à des sociétés à vocation régionale ou internationale — sièges, holdings, prestataires de services financiers et professionnels — qui ouvre droit à un régime fiscal et de change avantageux. Nous évaluons votre éligibilité pendant l'étude de structuration.",
  },
  {
    q: 'Pouvez-vous gérer la comptabilité et la paie après la création ?',
    a: "Oui, c'est le cœur de notre métier. Une fois la société immatriculée, nos départements Comptabilité et Social prennent le relais : tenue comptable, déclarations de TVA et d'IS, liasse fiscale, bulletins de paie, déclarations CNSS / AMO / IR et reporting mensuel consolidable par votre siège.",
  },
  {
    q: 'Dans quelle langue travaillez-vous ?',
    a: "En français et en anglais. L'ensemble de vos interlocuteurs chez CAF Management sont francophones ; les actes officiels marocains sont établis en français et, selon les cas, en arabe.",
  },
  {
    q: 'Où sont vos bureaux ?',
    a: "À Casablanca, 17 Rue Mhiwla, Hay El Hana (Hay Hassani – 20210). Nous accompagnons des clients dans tout le Maroc et échangeons en visioconférence avec les équipes restées en France.",
  },
];
