<template>
  <div >
    <div class="navbar">
    <div class="logo">
        <img :src="require('@/assets/logo.png')" >
        <b>Astrapark</b>
         
      </div>
    <div id="navbar">
      
      <router-link to="/">Home</router-link> 
      <router-link to="/about">About Us</router-link>
      <router-link to="/parking">Parking Options</router-link>
      <router-link to="/nearby">NearBy Lots</router-link>
      
      <router-link to="/history">History</router-link>
    
    <div class="login" >
      <router-link to="/login" ><i class="fa fa-user-circle-o" aria-hidden="true" style="font-size: 35px; "><span class="tooltiptext">Login</span></i></router-link>
    </div>
    </div>
    <div class="ba">
         <i class="fa fa-bars" aria-hidden="true" style="font-size: 30px"></i>
        </div>
  </div>
  </div>
  <router-view />
</template>

<style lang="scss">
@import url();

$fontcolor:  #2c3e50;
$themecolor: rgb(240, 62, 62);
.ba{
  display: none;
  z-index: 3;
  vertical-align: middle;
  // margin-top: 40px;
  padding-left: 70%;
  margin-right: 20px;
  
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $fontcolor;
  overflow-x: hidden;
}
.tooltiptext {
  visibility: hidden;
  width: 80px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  font-size: 14px;
  font-weight: 100;

  /* Position the tooltip */
  position: absolute;
  z-index: 1;
}
// .login:hover .tooltiptext {
//   visibility: visible;
// }
.fa.fa-user-circle-o{
  color:$themecolor
}
.fa.fa-user-circle-o:hover{
  color:black;
}
.fa.fa-user-circle-o:hover .tooltiptext{
  visibility: visible;
  
}
.logo{
  color: black;
  float: left;
  display: inline-flex;
  flex-direction: row;
  font-weight: 800;
  left: 0;
  padding-top: -12px;
  margin-top: -15px;

  // margin-left: -40%;
  // padding-right: 12%;
  font-size: 25px;
  b{
    margin-top: 30px;
    padding-left: -10px;
    cursor: default;
  }
  img{
    width:80px;
    height:80px; 
    
  }
}
#navbar {
  padding: 2px;
  display:  inline-flex;
  justify-content: space-around;
  width: 80%;
  flex-direction: row;
  // padding-left: 15%;
  top: -5px;
  a {
    font-weight: bold;
    color: $fontcolor;
    padding: 22px;
    text-decoration: none;

    &.router-link-exact-active {
      color: $themecolor;
    }
    
  }
  a:active{
      color: #42b983;
    }
  a:hover{
      color: $themecolor;
    }
}
.container{
  float: left;
  width: 100%;
  max-width: initial;
  padding-right: 0;
}
.navbar{
  width: 100%;
  
  height: 70px;
  display: flex;
  flex-direction: row;
  background-color: rgb(237, 239, 241);
  .login{
    float: right;
    right: 0;
    padding-left: 35%;
    margin-top: 10px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    
  }
}
@media only screen and (max-width: 1350px) {
 
  #navbar{
    padding-left: 5%;
    .login{
      padding-left: 25%;
      
    }
  }
}
@media only screen and (max-width: 1210px) {
  .logo b{
    display: none;
  }
  .logo{
    margin-top: -20px;
    padding-top: 0;
    
  }
  .navbar{
    align-items: center;
  }
  #navbar{
    padding-left: 5%;
    .login{
      padding-left: 15%;
      
    }
  }
}
@media only screen and (max-width: 1066px) {
  .logo b{
    display: none;
  }
  .logo{
    
    padding-top: 0;
    img{
      margin-top: 5px;
    }
  }
  .navbar{
    align-items: center;
  }
  #navbar{
    padding-left: 5%;
    .login{
      padding-left: 10%;
    }
  }
}
@media only screen and (max-width: 1025px) {
  .logo b{
    display: none;
  }
  .logo{
    padding-top: -10px;
    vertical-align: middle;
    margin-top: -15px;
  }
  .navbar{
    align-items: center;
  }
  #navbar{
    display: none;
    padding: 0;
    margin: 0;
  }
  .ba{
    display: block;
  }
  
}
@media only screen and (max-width: 460px) {
  .logo b{
    display: none;
  }
  .logo{
    padding-top: -10px;
    vertical-align: middle;
    margin-top: -15px;
  }
   img{
      margin-top: -20;
    }
  .navbar{
    align-items: center;
    width: 100%;
    background-color: white;
    .ba{
      padding-left: 60%;
    }
  }
  #navbar{
    display: none;
    padding: 0;
    margin: 0;
  }
  .ba{
    display: block;
  }
 
}
</style>
