import { heroes, Owner, type Hero } from '../data/heroes.data';

const getHeroById = (id: number): Hero | undefined => {
  const hero = heroes.find((hero) => {
    return hero.id === id;
  });

  // if (!hero) {
  //   throw new Error(`No existe un heroe con el id ${id}`);
  // }

  return hero;
};

// console.log(getHeroById(8));

export const getHeroesByOwner = (owner: Owner): Hero[] => {
  const heroesByOwner = heroes.filter((heroe) => heroe.owner === owner);
  return heroesByOwner;
};

// export const getHeroesByOwner = (owner: Owner): Hero[] =>
//   heroes.filter((heroe) => heroe.owner === owner);
