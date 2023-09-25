import color from 'color';
import plugin from 'tailwindcss/plugin';

const theme: { [name: string]: [light: string, dark: string] } = {
  background: ['#ffffff', '#1b1b1b'], //배경색
  foreground: ['#1c1c1c', '#f1f1f1'], //글자색

  'mono-100': ['#f5f5f5', '#333333'], //테두리색
  'mono-200': ['#f2f2f2', '#212121'], //내부 요소 배경색
  'mono-500': ['#6b6b6b', '#b3b3b3'], //주석용 회색

  primary: ['#10b981', '#34d399'],
  secondary: ['#388ff5', '#3592d4']
};

const themeEntries = Object.entries(theme);

const rgb = (hex: string) => color(hex).rgb().array().slice(0, 4).join(', ');

/** TailwindCSS plugin for register base color variables */
export default plugin(
  ({ addBase }) => {
    let lightVariables: Record<string, string> = {};
    let darkVariables: Record<string, string> = {};

    for (const [name, [light, dark]] of themeEntries) {
      lightVariables[`--theme-${name}`] = rgb(light);
      darkVariables[`--theme-${name}`] = rgb(dark);
    }

    addBase({
      ':root': lightVariables,
      '[data-theme="dark"]': darkVariables
    });
  },
  {
    theme: {
      extend: {
        // @ts-ignore // TODO: Fix type errors
        colors: Object.fromEntries(
          themeEntries.map(([name]) => [
            name,
            ({
              opacityVariable,
              opacityValue
            }: {
              opacityVariable: string;
              opacityValue: string;
            }) => {
              if (opacityValue !== undefined) {
                return `rgba(var(--theme-${name}), ${opacityValue})`;
              }
              if (opacityVariable !== undefined) {
                return `rgba(var(--theme-${name}), var(${opacityVariable}, 1))`;
              }
              return `rgb(var(--theme-${name}))`;
            }
          ])
        )
      }
    }
  }
);
