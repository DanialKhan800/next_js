// layouts
import Layout from "../src/layouts";
// components
import { Page } from "../src/components";
// mui
import { Box } from "@mui/material";
// components
import { SignUp } from "../src/sections";

// ----------------------------------------------------------------------

export default function SignUpPage() {
  return (
    <Page title="The Stock Market of NFTs">
      <Box sx={{ pt: 20 }}></Box>
      <SignUp />
    </Page>
  );
}

// ----------------------------------------------------------------------

SignUpPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
