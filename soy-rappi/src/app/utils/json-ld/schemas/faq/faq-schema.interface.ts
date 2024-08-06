interface AcceptedAnswer {
    "@type": string;
    "text": string;
}

interface MainEntityFaq {
    "@type": string;
    "name": string;
    "acceptedAnswer": AcceptedAnswer;
                
}

export interface StructuredDataSchemaFaq {
    "@context": string;
    "@type": string;
    "mainEntity": MainEntityFaq[];
  }