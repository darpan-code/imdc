/* eslint-disable @next/next/no-img-element */
const BlogSection = () => {
  return (
    <>
      <section className="animated-section section-active">
        <div className="page-title">
          <h2>Blog</h2>
        </div>

        <div className="section-content">
          <div className="row">
            <div className="col-xs-12 col-sm-12">
              <div className="blog-masonry two-columns clearfix">
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        @media (max-width: 768px) {
          .animated-section {
            padding: 30px;
          }
        }
      `}</style>
    </>
  );
};

const BlogItem = () => {
  return (
    <div className="item post-1">
      <div className="blog-card">
        <div className="media-block">
          <a href="blog-post-1.html">
            <img
              src="https://lmpixels.com/demo/breezycv/darkfw/1/img/blog/blog_post_1.jpg"
              className="size-blog-masonry-image-two-c"
              alt="Why I Switched to Sketch For UI Design"
              title=""
            />
          </a>
        </div>
        <div className="post-info">
          <div className="post-date">05 Mar 2020</div>
          <a href="blog-post-1.html">
            <h4 className="blog-item-title">
              Why I Switched to Sketch For UI Design
            </h4>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
