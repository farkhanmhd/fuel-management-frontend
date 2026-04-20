import { authAxios } from "../auth";

export interface Staff {
  cabang: string;
  cabang_id: number;
  id: number;
  jabatan: string;
  name: string;
  neq: string;
  pangkat: string;
  user: {
    id: string;
    name: string;
    username: string;
  };
  username: string;
}

export interface ListOfUserResponse {
  data: Staff[];
  meta: {
    total: number;
    per_page: number;
    current_page: number;
  };
}

export class StaffApi {
  static async getStaff(
    cabang_id: number | null,
    search: string
  ): Promise<Staff[]> {
    if (!cabang_id) {
      return [];
    }
    const response = await authAxios.get<ListOfUserResponse>(
      "/api/v1/getallstaff",
      {
        params: {
          cabang_id,
          search,
        },
      }
    );

    return response.data.data;
  }
}
