export default function($http) {
	'ngInject';

	let services = {
		getPosts: getPosts
	};

	return services;


	function getPosts() {
		return $http.get('https://jsonplaceholder.typicode.com/posts')
			.then(data => {
				return data.data;
			});
	}
}