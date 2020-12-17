import React from 'react';
import get from 'lodash/get';
import Hero from '../components/hero';
import Layout from '../components/layout';
import ArticlePreview from '../components/article-preview';
import { SEO } from '../components/seo';

const RootIndex = (props: any) => {
  return (
    <Layout>
      <div style={{ background: '#fff' }} />
    </Layout>
  );
};

export default RootIndex;
