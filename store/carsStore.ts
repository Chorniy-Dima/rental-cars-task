import { Car, Response } from "@/types/Car";
import { create } from "zustand";

type CarsStore = {
  cars: Car[] | [];
  totalPages: number;
  page: number;
  isLoading: boolean;
  setIsLoading: (bool: boolean) => void;
  resetCars: () => void;
  addCars: (resp: Response) => void;
  appendCars: (resp: Response) => void;
};

export const useCarsStore = create<CarsStore>()((set) => ({
  cars: [],
  totalPages: 0,
  page: 1,
  isLoading: false,
  setIsLoading: (bool) =>
    set(() => ({
      isLoading: bool,
    })),
  resetCars: () =>
    set(() => ({
      cars: [],
      totalPages: 0,
      page: 1,
    })),
  addCars: (resp) =>
    set(() => ({
      cars: resp.cars,
      totalPages: resp.totalPages,
      page: resp.page,
    })),
  appendCars: (resp) =>
    set((state) => ({
      cars: [...state.cars, ...resp.cars],
      page: resp.page,
    })),
}));
