import { PermissionsForm } from "@/components/modules/permissions/permissions-form";
import { type Permission, PermissionsApi } from "@/lib/api/permissions";

const groupPermissions = (permissions: Permission[]) => {
  const groups: Record<string, Permission[]> = {};

  for (const perm of permissions) {
    const parts = perm.name.split(":");
    const resource = parts[1] ?? "other";
    if (!groups[resource]) {
      groups[resource] = [];
    }
    groups[resource].push(perm);
  }

  return Object.entries(groups).sort(([a], [b]) => {
    if (a === "dashboard") {
      return -1;
    }
    if (b === "dashboard") {
      return 1;
    }
    return a.localeCompare(b);
  });
};

const UserPermissionsSlot = async () => {
  const { data } = await PermissionsApi.getAllPermissions();
  const grouped = groupPermissions(data ?? []);

  return <PermissionsForm grouped={grouped} />;
};

export default UserPermissionsSlot;
