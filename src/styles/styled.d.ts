import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;

      background: string;

      text_100: string;
      text_300: string;

      gray: string;
      black: string;

      input_300: string
    }
  }
}