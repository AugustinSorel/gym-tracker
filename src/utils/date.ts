import { TimeFrame } from "@/schemas/exerciseSchema";
import { Data } from "@prisma/client";

export const getCurrentDate = () => {
  return new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate()
  );
};

export const getDateInFrenchFormat = (date: string) => {
  return new Date(date).toLocaleDateString("Fr-fr", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });
};

export const getDateInJSFormat = (date: Date) => {
  return new Date(date).toLocaleDateString("en-CA");
};

export const sortByDateAsc = (x: Data, y: Data) => {
  return y.createdAt.getTime() - x.createdAt.getTime();
};

export const addMonths = (date: Date, months: number) => {
  date.setMonth(date.getMonth() + months);
  return date;
};

export const addDays = (date: Date, days: number) => {
  date.setDate(date.getDate() + days);
  return date;
};

export const addYears = (date: Date, years: number) => {
  date.setFullYear(date.getFullYear() + years);
  return date;
};

export const getFirstDateInMonth = () => {
  const date = new Date();
  return new Date(date.getFullYear(), date.getMonth(), 1);
};

export const getLastDayInMonth = () => {
  const date = new Date();
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
};

export const getCurrentMonthDate = () => {
  return new Date().toLocaleString("default", { month: "long" });
};

export const timeFrameDict: {
  [key in TimeFrame]: any;
} = {
  ALL: undefined,
  "1Y": addYears(new Date(), -1),
  "6M": addMonths(new Date(), -6),
  "1M": addMonths(new Date(), -1),
  "1W": addDays(new Date(), -7),
};
