import React from "react";
import { isRowGripSelected } from "@/packages/core/helpers";
import { Action } from "@/components/ui/action";
import { Button } from "@/components/ui/button";
import { v4 as uuid } from "uuid";

import { BaseBubbleMenu } from "./base-bubble-menu";

import { MenuProps, ShouldShowProps } from "@/types";

export const TableRowMenu: React.FC<MenuProps> = ({ appendTo, editor }) => {
  const shouldShow = React.useCallback(
    ({ view, state, from }: ShouldShowProps) => {
      if (!state || !from || !editor) {
        return false;
      }

      return isRowGripSelected({ editor, view, state, from });
    },
    [editor]
  );

  const onAddRowBefore = React.useCallback(() => {
    editor?.chain().focus().addRowBefore().run();
  }, [editor]);

  const onAddRowAfter = React.useCallback(() => {
    editor?.chain().focus().addRowAfter().run();
  }, [editor]);

  const onDeleteRow = React.useCallback(() => {
    editor?.chain().focus().deleteRow().run();
  }, [editor]);

  if (!editor) return;

  return (
    <BaseBubbleMenu
      editor={editor}
      pluginKey={`TableRowMenu-${uuid()}`}
      shouldShow={shouldShow}
      updateDelay={0}
      tippyOptions={{
        offset: [0, 8],
        placement: "left",
        popperOptions: {
          modifiers: [{ name: "flip", enabled: false }],
        },
        appendTo: () => appendTo.current!,
      }}
    >
      <Action.Wrapper direction="vertical">
        <Button center={false} icon="ArrowUpToLine" onClick={onAddRowBefore}>
          Add row before
        </Button>
        <Button center={false} icon="ArrowDownToLine" onClick={onAddRowAfter}>
          Add row after
        </Button>
        <Button center={false} icon="Trash2" onClick={onDeleteRow}>
          Delete row
        </Button>
      </Action.Wrapper>
    </BaseBubbleMenu>
  );
};

TableRowMenu.displayName = "TableRowMenu";

export default TableRowMenu;
