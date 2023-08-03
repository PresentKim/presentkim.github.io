import color from 'color';
import plugin from 'tailwindcss/plugin';

const theme: { [name: string]: [light: string, dark: string] } = {
  background: ['#ffffff', '#242424'],
  foreground: ['#1c1c1c', '#f1f1f1'],

  mono0: ['#383838', '#e6e6e6'],
  mono1: ['#545454', '#cccccc'],
  mono2: ['#6b6b6b', '#b3b3b3'],
  mono3: ['#808080', '#999999'],
  mono4: ['#999999', '#808080'],
  mono5: ['#a8a8a8', '#666666'],
  mono6: ['#b8b8b8', '#4d4d4d'],
  mono7: ['#cccccc', '#333333'],
  mono8: ['#e0e0e0', '#1a1a1a'],
  mono9: ['#f5f5f5', '#000000'],

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
