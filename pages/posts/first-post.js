import Link from "next/link"
import Image from "next/image"

export default function FirstPost() {

    return (
     <>
        <h1>First Post</h1>
         <h2>
             <Link href="/">
                 <a>Back to Home</a>
             </Link>
         </h2>

         <Image
             src="/images/profile.jpg"
             height = {144}
             width = {144}
             alt = "Bishwajit"
         />
     </>
    )
}