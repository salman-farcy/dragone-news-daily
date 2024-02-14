"use client";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Image from 'next/image';
import logo from "@/assets/demo-logo.png"
import { IconButton, Stack, colors } from '@mui/material';
import Link from 'next/link';

//icons
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

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


function ResponsiveAppBar() {


     return (
          <AppBar position="static" className='bg-black'>
               <Container maxWidth="xl">
                    <Toolbar disableGutters>
                         <Image src={logo} width={200} height={100} alt='logo' />

                         <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                              <div className="space-x-6 mx-auto ">
                                   {naveItems.map((item) => (
                                        <Link key={item} href={item.pathname}>
                                             <button>
                                                  {item.route}
                                             </button>
                                        </Link>
                                   ))}
                              </div>
                         </Box>

                         <Box>
                              <Stack direction="row" sx={{
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
                              </Stack>
                         </Box>
                    </Toolbar>
               </Container>
          </AppBar>
     );
}
export default ResponsiveAppBar;