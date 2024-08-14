import React, { useState, useEffect } from 'react';
import '../../../assets/BlogPage.css';
import placeholderImg from '../../../assets/media/blogimg.jpg';
import ImageUploader from '../../dropzone/imageUploader';
import '../../../assets/input.css';

const HorizontalImagedBlogPost = () => {
    const [motto, setMotto] = useState('');
    const [mottoBackground, setMottoBackground] = useState('');
    const [blogTitle, setBlogTitle] = useState('');
    const [blogDescription, setBlogDescription] = useState('');
    const [titleBackground, setTitleBackground] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const [paragraphs, setParagraphsArray] = useState([
        {
            paragraphsTitle: '',
            paragraph: '',
            paragraphsImage: '',
            paragraphsMottoBackground: '',
            paragraphsMotto: '',
        },
    ]);

    const addNewParagraph = () => {
        console.log(paragraphs);
        setParagraphsArray((prevParagraphs) => [
            ...prevParagraphs,
            {
                paragraphsTitle: '',
                paragraph: '',
                paragraphsImage: '',
                paragraphsMottoBackground: '',
                paragraphsMotto: '',
            },
        ]);
    };

    const handleParagraphTitleChange = (index, value) => {
        setParagraphsArray((prevParagraphs) => {
            const newParagraphs = [...prevParagraphs];
            newParagraphs[index].paragraphsTitle = value;
            return newParagraphs;
        });
    };

    const handleParagraphTextChange = (index, value) => {
        setParagraphsArray((prevParagraphs) => {
            const newParagraphs = [...prevParagraphs];
            newParagraphs[index].paragraph = value;
            return newParagraphs;
        });
    };

    const handleImageUpload = (index, image) => {
        setParagraphsArray((prevParagraphs) => {
            const newParagraphs = [...prevParagraphs];
            newParagraphs[index].paragraphsImage = image;
            return newParagraphs;
        });
    };

    const handleMottoChange = (index, value) => {
        setParagraphsArray((prevParagraphs) => {
            const newParagraphs = [...prevParagraphs];
            newParagraphs[index].paragraphsMotto = value;
            return newParagraphs;
        });
    };

    const handleMottoImageUpload = (index, image) => {
        setParagraphsArray((prevParagraphs) => {
            const newParagraphs = [...prevParagraphs];
            newParagraphs[index].paragraphsMottoBackground = image;
            return newParagraphs;
        });
    };


    const removeLastParagraph = () => {
        if (paragraphs.length > 1) {
            setParagraphsArray((prevParagraphs) => {
                const newParagraphs = [...prevParagraphs];
                newParagraphs.pop(); // Remove the last paragraph
                return newParagraphs;
            });
        }
    };


    useEffect(() => {
        const handleScroll = () => {
            const saveBlogButton = document.querySelector('.save-blog-button');
            const rect = saveBlogButton.getBoundingClientRect();

            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    const handleSaveBlog = async () => {
        const missingFields = [];

        // ... (your existing code for checking missing fields)

        if (missingFields.length > 0) {
            const errorMessage = `Lütfen eksik alanları doldurun: ${missingFields.join(', ')}`;
            alert(errorMessage);
            return;
        }

        const newBlog = {
            image: titleBackground || placeholderImg,
            color: "#acd546",
            title: blogTitle,
            description: blogDescription,
            paragraphs: paragraphs.map((paragraph, index) => {
                const { paragraphsMotto, paragraphsTitle, paragraph: paragraphsText, paragraphsImage, paragraphsMottoBackground } = paragraph;

                const paragraphData = {
                    title: paragraphsTitle,
                    paragraph: paragraphsText,
                    image: paragraphsImage || '',
                    motto: paragraphsMotto || '',
                    mottoBackground: paragraphsMottoBackground || '',
                };

                return paragraphData;
            }),
        };

        try {
            const response = await fetch('http://localhost:3001/blogItems', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newBlog),
            });

            if (!response.ok) {
                throw new Error('Failed to save blog');
            }

            // Display success message
            const successMessage = 'Blog başarıyla kaydedildi!';
            alert(successMessage);
        } catch (error) {
            console.error('Error saving blog:', error);
        }
    };

    const handleImageRemove = (index) => {
        setParagraphsArray((prevParagraphs) => {
            const newParagraphs = [...prevParagraphs];
            // Remove the image URL from the corresponding paragraph
            newParagraphs[index].paragraphsImage = '';
            return newParagraphs;
        });
    };





    return (
        <div className="horizontal-blog-post-container">
            <div className="horizontal-blog-post-header">
                <div
                    className="horizontal-blog-post-header-image-container"
                    style={{ backgroundImage: `url(${titleBackground || placeholderImg})` }}
                    onClick={() => { setTitleBackground() }}
                >

                    {!titleBackground && <input type="text" 
                    style={{position: 'absolute', top:'50%', left: '50%', height: '100px', transform: 'translate(-50%,-50%)'}}
                    placeholder='foto url yaz'
                    onBlur={(e) => {
                        setTitleBackground(e.target.value)
                    }} />}



                </div>

                <input
                    className="horizontal-blog-post-header-title-container"
                    type="text"
                    placeholder="lutfen baslik yaziniz"
                    onChange={(e) => setBlogTitle(e.target.value)}
                />
                <input type="text" />
            </div>

            <div className="horizontal-blog-post-row">
                <input
                    className="horizontal-blog-post-row-side horizontal-blog-post-row-single-side description-input"
                    type="text"
                    placeholder="Lütfen açıklama yazınız"
                    value={blogDescription}
                    onChange={(e) => setBlogDescription(e.target.value)}
                />
            </div>



            {paragraphs.map((object, index) => (
                <div key={index}>
                    <div
                        className="horizontal-blog-post-motto-container"
                        style={{ backgroundImage: `url(${object.paragraphsMottoBackground || placeholderImg})` }}
                    >
                        {!object.paragraphsMottoBackground && <input  placeholder='foto url yaz' type="text" onBlur={(e) => {
                            handleMottoImageUpload(index, e.target.value)
                        }} />}

                        {object.paragraphsMottoBackground && (
                            <input
                                className="horizontal-blog-post-motto absolute-centered motto-input"
                                value={object.paragraphsMotto}
                                placeholder='motto'
                                onChange={(e) => handleMottoChange(index, e.target.value)}
                                
                            />
                        )}
                    </div>

                    <div className={`horizontal-blog-post-row ${(index % 2 === 1) && 'reverse-row'}`}>
                        <div className="horizontal-blog-post-row-side">
                            <div key={index} className="row-paragraph-textarea-container">
                                <textarea
                                    className="horizontal-blog-post-row-title row-title"
                                    placeholder="Write The Title"
                                    value={object.paragraphsTitle}
                                    onChange={(e) => handleParagraphTitleChange(index, e.target.value)}
                                    onInput={(e) => {
                                        // Update the height of the textarea dynamically based on the content
                                        e.target.style.height = 'auto';
                                        e.target.style.height = e.target.scrollHeight + 'px';
                                    }}
                                />

                                <textarea
                                    className="horizontal-blog-post-row-paragraph row-title-textarea"
                                    placeholder="Write The Paragraph"
                                    value={object.paragraph}
                                    onChange={(e) => handleParagraphTextChange(index, e.target.value)}
                                    onInput={(e) => {
                                        e.target.style.height = 'auto';
                                        e.target.style.height = e.target.scrollHeight + 'px';
                                    }}
                                />
                            </div>
                            {/* Conditionally render the input field based on whether an image is uploaded */}
                            
                        </div>
                        <div className="horizontal-blog-post-row-side" style={{ backgroundImage: `url(${object.paragraphsImage || placeholderImg})` }} onClick={() => {handleImageRemove(index)}}>
                            {!object.paragraphsImage && <input type="text"  placeholder='foto url yaz' onBlur={(e) => {handleImageUpload(index, e.target.value)
                            console.log(e.target.value)}} />}
                        </div>
                    </div>
                </div>
            ))}

            <div className="paragraph-edit-buttons-container">
                <button className="button2" onClick={addNewParagraph}>
                    +
                </button>
                <button className="button2-remove" onClick={removeLastParagraph}>
                    -
                </button>

            </div>

            <div className="save-blog-button-container">
                <button className={`save-blog-button${isVisible ? ' visible' : ''}`} onClick={handleSaveBlog}>
                    Blogu Kaydet
                </button>
            </div>
        </div>
    );
};

export default HorizontalImagedBlogPost;
