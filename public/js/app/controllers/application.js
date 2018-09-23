import Ember from 'ember';

export default Ember.Controller.extend({

    unCompletedItems: Ember.computed('model.@each.completed', function() {
                return this.get('model').filterBy('completed', false );
    }) ,

    completedItems: Ember.computed('model.@each.completed', function() {
        return this.get('model').filterBy('completed', true );
    }) ,

    actions: {

        updateTask( todoItem ) {
            const state = todoItem.get('completed');

            if( state ){
                console.log('completed false')
                todoItem.set('completed', false);
                todoItem.save();
            }else{
                console.log('completed true')
                todoItem.set('completed', true);
                todoItem.save();
            }
        },
        editTodo: function (todoItem) {
            todoItem.set('isEditing', true);
        },

        completeItem( todoItem ){
            todoItem.set( 'completed' , true);
            todoItem.save();
            console.log( 'completeItem' );
        },

        unCompleteItem( todoItem ){
            todoItem.set( 'completed' , false);
            todoItem.save();
        },

        createTask( txt ){
            if( txt && txt.length > 0 ){
                let task = this.store.createRecord('todo', {
                    title: txt,
                    completed: false
                });
                task.save();
            }

            this.set('newInputTask','');

            $('#addTaskForm').modal('toggle')
        } ,

        delItem( todoItem ){
            todoItem.destroyRecord();
        } ,

        updateTodo( todoItem ,newVal ){
            if( newVal.length > 0 ){
                todoItem.set( 'title' , newVal  );
                todoItem.set( 'isEditing' , false  );
                todoItem.save();
                this.set('newVal', '');
            }
        }
    }

});
