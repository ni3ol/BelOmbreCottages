import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import styles from './blog.module.css';
import Layout from '../components/layout';
import ArticlePreview from '../components/article-preview';
import { SEO } from '../components/seo';

const BlogIndex = (props: any) => {
  return (
    <Layout>
      <div style={{ background: '#fff' }}>
        <SEO />
      </div>
    </Layout>
  );
};

export default BlogIndex;
