import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import topNews from "../../../assets/Rectangle 3979.png"
import topNews2 from "../../../assets/newsImage2.png"
import Image from "next/image";
import { getAllNews } from "@/utils/getAllNews";
import Link from "next/link";

const LatestNews = async () => {
     const { data } = await getAllNews()
     console.log(data[0]);

     return (
          <Box>
               <Card className="my-5">
                    <CardMedia>
                         <Image className="w-full" src={data[0].thumbnail_url} width={1000} height={800} alt="top news" />
                    </CardMedia>
                    <CardContent>
                         <p className="p-1 inline-block rounded-sm bg-red-500 text-white">{data[0].category}</p>
                         <Typography gutterBottom variant="h5" component="div">
                              {data[0].title}
                         </Typography>
                         <Typography gutterBottom variant="h5" component="div">
                              By {data[0].author.name} - {data[0].author.published_date}
                         </Typography>
                         <Typography variant="body2" color="text.secondary" style={{ textAlign: "justify" }}>
                              {data[0].details.length > 400 ? data[0].details.slice(0, 400) : data[0].details}
                         </Typography>
                    </CardContent>
                    <CardActions>
                         <Button size="small">Share</Button>
                         <Button size="small">Learn More</Button>
                    </CardActions>
               </Card>


               <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {
                         data.slice(1,5).map(news => (<Grid key={news.id} item xs={6}>
                              <Link href={`/${news.category.toLowerCase()}/${news._id}`}>
                                   <Card className="my-5">
                                        <CardMedia sx={{
                                             "& img": {
                                                  width: "100%",
                                                  height: "250px"
                                             }
                                        }}>
                                             <Image className="w-full" src={news.thumbnail_url} width={400} height={200} alt="top news" />
                                        </CardMedia>
                                        <CardContent>
                                             <p className="p-1 inline-block rounded-sm bg-red-500 text-white">{news.category}</p>
                                             <Typography gutterBottom variant="h5" component={'h5'}>
                                                  {news.title.length > 28 ? news.title.slice(0, 28) + "..." : news.title}
                                             </Typography>
                                             <Typography gutterBottom variant="h6" component="h6">
                                                  By {news.author.name} - {news.author.published_date}
                                             </Typography>
                                             <Typography variant="body2" color="text.secondary" style={{ textAlign: "justify" }}>
                                                  {news.details.length > 150 ? news.details.slice(0, 150) : news.details}
                                             </Typography>
                                        </CardContent>
                                        <CardActions>
                                             <Button size="small">Share</Button>
                                             <Button size="small">Learn More</Button>
                                        </CardActions>
                                   </Card>
                              </Link>
                         </Grid>))
                    }

               </Grid>
          </Box>
     );
};

export default LatestNews;