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
  const [preview, setPreview] = useState(null)

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
      
      const formData = new FormData()

      formData.append("image",preview)
      formData.append("title", e.target[0].value)
      formData.append("tag", JSON.stringify(tags))
      formData.append("content", content)

      const response = await axios.post("http://localhost:8090/api/v1/createPost", formData, 
      { headers: {
        'Content-Type': 'multipart/form-data'
      }});
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
        <label style={{ marginTop: 200 }}>
          <l1 className="formTitle">Title</l1> <br/>
          <input type='text' style={{ width: 777 }} placeholder="Enter title" required/>
        </label>
        <label style={{ marginTop: 30 }}>
        <l1 className="formTitle">Tag</l1> <br/>
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
        </label>
        <label>
        <l1 className="formTitle">Preview</l1> <br/>
        <input className='inputImage' type='file' accept='image/*' required onChange={(e) => setPreview(e.target.files[0])}/>
        </label>
        <label>
        <l1 className="formTitle">Post</l1> <br/>
        <ReactQuill
          ref={reactQuillRef}
          className='editor'
          modules={{ toolbar: toolbarOptions }}
          value={content}
          onChange={setContent}
        />
        </label>

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