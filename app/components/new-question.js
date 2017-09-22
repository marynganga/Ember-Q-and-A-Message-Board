import Ember from 'ember';

export default Ember.Component.extend({
	newQuestionForm: false,
	actions:{
		addQuestionClicked(){
			this.set('newQuestionForm', true);
		},
		closeQuestionForm(){
			this.set('newQuestionForm', false);
			this.set('author', "");
			this.set('content', "");
			this.set('notes', "");
		},
		saveQuestion(){
			var params = {
				author: this.get('author')?this.get('author'):"Anonymous",
				content: this.get('content')?this.get('content'):"No question added.",
				notes: this.get('notes')?this.get('notes'):"No additional notes.",
			};
			this.set("newQuestionForm",false);
			this.sendAction('saveQuestion', params);
			console.log(params)
		}
	}
});
