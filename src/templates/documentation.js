import React from "react"
import '../assets/less/toolkit-startup.less';
import '../assets/less/main.less';
import '../assets/less/docs.less';
// import DocumentationStyles from '../components/DocumentationStyles';

export default ({ data }) => {
  const post = data.markdownRemark;
  const {
    title,
    description
  } = post.frontmatter;

  return (
    <div>
      <div className="docs-header" id="content">
        <div className="container">
          <h1>{title}</h1>
          <p>
            {description}
          </p>
        </div>
      </div>
      <div className="container docs-content">
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </div>
  );
}

// export const query = graphql`
//   query BlogPostQuery($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         title
//         description
//       }
//     }
//   }
// `;
