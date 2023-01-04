import "./footer-widget.scss"
/* import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'; */
 
export const FooterWidget = props => {
/*     const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);

    const CloseModalP = () => setShow1(false);
    const OpenModalP = () => setShow1(true);

    const CloseModalT = () => setShow2(false);
    const OpenModalT = () => setShow2(true); */

    return (
        <footer className="pt-5">
            <hr />
 
            <div className="content text-light w-75 mx-auto d-flex px-5 py-3 justify-content-between">
                <div className="anchors">
                    <h5>Institucional</h5>
                    <ul>
                        <li>
                            <a href="https://drive.google.com/file/d/1eWHRD5pFJu_6I2M8407FbzAG2KkJlak3/view?usp=sharing" rel="noreferrer" target="_blank">Política de dados</a>
                        </li>
                        <li>
                            <a href="https://drive.google.com/file/d/11r4Uv1JCdm2M9rVLs3d44glJ8PB-_Hr9/view?usp=sharing" rel="noreferrer" target="_blank">Termos e condições de uso</a>
                        </li>
                        <li>
                            <a href="https://form.jotform.com/223583463072658" rel="noreferrer" target="_blank">Seja um representante DIBBA</a>
                        </li>
                    </ul>
                </div>
 
                <div>
                    <h5>Atendimento</h5>
                    <ul>
                        <li>
                            <a href="mailto:contatodibba@gmail.com" rel="noreferrer">contatodibba@gmail.com</a>
                        </li>
                        <li>
                            <a href="https://api.whatsapp.com/send?1=pt_BR&phone=5548998500989">+55 (48) 99850-0989</a>
                        </li>
                    </ul>
                </div>
 
                <div>
                    <h5>Redes sociais</h5>
                    <ul>
                        <li>
                            <a href="https://www.instagram.com/dibbabr/" target="_blank" rel="noreferrer">Instagram</a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/company/dibbabr/" target="_blank" rel="noreferrer">Linkedin</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}