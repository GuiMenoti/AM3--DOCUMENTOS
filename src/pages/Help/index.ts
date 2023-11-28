import { v1_2 } from './Versions/v1.2';
import { v2_0_0 } from './Versions/v2.0.0';

export type Version = {
  id: string;
  title: string;
  dataTexts: string[];
};

export const config = [v2_0_0, v1_2];
