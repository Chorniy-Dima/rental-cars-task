"use client";

import { CarCard } from "@/components/CarCard/CarCard";
import { getCars } from "@/servises/carsApi";
import css from "./CarList.module.css";
import { useCarsStore } from "@/store/carsStore";
import { useEffect } from "react";

export default function CarList() {
  const {
    cars,
    page,
    totalPages,
    addCars,
    appendCars,
    resetCars,
    setIsLoading,
  } = useCarsStore();

  useEffect(() => {
    const fetchCars = async () => {
      setIsLoading(true);
      const resp = await getCars({ limit: 12 }, 1);
      addCars(resp);
      setIsLoading(false);
    };
    fetchCars();
  }, []);

  const handleClick = async () => {
    setIsLoading(true);
    const nextPage = page + 1;
    const resp = await getCars({ limit: 12 }, nextPage);
    appendCars(resp);
    setIsLoading(false);
  };

  return (
    <>
      <ul className={css.carlist}>
        {cars.map((item) => {
          return <CarCard car={item} key={item.id} />;
        })}
      </ul>
      {page < totalPages && (
        <button className={css.button} onClick={handleClick}>
          Load more
        </button>
      )}
    </>
  );
}
