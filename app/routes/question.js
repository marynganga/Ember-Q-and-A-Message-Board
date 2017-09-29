import Ember from 'ember';

export default Ember.Route.extend({
	model(params){
		return this.store.findRecord('question', params.question_id);
	},
	actions: {
		goBack(){
			this.transitionTo('index');
		},
		updateQuestion(question,params){
			Object.keys(params).forEach(function(key) {
				if(params[key]!==undefined){
					question.set(key,params[key]);
				}
			});			
			question.save();
			this.transitionTo('question');
		},

		deleteQuestion(model) {
			if(confirm('Are you sure you want to delete this question?')){
				var answerDeletions = model.get('answers').map(function(answer){
					return answer.destroyRecord();
				});
				Ember.RSVP.all(answerDeletions).then(function(){
					return model.destroyRecord();
				})
				this.transitionTo('index');
			}
		},
		saveAnswer(params){
			var newAnswer = this.store.createRecord('answer', params);
			var question = params.question;
			// console.log(question);
			question.get('answers').addObject(newAnswer);
			newAnswer.save().then(function(){
				return question.save();
			});
			this.transitionTo('question');
		},
		deleteAnswer(answer){
			if(confirm('Are you sure you want to delete this answer?')){
				answer.destroyRecord();
				this.transitionTo('question')
			}
		}

	}
});




