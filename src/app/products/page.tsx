
import Link from "next/link";


export default async function Products({params}: {
    params: Promise<{ productId: string }>;
}) {
    const { productId } = await params;

    console.log(productId)
    return <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <h1>Products List </h1>
        <ul>
            <li>
                <Link href={`/products/1`}>Products 1</Link>
            </li>
            <li>
                <Link href={`/products/2`}>Products 2</Link>
            </li>
            <li>
                <Link href={`/products/3`}>Products 3</Link>
            </li>
        </ul>
    </div>
}