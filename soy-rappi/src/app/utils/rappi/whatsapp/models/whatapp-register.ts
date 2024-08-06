export interface WhatsappRegister {
  firstName: string;
  lastName: string;
  city: string;
  telephone: string;
  accessToken: string;
  applicantUser: ApplicantUser;
  country: string;
  phoneValidationProvider: string;
}

interface ApplicantUser {
  email: string;
  password: string;
}
