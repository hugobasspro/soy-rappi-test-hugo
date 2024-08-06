export interface Cities {
  id: number;
  name: string;
  country: Country;
  cityAddressId: number;
  isActive: boolean;
  title: string;
}

interface Country {
  id: number;
  name: string;
  isoCode: string;
}
