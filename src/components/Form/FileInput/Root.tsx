'use client'

import {
  HTMLAttributes,
  createContext,
  useContext,
  useId,
  useState,
} from 'react'
import { twMerge } from 'tailwind-merge'

export interface RootProps extends HTMLAttributes<HTMLDivElement> {
  multiple?: boolean
}

interface FileInputContextType {
  id: string
  files: File[]
  multiple: boolean
  onFilesSelected: (files: File[]) => void
}

const FileInputContext = createContext({} as FileInputContextType)

export function Root({ multiple = false, id, ...props }: RootProps) {
  const customId = useId()
  const [files, setFiles] = useState<File[]>([])

  function handleOnFileSelected(files: File[]) {
    if (multiple) {
      setFiles((state) => [...state, ...files])
    } else {
      setFiles(files)
    }
  }

  return (
    <FileInputContext.Provider
      value={{
        id: id ?? customId,
        files,
        multiple,
        onFilesSelected: handleOnFileSelected,
      }}
    >
      <div {...props} className={twMerge('group w-full', props.className)} />
    </FileInputContext.Provider>
  )
}

export const useFileInput = () => useContext(FileInputContext)
