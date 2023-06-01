import Vue from "https://unpkg.com/vue@2.6.10/dist/vue.esm.browser.js";
import Banner from "./components/banner.js";
import Profile from "./components/profile.js";
import WorkExperience from "./components/work_experience.js";
import Skills from "./components/skills.js";
import Strengths from "./components/strengths.js";
import Hobbies from "./components/hobbies.js";

const App = Vue.component("App", {
    template: 
    `<div id="SeppoCV">
        <banner></banner>
        <div class="container-fluid">
            <div class="row">
                
                <div class="col-sm-12 col-md-6">
                    <profile></profile>
                </div>
                
                <div class="col-sm-12 col-md-6">
                    <strengths></strengths> 
                </div>

                <div class="col-sm-12 col-md-6">
                    <work-experience></work-experience>
                </div>
                
                
                <div class="col-sm-12 col-md-6">
                   <hobbies></hobbies>
                </div>
                
                <div class="col-sm-12 col-md-6">
                    <skills></skills>
                </div>
                
            </div>
        </div>
    </div>`,
    components: {
        Banner,
        Profile,
        WorkExperience,
        Skills,
        Strengths,
        Hobbies
    },
});


new Vue({
    render: (h) => h(App),
}).$mount("#app");