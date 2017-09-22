import Ember from 'ember';

export default Ember.Component.extend({
	updateQuestionForm: false,
	actions:{
		updateQuestionClicked(){
			this.set('updateQuestionForm', true);
		},
		closeQuestionForm(){
			this.set('updateQuestionForm', false);
		},
		updateQuestion(question){
			var params = {
				author: this.get('author'),
				content: this.get('content'),
				notes: this.get('notes'),
			};
			this.set("updateQuestionForm",false);
			this.sendAction('updateQuestion',question, params);
			console.log(params)
		}
	}
});
