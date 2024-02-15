import { Box, Container, IconButton, Stack, Typography } from '@mui/material';
import Link from 'next/link';

//icons
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
     const naveItems = [
          {
               route: "Home",
               pathname: "/",
          },
          {
               route: "Pages",
               pathname: "/pages",
          },
          {
               route: "Category",
               pathname: "/category",
          },
          {
               route: "News",
               pathname: "/news",
          },
          {
               route: "About",
               pathname: "/about",
          },
          {
               route: "Contact",
               pathname: "/contact",
          },
     ];
     return (
          <Box className="bg-black px-2 py-10">
               <Container className='space-y-5'>
                    <Box className="w-full text-center" direction="row" sx={{
                         "& svg": {
                              color: "white"
                         }
                    }}>

                         <Link href="https://www.facebook.com/salman.farcy.568/"><IconButton>
                              <FacebookIcon />
                         </IconButton></Link>
                         <Link href="https://twitter.com/SalmanF04555260">
                              <IconButton>
                                   <XIcon />
                              </IconButton>
                         </Link>
                         <Link href="https://www.linkedin.com/in/salman-farcy/">
                              <IconButton>
                                   <LinkedInIcon />
                              </IconButton>
                         </Link>
                         <Link href="https://github.com/salman-farcy">
                              <IconButton>
                                   <GitHubIcon />
                              </IconButton>
                         </Link>
                    </Box>

                    <Box className="space-x-6 w-full text-center text-white" >
                         {
                              naveItems.map(item => (
                                   <Link href={item.pathname} key={item}>
                                        <button>
                                             {item.route}
                                        </button>
                                   </Link>
                              ))
                         }
                    </Box>

                    <Typography variant='body2' color='gray' textAlign='center' >
                         @2024 Dragone News Daily Create By salman farcy 
                    </Typography>
               </Container>
          </Box>
     );
};

export default Footer;