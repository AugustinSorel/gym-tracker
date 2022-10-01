import { TimeFrame } from "@/schemas/exerciseSchema";

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

const addMonths = (date: Date, months: number) => {
  date.setMonth(date.getMonth() + months);
  return date;
};

const addDays = (date: Date, days: number) => {
  date.setDate(date.getDate() + days);
  return date;
};

const addYears = (date: Date, years: number) => {
  date.setFullYear(date.getFullYear() + years);
  return date;
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
