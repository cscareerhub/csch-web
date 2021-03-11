import React from 'react';
import Head from 'next/head';

interface HeadProps {
  title?: string;
}

const HeadComponent: React.FC<HeadProps> = props => {
  const { title } = props;
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/csch-statico-round.png" />
      <link href="https://fonts.googleapis.com/css?family=Inter|Roboto" rel="stylesheet" />
    </Head>
  );
};

HeadComponent.defaultProps = {
  title: 'CS Career Hub'
};

export default HeadComponent;
