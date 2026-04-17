import {
  parseAsIndex,
  parseAsInteger,
  useQueryState,
  useQueryStates,
} from "nuqs";

const paginationParsers = {
  pageIndex: parseAsIndex.withDefault(0),
  pageSize: parseAsInteger.withDefault(20),
};

const paginationUrlKeys = {
  pageIndex: "page",
  pageSize: "limit",
};

export function useTablePaginationSearchParams() {
  return useQueryStates(paginationParsers, {
    urlKeys: paginationUrlKeys,
  });
}
