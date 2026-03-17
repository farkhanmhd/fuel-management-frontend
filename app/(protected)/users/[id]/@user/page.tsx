import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UsersApi } from "@/lib/api/users";

interface UserPageProps {
  params: Promise<{ id: string }>;
}

const UserCard = async ({ params }: UserPageProps) => {
  const { id } = await params;
  const user = await UsersApi.getUserById(id);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Informasi User</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 space-y-3 lg:grid-cols-3">
        <div className="flex flex-col gap-1">
          <p className="text-muted-foreground text-sm">Username</p>
          <p className="font-medium font-mono">{user.username}</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-muted-foreground text-sm">Nama</p>
          <p className="font-medium">{user.name}</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-muted-foreground text-sm">Status</p>
          <Badge
            className="font-bold uppercase"
            variant={user.status === "active" ? "default" : "destructive"}
          >
            {user.status}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserCard;
