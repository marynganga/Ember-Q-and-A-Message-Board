import Ember from 'ember';

export default Ember.Component.extend({
	newAnswerForm: false,
	actions:{
		addAnswerClicked(){
			this.set('newAnswerForm', true);
		},
		closeAnswerForm(){
			this.set('newAnswerForm', false);
			this.set('author', "");
			this.set('content', "");
			this.set('notes', "");
		},
		saveAnswer(){
			var params = {
				author: this.get('author')?this.get('author'):"Anonymous",
				content: this.get('content')?this.get('content'):"No answer added.",
			};
			this.set("newAnswerForm",false);
			this.sendAction('saveAnswer', params);
			console.log(params)
		}
	}
});
