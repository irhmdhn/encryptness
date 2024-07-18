import { Icon } from '@iconify/react'
import PropTypes from 'prop-types';
const DecryptedComponent = ({ base64Image, onDownload }) => {
  return (
    <div className=''>
        <h4 className='text-center font-bold mb-4'>This is your decrypted file</h4>
            <div className="card-inside overflow-auto max-h-80 ">
                <img className='mx-auto' src={base64Image}/>
            </div>
        <div className="input-group flex justify-center my-6">
            <button onClick={onDownload} className='btn btn-outline-primary flex gap-1'>
                <Icon icon="solar:download-square-outline" width="24" height="24" />
                <span className=''>Download</span>
            </button>
        </div>

        <button className='btn btn-lg btn-primary w-full'>Decrypt more file</button>  
    </div>
  )
}
DecryptedComponent.propTypes = {
    base64Image: PropTypes.string.isRequired,
    onDownload: PropTypes.func.isRequired,
  };
export default DecryptedComponent