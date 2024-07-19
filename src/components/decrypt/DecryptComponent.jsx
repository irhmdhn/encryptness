import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone';
import { Icon } from '@iconify/react'
import { useEffect, useState } from 'react';
const DecryptComponent = ({ onFileSelect, onSubmit }) => {
    const [isMethodText, setIsMethodText] = useState(false)
    const [selectedFile, setSelectedFile] = useState('')
    const [inputedText, setInputedText] = useState('')
    const [error, setError] = useState('');
    const { getRootProps, getInputProps, fileRejections } = useDropzone({
        onDrop: (acceptedFiles) => {
            if(acceptedFiles.length > 0){
                setError('');
                const reader = new FileReader();
                reader.readAsText(acceptedFiles[0]);
                reader.onloadend = () => {
                    setSelectedFile(acceptedFiles[0]);
                    onFileSelect(reader.result);
                };
            }else {
                setError('File type not accepted. Please upload a valid .txt file.');
            }
            console.log(fileRejections);
        },
        accept: {
            "text/plain": [".txt"],
        },
    });
    const handleInput = (e) => {
        setInputedText(e.target.value)
    }
    useEffect(()=>{
        if (isMethodText == false) {
            onFileSelect(inputedText)
        }
    }, [inputedText])
  return (
    <>
        <h4 className='text-center font-bold mb-4'>Decrypt your encrypted image by</h4>
        <div className="flex justify-center mb-4">
            <button onClick={()=>setIsMethodText(false)} className={`btn ${!isMethodText ? 'btn-light': 'text-gray-400'}`}>Text</button>
            <button onClick={()=>setIsMethodText(true)} className={`btn ${isMethodText ? 'btn-light' : 'text-gray-400'}`}>Upload file</button>
        </div>
        {
            isMethodText ?
            <div {...getRootProps({className: 'card-inside min-h-60 max-h-80 overflow-auto cursor-pointer'})}>
                <input {...getInputProps({className: ''})} />
                <div className='flex flex-col items-center gap-4 my-6'>
                    <Icon icon="solar:upload-broken" width={'8rem'} className={selectedFile && 'text-teal-400'}/>
                    <p className=''>
                    {
                        selectedFile != '' ?
                        `${selectedFile.path} - ${(selectedFile.size / 1024).toFixed(2)} KB`
                        :
                        "Upload your .txt file"
                    }
                    </p>
                </div>
                {error && <p className='text-red-500'>{error}</p>}
            </div>
            :
            <textarea onChange={handleInput} className='input-form text-sm min-h-60 max-h-80 w-full' placeholder='Paste here...'></textarea>
        }
        

        {/* <div className="input-group flex flex-col gap-1 my-4 opacity-50">
            <label htmlFor="secret-key" className='font-semibold'>Secret key</label>
            <input id="secret-key" className='input-form' type="text" placeholder='Your secret key' disabled/>
            <span className='text-sm'>*Please login to use this feature</span>
        </div> */}
        <button onClick={()=>onSubmit()} className='btn btn-lg btn-primary w-full mt-6'>Decrypt now</button>
    </>
  )
}
DecryptComponent.propTypes = {
    onFileSelect: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
  };
export default DecryptComponent