*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Poppins',sans-serif;
scroll-behavior:smooth;
}

body{
background:#0d1117;
color:#fff;
overflow-x:hidden;
}

.navbar{
position:fixed;
top:0;
width:100%;
display:flex;
justify-content:space-between;
align-items:center;
padding:20px 10%;
background:rgba(13,17,23,.85);
backdrop-filter:blur(10px);
z-index:1000;
}

.logo{
font-size:30px;
font-weight:700;
color:#00d9ff;
}

.nav-links{
display:flex;
list-style:none;
gap:30px;
}

.nav-links a{
color:white;
text-decoration:none;
transition:.3s;
}

.nav-links a:hover{
color:#00d9ff;
}

.hero{
height:100vh;
display:flex;
justify-content:center;
align-items:center;
text-align:center;
padding:40px;
background:linear-gradient(135deg,#0d1117,#161b22,#0d1117);
}

.hero h1{
font-size:60px;
margin:15px 0;
}

.hero h2{
color:#00d9ff;
margin-bottom:20px;
}

.hero p{
max-width:700px;
margin:auto;
line-height:1.8;
font-size:18px;
}

.btn{
display:inline-block;
margin-top:30px;
padding:14px 35px;
border-radius:40px;
background:#00d9ff;
color:#000;
font-weight:bold;
text-decoration:none;
transition:.4s;
}

.btn:hover{
transform:translateY(-5px);
box-shadow:0 0 25px #00d9ff;
}

section{
padding:100px 10%;
}

.container{
max-width:1200px;
margin:auto;
}

h2{
font-size:40px;
margin-bottom:40px;
text-align:center;
color:#00d9ff;
}

.card{
background:#161b22;
padding:30px;
border-radius:20px;
margin-top:20px;
transition:.4s;
}

.card:hover{
transform:translateY(-10px);
box-shadow:0 0 20px rgba(0,217,255,.4);
}

.skills-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(180px,1fr));
gap:20px;
margin-top:40px;
}

.skill{
background:#161b22;
padding:18px;
text-align:center;
border-radius:15px;
transition:.3s;
}

.skill:hover{
background:#00d9ff;
color:#000;
transform:scale(1.08);
}

@media(max-width:768px){

.navbar{
flex-direction:column;
}

.nav-links{
flex-wrap:wrap;
justify-content:center;
margin-top:15px;
}

.hero h1{
font-size:42px;
}

.hero p{
font-size:16px;
}

}
