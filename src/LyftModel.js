
import React from 'react';

class LyftModel {
	constructor () {
		this.notify = null;

	}
	subscribe (render) {
		this.notify = render;
	}

}

export default LyftModel;