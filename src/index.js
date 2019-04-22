import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link, NavLink, Switch} from 'react-router-dom';


// components
import Home from './components/home';
import Posts from './components/posts';
import Profile from './components/profile';
import PostItem from './components/post_item';


const App= () => {
    return (
       <BrowserRouter>
            <div>
                <header>
                    <NavLink to="/">Home</NavLink><br/>
                    <NavLink 
                            to="/posts"
                            activeStyle={{color:'red'}}
                            activeClassName='selected'
                            >Posts</NavLink><br/>
                    <NavLink to={{
                        pathname:'/profile',
                        // hash:'#Boris',
                        // search: '?profile=true'
                    }}>Profile</NavLink><br/>
                    <hr/>
                </header>
                    <Switch>
                        <Route path="/posts/:id/:username" component={PostItem}/>
                        <Route path="/profile" component={Profile}/>
                        <Route path="/posts" component={Posts}/>
                        <Route path="/" exact component={Home}/>
                        <Route render={()=><h3>oops!! 404 page</h3>}/>
                    </Switch>
                   
            </div>
       </BrowserRouter>
    )
} 

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)