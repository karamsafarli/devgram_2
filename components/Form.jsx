"use client"
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import { CldUploadButton } from 'next-cloudinary';
import { X } from "lucide-react";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {

  const darkmode = useSelector((state) => state.colorThemeReducer.value);


  return (
    <section className='make_post'>
      <h1 className="header">{type} Post</h1>

      <form onSubmit={handleSubmit}>
        <div className="form_left">
          <label>Your Post Header</label>
          <textarea
            value={post.text}
            onChange={(e) => setPost({ ...post, text: e.target.value })}
            style={{ backgroundColor: darkmode ? '#1D2226' : 'white' }}
            placeholder='Write your text here...'
            required
          />


          <label>Tags <span>(#dev, #frontend, #backend...)</span></label>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            style={{ backgroundColor: darkmode ? '#1D2226' : 'white' }}
            placeholder='tag1 tag2 ...'
            required
          />
        </div>

        {/* <FileBase
          type="file"
          multiple={false}
          onDone={({ base64 }) => setPost({ ...post, imageURL: base64 })}
        /> */}

        <div className="form_right">
          <CldUploadButton
            uploadPreset="r7fy2djb"
            onUpload={(result) =>  setPost({ ...post, imageURL: result.info.secure_url })}
            className="px-6 py-4 bg-blue-500 rounded-full font-bold mb-4 text-white"
          >
            Upload image
          </CldUploadButton>

          {
            post.imageURL &&
            <div className="w-full relative">
              <img src={post.imageURL} alt="postimage"
                className="w-full h-auto"
              />
              <X
                className="cursor-pointer absolute top-2 right-2"
                onClick={() => setPost({ ...post, imageURL: '' })}
              />
            </div>
          }
          <div className="form_btns mt-4">
            <Link href='/'>Cancel</Link>
            <button
              type="submit"
              disabled={submitting}
            >
              {submitting ? `${type}...` : type}
            </button>
          </div>
        </div>



      </form>
    </section>
  )
}

export default Form