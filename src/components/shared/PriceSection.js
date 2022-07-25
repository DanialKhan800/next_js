import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import Image from '../../components/Image';
import { useTheme } from '@mui/material/styles';

export default function PriceSection({ src, text }) {
  const theme = useTheme();
  return (
    <Box display="flex" alignItems="center">
      <Image src={src} />
      <Typography
        variant="h5"
        sx={{
          marginLeft: '10px',
          color: theme.palette.brandpurple.primary,
        }}
      >
        {text}
      </Typography>
    </Box>
  );
}
