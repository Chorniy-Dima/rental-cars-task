"use client";

import css from "./CarCard.module.css";
import Image from "next/image";
import { Icon } from "../Icon/Icon";
import { Car } from "@/types/Car";
import Link from "next/link";

export const CarCard = ({ car }: { car: Car }) => {
  const address = car.address.split(",");
  return (
    <>
      <li className={css.card}>
        <div className={css.head}>
          <button className={css.heartBtn}>
            <Icon id="heart" className={css.heart} />
          </button>
          <Image
            src={car.img}
            alt="Car card image"
            width={276}
            height={268}
            className={css.image}
            loading="eager"
          />
        </div>
        <div className={css.titleContainer}>
          <p className={css.title}>
            {car.brand} <span className="accent">{car.model}</span>, {car.year}
          </p>
          <p className={css.price}>{car.rentalPrice}$</p>
        </div>
        <div className={css.descr}>
          <p>
            {address[1]} | {address[2]} | {car.rentalCompany} |
          </p>
          <p>
            {car.type} | {car.mileage}
          </p>
        </div>
        <Link href={`/catalog/${car.id}`} className={css.button}>
          Read more
        </Link>
      </li>
    </>
  );
};
