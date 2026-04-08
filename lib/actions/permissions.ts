"use server";

import { PermissionsApi } from "../api/permissions";
import type { PermissionSchema } from "../schemas/permissions";

export const addPermissionAction = async (body: PermissionSchema) => {
  const { data } = await PermissionsApi.addPermission(body);
  return { data };
};
