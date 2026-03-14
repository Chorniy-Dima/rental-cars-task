import { Metadata } from "next";
import css from "./Catalog.module.css";
import CarList from "@/components/CarList/CarList";

export const metadata: Metadata = {
  title: "Catalog",
  description: "RentalCar - find your dream car on this page",
};

export default async function Catalog() {
  return (
    <>
      <div className="container">
        <CarList />
      </div>
    </>
  );
}
