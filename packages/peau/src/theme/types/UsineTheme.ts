import { UsineColor } from './UsineColor';
import { UsineNumberSize } from './UsineSize';

export interface UsineTheme {
  radius: UsineNumberSize | (string & Record<string, never>);
  colors: Record<UsineColor, { [key: string | number]: string} | string>;
}
