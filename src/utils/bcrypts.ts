import bcrypt from "bcrypt";

export const encrypt = async (data: string) => {
  const salt = await bcrypt.genSalt(10);

  return bcrypt.hash(data, salt);
};

export const compare = (data: string, encrypted: string) => {
  return bcrypt.compare(data, encrypted);
};
