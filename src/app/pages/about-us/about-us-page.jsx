import React from "react";
import { BasicSectionWidget } from "../../widgets/basic-section/basic-section-widget";
import { HeaderWidget } from "../../widgets/header/header-widget";
import { MvvSectionWidget } from "../../widgets/mvv-section/mvv-section-widget";
import "./about-us-page.scss";

export default class AboutUsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      lorem:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio aliquam unde nemo velit. Iste beatae adipisci, voluptas minima unde ipsam iure eos, enim repudiandae saepe possimus. Maxime dicta officiis optio? Enim quisquam deleniti veniam facilis error quos culpa debitis expedita ipsum sint, totam, similique voluptate, beatae blanditiis corporis. Voluptate maiores voluptates excepturi laborum vero culpa nisi ea aliquam nihil doloribus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio aliquam unde nemo velit. Iste beatae adipisci, voluptas minima unde ipsam iure eos, enim repudiandae saepe possimus. Maxime dicta officiis optio? Enim quisquam deleniti veniam facilis error quos culpa debitis expedita ipsum sint, totam, similique voluptate, beatae blanditiis corporis. Voluptate maiores voluptates excepturi laborum vero culpa nisi ea aliquam nihil doloribus",
      subSections: [
        {
          title: "Missão",
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos eligendi aperiam maiores porro ipsam fuga reprehenderit in! Expedita, voluptatum itaque. Veritatis ex illo ad delectus labore quod magni quae vitae?",
        },

        {
          title: "Visão",
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos eligendi aperiam maiores porro ipsam fuga reprehenderit in! Expedita, voluptatum itaque. Veritatis ex illo ad delectus labore quod magni quae vitae?",
        },

        {
          title: "Valores",
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos eligendi aperiam maiores porro ipsam fuga reprehenderit in! Expedita, voluptatum itaque. Veritatis ex illo ad delectus labore quod magni quae vitae?",
        },
      ],
    };
  }

  render() {
    return (
      <div className="about-us-page bg-dark text-light">
        <HeaderWidget/>
        <div className="content w-50 mx-auto">
          <BasicSectionWidget title={"🚀 Sobre nós"} text={this.state.lorem} />
          <MvvSectionWidget
            title={"🎯 MVV"}
            subSections={this.state.subSections}
          />
        </div>
      </div>
    );
  }
}
