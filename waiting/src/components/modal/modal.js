import "./modal.scss"
import Added from "../../assets/img/added.png"
import Copy from "../../assets/copy.svg"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';



export const Modal = ({showModal, setShowModal,link}) => {
    const handleCloseModal = () => {
        setShowModal(false)
    }

    const handleModalClick = (e) => {
        if (e.target.className === "modal-background") {
            handleCloseModal()
        }
    }
    const copyToClipboard = async (copiedLink) => {
        try {
            await navigator.clipboard.writeText(copiedLink)
            toast.success('Copied to clipboard!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
        catch {
            toast.error('Could not copy!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
    }
    return (
        <>
            {
                showModal && (
                    <div className='modal'>
                    <div className='modal-background' onClick={handleModalClick}
                    />
                        <div className='modal-content'>
                            <div className="added">
                                <img src={Added } alt={"Added"} />
                            </div>
                  
                        <h3>We've added you to our waiting list!</h3>
                            <p>We will notify you when we launch, tell a friend about us by copying the link below.</p>
                            
                            <div className='linkContainer' onClick={()=>copyToClipboard(link)}>
                                <p>{`https://${link}`}</p>
                                <img src={Copy} alt={"copy"} />
                            </div>
                    </div>
                      
                </div>
                )
         
            }
            <ToastContainer/> 
        </>

    )
}
