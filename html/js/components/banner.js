/* Banner header vue component */
import Vue from "https://unpkg.com/vue@2.6.10/dist/vue.esm.browser.js";


export default Vue.component("Banner", {
	data() {
		return {
			profile: {
				name: "Seppo Laine",
				email: "hittoaeae@gmail.com",
				picture: "img/profile.jpg"
			}
		}
	},
    template:
        `
	<div id="banner" class="banner">
		
			<div class="parent">
				<div id="profile-name">{{profile.name}}</div>
				<div id="profile-email"><img style="width:1.15rem;height:1.15rem" src="img/icon-email-24.png"></img>{{profile.email}}</div>
				<div id="profile-image">
					<div class="banner__image" v-bind:style="{ 'background-image': 'url(' + profile.picture + ')' }"></div>
				</div>
			</div>
		
	</div>
`,

});
