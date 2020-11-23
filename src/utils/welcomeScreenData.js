export default [
  {
    title: 'Hello, Nice to have you here',
    text: "Let's get things up and running",
    bg: require('../../assets/images/1.png'),
    options: {
      image: true,
      source: require('../../assets/images/logo-long.png'),
      textWhite: true,
    },
  },
  {
    title: 'What is your beautifull name ?',
    text: '',
    bg: require('../../assets/images/2.png'),
    options: {
      textInput: true,
      value: 'username',
      setValue: 'setUsername',
      placeholder: 'John Doe',
    },
  },
  {
    title: "Let's secure your app",
    text:
      "This key will be used to encrypt and decrypt your data.\nPlease make sure you don't forget it",
    bg: require('../../assets/images/3.png'),
    options: {
      textInput: true,
      value: 'password',
      setValue: 'setPassword',
      placeholder: 'SuperSecure',
    },
  },
  {
    title: 'Everything up and running',
    text: '',
    bg: require('../../assets/images/4.png'),
    options: {
      button: true,
      buttonText: "Let's go",
    },
  },
];
