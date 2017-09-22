import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return Ember.RSVP.hash({
			questions: this.get('store').findAll('question'),
			answers: this.get('store').findAll('answer'),
		
		})
	},
	actions: {
		saveQuestion(params){
			var newQuestion = this.store.createRecord('question', params);
			newQuestion.save();
			this.transitionTo('index');
		}
	}
});
