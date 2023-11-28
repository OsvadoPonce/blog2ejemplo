import React from "react";
import { getAllFilesMetadata } from "@/lib/mdx";



const Singleblog = ({posts})=>{

    return(

        <div key={post.slug}>
            <div>
      <section class="page-header position-relative overflow-hidden ptb-120 bg-dark" 
      style={{
        backgroundImage: "url(/img/page-header-bg.svg)",
        backgroundPosition: "bottom left",
        backgroundRepeat: "no-repeat",
      }}>
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-8 col-12">
                        <h1 class="fw-bold display-5">{post.title}</h1>
                    </div>
                </div>
                <div class="bg-circle rounded-circle circle-shape-3 position-absolute bg-dark-light right-5"></div>
            </div>
        </section>
            </div>

        </div>
    );

}

export default Singleblog;

export async function getStaticProps() {
    const posts = await getAllFilesMetadata();
  
    return {
      props: {
        posts,
      },
    };
  }