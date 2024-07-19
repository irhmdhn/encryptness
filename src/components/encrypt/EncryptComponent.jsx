import { Icon } from '@iconify/react/dist/iconify.js';
// import { useState } from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDropzone } from 'react-dropzone';

const EncryptComponent = ({ onFileSelect, onSubmit }) => {
    
    const [selectedFile, setSelectedFile] = useState('')
    const { getRootProps, getInputProps } = useDropzone({
        onDrop: (acceptedFiles) => {
            if(acceptedFiles.length > 0){
                onFileSelect(acceptedFiles[0])
                setSelectedFile(acceptedFiles[0])
            }
        },
        accept: {
            'image/jpg': [".jpg"],
            'image/jpeg': [".jpeg"],
            'image/png': [".png"],
            'image/webp': [".webp"],
            'image/gif': [".gif"],
            'image/svg': [".svg"]
          }
      });
  return (
    <>
        <h4 className='text-center font-bold mb-4'>Encrypt your image</h4>
        <div {...getRootProps({className: 'card-inside min-h-60 max-h-80 overflow-auto cursor-pointer'})}>
            <input {...getInputProps({className: ''})} />
            <div className='flex flex-col items-center gap-4 my-6'>
                <Icon icon="solar:upload-broken" width={'8rem'} className={selectedFile && 'text-teal-400'}/>
                <p className=''>
                {
                    selectedFile != '' ?
                    `${selectedFile.path} - ${(selectedFile.size / 1024).toFixed(2)} KB`
                    :
                    "Upload your image"
                }
                </p>
            </div>
        </div>
        <button onClick={()=>onSubmit()} className='btn btn-lg btn-primary w-full mt-6'>Encrypt now</button>
    </>
  )
}
EncryptComponent.propTypes = {
    onFileSelect: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
  };
export default EncryptComponent