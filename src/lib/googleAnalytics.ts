interface EventOptions {
  action: any;
  params: any;
}

// log the pageview with their URL
export const pageview = (url: string): void => {
  (window as any).gtag('config', process.env.GOOGLE_ANALYTICS_ID, {
    page_path: url
  });
};

// log specific events happening.
export const event = ({ action, params }: EventOptions): void => {
  (window as any).gtag('event', action, params);
};
