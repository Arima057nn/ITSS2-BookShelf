export interface BorrowRequestInterface {
  userId: number;
  libraryId: string;
  libraryName: string;
  bookNumber: number;
  borrowDate: string | null;
  requestDueDate: string | null;
  returnDate: string | null;
  code: string | null;
  status: string;
  id: number;
}
