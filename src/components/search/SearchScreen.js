import React, { useMemo } from "react";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import HeroCard from "../heroes/HeroCard";
import useForm from "../hooks/useForm";
import { getHeroByName } from "../selectors/getHeroByName";

const SearchScreen = ({ history }) => {
  // location hook
  const location = useLocation();

  //destructuring to the query
  const { q = "" } = queryString.parse(location.search);

  const [{ name }, handleChange] = useForm({ name: q });

  const heroesFiltered = useMemo(() => getHeroByName(q), [q]);

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`?q=${name}`);
  };

  return (
    <div className="row">
      <div className="col-md-5">
        <h4>Search form</h4>
        <hr />
        <form onSubmit={handleSubmit}>
          <input
            autoComplete="off"
            type="text"
            placeholder="find your hero"
            className="form-control"
            name="name"
            onChange={handleChange}
            value={name}
          />
          <button className="btn mt-2 btn-outline-primary" type="submit">
            Search...
          </button>
        </form>
      </div>
      <div className="col-md-7">
        <h4>Results</h4>
        <hr />

        {q === "" && (
          <div className="alert-primary py-2 text-center">Search a hero</div>
        )}

        {q !== "" && heroesFiltered.length === 0 && (
          <div className="alert-danger py-2 text-center">
            There is no results with {q}
          </div>
        )}

        {heroesFiltered.map((hero) => (
          <HeroCard key={hero.id} {...hero} />
        ))}
      </div>
    </div>
  );
};

export default SearchScreen;
