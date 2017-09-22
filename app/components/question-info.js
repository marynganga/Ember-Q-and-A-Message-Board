import Ember from 'ember';

export default Ember.Component.extend({
	actions:{
		updateQuestion(question, params){
			this.sendAction('updateQuestion',question, params);
		},
		deleteQuestion(question){
			this.sendAction('deleteQuestion',question);

		}
	}
});
