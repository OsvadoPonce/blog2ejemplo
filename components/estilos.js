export const MdxPage = ({ children }) => {
  return (
    <div className="mdx-page">
      {children}
      <style jsx>{`
        .mdx-page {
          background-color: white;
          padding: 20px;
          color: black;
        }
      `}</style>
    </div>
  );
};