import React, { ReactElement } from 'react';
import Link from 'next/link';
import { getSortedPostsData } from '../../lib/getPosts';
import { PostData } from '../../models/Post';
import styles from './index.module.scss';

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
