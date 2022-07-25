// layouts
import Layout from "../src/layouts";
// components
import { Page } from "../src/components";
// mui
import { Box } from "@mui/material";
// components
import { About } from "../src/sections";

// ----------------------------------------------------------------------

export default function AboutPage() {
  return (
    <Page title="The Stock Market of NFTs">
      <About />
    </Page>
  );
}

// ----------------------------------------------------------------------

AboutPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
