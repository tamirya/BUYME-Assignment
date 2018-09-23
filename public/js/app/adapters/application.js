import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    host: 'http://localhost:8000/api',

    init(){
	    this._super(...arguments);

	    this.set('headers', {
	      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
	    });
    }
});