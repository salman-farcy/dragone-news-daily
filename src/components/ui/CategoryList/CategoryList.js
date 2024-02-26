import { getAllCategories } from "@/utils/getAllCategories";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";



const CategoryList = async () => {
     const { data: allCategories } = await getAllCategories()
     // console.log(allCategories);

     return (
          <Box className="mt-5 bg-gray-200 p-5">
               <Typography className="mb-1" variant="h6">Categories</Typography>
               <Divider color='warning' className="mb-4" />

               <Stack rowGap={1} severity="success">
                    {
                         allCategories.map((category) => (
                              <Button color='warning' variant="outlined" key={category?.id}>
                                   <Link key={category?.id} href={`/categories/news?category=${category.title.toLowerCase()}`}>
                                        {category?.title}
                                   </Link>
                              </Button>
                         ))
                    }
               </Stack>
          </Box>
     );
};

export default CategoryList;