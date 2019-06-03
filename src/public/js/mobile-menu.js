import React from 'react';
import ReactDOM from 'react-dom';
import '../css/menu.scss';
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
      subShowKey:'',
      subLv3ShowKey:'',
      lv2Height:'0px',
      lv3Height:'0px',
    }
    this.openSubMenu = this.openSubMenu.bind(this);
    this.closedSubMenu = this.closedSubMenu.bind(this);
    this.openSubLv3Menu = this.openSubLv3Menu.bind(this);
    this.closedSubLv3Menu = this.closedSubLv3Menu.bind(this);
  }
  openSubMenu(event,key){
    const menus = this.props.data;
    let a = 0, b = 0;
    if(key){   
      for (let lv2 = 0; lv2 < menus.length; lv2++) {
        const element = menus[lv2];
        if(element.id === key){
          a = element.children.length * 40;
          if(this.state.subLv3ShowKey){
            for (let lv3 = 0; lv3 < element.children.length; lv3++) {
              const ele3 = element.children[lv3];
              if(ele3.id === this.state.subLv3ShowKey){
                b = ele3.children.length * 40;
              }
            }
          }
        }
      }  
    }
    this.setState({lv2Height:(a+b)+'px',lv3Height:b+'px'});
    this.setState({subShowKey: key});
  }
  closedSubMenu(event,key){
    this.setState({subShowKey: ''});
    this.setState({lv2Height:'0px'});
  }
  openSubLv3Menu(event,key){
    const menus = this.props.data;
    let a = 0, b = 0;
    if(this.state.subShowKey){   
      for (let lv2 = 0; lv2 < menus.length; lv2++) {
        const element = menus[lv2];
        if(element.id === this.state.subShowKey){
          a = element.children.length * 40;
          if(key){
            for (let lv3 = 0; lv3 < element.children.length; lv3++) {
              const ele3 = element.children[lv3];
              if(ele3.id === key){
                b = ele3.children.length * 40;
              }
            }
          }
        }
      }  
    }
    this.setState({lv2Height:(a+b)+'px',lv3Height:b+'px'});
    this.setState({subLv3ShowKey: key})
  }
  closedSubLv3Menu(event,key){
    const menus = this.props.data;
    let a = 0, b = 0;
    if(this.state.subShowKey){   
      for (let lv2 = 0; lv2 < menus.length; lv2++) {
        const element = menus[lv2];
        if(element.id === this.state.subShowKey){
          a = element.children.length * 40;         
        }
      }  
    }
    this.setState({lv2Height:(a+b)+'px',lv3Height:'0px'});
    this.setState({subLv3ShowKey: ''});
  }
  componentDidUpdate(){
    console.log(11);
    //this.getLv2Height();
  }
  // getLv2Height(event){
    
  // }
  // componentDidUpdate(){
  //   this.getLv2Height()
  // }
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
                      <ul className= { this.state.subShowKey === menu.id ? "sub-menu show" : "sub-menu hide"} style={this.state.subShowKey === menu.id ? {height: this.state.lv2Height}: {height:'0px'}}>
                        {
                          childs.map((child,index2) => {
                            if(child.children){
                              let lv3Childs =  child.children;
                              return(
                                <li className="sub-item parent-lv3-item" key={child.id}>
                                    <a className= { this.state.subLv3ShowKey === child.id ? "sub-lv3-title active" : "sub-lv3-title"} href={child.url} key={child.id} onClick={ this.state.subLv3ShowKey === child.id ? (e)=>{this.closedSubLv3Menu(e,child.id.toString())} : (e)=>{this.openSubLv3Menu(e,child.id.toString())}}>{child.text}</a>
                                    <ul className= { this.state.subLv3ShowKey === child.id ? "sub-lv3-menu show" : "sub-lv3-menu hide"} style={this.state.subLv3ShowKey === child.id ? {height: this.state.lv3Height} : {height:'0px'}}>
                                      {
                                         lv3Childs.map((lv3,index3) => {
                                          if(lv3.url){
                                            return (
                                              <li className="sub-lv3-item" key={lv3.id}>
                                                <a className="sub-lv3-li" href={lv3.url}>{lv3.text}</a>
                                              </li>
                                            )
                                          }else{
                                            return (
                                              <li className="sub-lv3-item" key={lv3.id}>{lv3.text}</li>
                                            )
                                          }
                                         })
                                      }
                                    </ul>
                                </li>
                              )
                            }else{
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