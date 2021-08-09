import React, { ReactElement } from 'react';
import Link from 'next/link';
import getEventsByDate from 'src/lib/getEvents';
import Layout from '../../components/Layout';
import { PostData } from '../../models/Post';
import styles from './index.module.scss';

const directory = 'event-calendar';

export async function getStaticProps(): Promise<Record<'props', any>> {
  const allEvents = getEventsByDate();
  return {
    props: {
      allEvents
    }
  };
}

const renderEvent = (data: PostData) => (
  <li key={data?.id} className={styles.noListStyle}>
    <span>{data?.date}</span>
    <Link href={`/${directory}/${data?.id}`}>
      <a>{data?.title}</a>
    </Link>
  </li>
);

const EventCalendar = (props): ReactElement => {
  const { allEvents } = props;
  return (
    <Layout title="Event Calendar" hideTopButton>
      <h1>Event Calendar</h1>
      <h2>Upcoming Events</h2>
      {allEvents[1]?.length ? allEvents[1].map((data: PostData) => renderEvent(data)) : 'Stay tuned!'}
      <h2>Past Events</h2>
      {allEvents[0].map((data: PostData) => renderEvent(data))}
    </Layout>
  );
};

export default EventCalendar;
