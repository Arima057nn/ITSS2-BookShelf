export interface BorrowerInterface {
  bookNumber: number;
  borrowDate: Date | null;
  id: number;
  requestDueDate: Date | null;
  status: string;
  userId: number;
  userName: string;
}
