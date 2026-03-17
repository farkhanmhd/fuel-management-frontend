export type UserDetail = {
  uuid: string;
  username: string;
  name: string;
  email: string;
  role: string;
  status: string;
  created_at: string;
  updated_at: string;
  last_login: string | null;
};

const mockUserDetail: Record<string, UserDetail> = {
  "1": {
    uuid: "1",
    username: "admin",
    name: "Administrator",
    email: "admin@example.com",
    role: "Admin",
    status: "active",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-03-15T00:00:00Z",
    last_login: "2026-03-13T08:30:00Z",
  },
};

export const getUserDetail = (id: string) => {
  return mockUserDetail[id] || mockUserDetail["1"];
};
