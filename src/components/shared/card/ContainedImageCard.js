
import { Card } from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from '../../Image';

const RootStyle = styled('div')(({ theme }) => ({
    overflow: 'hidden',
    position: 'relative',

}));

function ContainedImageCard({ cardWidth, cardHeight, src, alt, width, borderRadius, height, ...props }) {
    return (
        <RootStyle>
            <Card sx={{ maxWidth: { cardWidth }, borderRadius: { borderRadius }, height: { cardHeight } }}>
                <Image src={src} alt={alt} width={width} height={height} {...props} />
            </Card>

        </RootStyle >

    )
}

export default ContainedImageCard;