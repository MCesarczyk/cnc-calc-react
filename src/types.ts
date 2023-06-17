export type FeedType = 'FPR' | 'FPT';

export interface FeedOption  {
  id: FeedType;
  name: string;
  sub: string;
  unit: string;
  placeholder: string;
  disabled: boolean;
}
