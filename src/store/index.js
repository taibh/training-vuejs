import Vue from "vue";
import Vuex from "vuex";

import { mutations } from "./mutations";
import actions from "./actions";

import authModule from "./modules/auth";

Vue.use(Vuex);

export default new Vuex.Store({
	modules: { authModule },
	state: {
		sidenavOpened: false,
		userInfo: {
			fullName: "Asuna Yuuki",
			email: "asunayukki@gmail.com",
			avatar:
				"https://i.pinimg.com/originals/4f/b1/87/4fb187c9ec3aec105fde0f13ca52e13f.jpg",
		},
	},
	mutations,
	actions,
});
