import React from "react";
import { useCurrentEditor } from "@tiptap/react";
import { LucideIconNames } from "@/packages/core";

import { Button, ButtonProps } from "../button";

type BreakProps = { type: "page" | "hard" };

const icons: Record<BreakProps["type"], LucideIconNames> = {
  page: "ScissorsLineDashed",
  hard: "WrapText",
};

const tips: Record<BreakProps["type"], string> = {
  page: "Page break",
  hard: "Hard break",
};

const shortcuts: Record<BreakProps["type"], ButtonProps["shortcut"]> = {
  page: [],
  hard: [],
};

export const Break: React.FC<BreakProps> = ({ type }) => {
  const { editor } = useCurrentEditor();

  const onExecCommand = <T extends BreakProps["type"]>(type: T) => {
    switch (type) {
      case "page":
        editor?.chain().focus().setPageBreak().run();
        break;
      case "hard":
        editor?.chain().focus().setHardBreak().run();
        break;
    }
  };

  return (
    <Button
      tip={tips[type]}
      icon={icons[type]}
      shortcut={shortcuts[type]}
      onClick={() => onExecCommand(type)}
      disabled={!editor?.isActive("paragraph")}
    />
  );
};
