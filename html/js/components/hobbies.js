/* Hobbies list component */
import Vue from "https://unpkg.com/vue@2.6.10/dist/vue.esm.browser.js";


export default Vue.component("Hobbies", {
	data() {
		return {
			hobbies: [
               {
                name: "Game Programming",
                icon: "icon-code-50.png",
               },
               {
                name: "Gaming",
                icon: "icon-gamepad-50.png"
               },
               {
                name: "Making music",
                icon: "icon-piano-64.png"
               }
            ]
		}
	},
    template:
        `
	<div class="hobbies section-item">
        <div class="container-fluid">
            <h2>
                Hobbies
            </h2>
            <div class="w-25 d-inline-flex align-content-center align-content-center flex-column hobby__item" v-for="hobby in hobbies">
                <div class="hobby__item-icon">
                    <img v-bind:src="'img/' + hobby.icon" />
                </div>
              
                <div class="hobby__item-name">
                    {{hobby.name}}
                </div>
            </div>
        </div>
	</div>
`,

});
