export const toggleNewsData: toggleNewsDataItem[] = [
  { id: 1, content: "Featured", isPressed: true },
  { id: 2, content: "Latest", isPressed: false },
];

export interface toggleNewsDataItem {
  id: number;
  content: string;
  isPressed: boolean;
}
