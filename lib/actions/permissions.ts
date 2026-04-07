"use server";

import { PermissionsApi } from "../api/permissions";
import type { AddPermissionSchema } from "../schemas/permissions";

export const addPermissionAction = async (body: AddPermissionSchema) => {
  const { data } = await PermissionsApi.addPermission(body);
  return { data };
};
