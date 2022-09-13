import bcrypt from "bcrypt";

export const encryptString = async (value: string) => {
  const salt = await bcrypt.genSalt(10);

  return bcrypt.hash(value, salt);
};
