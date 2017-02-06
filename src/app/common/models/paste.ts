import { Code } from './code';

export class Paste {
  hash_id: string;
  title: string;
  is_private: boolean;
  views: number;

  codes: Code [];

  constructor() {}
}
