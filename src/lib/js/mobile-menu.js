import React from 'react';
import ReactDOM from 'react-dom';
import '../css/menu.css';
import logo from '../images/logo.png';
import menuData from './menu'

class MobileMenu extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      menuState:false,
      menu:menuData
    }
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
    this.creatAslide = this.creatAslide.bind(this);
    this.removeAslide = this.removeAslide.bind(this);
  }
  toggleMobileMenu(event){
    event.stopPropagation();
    if(!this.state.menuState){
      document.getElementById('root').className = 'show-mobile-menu';
      document.getElementById('aslide').className = 'show';
    }else{
      document.getElementById('root').className = '';
      document.getElementById('aslide').className = 'hide';
    }
    this.setState({menuState:!this.state.menuState});
    
  }
  //初始化 第一次渲染后调用
  componentDidMount(){
    // 创建菜单
    this.creatAslide();

  }
  creatAslide(){
    let aslide = document.createElement('div');
    aslide.setAttribute('id','aslide');
    aslide.className = 'hide';
    document.body.append(aslide);
    ReactDOM.render(<Aslide data={this.state.menu}/>, document.getElementById('aslide'));
  }
  removeAslide(){
    var aslide = document.getElementById('aslide');
    aslide.remove();
    document.getElementById('root').className = '';
  }
  render(){
    return (
      <div className="mobile-menu">
        <button className={this.state.menuState ? 'active menu-btn' : 'menu-btn'} onClick={this.toggleMobileMenu}>
          <i className="top"></i>
          <i className="mid1"></i>
          <i className="mid2"></i>
          <i className="bot"></i>
        </button>
      </div>

    )
  }
}

class Aslide extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      subShowKey:''
    }
    this.openSubMenu = this.openSubMenu.bind(this);
    this.closedSubMenu = this.closedSubMenu.bind(this);
  }
  openSubMenu(event,key){
    this.setState({subShowKey: key})
  }
  closedSubMenu(event,key){
    this.setState({subShowKey: ''})
  }
  render(){
    const menus = this.props.data;
    return(
      <div className="menu-box">
        <div className="menu-logo">
          <img src={logo} alt="logo"></img>
        </div>
        <div className="menu-content">
          <ul>
            {
              menus.map((menu,index) => {
                
                if(menu.children){
                  let childs = menu.children;
                  return (
                    <li className="item parent-item" key={menu.id}>
                      <a className= { this.state.subShowKey === menu.id ? "sub-title active" : "sub-title"} href={menu.url} key={menu.id} onClick={ this.state.subShowKey === menu.id ? (e)=>{this.closedSubMenu(e,menu.id.toString())} : (e)=>{this.openSubMenu(e,menu.id.toString())}}>{menu.text}</a>
                      <ul className= { this.state.subShowKey === menu.id ? "sub-menu show" : "sub-menu hide"} style={this.state.subShowKey === menu.id ? {height: childs.length * 40 +'px'} : {height:'0px'}}>
                        {
                          childs.map((child,index2) => {
                            if(child.url){
                              return (
                                <li className="sub-item" key={child.id}>
                                  <a className="sub-li" href={child.url}>{child.text}</a>
                                </li>
                              )
                            }else{
                              return (
                                <li className="sub-item" key={child.id}>{child.text}</li>
                              )
                            }
                          })
                        }
                      </ul>
                    </li>
                  )
                }else{
                  if(menu.url){
                    return (
                      <li className="item" key={menu.id}>
                        <a href={menu.url}>{menu.text}</a>
                      </li>
                    )
                  }else{
                    return (
                      <li className="item" key={menu.id}>
                        {menu.text}
                      </li>
                    )
                  }
                 
                }
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default MobileMenu