// Enquiries from the French and English forms are posted to this Google Form,
// whose responses land in the linked Google Sheet.
const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSenoCyg27QlO9u9qnKxUJu3bFAAraVfOh_9oCaEkGdVYO-eVQ/formResponse";

// Site field name -> Google Form "entry.<id>". Every one of these questions is
// required in the Google Form, so the site forms must require them too.
const GOOGLE_FORM_FIELDS = {
  name: "entry.877086558",
  email: "entry.1498135098",
  service: "entry.1424661284",
  country: "entry.1546245405",
  sector: "entry.818850947",
  message: "entry.2606285",
};

// The Google Form's service question is multiple choice: the submitted value
// must match one of its options exactly, so `value` is the French option text.
export const SERVICE_OPTIONS = [
  { value: "Création d'entreprise", en: "Company formation" },
  { value: "Comptabilité", en: "Accounting" },
  { value: "Conseil fiscal", en: "Tax advisory" },
  { value: "Audit et contrôle interne", en: "Audit and internal control" },
  { value: "Conseil juridique", en: "Legal advice" },
  { value: "Litiges fiscaux et juridiques", en: "Tax and legal disputes" },
];

export async function submitLead(formElement) {
  const data = new FormData(formElement);

  // The Google Form has no phone or source question, so both are appended to the comments.
  const extras = [
    data.get("phone") && `Téléphone : ${data.get("phone")}`,
    data.get("source") && `Source : ${data.get("source")}`,
  ].filter(Boolean);
  if (extras.length) data.set("message", `${data.get("message")}\n\n---\n${extras.join("\n")}`);

  // The Google Form also collects respondent emails, which it requires as "emailAddress".
  const body = new URLSearchParams({ emailAddress: data.get("email") });
  for (const [field, entry] of Object.entries(GOOGLE_FORM_FIELDS)) {
    const value = data.get(field);
    if (value) body.append(entry, value);
  }

  // Google Forms sends no CORS headers, so the response is opaque: a network
  // failure throws, but Google's acceptance of the entry cannot be confirmed.
  await fetch(GOOGLE_FORM_ACTION, { method: "POST", mode: "no-cors", body });
}
