import { getCategoryNews } from "@/utils/getAllCategoriesNews";


const DynamicNewsPage = async ({ params, searchParams }) => {
     console.log(searchParams);

     const { data } = await getCategoryNews(searchParams.category);
     console.log(data);


     return (
          <div className="my-3">
               <h1>Total <b className="uppercase">{searchParams.category}</b> News : <span className="font-bold">{data.length}</span> </h1>
          </div>
     );
};

export default DynamicNewsPage; 