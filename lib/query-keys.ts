export const queryKeys = {
  // user specific
  assets: (userId: string) => ["assets", userId] as const,
  dealers: (userId: string) => ["dealers", userId] as const,
  drivers: (userId: string, queryParams: { [k: string]: string }) =>
    ["drivers", userId, queryParams] as const,
  transactions: (userId: string) => ["transactions", userId] as const,

  // admins only
  permissions: () => ["permissions"] as const,
  userPermissions: (id: string) => ["user-permissions", id] as const,
  users: (queryParams: { [k: string]: string }) =>
    ["users", queryParams] as const,
  user: (userId: string) => ["user", userId] as const,
};
