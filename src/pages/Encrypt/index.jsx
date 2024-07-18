// import { Icon } from '@iconify/react'
import { useState } from 'react'
import EncryptedComponent from '../../components/encrypt/EncryptedComponent';
import EncryptComponent from '../../components/encrypt/EncryptComponent';
import Encryptness from '../../config/Encryptness';

const Encrypt = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [base64Image, setBase64Image] = useState(null);

    const handleFileSelect = (file) => {
        setSelectedFile(file);
    };

    const handleSubmit = () => {
    if (selectedFile) {
        const reader = new FileReader();
        reader.onloadend = () => {
            setBase64Image(Encryptness.encryption(reader.result));
        };
        reader.readAsDataURL(selectedFile);
    }
    };
    const handleDownload = () => {
        const element = document.createElement('a');
        const file = new Blob([base64Image], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = 'encryptness_encoded_file.txt';
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
    };
  return (
    // <div style={{ textAlign: 'center' }}>
    //     <div {...getRootProps()} style={{ border: '2px dashed #0087F7', padding: '20px', margin: '20px' }}>
    //     <input {...getInputProps()} />
    //     <p>Drag drop some files here, or click to select files</p>
    //     </div>
    //     {selectedFile && (
    //     <div>
    //         <p>Selected file: {selectedFile.name}</p>
    //         <button onClick={handleSubmit}>Submit</button>
    //     </div>
    //     )}
    //     {base64Image && (
    //     <div>
    //         <img src={base64Image} alt="Uploaded" style={{ maxWidth: '100%', marginTop: '20px' }} />
    //         <p>Base64: {base64Image}</p>
    //         <CopyToClipboard text={base64Image} onCopy={() => setCopied(true)}>
    //         <button>Copy to Clipboard</button>
    //         </CopyToClipboard>
    //         {copied && <span style={{ color: 'green', marginLeft: '10px' }}>Copied!</span>}
    //         <button onClick={handleDownload} style={{ marginLeft: '10px' }}>Download as .txt</button>
    //     </div>
    //     )}
    // </div>
    <div className=''>
        <div className='card sm:w-2/3 md:max-w-lg mx-3 sm:mx-auto'>
        {!base64Image ? (
        <EncryptComponent onFileSelect={handleFileSelect} onSubmit={handleSubmit} />
      ) : (
        <EncryptedComponent base64Image={base64Image} onDownload={handleDownload} />
      )}
            
            {/* <div className="input-group grid grid-cols-2 gap-3 my-6 opacity-50">
                <CopyToClipboard text={base64Image} onCopy={() => setCopied(true)}>
                    <button className='btn btn-outline-primary'>Copy to Clipboard</button>
                </CopyToClipboard>
                <button onClick={handleDownload} className='btn btn-outline-primary'>Download as .txt</button>
            </div>
            <p>Login to use more features</p>
            <button className='btn btn-lg btn-primary w-full'>Login</button>
            <button className='btn btn-lg btn-outline-primary w-full'>Encrypt more file</button> */}


            {/* <div className="input-group flex flex-col gap-1 my-4 opacity-50">
                <label htmlFor="secret-key" className='font-semibold'>Secret key</label>
                <input id="secret-key" className='input-form' type="text" placeholder='Your secret key' disabled/>
                <span className='text-sm'>*Please login to use this feature</span>
            </div> */}
            
        </div>
    </div>
  )
}

export default Encrypt