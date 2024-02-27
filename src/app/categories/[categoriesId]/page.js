import { getCategoryNews } from "@/utils/getAllCategoriesNews";
import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import Image from "next/image";


const DynamicNewsPage = async ({ params, searchParams }) => {
     console.log(searchParams);

     const { data } = await getCategoryNews(searchParams.category);
     console.log(data);


     return (
          <div className="my-3">
               <h1>Total <b className="uppercase">{searchParams.category}</b> News : <span className="font-bold">{data.length}</span> </h1>

               <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {
                         data.map(news => (
                              <Grid key={news.id} item xs={6}>
                                   <Card className="my-5">
                                        <CardMedia sx={{"& img":{
                                             width: "100%",
                                             height: "250px"
                                        }}}>
                                             <Image className="w-full" src={news.thumbnail_url} width={800} height={500} alt="top news" />
                                        </CardMedia>
                                        <CardContent>
                                             <span className="p-1 inline-block rounded-sm bg-red-500 text-white">{news?.category}</span>
                                             <Typography gutterBottom variant="h6">
                                                  {news.title.length > 28 ? news.title.slice(0,28) + "..." : news.title}
                                             </Typography>
                                             <Typography gutterBottom variant="h6" component="div">
                                                  By {news.author.name} {news.author.published_date}
                                             </Typography>
                                             <Typography variant="body2" color="text.secondary">
                                                  {news.details.length >120 ? news.details.slice(0,120)+ "..." : news.details}
                                             </Typography>
                                        </CardContent>
                                        <CardActions>
                                             <Button size="small">Share</Button>
                                             <Button size="small">Learn More</Button>
                                        </CardActions>
                                   </Card>
                              </Grid>
                         ))
                    }
               </Grid>
          </div>
     );
};

export default DynamicNewsPage; 