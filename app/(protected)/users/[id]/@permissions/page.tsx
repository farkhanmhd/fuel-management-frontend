import { PermissionsForm } from "@/components/modules/permissions/permissions-form";
import { type Permission, PermissionsApi } from "@/lib/api/permissions";

const groupPermissions = (permissions: Permission[]) => {
  const groups: Record<string, Permission[]> = {};

  for (const perm of permissions) {
    let groupName = perm.resource;

    // Check if the permission belongs to the "DEALER" category via notes
    if (perm.note?.startsWith("DEALER")) {
      groupName = "dealer";
    }

    if (!groups[groupName]) {
      groups[groupName] = [];
    }
    groups[groupName].push(perm);
  }

  return Object.entries(groups).sort(([a], [b]) => {
    // Keep 'dashboard' at the top
    if (a === "dashboard") {
      return -1;
    }
    if (b === "dashboard") {
      return 1;
    }

    // Optional: Keep 'dealer' in a specific spot, e.g., right after dashboard
    if (a === "dealer") {
      return -1;
    }
    if (b === "dealer") {
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
