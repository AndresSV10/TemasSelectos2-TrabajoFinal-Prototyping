import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typed from 'react-typed';
import product from "../../../../src/Assets/product_img.png" 

const Hero = () => {
    const theme = useTheme();

    const isMd = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true,
    });
    return (
        <Grid container spacing={1} marginLeft={15}>
            <Grid item container xs={12} md={5} alignItems={'center'}>
                <Box data-aos={isMd ? 'fade-right' : 'fade-up'} paddingLeft={isMd && 2} p={1}>
                    <Box marginBottom={2} >
                        <Typography
                            variant="h4"
                            color="#449bff"
                            sx={{ fontWeight: 700, fontSize:"50px" }}
                        >
                            Purificadora {' '}
                        </Typography>
                        <Typography
                            variant="h4"
                            color="white"
                            sx={{ fontWeight: 700, fontSize:"70px" }}
                        >
                            Valle Del Volcan. {' '}
                        </Typography>
                    </Box>
                    <Box marginBottom={3}>
                        <Typography variant="h5" component="p" color="white">
                            Our commitment to purification ensures the highest quality water for you, ensuring your well-being with every sip.
                        </Typography>
                    </Box>
                    <Box
                        display="flex"
                        flexDirection={{ xs: 'column', sm: 'row' }}
                        alignItems={{ xs: 'stretched', sm: 'flex-start' }}
                    >
                        <Button
                            variant="contained"
                            color="primary"
                            style={{maxWidth: '160px', maxHeight: '55px', fontSize:'20px'}}
                            fullWidth={isMd ? false : true}
                        >
                            BUY NOW
                        </Button>
                        <Box
                            component={Button}
                            style={{ border: '3px solid' }}
                            variant="outlined"
                            color="white"
                            size="large"
                            marginTop={{ xs: 2, sm: 0 }}
                            marginLeft={{ sm: 2 }}
                            fullWidth={isMd ? false : true}
                        >
                            Learn more
                        </Box>
                    </Box>
                </Box>
            </Grid>
            <Grid
                item
                container
                alignItems={'center'}
                justifyContent={'center'}
                xs={12}
                md={6}
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
            >
                <Box
                    component={LazyLoadImage}
                    height={1}
                    width={1}
                    src={product}
                    alt="..."
                    color="white"                         
                    borderRadius={2}
                    maxWidth={600}
                    sx={{
                        filter: theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
                    }}
                />
            </Grid>
        </Grid>
    )
}

export default Hero
