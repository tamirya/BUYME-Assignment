import Ember from 'ember';

export default Ember.Route.extend({

        model(){

        return  this.store.findAll('todo');

        let self = this;
        Ember.$.get('http://localhost:8000/api/todos' , ( _items )=> {

        _items.forEach(function(item) {
            let isCompleted=false;
            if(item.completed == 1){
                isCompleted=true;
            }
            self.store.createRecord('todo', {
                itemId: item.id,
                title: item.title,
                isEditing: false,
                completed: isCompleted
            })
        });
    });

        return  self.store.peekAll('todo');
    }
});
