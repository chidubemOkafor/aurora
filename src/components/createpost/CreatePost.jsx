import React, { useState, useRef } from 'react';
import './createPost.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import { UploadImageCloudinary } from './cloudinaryUpload';

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

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      if (tags.length === 0 || content === '') {
        throw new Error("Invalid Input")
      }
      const body = {
        title: e.target[0].value,
        tag: tags,
        content
      }
      const response = await axios.post("http://localhost:8090/api/v1/createPost", body);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const reactQuillRef = useRef(null);
  
  const toolbarOptions = {
    container:  [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],
      ['link', 'image', 'video', 'formula'],
    
      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction
    
      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    
      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],
    
      ['clean']                                         // remove formatting button
    ]
  };

  return (
    <div className="banner_tops">
      <form onSubmit={handleSubmit}>
        <div style={{ marginTop: 200 }}>
          <input type='text' style={{ width: 777 }} placeholder="Enter title" required/>
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
          ref={reactQuillRef}
          className='editor'
          modules={{ toolbar: toolbarOptions }}
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