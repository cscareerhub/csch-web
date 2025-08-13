import React, { ReactElement } from 'react';
import Link from 'next/link';
import { getSortedPostsData } from '../../lib/getPosts';
import { PostData } from '../../models/Post';
import styles from './index.module.scss';
import Head from "next/head";

const directory = 'event-recordings';

export async function getStaticProps(): Promise<Record<'props', any>> {
  const allPostsData = getSortedPostsData(directory);
  return {
    props: {
      allPostsData
    }
  };
}

const EventRecordings = (props): ReactElement => {
  const { allPostsData } = props;
  return (
    <>
      <Head>
        <title title="Event Recordings">Event Recordings</title>
        <meta name="description" content="Access recordings of previous CS Career Hub events to learn, engage, and stay connected with the community."/>
        <meta property="og:description" content="Access recordings of previous CS Career Hub events to learn, engage, and stay connected with the community."/>
        <meta property="twitter:description" content="Access recordings of previous CS Career Hub events to learn, engage, and stay connected with the community."/>
      </Head>
      <h1>Event Recordings</h1>
      {allPostsData.map((data: PostData) => (
        <li key={data?.id} className={styles.noListStyle}>
          <span>{data?.date}</span>
          <Link href={`/${directory}/${data?.id}`} legacyBehavior>
            <a>{data?.title}</a>
          </Link>
        </li>
      ))}
    </>
  );
};

export default EventRecordings;

EventRecordings.displayName = 'Event Recordings';
