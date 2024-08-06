export interface FormModal {
  phoneVerification: PhoneVerificationTexts;
}

interface PhoneVerificationTexts {
  goBack: string;
  title: string;
  subtitle: string;
  notReceived: string;
  startRegistration: string;
}

export interface listText {
  btn: boolean;
  ctaLabel: string;
  ctaUrl: string;
  text: string;
}
