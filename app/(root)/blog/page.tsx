import Navbar from "@/components/component/Navbar";
import { Post } from "@/lib/interface";
import { client } from "@/sanity/lib/client"; 
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

    <div className="bg-primary text-white h-full selection:bg-[#01DAFE40] py-36">
       
      
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

// import Filters from "@/components/component/Filters";
// import Header from "@/components/component/Header";
// import ResourceCard from "@/components/component/ResourceCard";
// import { SearchForm } from "@/components/component/SearchForm";
// import { getResources, getResourcesPlaylist } from "@/sanity/actions";

// export const revalidate = 30

// interface Props {
//   searchParams: { [key: string]: string | undefined }
 
// }

// export default async function Home({ searchParams }: Props) {
//   const resources = await getResources({
//     query: searchParams?.query || "",
//     category: searchParams?.category || "",
//     page: "1"
//   })

//   const resourcesPlaylist = await getResourcesPlaylist();

//   return (
//     <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col">
//       <section className="nav-padding w-full">
//         <div className="flex-center relative min-h-[274px] w-full flex-col rounded-xl bg-banner bg-cover bg-center text-center">
//           <h1 className="sm:heading1 heading2 mb-6 text-center text-white">
//             CodeHacker Academy
//           </h1>
//         </div>
//         <SearchForm />
//       </section>
//       <Filters />

//       {(searchParams?.query || searchParams?.category) && (
//         <section className="flex-center mt-6 w-full flex-col sm:mt-20">
//           <Header
//             query = {searchParams?.query || ""}
//             category = {searchParams?.category || ""}
//           />
//           <div className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
//             {resources?.length > 0 ? (
//               resources.map((resource: any) => (
//                 <ResourceCard 
//                   key={resource}
//                   title={resource.title}
//                   id={resource._id}
//                   image={resource.image}
//                   downloadNumber={resource.views}
//                   slug={resource._id}
//                   downloadLink={resource.downloadLink}
//                 />
//               ))
//             ) : (
//               <p className="body-regular text-white-400">
//                 No resources found
//               </p>
//             )}
//           </div>
//         </section> 
//       )}

//       {resourcesPlaylist.map((item: any) => (
//         <section key={item._id} className="flex-center mt-6 w-full flex-col sm:mt-20">
//           <h1 className="heading3 self-start text-white-800">{item.title}</h1>
//           <div className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
//             {item.resources.map((resource: any) => (
//                 <ResourceCard 
//                   key={resource._id}
//                   slug={resource._id}
//                   title={resource.title}
//                   id={resource._id}
//                   image={resource.image}
//                   downloadNumber={resource.views}
//                   downloadLink={resource.downloadLink}
//                 />
//               ))}
//           </div>
//         </section>
//       ))}
//     </main>
//   )
// }
