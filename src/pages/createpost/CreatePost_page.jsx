import React from 'react'
import CreatePost from '../../components/createpost/CreatePost'
import Sidebar from '../../components/home/sidebar/Sidebar'

const CreatePost_page = () => {
  return (
    <div>
      <Sidebar />
      <CreatePost/>
    </div>
  )
}

export default CreatePost_page