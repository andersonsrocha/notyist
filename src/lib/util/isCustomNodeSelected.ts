import { Editor } from "@tiptap/react";
import { CodeBlock } from "@/packages/extension-code-block";
import { Image } from "@/packages/extension-image";
import { ImageUpload } from "@/packages/extension-image-upload";

export const isTableGripSelected = (node: HTMLElement) => {
  let container = node;

  while (container && !["TD", "TH"].includes(container.tagName)) {
    container = container.parentElement!;
  }

  const gripColumn = container && container.querySelector && container.querySelector("a.grip-column.selected");
  const gripRow = container && container.querySelector && container.querySelector("a.grip-row.selected");

  if (gripColumn || gripRow) {
    return true;
  }

  return false;
};

export const isCustomNodeSelected = (editor: Editor, node: HTMLElement) => {
  const customNodes = [CodeBlock.name, ImageUpload.name, Image.name];

  return customNodes.some((type) => editor.isActive(type)) || isTableGripSelected(node);
};

export default isCustomNodeSelected;
