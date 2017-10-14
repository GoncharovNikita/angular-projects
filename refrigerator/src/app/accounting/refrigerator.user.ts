import { IRefrigerator } from '../refrigerator/refrigerator';

export interface IRefUser {
    refrigerators?: Array<IRefrigerator>;
    email: string;
    displayName: string;
}

export class RefUser implements IRefUser {
    refrigerators?: Array<IRefrigerator>;
    email: string;
    displayName: string;

    constructor(u: IRefUser) {
        this.refrigerators = u.refrigerators || [];
        this.email = u.email;
        this.displayName = u.displayName;
    }
}
