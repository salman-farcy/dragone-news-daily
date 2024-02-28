export const getSingleNews = async (id) => {
     const res = await fetch(`http://localhost:5000/news/${id}`, {
          cache: "no-store"
     });

     return res.json();
};