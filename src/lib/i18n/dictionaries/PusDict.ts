/**
 * Represents the dictionary for the Push-to-Unlock Gas Spring page.
 * @typedef {object} PusDict
 * @property {object} hero - Content for the hero section.
 * @property {string} hero.title - The main title of the hero section.
 * @property {string} hero.subtitle - The subtitle of the hero section.
 * @property {string} hero.cta - Call-to-action text, potentially containing multiple actions separated by '/'.
 *
 * @property {object} definition - Content for the product definition section.
 * @property {string} definition.title - The title of the definition section.
 * @property {string} definition.description - The description in the definition section.
 *
 * @property {object} mechanism - Content for the locking mechanism section.
 * @property {string} mechanism.title - The title of the mechanism section.
 * @property {string} mechanism.description - The description of the locking mechanism.
 *
 * @property {object} specs - Content for the technical specifications section.
 * @property {string} specs.title - The title of the specifications section.
 * @property {string} specs.description - The introductory description for the specifications.
 * @property {string[]} specs.tableHeaders - The headers for the specifications table.
 * @property {Array<object>} specs.items - A list of technical specifications.
 * @property {string} specs.items.name - The name of the specification (e.g., "Force Range").
 * @property {string} specs.items.value - The value of the specification (e.g., "100N to 2500N").
 *
 * @property {object} faq - Content for the Frequently Asked Questions section.
 * @property {string} faq.title - The title of the FAQ section.
 * @property {Array<object>} faq.questions - A list of questions and answers.
 * @property {string} faq.questions.q - The question text.
 * @property {string} faq.questions.a - The answer text.
 *
 * @property {object} services - Content for the custom engineering and support section.
 * @property {string} services.title - The title of the services section.
 * @property {string} services.description - The introductory description for the services.
 * @property {string[]} services.items - A list of services offered.
 *
 * @property {object} cta - Content for the final call-to-action section.
 * @property {string} cta.title - The title of the CTA section.
 * @property {string[]} cta.desc - The descriptive text for the CTA, provided as an array of strings.
 */
export type PusDict = {
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  definition: {
    title: string;
    description: string;
  };
  mechanism: {
    title: string;
    description: string;
  };
  specs: {
    title: string;
    description: string;
    tableHeaders: string[];
    items: {
      name: string;
      value: string;
    }[];
  };
  faq: {
    title: string;
    questions: {
      q: string;
      a: string;
    }[];
  };
  services: {
    title: string;
    description: string;
    items: string[];
  };
  cta: {
    title: string;
    desc: string[];
  };
};