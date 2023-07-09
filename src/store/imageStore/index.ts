import create from 'zustand'

type ImageState = {
  file: File | null
  url: string | null
  error: string | null
  setFile: (file: File | null) => void
}

const acceptedImageExtensions = ['jpg', 'jpeg', 'png', 'bmp', 'svg']

export const useImageStore = create<ImageState>((set) => ({
  file: null,
  url: null,
  error: null,
  setFile: (file) => {
    if (file) {
      const extension = file.name.split('.').pop()?.toLowerCase()
      if (!extension || !acceptedImageExtensions.includes(extension)) {
        set({ error: `Seul les formats ${acceptedImageExtensions.join(",")} sont acceptés.` })
        return
      }
    }
    const url = file ? URL.createObjectURL(file) : null
    set({ file, url, error: null })
  },
}))


