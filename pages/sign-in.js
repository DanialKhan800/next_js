// layouts
import Layout from "../src/layouts";
// components
import { Page } from "../src/components";
// mui
import { Box } from "@mui/material";
// components
import { SignIn } from "../src/sections";

// ----------------------------------------------------------------------

export default function SignInPage() {
  return (
    <Page title="The Stock Market of NFTs">
      <Box sx={{ pt: 20 }}></Box>
      <SignIn />
    </Page>
  );
}

// ----------------------------------------------------------------------

SignInPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
