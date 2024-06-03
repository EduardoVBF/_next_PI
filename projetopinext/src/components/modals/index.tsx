'use client';
import { ReactNode, FC, useState, useEffect, useCallback } from 'react';
import useModal from "@/utils/hooks/useModal";
import { IoIosClose } from "react-icons/io";

interface ModalProps {
    isOpen: boolean;
    header: ReactNode;
    body: ReactNode;
    footer: ReactNode;
    onClose: () => void;
    positionClose?: string;
    resetInputs?: () => void;
    zIndex?: number;
    contentCenter?: boolean;
    personWidth?: string;
    personHeight?: string;
    isModalCredential?: boolean;
}

const Modal: FC<ModalProps> = ({
    isOpen,
    header,
    body,
    footer,
    onClose,
    positionClose,
    resetInputs,
    zIndex,
    contentCenter = true,
    personWidth,
    personHeight,
    isModalCredential,
}) => {
    const [showModal, setShowModal] = useState(isOpen);

    useEffect(() => {
        setShowModal(isOpen);
        useModal.setState({ status: isOpen });
    }, [isOpen]);

    const handleClose = useCallback(() => {
        if (resetInputs) {
            resetInputs();
        }
        useModal.setState({ status: false });
        setShowModal(false);
        setTimeout(() => {
            onClose();
        }, 300);
    }, [onClose]);

    if (!isOpen) {
        return null;
    }

    return (
        <div
            id="outside"
            className={`justify-center items-center flex overflow-auto fixed inset-0 z-[100] outline-none focus:outline-none bg-[#1D635D50]`}
        >
            <div
                className={`relative w-[80%] md:w-4/6 lg:w-3/6 xl:w-[40%] 3xl:w-auto my-6 mx-auto lg:h-auto md:h-auto ${personWidth}`}
            >
                <div
                    className={`translate duration-300 h-full ${showModal ? "translate-y-0" : "translate-y-full"} ${showModal ? "opacity-100" : "opacity-0"}`}
                >
                    <div
                        className={`overflow-auto p-2 scrollbar scrollbar-none translate max-h-[70vh] md:max-h-[80vh] lg:h-auto md:h-auto border-0 rounded-3xl shadow-lg relative flex flex-col w-full bg-[#f9f9f9] outline-none focus:outline-none ${personHeight}`}
                        style={{ scrollbarWidth: "none" }}
                    >
                        <div
                            onClick={() => handleClose()}
                            className={`fixed top-3 right-3 cursor-pointer`}
                        >
                            <IoIosClose size={35} />
                        </div>
                        {header}
                        {body}
                        {footer}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;