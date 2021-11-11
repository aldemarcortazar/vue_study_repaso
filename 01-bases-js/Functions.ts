

function saludar():string{
    return 'holaaaa!!!!';
}

interface HeroInfo {
    id: number;
    heroe: string;
}


const heroes: HeroInfo[] = [
    {
        id: 1,
        heroe: 'Batman'
    },
    {
        id: 2,
        heroe: 'superman',
    }
];

const existHero: ( id: number )  => boolean = ( id: number ): boolean => heroes.some( el => el.id === id );


console.log(existHero(1));
 
