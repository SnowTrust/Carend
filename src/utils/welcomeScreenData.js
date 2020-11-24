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
    title: 'How Carend Diary works? ',
    text:
      "Actually I act like a paper Diary\nbut with a mood tracker.\nYou can write a note everyday,\nYou can modify it till the end of the day,\nYou can also tear a page when you want,\n And if you don't know what to write, i can help you",
    bg: require('../../assets/images/2.png'),
  },
  {
    title: 'What is your beautifull name ?',
    text: 'How should i call you ?',
    bg: require('../../assets/images/3.png'),
    options: {
      textInput: true,
      value: 'username',
      setValue: 'setUsername',
      placeholder: 'John Doe',
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
