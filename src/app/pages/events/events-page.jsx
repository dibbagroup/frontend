import React from "react";
import { Form, InputGroup } from 'react-bootstrap';
import './events-page.scss'

import { HeaderWidget } from "../../widgets/header/header-widget";
import { BasicSectionWidget } from "../../widgets/basic-section/basic-section-widget";

export default class EventsPage extends React.Component {
  constructor() {
    super()

    this.state = {
      searchbarValue: "",
      entries: [
        {
          title: "🎉 Pagode",
          list: [
            {
              title: "Event 1"
            }
          ]
        }
      ]
    }
  }

  fetchEventsWithSearchbarValue() {
    // Code...
    console.log(this.state.searchbarValue)
  }

  render() {
    return (
      <div className="events-page bg-dark">
        <HeaderWidget />

        <h1 className="text-light my-4 text-center">Eventos</h1>

        <div className="content w-75 mx-auto mt-5">
          <div className="w-50 mx-auto mb-5">
            <InputGroup className="mb-2 searchbar-events">
              <Form.Control
                size="lg"
                type="text"
                placeholder="Pesquisar..."
                value={this.state.searchbarValue}
                onChange={(e) => {
                  this.setState({
                    ...this.state,
                    searchbarValue: e.target.value
                  })
                }}
              />
              <InputGroup.Text onClick={() => { this.fetchEventsWithSearchbarValue() }}>
                <i className="fas fa-search" />
              </InputGroup.Text>
            </InputGroup>
          </div>

          {
            this.state.entries.map((row, i) => (
              <div key={i}>
                <BasicSectionWidget title={row.title} />
                {
                  row.list.map((ev, k) => (
                    <div key={k}>
                      <h1>{ev.title}</h1>
                    </div>
                  ))
                }
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}