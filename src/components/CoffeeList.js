import React from "react";
import useDataFetch from "../hooks/useDataFetch";

const CoffeeList = () => {
  const { data, error, isLoading, refetch } = useDataFetch(
    "https://api.sampleapis.com/coffee/hot"
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error: {error.message}
        <button onClick={refetch}>Retry</button>
      </div>
    );
  }

  return (
    <div>
      {data &&
        data.map((coffee) => (
          <div className="coffee" key={coffee.id}>
            <h2>{coffee.title}</h2>
            <img src={coffee.image} alt={coffee.title} />
            <div>Description: {coffee.description}</div>
            <div>Ingredients: {coffee.ingredients.join(", ")}</div>
          </div>
        ))}
    </div>
  );
};

export default CoffeeList;
