import { getSingleNews } from "@/utils/getSingleNews";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";


const NewsDetailPage = async ({ params }) => {
     const { data:news } = await getSingleNews(params.newsId);
     console.log(news);

     return (
          <Box>
               <Container>
                    <Grid container spacing={2}>
                         <Grid item lg={6}>
                              <Image src={news.thumbnail_url} width={800} height={500} alt="News dtail page" />
                              <Grid container spacing={2} className="mt-2">
                                   <Grid item lg={6}>
                                        <Image src={news?.thumbnail_url} width={400} height={500} alt="News dtail page" />
                                   </Grid>
                                   <Grid item lg={6}>
                                        <Image src={news?.thumbnail_url} width={400} height={500} alt="News dtail page" />
                                   </Grid>
                              </Grid>
                         </Grid>
                         <Grid item lg={6}>
                              <Typography variant="h5">{news.title}</Typography>
                         </Grid>
                    </Grid>
               </Container>
          </Box>
     );
};

export default NewsDetailPage;