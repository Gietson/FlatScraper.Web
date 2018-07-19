export interface IAd {
  id: string;
  idAds: string;
  price: number;
  title: string;
  page: string;
  adDetails?: {
    priceM2: number;
    city: string;
    district: string;
    agency: boolean;
    propertyType: string;
    numberOfRooms: number;
    numberOfBathrooms: number;
    size: number;
    userName: string;
    updatedAt: Date;
    createAt: Date;
    photos: string[];
  }
}
