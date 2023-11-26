import React, { useState } from 'react';
import './createPost.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CreatePost = () => {
  const [content, setContent] = useState('');
  const [text, setText] = useState('');
  const [tags, setTags] = useState([]);

  const handleSelectTag = () => {
    if (text.trim() !== '') {
      setTags([...tags, text.trim()]);
      setText('');
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    const updatedTags = tags.filter((tag) => tag !== tagToRemove);
    setTags(updatedTags);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic here
    console.log('Title:', e.target[0].value);
    console.log('Tags:', tags);
    console.log('Content:', content);
  };

  return (
    <div className="banner_tops">
      <form onSubmit={handleSubmit}>
        <div style={{ marginTop: 200 }}>
          <input type='text' style={{ width: 777 }} placeholder="Enter title" />
        </div>
        <div style={{ marginTop: 30 }}>
          <input
            type='text'
            style={{ width: 620 }}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter tag"
          />
          <button className='submit' type="button" onClick={handleSelectTag}>
            Add Tag
          </button>
          <div className='tags'>
          {tags.map((tag, index) => (
            <div key={index}  onClick={() => handleRemoveTag(tag)}>
              <div className='tag_content'>
                #{tag}
              </div>
            </div>
          ))}
          </div>
        </div>
        <ReactQuill
          className='editor'
          theme="snow"
          value={content}
          onChange={setContent}
        />

        <div className='post_btn'>
          <button className='submit' type='submit'>
            POST
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
