import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ReactDropzone from 'react-dropzone';
import request from 'superagent';


class PinCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      description: '',
      website_url: '',
    }
  }

  onDrop(image) {
    let req = request.post('http://httpbin.org/post');
    req.end((response) => {
      this.setState({
        url: response.body.secure_url
      });
    });
  }

  update(type) {
    return e => this.setState({
      [type]: e.currentTarget.value
    });
  }

  handleSubmit(e){
    e.stopPropagation();
    // debugger
    e.preventDefault();
    this.props.openModal({modal: 'PinChooseboard', pin: this.state});
  }

  render() {
    return(
      <div>
        <div >
          <h1>Create Pin</h1>
          <span className="close-modal" onClick={() => this.props.closeModal()}>X</span>

          <label className="url">
            <span>Url</span>
            <input type="text" required value={this.state.url} onChange={this.update('url').bind(this)}/>
          </label>

          <label>
            <span>Website</span>
            <input type="text" required value={this.state.website_url} onChange={this.update('website_url').bind(this)}/>
          </label>

          <label>
            <span>Description</span>
            <textarea onChange={this.update('description').bind(this)} value={this.state.description} />
          </label>

          <div className="done-button">
            <button type="submit" onClick={this.handleSubmit.bind(this)}>Done</button>
          </div>
        </div>
      </div>
    );
  }
}

export default PinCreate;
