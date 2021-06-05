import React, { ReactElement } from 'react';
import HeadComponent from '@components/Head';
import Layout from '@components/Layout';
import styles from './blog.module.scss';

const Blog = (): ReactElement => (
  <>
    <HeadComponent title="Blog" />
    <Layout>
      <div className={styles.blogContainer}>
        <div className={styles.blogText}>
          <h1>Blog Posts</h1>
        </div>
      </div>
    </Layout>
  </>
);

export default Blog;
