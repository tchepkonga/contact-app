import React from "react";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };
  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("ALl the fields are mandatory!");
      return;
    }

    // check for invalid email using regex pattern
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(this.state.email)) {
    alert("Invalid email address!");
    return;
  }

  // check if contact with same name or email already exists
  const existingContact = this.props.Contacts && this.props.Contacts.find(
    (contact) => contact.name === this.state.name || contact.email === this.state.email
  );
  if (existingContact) {
    alert("Contact with same name or email already exists!");
    return;
  }
    
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" });
  };

  

  render() {

    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;

