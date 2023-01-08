import { UsineColor } from "./UsineColor";
import { UsineNumberSize } from "./UsineSize";

type ColorType =
  | 'red'
  | 'pink'
  | 'grape'
  | 'violet'
  | 'indigo'
  | 'blue'
  | 'cyan'
  | 'teal'
  | 'green'
  | 'lime'
  | 'yellow'
  | 'orange';

export interface UsineTheme {
  radius: UsineNumberSize | (string & {});
  colors: Record<UsineColor, { [key: string | number]: string} | string>;
}