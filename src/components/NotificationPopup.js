import React, {useState, useEffect} from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import '../App.css';

function NotificationPopup({title, email}) {
    const [open, setOpen] = useState(true);
    const closeModal = () => setOpen(false);

    useEffect(() => {
        setOpen(true);
        return () => {
            setOpen(false);
        }
    }, [title, email]);

    return (
        <div>
            <Popup open={open} onClose={closeModal}>
                <div className='modal'>
                    <a className="close" onClick={closeModal}>
                        &times;
                    </a>
                    <p><b>{email}</b> shared a video with title <b>{title}</b> </p>
                </div>
            </Popup>
      </div>
    );
}


export default NotificationPopup;
