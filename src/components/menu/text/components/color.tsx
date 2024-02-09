import React from "react";
import { TextMenuContext } from "@/components";
import { ColorPicker } from "antd";

import { Button } from "./button";

export const Color: React.FC = () => {
  const { editor } = React.useContext(TextMenuContext);

  const current = editor?.getAttributes("textStyle")?.color;
  const [color, setColor] = React.useState(current);

  React.useEffect(() => {
    setColor(current || "#FFFFFF");
  }, [current]);

  if (!editor) return;

  const onExecCommand = (color: string) => {
    if (/^#([0-9A-F]{3}){1,2}$/i.test(color)) {
      editor.chain().setColor(color).run();
    }
  };

  const onExecClearCommand = () => {
    editor.chain().unsetColor().run();
  };

  return (
    <ColorPicker
      allowClear
      value={color}
      destroyTooltipOnHide
      onChange={(value) => onExecCommand(value.toHexString())}
      onClear={onExecClearCommand}
    >
      <Button icon="Palette" tip="Text color" active={!!current} />
    </ColorPicker>
  );
};
