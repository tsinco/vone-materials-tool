import { configure } from "@storybook/react";

const req = require.context("../Forms/Vone", true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
