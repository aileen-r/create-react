import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

// import logo from './logo.svg';
import Editor from 'components/Editor';
import Preview from 'components/Preview';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      markdown: ''
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    this.setState({
      markdown: e.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <Container fluid={true}>
          <Row>
            <Col>
              <Editor
                markdown={this.state.markdown}
                onInputChange={this.onInputChange}
              />
            </Col>
            <Col>
              <Preview markdown={this.state.markdown} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
