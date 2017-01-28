import React, {Component} from "react";
import ShowAddButton from "../components/ShowAddButton";
import QuestionForm from "../components/QuestionForm";
import QuestionList from "./QuestionList";
import _ from "lodash";

class QuestionApp extends Component {
	constructor() {
		var questions = [{
			id:1,
			title:"小丸子喜欢吃小丸子吗?",
			description: "请小丸子本人回答一下",
			voteCount:10
		},
		{
			id:2,
			title:"喜欢写代码的小丸子好吃吗",
			description:"听说喜欢写代码的小丸子不好吃",
			voteCount:8
		},
		{
			id:3,
			title:"小丸子喜欢吃小丸子吗?",
			description: "请小丸子本人回答一下",
			voteCount:10
		},
		{
			id:4,
			title:"喜欢写代码的小丸子好吃吗",
			description:"听说喜欢写代码的小丸子不好吃",
			voteCount:8
		}];

		super();
		this.state = {
			questions: questions,
			formDisplay: false
		};
	}
	onToggleForm() {
		this.setState({
			formDisplay: !this.state.formDisplay
		});
	}
	onNewQuestion(newQuestion) {
		newQuestion.id = this.state.questions.length + 1;
		var newQuestions = this.state.questions.concat(newQuestion);
		newQuestion = this.sortQuestion(newQuestions);
		this.setState({
			questions:newQuestions
		});
	}
	onVote(key, newCount) {
		var questions = _.uniq(this.state.questions);
		var index = _.findIndex(questions, function(q){
			return q.id == key;
		});

		questions[index].voteCount = newCount;

		questions = this.sortQuestion(questions);

		this.setState({
			questions:questions
		});
	}
	sortQuestion(questions) {
		questions.sort(function(a,b) {
			return b.voteCount - a.voteCount
		});
		return questions;
	}
	render() {
		this.onToggleForm = this.onToggleForm.bind(this);
		this.onNewQuestion = this.onNewQuestion.bind(this);
		this.onVote = this.onVote.bind(this);

		return (
			<div>
			  <div className="jumbotron text-center">
			    <div className="container">
			      <h1>React问答</h1>
			      <ShowAddButton onToggleForm={this.onToggleForm}/>
			    </div>
			  </div>
			  <div className="main container">
			    <QuestionForm 
			      onNewQuestion={this.onNewQuetsion}
			      formDisplay={this.state.formDisplay}
			      onToggleForm={this.onToggleForm} />
			    <QuestionList
			      questions={this.state.questions}
			      onVote={this.onVote} />
			  </div>
			</div>

		);
	}
}

export default QuestionApp;