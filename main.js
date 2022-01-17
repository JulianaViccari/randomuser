

Vue.component('user-component',{ data() {
  return{
    firstName: "Juliana",
    lastName: "Viccari",
    email: "JU@gmail",
    gender: "female",
    picture: "https://randomuser.me/api/portraits/women/25.jpg"
  }
},
methods:{
  async changePeople(){
    const response =await fetch('https://randomuser.me/api')
    const data = await response.json()  
    
    this.firstName = data.results[0].name.first
    this.lastName = data.results[0].name.last
    this.email = data.results[0].email
    this.gender = data.results[0].gender
    this.picture = data.results[0].picture.large
  }
},
  template: `
    <div>
      <img v-bind:src="picture">
      <h1> {{  firstName }} {{ lastName }} </h1>
      <h2> {{ email }} </h2>
      <h3> {{ gender }} </h3>
      <button v-on:click="changePeople()"> Trocar Usuário </button>
    </div>
  `
})
new Vue({
  el: '#app',
  template: '<div><user-component />  <user-component /> </div'
})

