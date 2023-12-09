export interface BookInfo {
  id: number | string;
  title: string;
  description: string;
  cover_image_url: string;
  categories_id: number;
  publish_year: number;
  publisher: string;
  language: string;
  page_number: number;
  quantity: number;
  library_id: number;
  library_name: string;
  library_location: string;
  status: number;
  code: string;
}

export interface LibraryInfo {
  id: number;
  name: string;
  location: string;
}

export interface AuthorInfo {
  id: number;
  name: string;
  description: string;
}
