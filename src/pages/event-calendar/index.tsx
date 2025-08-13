import React, { ReactElement } from 'react';
import Link from 'next/link';
import getEventsByDate from 'src/lib/getEvents';
import { PostData } from '../../models/Post';
import styles from './index.module.scss';
import Head from "next/head";

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
    <Link href={`/${directory}/${data?.id}`} legacyBehavior>
      <a>{data?.title}</a>
    </Link>
  </li>
);

const EventCalendar = (props): ReactElement => {
  const { allEvents } = props;
  return (
    <>
      <Head>
        <title title="Event Calendar">Event Calendar</title>
        <meta name="description" content="Explore upcoming CS Career Hub events and catch up on previous ones to stay connected and involved."/>
        <meta property="og:description" content="Explore upcoming CS Career Hub events and catch up on previous ones to stay connected and involved."/>
        <meta property="twitter:description" content="Explore upcoming CS Career Hub events and catch up on previous ones to stay connected and involved."/>
      </Head>
      <h1>Event Calendar</h1>
      <h2>Upcoming Events</h2>
      {allEvents[1]?.length ? allEvents[1].map((data: PostData) => renderEvent(data)) : <p>Stay tuned!</p>}
      <h2>Past Events</h2>
      {allEvents[0].map((data: PostData) => renderEvent(data))}
    </>
  );
};

export default EventCalendar;

EventCalendar.displayName = 'Event Calendar';
