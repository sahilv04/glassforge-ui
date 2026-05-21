import type { Preview } from "@storybook/react";
import { withThemeByClassName } from "@storybook/addon-themes";
import "../src/styles/index.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: { color: /(background|color)$/i, date: /Date$/i },
    },
    backgrounds: {
      default: "midnight",
      values: [
        { name: "light", value: "#f8fafc" },
        { name: "midnight", value: "#020617" },
        {
          name: "aurora",
          value:
            "radial-gradient(1200px 600px at 20% 10%, rgb(168 85 247 / 0.35), transparent), radial-gradient(900px 500px at 80% 90%, rgb(56 189 248 / 0.3), transparent), #020617",
        },
      ],
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        glass: "gf-theme-glass dark",
        solid: "gf-theme-solid",
        soft: "gf-theme-soft",
        midnight: "gf-theme-midnight dark",
      },
      defaultTheme: "glass",
    }),
  ],
};

export default preview;
