
export const getCategoryNews = async (category) => {
     const res = await fetch(`http://localhost:5000/news?category=${category}`,
          {
               cache: "no-store",
          }
     );

     return res.json();
};