import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { VscMail } from "react-icons/vsc";
import { VscGithubAlt } from "react-icons/vsc";
import { CiLinkedin } from "react-icons/ci";


export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi, I'm <b>Tracey</b>! I'm a software engineer with an interest in
          full-stack development. Talk to me about craft fairs, board games, and
          books :)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Learn More</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Get In Touch</h2>
        <ul className={utilStyles.list}>
          <li>
            <VscMail />{" "}
            <a href="mailto:traceychungdev@gmail.com">
              traceychungdev@gmail.com
            </a>
          </li>
          <li>
            <VscGithubAlt />{" "}
            <a href="https://github.com/traceychung" target="_blank">
              {" "}
              @traceychung
            </a>
          </li>
          <li>
            <CiLinkedin />{" "}
            <a href="https://www.linkedin.com/in/tracey-chung/" target="_blank">
              /tracey-chung
            </a>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
