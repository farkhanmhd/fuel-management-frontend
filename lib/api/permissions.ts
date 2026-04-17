import { clientApi } from "../axios/client";
import type { elysia } from "../elysia";
import type { PermissionSchema } from "../schemas/permissions";

export type Permission = NonNullable<
  NonNullable<
    Awaited<ReturnType<(typeof elysia.api)["permissions"]["get"]>>
  >["data"]
>["data"]["permissions"][number];

export abstract class PermissionsApi {
  static async getAllPermissions() {
    const response = await clientApi.get<{
      data: { permissions: Permission[] };
    }>("/api/permissions");

    if (!response.data) {
      throw new Error("Failed to fetch all permissions");
    }

    return response.data.data.permissions;
  }

  static async addPermission(body: PermissionSchema) {
    const response = await clientApi.post<{ data: { id: string } }>(
      "/api/permissions",
      body
    );

    return response.data.data;
  }
}
