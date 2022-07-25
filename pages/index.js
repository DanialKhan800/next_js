// layouts
import Layout from "../src/layouts";
// components
import { Page } from "../src/components";
// mui
import { Box } from "@mui/material";
// components
import { HomeHero } from "../src/sections";

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <Page title="The Stock Market of NFTs">
      {/* <Box width="100%" maxHeight="300px" height="160px"></Box> */}
      <HomeHero />
    </Page>
  );
}

// ----------------------------------------------------------------------

HomePage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
