import { MDXRemote } from "next-mdx-remote";
import { getFileBySlug, getFiles } from "@/lib/mdx"
import MDXComponents from "@/components/MDXComponents";
import Header from "@/components/Header";

export default function post({ source }) {
    return <MDXRemote {...source} components={MDXComponents}/>
    
};

export async function getStaticProps({ params }) {
    const { source, frontmatter } = await getFileBySlug(params.slug);

    return {
        props: { source, frontmatter },
    };
}

export async function getStaticPaths() {
    <Header/>
    const posts = await getFiles();
    const paths = posts.map((post) => ({
        params: {
            slug: post.replace(/\.mdx/, ""),
        },
    }));

    return {
        paths, 
        fallback: false,
    }
}