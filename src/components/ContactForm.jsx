import React from 'react'

class ContactForm extends React.Component {
  render() {
    const formStyle = {
      textAlign: 'left',
    }
    const buttonsStyle = {
      margin: '1rem',
      textAlign: 'center',
    }
    const { action } = this.props
    return (
      <form style={formStyle} className="form" action={action} method="post">
        <h2>Get in touch</h2>
        <br/>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Your email</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea placeholder="How can I help you?" className="form-control" name="message" rows="5"></textarea>
        </div>
        <ul className="actions" style={buttonsStyle}>
          <li>
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </li>
        </ul>
      </form>
    )
  }
}

export default ContactForm
