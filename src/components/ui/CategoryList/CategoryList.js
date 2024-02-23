import { getAllCategories } from "@/utils/getAllCategories";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";


const CategoryList = async () => {
     const { data: allCategories } = await getAllCategories()
     // console.log(allCategories);

     return (
          <Box>
               <Typography variant="h6">Categories</Typography>
               <Divider />

               <Stack>
                    {
                         allCategories.map((Category) => (
                              <Button variant="outlined"  key={Category?.id}>{Category?.title}</Button>
                         ))
                    }
               </Stack>
          </Box>
     );
};

export default CategoryList;