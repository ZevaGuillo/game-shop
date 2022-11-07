import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';
import { StyleTheme } from './Theme';


const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<StyleTheme>;

export { css, createGlobalStyle, keyframes, ThemeProvider };
export default styled;