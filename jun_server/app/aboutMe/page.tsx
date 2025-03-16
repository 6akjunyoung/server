import Layout from '@/componnets/layout'
import Hero from '@/componnets/hero'
import Example1 from './example1'


export default function Home() {
    return (
        <Layout>
            <Hero>
                <Example1 />
            </Hero>
        </Layout>
    )
}