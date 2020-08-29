new Vue({
    el: "#project",
    data() {
      return {
      first_project_title:'COVID19 DASHBOARD',
      first_project_live_link:'https://nocovid.netlify.app/',
      first_project_code_link:'',
      first_project_description:'',

      };
    },
    methods: {
     covidLiveLinkClicked(){
       window.location.href="https://github.com/ashumsd7/covid"
    
     }
     
    },
  });
  