import template from './dashboard.component.html';
import './dashboard.scss';

export default {
	template,
	// bindings: {

	// }
	controller: function ($element, dashboardService) {
		'ngInject';
		let $ctrl = this;
		$ctrl.list = [];

		$ctrl.$onInit = function() {
			dashboardService.getPosts()
				.then((data) => {
					$ctrl.list = data;
				});
		}
	}
}