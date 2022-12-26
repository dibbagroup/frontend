import "./footer-widget.scss"
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
 
export const FooterWidget = props => {
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);

    const CloseModalP = () => setShow1(false);
    const OpenModalP = () => setShow1(true);

    const CloseModalT = () => setShow2(false);
    const OpenModalT = () => setShow2(true);

    return (
        <footer className="pt-5">
            <hr />
 
            <div className="content text-light w-75 mx-auto d-flex px-5 py-3 justify-content-between">
                <div className="anchors">
                    <h5>Institucional</h5>
                    <ul>
                        <li>
                            <button onClick={OpenModalP} className='privacy-politic-button'>Politica de privacidade</button>
                            <Modal show={show1} onHide={CloseModalP} className='modal'>
                                <Modal.Header closeButton>
                                    <Modal.Title>POLÍTICA DE PRIVACIDADE E PROTEÇÃO DE DADOS PESSOAIS</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Texto politica de dados</Modal.Body>
                            </Modal>
                        </li>
                        <li>
                        <button onClick={OpenModalT} className='terms-conditions-button'>Termos e condições de uso</button>
                        <Modal show={show2} onHide={CloseModalT} className='modal'>
                                <Modal.Header closeButton>
                                    <Modal.Title>TERMOS E CONDIÇÕES DE USO</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Bem-vindo(a) ao App da Dibba!<br></br>
                                    Nestes Termos e Condições de Uso (“Termo”), apresentaremos a você, enquanto USUÁRIO, as principais regras a serem observadas por todos que acessam esta plataforma digital e suas funcionalidades.

                                    DIBBA INTERMEDIACAO DE EVENTOS LTDA INOVA SIMPLES, pessoa jurídica de direito privado inscrita no CNPJ/ME sob nº 47.242.784/0001-28 (“Dibba”, “Nós”), disponibiliza serviços de venda de ingressos para eventos, por meio desta plataforma digital (“App”), proporcionando uma melhor experiência de compra online aos usuários (“Serviços”).  

                                    Ao utilizar nossos Serviços, o USUÁRIO concorda com as diretrizes, regras e disposições do presente Termo, bem como com as nossas políticas e legislação vigente. Por isso, recomendamos que este Termo seja lido com atenção e que, no caso de dúvidas, o USUÁRIO entre em contato conosco por meio de um dos Canais de Atendimento.

                                    1.	POLÍTICAS DO APP
                                    1.1.	Nos reservamos o direito de alterar o presente Termo e eventuais adicionais a qualquer tempo, sem aviso prévio, a nosso livre e exclusivo critério. Tais alterações entrarão em vigor imediatamente após a publicação do documento modificado na Plataforma DIBBA.

                                    1.1.1.	A continuidade na utilização de nossos Serviços após a entrada em vigor da versão revisada do Termo implicará, automaticamente, plena ciência e aceitação do USUÁRIO de todas as suas diretrizes, regras e disposições.
                                    
                                    1.2.	Para fins de interpretação e aplicação das regras do presente Termo, considera-se USUÁRIO toda pessoa física ou jurídica que acessa o App, realiza o cadastro, utiliza os Serviços e/ou efetua compra de ingressos por meio do App.  

                                    2.	ACESSO AOS SERVIÇOS
                                    2.1.	O USUÁRIO pode visualizar o conteúdo do App sem efetuar qualquer cadastro. No entanto, para a compra dos ingressos e demais funcionalidades, o cadastro é imprescindível.

                                    2.2.	Para se cadastrar no App para a fim de efetuar compras online dos ingressos, o USUÁRIO precisará criar uma conta de usuário no App (“Conta”), e por isso, se pessoa física, deve ter no mínimo 18 (dezoito) anos, possuir capacidade jurídica para celebrar contratos, ser residente no Brasil e possuir cadastro ativo junto à Receita Federal do Brasil (cadastro de pessoa física – CPF).

                                    2.3.	A DIBBA não se responsabiliza, em hipótese alguma, pela utilização dos Serviços por terceiros por meio dos dados pessoais do USUÁRIO, independentemente do motivo, sendo a Conta de sua inteira e individual responsabilidade. 

                                    2.3.1.	Caso o USUÁRIO tome conhecimento do uso não autorizado dos seus dados pessoais, deverá entrar imediatamente em contato com a DIBBA, por meio do e-mail contato@dibba.com.br.

                                    2.4.	A DIBBA poderá, a seu exclusivo critério, se recusar a oferecer os Serviços a qualquer USUÁRIO e, ainda, alterar os seus critérios de elegibilidade a qualquer tempo, sem aviso prévio.

                                    2.5.	Na utilização dos Serviços, o USUÁRIO deverá observar e respeitar integralmente as disposições do presente Termo, dos termos adicionais e da legislação vigente.

                                    2.5.1.	A DIBBA reserva-se o direito de encerrar, suspender ou limitar o acesso do USUÁRIO aos Serviços caso o USUÁRIO viole qualquer regra ou disposição do presente Termo ou de qualquer outro termo ou contrato adicional celebrado com a DIBBA.

                                    2.6.	O USUÁRIO continuará a ser única e exclusivamente responsável por todas as obrigações relacionadas ao seu cadastro, em especial, mas não se limitando a todas as atividades desempenhadas por meio do seu e-mail, nome e CPF, mesmo após o seu encerramento.

                                    2.7.	O USUÁRIO é única e exclusivamente responsável pela precisão e veracidade das informações fornecidas no App, em sua Conta. 

                                    2.8.	O USUÁRIO pode deixar de utilizar nossos Serviços a qualquer momento, embora fiquemos chateados ao vê-lo ir embora. De igual forma, a DIBBA também poderá deixar de prestar os Serviços a determinado(s) USUÁRIO(S) ou incluir novos limites para acesso aos nossos Serviços, a qualquer momento, a nosso livre e exclusivo critério, independentemente de aviso prévio.

                                    3.	PREÇO
                                    3.1.	A DIBBA se reserva no direito de revisar, modificar ou atualizar os preços utilizados no App, observando os critérios de necessidade, conveniência ou flutuações de mercado, sendo dispensada a comunicação prévia aos USUÁRIOS. 

                                    4.	COMPRA SEGURA
                                    4.1.	Para efetuar a compra dos produtos disponibilizados no App, serão solicitados os dados cadastrais do USUÁRIO, como: nome completo, data de nascimento, CPF, telefone, e-mail, endereço e entre outros. Dados estes que o USUÁRIO concorda, desde já, em fornecer, uma vez que são essenciais para formalização da(s) compra(s). 

                                    4.2.	Para concluir a(s) compra(s), serão solicitadas informações financeiras de acordo com a forma de pagamento escolhida. Não se preocupe, as transmissões de dados para pagamento são seguras.

                                    4.3.	No caso de pagamento com cartão de crédito, o USUÁRIO deverá informar o número do cartão, o código de segurança, a data de vencimento e a operadora. Para sua segurança, estas informações não serão mantidas em nosso banco de dados, sendo necessário informá-las todas as vezes que for realizar uma nova compra.

                                    4.3.1.	As compras realizadas por meio de cartão de crédito estão sujeitas à autorização da operadora do cartão de crédito utilizado.

                                    4.4.	No caso de pagamento por meio de boleto bancário, as compras ficarão sujeitas à compensação do pagamento, a qual leva, em média, até 03 (três) dias úteis para ocorrer.

                                    4.4.1.	O vencimento do boleto sem o seu devido pagamento ocasionará o cancelamento da compra após 07 (sete) dias da data de sua emissão.

                                    4.5.	No caso de pagamento por meio de débito em conta, o prazo para entrega é considerado a partir da confirmação do pagamento pelo banco. A confirmação é realizada em até 02 (dois) dias corridos.

                                    4.6.	Após a confirmação da compra a DIBBA disponibilizará informações no App sobre o status do pagamento – em análise, confirmado ou cancelado – de acordo com a modalidade de pagamento escolhida pelo USUÁRIO.

                                    4.7.	Independentemente da forma de pagamento escolhida, os ingressos só serão disponibilizados ao USUÁRIO após a aprovação do pagamento. 

                                    4.8.	Tendo em vista que o processamento dos meios de pagamento online e dos cartões de crédito são independentes, a DIBBA não dá nenhuma garantia em relação aos pagamentos processados pela empresa responsável pelo processamento dos pagamentos, nem mesmo responde por eventuais falhas das operadoras dos cartões de crédito, instituições financeiras ou bancárias, gateways de pagamento e pelo risco inerente a qualquer compra em ambiente on-line, inclusive por eventuais crimes ocorridos em meio eletrônico.

                                    4.9.	Todas as despesas com tarifas bancárias, taxas de processamento de pagamento, juros de cartão de crédito, entre outras, quando relacionadas à aquisição do(s) produto(s) pelo USUÁRIO, se houver, serão de encargo exclusivo do próprio USUÁRIO.

                                    4.10.	Os dados informados pelo USUÁRIO deverão ser completos, corretos, verdadeiros e atualizados, para que na eminência de qualquer problema, a DIBBA consiga localizá-lo, sob pena da perda do direito de reclamar.

                                    5.	ERROS E PAGAMENTOS NÃO AUTORIZADOS
                                    5.1.	Caso ocorra um erro ou pagamento não autorizado, pedimos que entre imediatamente em contato com o Suporte da DIBBA, pelo e-mail xxxxx@dibba.com.br, para que possamos auxiliá-lo a solucionar o problema.

                                    6.	CANCELAMENTO DO EVENTO
                                    6.1.	Caso o evento seja cancelado, a único e exclusivo critério do organizador do evento, os valores pagos pelo USUÁRIO serão reembolsados pela DIBBA em até 30 (trinta) dias úteis, contados da data de pagamento.

                                    7.	PRAZO DE DESISTÊNCIA E REEMBOLSO
                                    7.1.	O USUÁRIO tem até 7 (sete) dias corridos, contados da data de efetivação do pagamento, para exercer o seu direito de arrependimento de compra e solicitar o reembolso por meio do e-mail xxxxx@dibba.com.br. 
                                    
                                    7.1.1.	Se estiver dentro dos critérios e a solicitação for aprovada pela DIBBA, o USUÁRIO será reembolsado em até 30 (trinta) dias úteis.

                                    8.	PROPRIEDADE INTELECTUAL 
                                    8.1.	O conteúdo disponibilizado na Plataforma, imagens, textos, ícones e demais compilações de dados, são de propriedade da DIBBA e de seus fornecedores, sendo protegido por leis locais e internacionais, podendo ser utilizado apenas mediante autorização da DIBBA. 

                                    8.2.	As marcas registradas que não sejam da DIBBA que aparecem na plataforma, pertencente aos fornecedores são de propriedade se seus respectivos titulares, dependendo o uso respectiva autorização destes. 

                                    9.	GARANTIAS E LIMITAÇÕES DE RESPONSABILIDADE 
                                    9.1.	A DIBBA não garante que o App e suas funcionalidades estarão disponíveis o tempo todo. 

                                    9.2.	A DIBBA não se responsabiliza por fatores externos, fora do seu alcance, como mau uso de seus Produtos como mau uso de seus Serviços, problemas de conexão por parte de operadores ou Usuários que causem qualquer falha de desempenho, erro, omissão, interrupção, defeito, demora na operação ou transmissão, ou, ainda, a falha do sistema.

                                    9.3.	Dada a impossibilidade de garantia de funcionamento integral e ininterrupto de qualquer sistema de telecomunicação e informática durante os 365 (trezentos e sessenta e cinco) dias do ano, 24 (vinte e quatro) horas por dia, a DIBBA não garante, de nenhuma forma, a prestação dos Serviços de forma ininterrupta e isenta de erros ou indisponibilidades, motivo pelo qual também não se responsabiliza por eventuais falhas no processamento de pagamentos em razão de eventual indisponibilidade temporária dos Serviços.

                                    9.3.1.	De igual forma, a DIBBA não garante que os Serviços serão seguros ou disponíveis em qualquer hora ou local, que os defeitos ou erros serão corrigidos, o conteúdo ou sistema disponível por meio dos Serviços está livre de vírus ou de outros elementos nocivos e, ainda, que a utilização dos Serviços atenderá suas necessidades; o Usuário é única e exclusivamente responsável pela utilização dos Serviços, por sua própria conta e risco.

                                    9.4.	A DIBBA não se responsabiliza por eventuais danos, punitivos, incidentais, especiais ou emergentes, direta ou indiretamente causados aos dispositivos eletrônicos do Usuário, incluindo, mas não se limitando, aos danos por perda de uso, dados ou lucros, decorrentes ou de qualquer forma relacionados ao desempenho do App.

                                    9.5.	A DIBBA pode encaminhar o USUÁRIO para Apps que contenham informação que podem ser consideradas ofensivas ou inapropriadas. A DIBBA não faz nenhuma representação relativa a qualquer conteúdo contido ou acessado por meio de nosso App e, por isso, não será responsável pela exatidão, cumprimento de direitos autorais, legalidade ou decência do material contido ou acessado por meio do nosso App, sistema ou Serviços, que não seja de nossa autoria declarada.

                                    9.5.1.	A DIBBA não se responsabiliza por qualquer conteúdo de cunho racista, sexista, antissemita, homofóbico ou que envolva, direta ou indiretamente, expressões preconceituosas que possam dar azo a qualquer tipo de calúnia, injúria ou difamação, eventualmente encontrado em ambiente virtual diverso do nosso App.

                                    10.	DISPOSIÇÕES GERAIS
                                    10.1.	Ao aceitar o presente Termo, o USUÁRIO declara, sob as penas da lei, que o leu e compreendeu integralmente, inclusive com a possibilidade de dirimir quaisquer dúvidas junto à DIBBA em relação ao seu teor, por meio do Suporte (xxxxxx@dibba.com.br).

                                    10.2.	Ao aceitar o presente Termo o USUÁRIO declara, sob as penas da lei, que aceita a modalidade de contratação eletrônica.

                                    10.3.	Ao aceitar o presente Termo o USUÁRIO se obriga a observar e respeitar toda a legislação brasileira, as cláusulas e condições do presente Termo e Condições de Uso, abstendo-se de utilizar os nossos Serviços para a prática de quaisquer atos considerados ilegais, abusivos e/ou contrários à moral e aos bons costumes.

                                    10.4.	O presente Termo pode ser alterado pela DIBBA a qualquer tempo, a seu livre e exclusivo critério, passando a vigorar com a nova redação a partir da publicação em nosso App.

                                    10.4.1.	A DIBBA se reserva o direito de alterar, suspender ou cancelar quaisquer dos Serviços, produtos, produtos ou utilidades disponibilizadas em nosso App ou sistema, a qualquer tempo, a seu livre e exclusivo critério.
                                    
                                    10.5.	Não se estabelece por força do presente contrato nenhum tipo de sociedade, associação, agência, consórcio ou responsabilidade solidária entre a DIBBA e o USUÁRIO, seja comercial, civil, societária, trabalhista, previdenciária, criminal, ambiental e/ou qualquer outra.

                                    10.6.	O não exercício de qualquer direito ou faculdade estabelecidos no presente Contrato constituirá ato de mera liberalidade, não inovando ou criando direitos e precedentes a serem invocados por qualquer das Partes.
                                    
                                    10.7.	Se qualquer disposição deste Contrato for considerada total ou parcialmente inválida, ilegal ou inexequível, todas as outras disposições ou a parte remanescente de tal disposição permanecerão válidas, legais e exequíveis.

                                    11.	VIGÊNCIA E RESCISÃO
                                    11.1.	Este Termo é celebrado por prazo indeterminado, entrando em vigor na data de seu aceite pelo USUÁRIO.

                                    11.2.	O presente Termo poderá ser rescindido de pleno direito, independentemente de qualquer notificação ou interpelação, judicial ou extrajudicial, a exclusivo critério da DIBBA.

                                    11.2.1.	A DIBBA também poderá rescindir o presente Termo, nos seguintes casos: (i) descumprimento de quaisquer das regras e condições do presente Termo por parte do USUÁRIO; e, (ii) caso o USUÁRIO comprometa ou de qualquer forma prejudique a imagem, o nome ou a reputação da DIBBA ou de qualquer pessoa física ou jurídica a ela relacionada, a qualquer tempo.

                                    11.3.	A rescisão do presente Termo, por qualquer motivo, não prejudicará o direito da DIBBA de haver quantias porventura devidas a ela, nem de haver indenização por eventuais prejuízos sofridos.

                                    11.4.	Em qualquer hipótese de rescisão, o USUÁRIO concorda, desde já, que seu cadastro será excluído, não podendo realizar novas transações em nosso App.

                                    12.	FORO
                                    12.1.	No caso de qualquer conflito decorrente do presente Termo, prevalecerão sempre as regras e condições ora estabelecidas, que são regidas e interpretadas de acordo com legislação vigente, elegendo as Partes o foro da comarca de Florianópolis, Estado de Santa Catarina, para dirimir qualquer dúvida ou controvérsia que porventura venha a surgir, com renúncia a qualquer outro foro, por mais privilegiado que seja.
                                    </Modal.Body>
                            </Modal>
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