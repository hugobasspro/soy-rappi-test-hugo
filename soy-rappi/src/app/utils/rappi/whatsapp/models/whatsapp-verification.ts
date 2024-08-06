export interface WhatsappVerification {
  phone: string;
  country_code: string;
}

export interface WhatsappCode{
  success: boolean;
  seconds_to_expire: number;
  uuid: string;
}

interface applicantUser {
  email: string;
  password: string;
}
