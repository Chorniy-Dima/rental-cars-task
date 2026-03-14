import Link from "next/link";
import css from "./page.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "RentalCar",
  description: "RentalCar - rent your dream car right now!",
};

export default function Home() {
  return (
    <>
      <div className="container">
        <div className={css.contentContainer}>
          <div className={css.text}>
            <h1 className={css.title}>Find your perfect rental car</h1>
            <p className={css.subtitle}>
              Reliable and budget-friendly rentals for any journey
            </p>
          </div>
          <Link href="/catalog" className={css.button}>
            View Catalog
          </Link>
        </div>
      </div>
    </>
  );
}
