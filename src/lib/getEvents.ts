import { getSortedPostsData } from './getPosts';
import { convertToValidDate, partition } from './utils';
import { PostData } from '../models/Post';

export default function getEventsByDate(): PostData[][] {
  let parts = partition(getSortedPostsData('event-calendar'), event => {
    const date = new Date(convertToValidDate(event.date));
    return date && date < new Date();
  });

  parts.map(part =>
    part.sort((a, b) => {
      const date1 = new Date(convertToValidDate(a.date));
      const date2 = new Date(convertToValidDate(b.date));
      if (date1 > date2) {
        return 1;
      }
      return -1;
    })
  );
  return parts;
}
