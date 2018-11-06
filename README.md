# Pindup
[Live site](https://pindub.herokuapp.com/#/)

Pindup is a web application for the photo lovers, inspired by Pinterest. Users can find pictures they like in the feed page or from other users' pin boards. Users can also save or upload the pictures they like to the board they have created.


## Features

* Profiles
  * Users can view the boards and pins in their profile page. Users can also have the access to other users' profile page after they logged in.
  * The profile page display all the information belongs to the user. Also all the pins they have pinned.
  * User can create boards and pins in their own profile page.
* Modal
  * Modal is used for Log In/Sign Up page and the form page in this application.
* Feed
  * The feed page would render all the Pins from the database randomly.
  * The feed page uses the image grid css style.
  * User can save Pins from the feed page.
* Likes
  * Users will increment the likes for the Pin after they save it to their own board.

### Modals

Every form in Pindup is displayed by the modal. Including session form, pin/board create form, pin/board edit form, pin save form.

Because we do not want to see the session form after user logged in. I used modal component to handle the form before logged in. And the new modal component to handle the after logged in modals.

For both of them, I use switch to handle which form to display.

```javascript
  function Modal({modal, closeModal, loggedIn}) {
    if (loggedIn) {
      return null;
    }
    let component;
    switch (modal) {
      case 'login':
      component = <LoginFormContainer />;
        break;
      case 'signup':
      component = <SignupFormContainer />;
        break;
      default:
        component = <LoginFormContainer />;
        break;
    }

```

```javascript
const Modal = (props) => {
  if (!props.modal){
    return null;
  }
  let component;
  switch(props.modal.modal){
    case "CreateBoard":
    component = <BoardCreateContainer />;
    break;
    case "EditBoard":
    component = <BoardEditContainer board={props.modal.board}/>;
    break;
    case "CreatePin":
    component = <PinCreateImg />;
    break;
    case "PinChooseboard":
    component = <PinChooseboard pin={props.modal.pin}/>;
    break;
    default:
    return null;
  }
```
### Future features
The project was designed and built in about 80 hours of work. So I would love to update more features in the future.

* User Following:
  Users will be able to follow other users.I will use a join table to implement this.

* Search:
  Users will be able to search for the pins in the nav bar by the description of the pins.
