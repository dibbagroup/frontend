import "./footer-widget.scss"
 
export const FooterWidget = props => {
    return (
        <footer className="pt-5">
            <hr />
 
            <div className="content text-light w-75 mx-auto d-flex px-5 py-3 justify-content-between">
                <div className="anchors">
                    <h5>Institucional</h5>
                    <ul>
                        <li>
                            <a href="#">Politica de privacidade</a>
                        </li>
                        <li>
                            <a href="#">Termos e condições de uso</a>
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
                            <a href="#">+55 (48) 99850-0989</a>
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