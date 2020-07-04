import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import styles from './blog.module.css';
import Layout from '../components/layout';
import ArticlePreview from '../components/article-preview';
import { SEO } from '../components/seo';

const BlogIndex = (props: any) => {
  const posts = get(props, 'data.allContentfulBlogPost.edges');
  return (
    <Layout>
      <div style={{ background: '#fff' }}>
        <SEO />
        <div className={styles.hero}>Blog</div>
        <div className="wrapper">
          <h2 className="section-headline">Recent articles</h2>
          <ul className="article-list">
            {posts.map(({ node }: { node: any }) => {
              return (
                <li key={node.slug}>
                  <ArticlePreview article={node} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`;
