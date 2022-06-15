import { SubmitBanner } from "./banner/Submit-Banner";
import { SubmitModal } from "./modal/Submit-Modal";
import { useState } from "react";
import "./Submit-Section.css";

export const SubmitSection = () =>{
    const [openModal, setOpenModal] = useState(false)

    return(
        <section className="submit__section container">
            <SubmitBanner
                openModal={openModal}
                setOpenModal={setOpenModal}
            />
            {
                openModal && <SubmitModal
                closeModal={setOpenModal}
                setOpenModal={setOpenModal}
             />
             }
        </section>
    )
}