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
		}
	}
});
