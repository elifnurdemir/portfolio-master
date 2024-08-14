import React from 'react';
import '../../../assets/BlogPage.css';

const HorizontalImagedBlogPost = (blogData) => {
    console.log(blogData)
    return (
        <div className="horizontal-blog-post-container">
            <div className="horizontal-blog-post-header">
                <div
                    className="horizontal-blog-post-header-image-container"
                    style={{ backgroundImage: `url(${blogData.blogData.image})` }}

                >
                    <img className="horizontal-blogpost-header-image-placeholder hidden" src={blogData.blogData.image} />
                </div>

                <div className="horizontal-blog-post-header-title-container">
                    {blogData.blogData.title}
                </div>
            </div>

            <div className="horizontal-blog-post-row">
                <div className="horizontal-blog-post-row-side horizontal-blog-post-row-single-side">
                    <span className="horizontal-blog-post-row-side-first-letter">&nbsp;{blogData.blogData.description.charAt(0)}</span>
                    {blogData.blogData.description.substring(1)}
                </div>
            </div>

            {blogData.blogData.paragraphs.map(({ title, paragraph, image, motto, mottoBackground }, index) => (
                <>
                    {mottoBackground && <div className="horizontal-blog-post-motto-container" style={{ backgroundImage: `url(${mottoBackground})` }}>
                        <div className="horizontal-blog-post-motto">{motto}</div>

                    </div>}


                    <div className={`horizontal-blog-post-row ${index % 2 === 1 ? 'reverse-row' : ''}`} key={index}>
                        <div className="horizontal-blog-post-row-side">
                            <div className="horizontal-blog-post-row-title">
                                {title}
                            </div>
                            <div className="horizontal-blog-post-row-paragraph">
                                {paragraph}
                            </div>
                        </div>
                        <div className="horizontal-blog-post-row-side">
                            {image && <img className="horizontal-blog-post-row-side-img" src={image} alt={"image"} />}
                        </div>
                    </div>

                </>

            ))}



        </div>
    )
}
export default HorizontalImagedBlogPost;