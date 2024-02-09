import TiptapHeading from "@tiptap/extension-heading";
import { ReactNodeViewRenderer } from "@tiptap/react";

import { View } from "./view";

export const Heading = TiptapHeading.extend({
  addNodeView() {
    return ReactNodeViewRenderer(View);
  },
});
