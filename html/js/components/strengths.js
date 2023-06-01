/* List of Strengths component */
import Vue from "https://unpkg.com/vue@2.6.10/dist/vue.esm.browser.js";


export default Vue.component("Strengths", {
	data() {
		return {
			strengths: [
                "Problem-solving, Technical skills",
                "Detail-oriented, Self-motivated",
                "Adaptable, Fast learner",
            ]
		}
	},
    template:
        `
	<div class="strengths section-item">
        <div class="container-fluid">
            <h2>
                Strengths
                <div class="pt-2 w-100 d-inline-block" v-for="strength in strengths">
                    <div class="badge badge-dark">{{strength}}</div>
                </div>
            </h2>
        </div>
	</div>
`,

});
