import React from 'react';
import get from 'lodash/get';
import Hero from '../components/hero';
import Layout from '../components/layout';
import ArticlePreview from '../components/article-preview';
import { SEO } from '../components/seo';
import { MediaContextProvider } from '../media';

const RootIndex = (props: any) => {
  return (
    <MediaContextProvider>
      <Layout>
        <div style={{ background: '#fff' }} />
      </Layout>
    </MediaContextProvider>
  );
};

export default RootIndex;
