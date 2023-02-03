export interface Support {
  url: string;
  text: string;
}
export interface Metadata {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  support: Support;
}
