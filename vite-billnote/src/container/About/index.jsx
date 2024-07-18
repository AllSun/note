
import Header from "../../components/Header"
export default function About() {
    return (<div>
      <Header title="项目总结" />
      <b>这个项目存在的问题及不足：</b>
      <p>1.vite脚手架配置别名没完成</p>
      <p>2.分页逻辑未完成</p>
      <p>3.上拉刷新，下拉加载需要自定义方法调用antd-mobile组件才可以实现，目前只实现了简单的下拉刷新</p>
      <p>4.注册界面的验证码来回点击登录和注册的时候，验证码会消失</p>
      <p>5.图标未完成</p>
      <p>6.vite脚手架配置信息，如何配怎么配，结合插件官网文档有时候也找不到</p>
      <p>7.样式处理薄弱、使用useRef()无法获取antd-mobile组件高度，组件阻挡问题，加强flex布局学习</p>
      <p>8.图片上传图片set之后地址可以，也上传到服务器，但是头像无更新，怀疑跨域问题</p>
      <b>提升之处：</b>
      <p>可结合redux做数据集处理，后端只调用列表功能，前端做逻辑处理，可能缺点：依靠B端处理，响应速度是否会更慢，优点：对高并发场景减少服务器资源占用？</p>
    </div>)
  }