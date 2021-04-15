import Link from "next/link"
import Image from "next/image"
import Layout from "../../components/Layout";

export default function FirstPost({data}) {

    return (
     <Layout>
         <style jsx>{`
            a {
                color: blue
            }
         `}</style>
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

         <p>{'name: ' + data[0].name}</p>
     </Layout>
    )
}

export async function getStaticProps() {

    const res = await fetch("https://607847bde7f4f50017184030.mockapi.io/api/next-js/me")
    const data = await res.json()

    console.log('data: ' + data)
    return {
        props: {
            data
        }
    }
}