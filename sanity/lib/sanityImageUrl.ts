import ImageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client"; 


const builder = ImageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
