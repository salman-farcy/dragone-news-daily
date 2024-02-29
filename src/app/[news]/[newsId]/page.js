import { getSingleNews } from "@/utils/getSingleNews";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";


const NewsDetailPage = async ({ params }) => {
     const { data: news } = await getSingleNews(params.newsId);
     console.log(news);

     return (
          <Box className="my-5">
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
                         <Grid item lg={6} className="space-y-3">
                              <Typography variant="h5" component={"h2"}>{news.title}</Typography>
                              <Box sx={{
                                   display: 'flex',
                                   gap: 1,
                                   alignItems: 'center'
                              }}>
                                   <Avatar alt="author" src={news.author.img} />
                                   <Typography>
                                        By {news.author.name}
                                   </Typography>
                                   <Typography>
                                        - {news.author.published_date}
                                   </Typography>
                              </Box>
                              <Typography style={{
                                   textAlign: "justify",
                                   whiteSpace: "pre-line",
                                   color: "gray"
                              }}>{news.details}</Typography>

                              <Typography variant="h6">
                                   ``Many desktop publishing packages and web page editors now use as their default model test!
                              </Typography>

                              <Typography variant="h6">
                                  -Salman farcy
                              </Typography>
                         </Grid>
                    </Grid>
               </Container>
          </Box>
     );
};

export default NewsDetailPage;