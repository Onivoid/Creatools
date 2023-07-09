import React, { ChangeEvent } from 'react'
import { useImageStore } from '@/store/imageStore'
import Image from 'next/image'
import Placeholder from '@/assets/img/Placeholder.png'

const ImageUploadForm = () => {
  const { file, url, error, setFile } = useImageStore()

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0])
      if (error) {
        setFile(null);
      }
    }
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    console.log(file,url);
  }

  return (
    <form onSubmit={handleSubmit} 
      className='max-w-max p-10 border-solid border-2 border-slate-300 flex items-center gap-10 space-x-6 rounded-lg shadow-md'>
      <div className="shrink-0">
        <Image className="object-cover rounded-full max-w-[50px] max-h-[50px]"
          width={50} height={50}
          src={url ? url : Placeholder} 
          alt="Current profile photo" />
      </div>
      <label className='block'>
        <span className='sr-only'>Choisissez une image</span>
        <input
          className='block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-violet-50 file:text-violet-700
          hover:file:bg-violet-100'
          type="file" 
          accept="image/*" 
          onChange={handleFileChange} />
      </label>
      {
        file 
          ? <button type="submit" 
              className='rounded-full bg-violet-50 text-violet-700 text-sm font-semibold py-2 px-4 hover:bg-violet-100'>
              Upload
            </button> 
          : null
      }
    </form>
  )
}

export default ImageUploadForm
