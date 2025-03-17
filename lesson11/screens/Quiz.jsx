import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Button } from "react-native";


const quizQuestions = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "What is 2 + 2?", answer: "4" },
  { question: "Who wrote 'To Kill a Mockingbird'?", answer: "Harper Lee" },
];

const QuizScreen = (props) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleNextQuestion = () => {
    setShowAnswer(false);
    setCurrentQuestion((prev) => (prev + 1) % quizQuestions.length);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{quizQuestions[currentQuestion].question}</Text>
      {showAnswer && <Text style={styles.answer}>{quizQuestions[currentQuestion].answer}</Text>}
      <TouchableOpacity style={styles.button} onPress={() => setShowAnswer(!showAnswer)}>
        <Text style={styles.buttonText}>{showAnswer ? "Hide Answer" : "Show Answer"}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleNextQuestion}>
        <Text style={styles.buttonText}>Next Question</Text>
      </TouchableOpacity>
      <Button style={styles.button}
            title='Go to Menu'
            onPress={()=>props.navigation.goBack()}
            
        ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f5f5f5", padding: 20 },
  question: { fontSize: 20, fontWeight: "bold", marginBottom: 10, textAlign: "center" },
  answer: { fontSize: 18, color: "green", marginBottom: 10 },
  button: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
    width: "80%",
  },
  buttonText: { color: "white", fontSize: 16, fontWeight: "bold" },
});

export default QuizScreen;
