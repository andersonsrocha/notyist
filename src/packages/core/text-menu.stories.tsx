import { ConfigProvider, theme } from "antd";
import { Action } from "@/components/ui/action";

import type { Meta, StoryObj } from "@storybook/react";

const TextMenu = () => {
  return (
    <div className="ny-bg-colorBgElevated ny-shadow-xl ny-shadow-black/70 ny-border ny-border-solid ny-border-colorBorder ny-rounded-md">
      <Action.Wrapper>
        <Action.ContentType />
        <Action.Font />
        <Action.FontSize />

        <Action.Divider />

        <Action.Mark type="bold" />
        <Action.Mark type="italic" />
        <Action.Mark type="underline" />
        <Action.Mark type="strike" />
        <Action.Mark type="code" />
        <Action.Mark type="blockquote" />
        <Action.Link />
        <Action.Highlight />
        <Action.Color />

        <Action.More>
          <Action.Mark type="subscript" />
          <Action.Mark type="superscript" />

          <Action.Divider />

          <Action.Align type="left" />
          <Action.Align type="center" />
          <Action.Align type="right" />
          <Action.Align type="justify" />
        </Action.More>
      </Action.Wrapper>
    </div>
  );
};

export default {
  title: "Menus UI/Text Menu",
  component: TextMenu,
} as Meta;

export const Light: StoryObj<typeof TextMenu> = {
  decorators: [
    (Story) => {
      return (
        <ConfigProvider theme={{ algorithm: theme.defaultAlgorithm }}>
          <div data-theme="light" className="ny-flex ny-justify-center">
            <div className="ny-max-w-3xl">{Story()}</div>
          </div>
        </ConfigProvider>
      );
    },
  ],
};

export const Dark: StoryObj<typeof TextMenu> = {
  decorators: [
    (Story) => {
      return (
        <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
          <div data-theme="dark" className="ny-flex ny-justify-center">
            <div className="ny-max-w-3xl">{Story()}</div>
          </div>
        </ConfigProvider>
      );
    },
  ],
};