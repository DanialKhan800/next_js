import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import Image from '../../components/Image';
import { useTheme } from '@mui/material/styles';

export default function ViewsSection({ src, text }) {
  const theme = useTheme();
  return (
    <Box display="flex" alignItems="center">
      <Image src={src} />
      <Typography variant="body4" sx={{ ml: '10px' }}>
        {text}
      </Typography>
    </Box>
  );
}
