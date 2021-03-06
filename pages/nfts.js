// @mui
import { styled } from "@mui/material/styles";
import {
  Button,
  Stack,
  Typography,
  InputAdornment,
  FilledInput,
} from "@mui/material";
// layouts
import Layout from "../src/layouts";
// hooks
import useCountdown from "../src/hooks/useCountdown";
// components
import { Page, Image, SocialsButton } from "../src/components";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  padding: theme.spacing(15, 2.5),
  backgroundImage: `url("/assets/images/jpeg/hero-background.webp")`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "auto",
  backgroundPosition: "center",
  [theme.breakpoints.up("sm")]: {
    height: "100vh",
  },
}));

const CountdownStyle = styled("div")({
  display: "flex",
  justifyContent: "center",
});

const SeparatorStyle = styled(Typography)(({ theme }) => ({
  margin: theme.spacing(0, 1),
  [theme.breakpoints.up("sm")]: {
    margin: theme.spacing(0, 2.5),
  },
}));

// ----------------------------------------------------------------------

export default function NFTS() {
  const countdown = useCountdown(new Date("07/07/2022 21:30"));

  return (
    <Page title="Coming Soon">
      <RootStyle>
        <Stack alignItems="center" sx={{ maxWidth: 480, color: "#fff" }}>
          <Typography variant="h3" paragraph>
            Coming Soon!
          </Typography>
          <Typography>We are currently working hard on this page!</Typography>

          <CountdownStyle sx={{ color: "#fff" }}>
            {TimeBox(countdown.days, "Days")}
            <SeparatorStyle variant="h2">:</SeparatorStyle>
            {TimeBox(countdown.hours, "Hours")}
            <SeparatorStyle variant="h2">:</SeparatorStyle>
            {TimeBox(countdown.minutes, "Minutes")}
            <SeparatorStyle variant="h2">:</SeparatorStyle>
            {TimeBox(countdown.seconds, "Seconds")}
          </CountdownStyle>
        </Stack>
      </RootStyle>
    </Page>
  );
}

// ----------------------------------------------------------------------

NFTS.getLayout = function getLayout(page) {
  return <Layout disabledFooter>{page}</Layout>;
};

// ----------------------------------------------------------------------

function TimeBox(type, label) {
  return (
    <div>
      <Typography variant="h2">{type}</Typography>
      <Typography sx={{ color: "text.secondary" }}>{label}</Typography>
    </div>
  );
}
