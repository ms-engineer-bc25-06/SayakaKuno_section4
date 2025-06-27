export type Transaction = {
  id: number;
  date: string;
  description: string;
  amount: number;
  type: 'income' | 'expense';
};

export const transactions: Transaction[] = [
  { id: 1, date: '2025-06-01', description: '給料', amount: 300000, type: 'income' },
  { id: 2, date: '2025-06-05', description: '家賃', amount: -80000, type: 'expense' },
  { id: 3, date: '2025-06-10', description: '食費', amount: -15000, type: 'expense' },
  { id: 4, date: '2025-07-01', description: '給料', amount: 300000, type: 'income' },
  { id: 5, date: '2025-07-15', description: '電気代', amount: -10000, type: 'expense' },
];
