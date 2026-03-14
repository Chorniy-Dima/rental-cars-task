import axios from "axios";
import { Car, Response, Filter } from "@/types/Car";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const getCars = async (
  filter: Filter,
  page: number,
): Promise<Response> => {
  const { data } = await api.get("/cars", {
    params: {
      brand: filter.brand || undefined,
      rentalPrice: filter.rentalPrice || undefined,
      minMileage: filter.minMileage || undefined,
      maxMileage: filter.maxMileage || undefined,
      limit: filter.limit || undefined,
      page: page || undefined,
    },
  });
  return {
    cars: data.cars,
    totalCars: data.totalCars,
    totalPages: data.totalPages,
    page: Number(data.page),
  };
};

export const getCarById = async (id: string): Promise<Car> => {
  const { data } = await api.get(`/cars/${id}`);
  return data;
};

export const getBrands = async (): Promise<string[]> => {
  const { data } = await api.get("/brands");
  return data;
};
