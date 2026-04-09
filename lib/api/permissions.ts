import { withAuth } from "../auth/utils";
import { api } from "../axios/server";
import type { elysia } from "../elysia";
import type { PermissionSchema } from "../schemas/permissions";

export type Permission = NonNullable<
  NonNullable<
    Awaited<ReturnType<(typeof elysia.api)["permissions"]["get"]>>
  >["data"]
>["data"]["permissions"][number];

export abstract class PermissionsApi {
  static async getAllPermissions() {
    const response = await api.get<{ data: { permissions: Permission[] } }>(
      "/api/permissions"
    );

    return response.data.data.permissions;
  }

  static async addPermission(body: PermissionSchema) {
    const { data } = await withAuth(async (token) => {
      const response = await api.post<{ data: { id: string } }>(
        "/api/permissions",
        body,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data.data;
    });

    return { data };
  }
}
