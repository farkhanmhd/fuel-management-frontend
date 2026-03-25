"use server";
import { revalidateTag } from "next/cache";
import { UsersApi } from "../api/users";
import type { AddUserSchema, UpdateUserDataSchema } from "../schemas/users";

export const addUserAction = async (body: AddUserSchema) => {
  const result = await UsersApi.addUser(body);

  if (result?.data && result.data.status === "success") {
    revalidateTag("users", "max");
  }
  return result;
};

export const updateUserAction = async (
  userId: string,
  body: UpdateUserDataSchema
) => {
  const result = await UsersApi.updateUserData({
    userId,
    body,
  });

  if (result.data) {
    revalidateTag("users", "max");
  }

  return result;
};

export const resetUserPasswordAction = async (userId: string) => {
  const result = await UsersApi.resetUserPassword(userId);

  return result;
};
