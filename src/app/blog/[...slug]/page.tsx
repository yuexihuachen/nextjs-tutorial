/**
 * 捕获所有的路由路径段
 * @param params 参数
 * @returns 
 */
export default async function BlogDetails({params}: {
    params: Promise<{ slug: string[] }>;
}) {
    const { slug } = await params;
    return <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        Details Blog {slug.toString()}
    </div>
}