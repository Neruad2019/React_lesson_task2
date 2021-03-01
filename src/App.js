import React from 'react'
import Nav from './Views/Nav'


function App() {
  const [News,setNews] = React.useState([
    {id:1,title:'Elon Mask want to go to Mars',details:'Some details',categories:'politics'},
    {id:2,title:'Elon Mask missed $15billion',details:'Some details',categories:'politics'},
    {id:3,title:'Elon Mask about',details:'Some details',categories:'politics'}
  ])

  const [Blogs,setBlogs] = React.useState([
    {id:1,title:'Название карточки',details:'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'},
    {id:2,title:'Название карточки',details:'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'},
    {id:3,title:'Название карточки',details:'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'},
  ])

  const [Users, serUsers] = React.useState([
    {id:1,fullname:'Dauren Absattarov',email:'Dauren@gmail.com',password:'qweqwe'},
    {id:2,fullname:'Admin',email:'Admin@gmail.com',password:'qweqwe'}
  ])

  const [isOnline, setIsOnline] = React.useState({
    id:0,
    isOnline:false
  })

  function Login(id) {
    setIsOnline(()=>{return {id,isOnline:true}})
  }

  function addNew(title,details,categories) {
    setNews(News.concat([{
      title,
      details,
      id: Date.now(),
      categories
    }]))
  }

  return (
    <div>
      <Nav News={News} Blogs={Blogs} onCreate={addNew} online={isOnline} setOnline={Login} Users={Users}/>
    </div>
  );
}

export default App;
