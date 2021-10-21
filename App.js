/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider, useDispatch} from 'react-redux';
import MyDrawer from './src/navigation/routes';
import dummyData from './src/dummydata.json';
import {store} from './src/store/store';
import {setQuestions} from './src/features/QuestionsSlice';
import Question from './src/components/Question';

/**
 * root context is used for the question list
 */
// export const RootContext = React.createContext({
//   questions: {},
//   selectedQuestion: {},
//   setSelectedQuestion: () => {},
//   setQuestions: () => {},
// });

/**
 * selectedQuestion is used for the question selected from drawer
 * or after swipe which question is showing
 */

// export const SelectedQuestionContext = React.createContext({
//   selectedQuestion: {},
//   setSelectedQuestion: () => {},
// });

const App = () => {
  // simulates the api call
  // const [questions, setQuestions] = useState(dummyData);
  // const [selectedQuestion, setSelectedQuestion] = useState(questions[0]);
  // const value = {
  //   questions,
  //   selectedQuestion,
  //   setSelectedQuestion,
  //   setQuestions,
  // };
  // const selectedValue = useCallback(
  //   () => ({selectedQuestion, setSelectedQuestion}),
  //   [selectedQuestion, setSelectedQuestion],
  // );

  return (
    <Question/>
  );
};

export default App;
