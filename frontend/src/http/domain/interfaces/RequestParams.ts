import PaginationParameters from "@shared/domain/entities/PaginationParameters";

interface RequestParams<T> {
  filters: T;
  pagination: PaginationParameters;
}

export default RequestParams;
