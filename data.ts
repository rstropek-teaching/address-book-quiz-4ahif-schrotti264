export interface IContact {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
}

export const contacts: Array<IContact> = [
    {id: 1, firstName: 'Donald',  lastName: 'Duck',   email:'d.duck@fort.db'      },
    {id: 2, firstName: 'Mickey',  lastName: 'Mouse',  email:'m.mouse@disney.club' },
    {id: 3, firstName: 'Minnie',  lastName: 'Mouse',  email:'m.mouse1@disney.club'},
    {id: 4, firstName: 'Scrooge', lastName: 'McDuck', email:'s.mcduck@fort.db'    }
];