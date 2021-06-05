import React, { ReactElement } from 'react';
import HeadComponent from '@components/Head';
import Layout from '@components/Layout';
import Link from 'next/link';
import styles from './blog.module.scss';

const Blog = (): ReactElement => (
  <>
    <HeadComponent title="Blog" />
    <Layout>
      <div className={styles.blogContainer}>
        <div className={styles.blogText}>
          <h1>Blog Posts</h1>
          <Link href="/blog/csch-pilot-ama">
            <a>CS Career Hub Pilot AMA: Learn More About the CSCH Community and Team and Ask CS Career Questions</a>
          </Link>
        </div>
      </div>
    </Layout>
  </>
);

export default Blog;
