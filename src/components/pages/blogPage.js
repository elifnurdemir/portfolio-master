import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import HorizontalImagedBlogPost from './blog_page_views/horizontalImaged';
import VerticalImagedBlogPost from './blog_page_views/verticalImaged';

const BlogPage = () => {
    const { id } = useParams();
    const [blogItems, setBlogItems] = useState([]);
    const [pageType, setPageType] = useState('');
    const [blogItem, setBlogItem] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3001/blogItems/${id}`)
            .then((response) => response.json())
            .then((data) => setBlogItem(data))
            .catch((error) => console.error('Error fetching blog item:', error));
    }, [id]);

    useEffect(() => {
        if (blogItem) {
            determineImageDimensions(blogItem.image)
                .then((message) => {
                    console.log(message);
                });
        }
    }, [blogItem]);

    const determineImageDimensions = (imageSrc) => {
        const image = new Image();
        image.src = imageSrc;

        return new Promise((resolve) => {
            image.onload = () => {
                const width = image.width;
                const height = image.height;

                let message;
                if (width > height) {
                    message = `Image is wide: Width ${width}, Height ${height}`;
                    setPageType("horizontalImaged");
                } else if (width < height) {
                    message = `Image is tall: Width ${width}, Height ${height}`;
                    setPageType("verticalImaged");
                } else {
                    message = `Image is square: Width ${width}, Height ${height}`;
                    setPageType("verticalImaged");
                }

                resolve(message);
            };
        });
    };

    return (
        blogItem && (
            <>
                <Navbar title={blogItem.title.split('.')[0]} />
                {pageType === "verticalImaged" ? (
                    <VerticalImagedBlogPost blogData={blogItem} />
                ) : (
                    <HorizontalImagedBlogPost blogData={blogItem} />
                )}
            </>
        )
    );
};

export default BlogPage;
