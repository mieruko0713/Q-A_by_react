import React, {Component} from "react";

class QuestionForm extends Component {
	submitHandle(e) {
		e.preventDefault();
		if(!this.refs.title.value) {
			return ;
		}
		var newQuestion = {
			title: this.refs.title.value,
			description: this.refs.description.value,
			voteCount:0
		}
	}
}