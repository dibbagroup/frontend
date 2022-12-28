import React from "react";
import { BasicSectionWidget } from "../../widgets/basic-section/basic-section-widget";
import { HeaderWidget } from "../../widgets/header/header-widget";
import { MvvSectionWidget } from "../../widgets/mvv-section/mvv-section-widget";
import { FooterWidget } from "../../widgets/footer/footer-widget";
import "./about-us-page.scss";

export default class AboutUsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      about:
        "A Dibba é uma empresa que veio para revolucionar o mercado de eventos e otimizar o seu tempo. Nosso maior objetivo é trazer pessoalidade para seu evento, agregando gráficos e relatórios analíticos para que seu negócio cresça cada vez mais. Apesar de trabalharmos com a venda de ingressos, percebemos que uma festa vai muito além disso. Por isso, nós da Dibba, também fazemos a divulgação dos seus eventos por meio das nossas redes sociais, assim, atraímos e alcançamos pessoas de todo o Brasil. Somos uma StartUp formada por jovens com muita vontade de crescer e revolucionar o mercado de eventos. Também visamos sempre a excelência e responsabilidade nas nossas entregas, além de fazer com que a sua empresa se destaque nesse mercado.",
      subSections: [
        {
          title: "Missão",
          text: "Ajudar os estabelecimentos a se recuperarem e ganhar mais visibilidade, e ajudar os jovens a encontrarem o role ideal.",
        },

        {
          title: "Visão",
          text: "Queremos ser uma empresa quem vem na mente de todos quando o assunto é festa.",
        },

        {
          title: "Valores",
          text: "Criatividade, Honestidade, Proatividade, Responsabilidade, Diversão, Pessoalidade.",
        },
      ],
    };
  }

  render() {
    return (
      <div className="about-us-page bg-dark text-light">
        <HeaderWidget/>
        <div className="content w-50 mx-auto">
          <BasicSectionWidget title={"🚀 Sobre nós"} text={this.state.about} />
          <MvvSectionWidget
            title={"🎯 MVV"}
            subSections={this.state.subSections}
          />
        </div>
        <FooterWidget />
      </div>
    );
  }
}
