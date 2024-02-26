

const DynamicNewsPage = ({ params, searchParams }) => {
     return (
          <div>
               <h1>Dynamic News Page {searchParams.category} </h1>
          </div>
     );
};

export default DynamicNewsPage;