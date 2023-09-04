import { HeroCard } from "./HeroCard";
import { CardHero } from "./CardHero";
import { getHerosByPublisher } from "../helpers";
import { useMemo } from "react";

export const HeroList = ({publisher}) => {

  const heros = useMemo(() => getHerosByPublisher(publisher), [publisher]);
  return (
    
        <div className="row rows-cols-1 row-cols-md-3 g-3">
              {heros.map(hero => (
                // <HeroCard key={hero.id} hero={hero}/>
                <CardHero key={hero.id} hero={hero}/>
                ))
              }
        </div>
    
  )
}
