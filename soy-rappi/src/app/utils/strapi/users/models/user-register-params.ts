export interface UserRegisterParams {
  name: string;
  password: string;
  email: string;
  username: string;
  recaptchaCode?: string;
}
