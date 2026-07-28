export interface ServiceStep {
  title: string;
  body: string;
}

export interface ServiceBenefit {
  head: string;
  body: string;
}

export interface ServiceDetail {
  id: string;
  /** Two-digit index used as the display numeral throughout the site. */
  n: string;
  title: string;
  /** URL slug — these are live, indexed URLs. Don't rename without a redirect. */
  slug: string;
  image: string;
  /** One line for the home-page card. */
  blurb: string;
  /** A paragraph for the services index row. */
  summary: string;
  /** Short chips shown under the summary on the services index. */
  tags: string[];
  /** The line under the detail-page headline. */
  hook: string;
  /** Opening paragraph of the detail page. */
  full: string;
  /** "How it goes" — the numbered process. */
  steps: ServiceStep[];
  /** "Why bother" — the outcome cards. */
  benefits: ServiceBenefit[];
  /** Optional "Worth knowing" callout. */
  feature?: {
    title: string;
    body: string;
  };
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  land?: string;
  message: string;
}
