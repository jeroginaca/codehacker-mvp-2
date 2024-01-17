import Navbar from "@/components/component/Navbar";
import { Post } from "@/lib/interface";
import { client } from "@/lib/sanity";
import Link from "next/link";

async function getData(){
  const query = `* [_type == "post"]`;
  
  const data = await client.fetch(query);

  return data;
}

export const revalidate = 30 // Para que actualize solo.


export default async function Blog() {
  const data = await getData() as Post[];
  return(

    <div className="bg-primary text-[#06062B] h-full selection:bg-[#01DAFE40] py-36">
       
      
        <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="divide-y divide-gray-200 dark:divide-gray-700">

                <div className="space-y-2 pt-6 pb-8 md:space-y-5">
                    <h1 className="text-3xl font-extrabold leading-9 tracking-tight  sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 gradient-title-2 inline-block text-transparent bg-clip-text">
                    All Posts
                    </h1>
                </div>

                <ul>
                    {data.map((post) => (
                    <li key={post._id} className="py-4">
                        <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                        <div>    
                            <p className="text-base font-medium leading-6 gradient-title-2 ">
                            {new Date(post._createdAt).toISOString().split("T")[0]}
                            </p>
                        </div>

                        <Link
                            href={`/post/${post.slug.current}`}
                            prefetch
                            className="space-y-3 xl:col-span-3"
                        >
                            <div>
                            <h3 className="text-2xl font-bold leading-8 tracking-tight text-gray-100">
                                {post.title}
                            </h3>
                            </div>

                            <p className="prose max-w-none text-gray-500 dark:text-gray-400 line-clamp-2">
                            {post.overview}
                            </p>
                        </Link>
                        </article>
                    </li>
                    ))}
                </ul>

            </div>
        </main>
   
    </div>

  )
}