import { UserPermissionsForm } from "@/components/modules/permissions/user-permissions-form";
import { PermissionsApi } from "@/lib/api/permissions";
import { UsersApi } from "@/lib/api/users";

type Props = {
  params: Promise<{ id: string }>;
};

const UserPermissionsSlot = async ({ params }: Props) => {
  const { id } = await params;
  const permissions = await PermissionsApi.getAllPermissions();
  const userPermissions = await UsersApi.getUserPermissions(id);

  return (
    <UserPermissionsForm
      permissions={permissions}
      userPermissions={userPermissions}
    />
  );
};

export default UserPermissionsSlot;
