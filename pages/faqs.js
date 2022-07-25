// layouts
import Layout from "../src/layouts";
// components
import { Page } from "../src/components";
// mui
import { Box } from "@mui/material";
// components
import { FAQs } from "../src/sections";

// ----------------------------------------------------------------------

export default function FAQsPage() {
  return (
    <Page title="The Stock Market of NFTs">
      <Box sx={{ pt: 10 }}></Box>
      <FAQs />
    </Page>
  );
}

// ----------------------------------------------------------------------

FAQsPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
