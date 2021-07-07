import { getSortedPostsData } from './getPosts';
import { convertToValidDate, partition, sortByValidDate } from './utils';
import { PostData } from '../models/Post';

export default function getEventsByDate(): PostData[][] {
  let parts = partition(getSortedPostsData('event-calendar'), event => {
    const date = new Date(convertToValidDate(event.date));
    return date && date < new Date();
  });

  return parts.map(part => sortByValidDate(part));
}
