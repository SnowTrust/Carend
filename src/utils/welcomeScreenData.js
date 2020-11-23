export default [
  {
    title: 'Hello, Nice to have you here',
    text: "Let's get things up and running",
    bg: '#59b2ab',
    options: {
      image: true,
      source: {uri: 'https://dummyimage.com/500x300/6e6e6e/ffffff.png'},
    },
  },
  {
    title: 'What is your beautifull name ?',
    text: '',
    bg: '#febe29',
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
    bg: '#22bcb5',
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
    bg: '#22bcb5',
    options: {
      button: true,
      buttonText: "Let's go",
    },
  },
];
