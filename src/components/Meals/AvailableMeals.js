import React, { useEffect, useState } from "react";
import Card from "../General UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

// const DUMMY_MEALS = [
//   {
//     id: "m1",
//     name: "Sushi",
//     description: "Finest fish and veggies",
//     price: 22.99,
//   },
//   {
//     id: "m2",
//     name: "Schnitzel",
//     description: "A german specialty!",
//     price: 16.5,
//   },
//   {
//     id: "m3",
//     name: "Barbecue Burger",
//     description: "American, raw, meaty",
//     price: 12.99,
//   },
//   {
//     id: "m4",
//     name: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 18.99,
//   },
// ];

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const fetchMeals = await fetch(
        "https://react-http-2cd65-default-rtdb.firebaseio.com/meals.json"
      );
      const mealsData = await fetchMeals.json();
      const loadedMeals = [];
      for (let key in mealsData) {
        loadedMeals.push({
          id: key,
          name: mealsData[key].name,
          description: mealsData[key].description,
          price: mealsData[key].price,
        });
      }
      setMeals(loadedMeals);
    };
    fetchData()
      .then(() => {
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setHttpError(err.message);
      });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.loadingMeals}>
        <p>Loading....</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.mealError}>
        <p>{httpError}</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => {
    return (
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        price={meal.price}
        description={meal.description}
      ></MealItem>
    );
  });

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
