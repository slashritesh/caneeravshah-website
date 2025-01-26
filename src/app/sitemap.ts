import { client } from "@/sanity/sanity";
import type { MetadataRoute } from "next";

const getServices = async () => {
    const query =
        "*[_type == 'services']{title,description,body,slug,_id,_updatedAt,category->{title}}";
    const data = await client.fetch(query, {}, { next: { revalidate: 30 } });
    return data;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const services = await getServices();
    const entries = services.map(
        ({
            category,
            slug,
            _updatedAt,
        }: {
            category: { title: string };
            slug: { current: string };
            _updatedAt: Date;
        }) => ({
            url: `${process.env.NEXT_PUBLIC_URL}/services/${category.title.toLowerCase().replace(/\s+/g, "-")}/${slug.current}`,
            lastModified: _updatedAt,
            priority: 1,
        })
    );
    return [
        {
            url: `${process.env.NEXT_PUBLIC_URL}`,
            lastModified: new Date(),
            priority: 1,
        },
        ...entries,
    ];
}
