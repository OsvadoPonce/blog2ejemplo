import Header from "./Header";
import Footer from "./Footer2";

export const MdxPage = ({ children }) => {
  return (
    <div className="mdx-page">
      <Header/>
      {children}
      <style jsx>{`
        .mdx-page {
          background-color: white;
          padding: 20px;
          color: black;
        }
      `}</style>
      <Footer/>
    </div>
  );
};

