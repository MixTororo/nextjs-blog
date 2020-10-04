import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>…</Head>
      <section className={utilStyles.headingMd}>…</section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Business and Soul Research</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, title }) => (
            <li className={utilStyles.listItem} key={id}>
             <Link href={`/posts/${id}`}>
               <a>{title}</a>
             </Link>             
            </li>
          ))}
        </ul>
        <br />
        <p>山田仁一郞</p>
        <p>大阪市立大学大学院経営学研究科 教授</p>
        <p>アントレプレナーシップ論・経営戦略論・組織論</p>
        <br />
        <p>Yamada Jin-ichiro</p>
        <p>Graduate School of Business, Osaka City Univ. (Professor)</p>
        <p>Entrepreneurship / Strategy / Organizational Theory</p>
      </section>
    </Layout>
  )
}