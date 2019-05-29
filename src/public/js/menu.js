/**
 * 配置菜单参数
 */
const menu = [
    {id:'F001',text:'首页',url:'/home'},
    {id:'F002',text:'系统',url:'#',
      children:[
        {id:'F2-001',text:'子菜单1',url:'/ss'},
        {id:'F2-002',text:'子菜单2',url:'/ss'},
        {id:'F2-003',text:'子菜单3',url:'/ss'},
        {id:'F2-004',text:'子菜单4',url:'/ss'}
      ]
    },
    {id:'F003',text:'管理',url:'#',
      children:[
        {id:'F3-001',text:'子菜单1',url:'/ss'},
        {id:'F3-002',text:'子菜单2',url:'/ss'},
        {id:'F3-003',text:'子菜单3',url:'/ss'},
        {id:'F3-004',text:'子菜单4',url:'/ss'},
        {id:'F3-005',text:'子菜单5',url:'/ss'},
        {id:'F3-006',text:'子菜单6',url:'/ss'},
        {id:'F3-007',text:'子菜单7',url:'/ss'},
        {id:'F3-008',text:'子菜单8',url:'/ss'},
        {id:'F3-009',text:'子菜单9',url:'/ss'}
      ]
    },
    {id:'F004',text:'人员',url:'/'},
    {id:'F005',text:'角色',url:'#',
      children:[
        {id:'F5-001',text:'子菜单1',url:'/ss'},
        {id:'F5-002',text:'子菜单2',url:'/ss'},
        {id:'F5-003',text:'子菜单3',url:'/ss'},
        {id:'F5-004',text:'子菜单4',url:'/ss'}
      ]
    },
    {id:'F006',text:'关于',url:'#',
      children:[
        {id:'F6-001',text:'子菜单1',url:'/ss'},
        {id:'F6-002',text:'子菜单2',url:'/ss'},
        {id:'F6-003',text:'子菜单3',url:'/ss'},
        {id:'F6-004',text:'子菜单4',url:'/ss'}
      ]
    },
    {id:'F007',text:'登录',url:'/'},
    {id:'F008',text:'注册',url:'/'}
]

export default menu