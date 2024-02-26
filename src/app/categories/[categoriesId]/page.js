import { getCategoryNews } from "@/utils/getAllCategoriesNews";


const DynamicNewsPage = async ({ params, searchParams }) => {
     console.log(searchParams);

     const { data } = await  getCategoryNews(searchParams.category);
     console.log(data);


     return (
          <div>
               <h1>Dynamic News Page {searchParams.category} </h1>
          </div>
     );
};

export default DynamicNewsPage;