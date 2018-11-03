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
    this.onDrop = this.onDrop.bind(this);
    
  }

  onDrop(image){
    let req = request.post("https://api.cloudinary.com/v1_1/archhere/image/upload")
    .field('upload_preset', "zselilmq")
    .field('file', image);
    // debugger

    req.end((err, response) => {

      if (err) {
        this.setState({
          url: "https://data.whicdn.com/images/167083528/large.jpg"
        })
      }
      if (response.body.secure_url !== '') {
        this.setState({
          url: response.body.secure_url
        });
      }
    });
  }

  preview(){
    if (this.state.url === '') {
      return (
        <div className="picturethumbnail">
          <img width="232" className="imgthumbnail" src={window.dropzone} />
        </div>
      );
      } else {
        return (
          <div className="picturethumbnail">
            <img width="232" className="imgthumbnail" src={this.state.url}/>
          </div>
        );
      }
  }

  update(type) {
    return e => this.setState({
      [type]: e.currentTarget.value
    });
  }

  handleSubmit(e){
    e.stopPropagation();
    e.preventDefault();
    // debugger
    this.props.openModal({modal: 'PinChooseboard', pin: this.state});
  }

  render() {
    return(
      <div className="pin-create-img-form">
        <div className="pin-create-img-first-line">
          <h1 className="pin-create-img-words">Create Pin</h1>
          <span className="pin-create-img-close-modal" onClick={() => this.props.closeModal()}>X</span>
        </div>
        <div className="pin-create-img-line"></div>
        <div className="pin-create-second-part">
          <ReactDropzone
            onDrop={this.onDrop} className="dropzone" >
            {this.preview()}
          </ReactDropzone>
          <div className="pin-create-info">
            <div className="pin-create-website">
              <label>
                <span className="pin-create-website-text">Website</span>
                <input type="text"
                  className="pin-create-website-whole-link"
                  required value={this.state.website_url}
                  placeholder="Add the URL this Pin links to"
                  onChange={this.update('website_url').bind(this)}/>
              </label>
            </div>
            <br />
            <div className="pin-create-website">
              <label>
                <span className="pin-create-website-text">Description</span>
                <textarea
                  className="pin-create-description"
                  placeholder="Say more about thie Pin"
                  onChange={this.update('description').bind(this)}
                  value={this.state.description} />
              </label>
            </div>
          </div>
        </div>


            <button type="submit"
              className="pin-create-done-button"
              onClick={this.handleSubmit.bind(this)}>Done</button>

      </div>
    );
  }
}

export default PinCreate;
