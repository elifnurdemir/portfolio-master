// ./components/pages/BlogInbox.js
// BlogInbox.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import HorizontalImagedBlogPostInput from './blog_inputs/horizontalImagedInput';
import { useNavigate } from 'react-router-dom';
const BlogInbox = () => {
    const { id } = useParams();
    const [blogItems, setBlogItems] = useState();
    const [pageType, setPageType] = useState();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();
    const greetingFromLocalStorage = localStorage.getItem("greeting");

    useEffect(() => {
       

        if (!greetingFromLocalStorage) {
          navigate('/');
        } 
    },[greetingFromLocalStorage])


    useEffect(() => {
        
        

        fetch('http://localhost:3001/blogItems') // JSON Server'ın çalıştığı porta ve rotaya uygun olmalı
            .then((response) => response.json())
            .then((data) => setBlogItems(data))
            .catch((error) => console.error('Error fetching blog items:', error));
        

    }, [id]);


    useEffect(() => {

        if(blogItems){
            console.log(blogItems)
            const blogItem = blogItems.find(item => item.id);

            if (blogItem) {
                determineImageDimensions(blogItem.image)
                    .then(message => {
                        console.log(message);
                    });
            }
        }
       


    },[blogItems])

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

    const handleSave = () => {
        if (!title || !content) {
            alert('Please enter both title and content.');
            return;
        }

        const newBlogPost = {
            id: blogItems.length + 1, // Assuming ids are unique
            title,
            content,
            image: 'path/to/default/image.jpg', // You may want to change this
        };

        // Update the blogItems array (or save to a backend)
        // For simplicity, let's assume that blogItems is stored in memory
        blogItems.push(newBlogPost);

        // Redirect to the newly created blog post
    };

    return (
        <>
            <Navbar title="Blog Inbox" />


           
                <HorizontalImagedBlogPostInput blogData={{ title, content, image: 'path/to/default/image.jpg' }} />
            
        </>
    );
};

export default BlogInbox;
