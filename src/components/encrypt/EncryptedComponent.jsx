import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard'
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react/dist/iconify.js';
const EncryptedComponent = ({ base64Image, onDownload }) => {
    const [copied, setCopied] = useState(false);

  return (
    <div className=''>
        <h4 className='text-center font-bold mb-4'>This is your encrypted file</h4>
            <div className="card-inside relative overflow-y-auto max-h-80">
                <p className='text-sm break-words w-full'>{base64Image}</p>
            </div>
        <div className="input-group grid grid-cols-2 gap-3 my-6">
            <CopyToClipboard text={base64Image} onCopy={() => {
                setCopied(true)
                setTimeout(() => {
                    setCopied(false)
                }, 2000);
            }}>
                <button className='btn btn-sm btn-outline-primary flex gap-1'>
                    <Icon icon="solar:copy-outline" width="20" height="20" />
                    <span className=''>Copy to Clipboard</span>
                </button>
            </CopyToClipboard>
            <button onClick={onDownload} className='btn btn-sm btn-outline-primary flex gap-1'>
                <Icon icon="solar:download-square-outline" width="20" height="20" />
                <span className=''>Download as .txt</span>
            </button>
        </div>
        
        {copied && <span className='fixed right-8 bottom-8 inline-block rounded text-neutral-900 h-fit w-fit p-2 px-3 font-semibold text-center content-center mb-4 bg-teal-500 backdrop-blur'>Copied!</span>}
        <button onClick={()=>window.location.reload()} className='btn btn-lg btn-primary w-full'>Encrypt more file</button>  
    </div>
  )
}
EncryptedComponent.propTypes = {
    base64Image: PropTypes.string.isRequired,
    onDownload: PropTypes.func.isRequired,
  };
export default EncryptedComponent