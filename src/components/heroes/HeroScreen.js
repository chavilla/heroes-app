import React, { useMemo } from "react";
import { Redirect, useParams } from "react-router-dom";
import { getHeroById } from "../selectors/getHeroById";

export const HeroScreen = ({ history }) => {
  const { heroId } = useParams();

  const hero = useMemo(() => getHeroById(heroId), [heroId]);

  if (!hero || hero === undefined) {
    return <Redirect to="/" />;
  }

  const handleReturn = () => {
    if (history.length <= 2) {
      history.push("/");
    } else {
      history.goBack();
    }
  };

  const {
    alter_ego,
    characters,
    publisher,
    first_appearance,
    superhero,
  } = hero;

  return (
    <div className="row mt-5">
      <div className="col-md-4">
        <img
          src={`../assets/${heroId}.jpg`}
          className="img-thumbnail animate_animated animate__fadeInLeft"
          alt={superhero}
        />
      </div>
      <div className="col-md-8">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego: {alter_ego} </b>
          </li>
          <li className="list-group-item">
            <b>Publisher: {publisher} </b>
          </li>
          <li className="list-group-item">
            <b> {first_appearance}</b>
          </li>
        </ul>
        <h5>characters</h5>
        <p>{characters}</p>
        <button className="btn btn-primary" onClick={handleReturn}>
          Return
        </button>
      </div>
    </div>
  );
};
