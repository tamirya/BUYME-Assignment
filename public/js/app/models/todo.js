import DS from 'ember-data';

export default DS.Model.extend({
  title:     DS.attr('string'),
  completed: DS.attr('boolean'),
  isEditing: DS.attr('boolean')
});
 