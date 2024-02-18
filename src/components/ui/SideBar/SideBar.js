import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import topNews from "../../../assets/Side-top-news.png"


const SideBar = () => {
     return (
          <Box>
               <Card className="my-5">
                    <CardMedia>
                         <Image className="w-full" src={topNews} alt="top news" />
                    </CardMedia>
                    <CardContent>
                         <p className="p-1 inline-block rounded-sm bg-red-500 text-white">Technology</p>
                         <Typography gutterBottom variant="h5" component="div">
                              Lizard
                         </Typography>
                         <Typography gutterBottom variant="h5" component="div">
                              By Salman farcy - Mar 18.2023
                         </Typography>
                         <Typography variant="body2" color="text.secondary">
                              Lizards are a widespread group of squamate reptiles, with over 6,000
                              species, ranging across all continents except Antarctica
                         </Typography>
                    </CardContent>
                    <CardActions>
                         <Button size="small">Share</Button>
                         <Button size="small">Learn More</Button>
                    </CardActions>
               </Card>
          </Box>
     );
};

export default SideBar;