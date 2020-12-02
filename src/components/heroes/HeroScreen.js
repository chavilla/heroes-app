import React from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroById } from '../selectors/getHeroById';

export const HeroScreen = () => {

    const { heroId }=useParams();

    const hero=getHeroById(heroId);

    if (!hero) {
        return <Redirect to='/' />
    }

    const { alter_ego, characters, first_appearance, superhero }=hero;

    return (
        <div>
            <h1>HeroScreen</h1>
            <p>{alter_ego}</p>
        </div>
    )
}
