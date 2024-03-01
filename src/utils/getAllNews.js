export const getAllNews = async () => {
     const res = await fetch("http://localhost:5000/all-news",
     {
          next: {
               revalidate: 30,
          },
     });

     return res.json()
}