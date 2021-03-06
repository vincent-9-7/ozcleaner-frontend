import React  from 'react'
import axios from 'axios'
import {getWebApi,getBackendApi1,getBackendApi2,getRegRoomApi,
  getUserListApi} from '../../../api/practice/Dongyu/DongyuApi'

/* eslint-disable no-unused-expressions */

export const getImage = () => axios.get(getWebApi())
export const getName = () => axios.get(getBackendApi1())
export const getBookName = () => axios.get(getBackendApi2())
export const getUserData = () => axios.get(getUserListApi())
export const getRegRoomData = () => axios.get(getRegRoomApi())
// export const getEndRoomrData = () => axios.get(getEndRoomApi())


class Message extends React.Component {
  constructor(){
    super()
    this.state={
      webMessage:'',
      backEndNameMessage:'',
      backEndBookMessage:'',
      // dbMessage:'',
      // dbAddress:'',
      dbRegRoom:'',
      dbEndRoom:'',
      dbTaskId:'',
      errorMessage:'None Error'
    }
  }

  componentDidMount(){
    this.getImageApi()
    this.getUserName()
    this.getBookName()
    // this.getUserDBInfo()
    this.getRegDBInfo()
    // this.getEndDBInfo()
  }
  
  // 1.直接从网络api获取信息
  getImageApi = async() =>{
    try{
      const response = await (getImage())
      // console.log(response)
      const {data:{message}} = response
      // console.log(message)
      this.setState({
            webMessage:message
      })
    }catch{(e) => {
        console.error(e)
    }}
  }

  // 2.从后端api GET
  getUserName = async() => {
    const response = await (getName())
    const {status} = response
    // console.log(response.data)

    if(status===200)
    {
      const {data} = response
      this.setState({
        backEndNameMessage:data
      })
    }
  }

  // 3.从后端api GET
  getBookName = async() => {
    const response = await (getBookName())
    const {status} = response
    // console.log(response.data)
  
    if(status===200)
    {
      const {data} = response
      this.setState({
        backEndBookMessage:data
      })
    }
  }

  // 4.从MongoDB GET User List by id
  // getUserDBInfo = async() => {
  //   const response = await (getUserData())
  //   const {status} = response

  //   console.log(response)
  //   console.log(response.data[0]) // 全部信息
  //   console.log(response.data[0].email) // 取回email
  //   console.log(response.data[0].name) // 取回name
  //   console.log(response.data[0].address) // 取回address

  //   if(status===200)
  //   {
  //     const {data} = response
  //     this.setState({
  //       // dbMessage:data[0].email //取回email
  //       // dbMessage:JSON.stringify(data[0]) // 如果取回整个对象需要加上 JSON.stringify(),否则报错
  //       dbMessage:data[0],// 取回整个对象，在下面render先转化成数组在用map遍历
  //       dbAddress:data[0].address // 取回address对象，下面转化成数组在map遍历
  //     })
  //   }
  // }

  // 5.从MongoDB get Regular room list by task id
  getRegDBInfo = async() => {
    const response = await (getRegRoomData())
    const {status} = response
    // console.log(response)
    console.log(response.data[0]) // 全部信息
    if(status===200)
    {
      const {data} = response
      this.setState({
        dbRegRoom:data[0] // 取回整个对象，在下面render先转化成数组在用map遍历
      })
    }
  }

  // 6.从MongoDB get End of room list by task id
  // getEndDBInfo = async() => {
  //   const response = await (getEndRoomrData())
  //   const {status} = response
  //   // console.log(response)
  //   console.log(response.data[0]) // 全部信息
  //   if(status===200)
  //   {
  //     const {data} = response
  //     this.setState({
  //       dbEndRoom:data[0] // 取回整个对象，在下面render先转化成数组在用map遍历
  //     })
  //   }
  // }

    // 7.用前端信息搜索DB数据库
    submitHandler = (e) => {
      e.preventDefault()
      const {dbTaskId} = this.state
  
      axios.get(`http://localhost:8000/endOfLease/task/${dbTaskId}`)
      .then(response=>{
          console.log(response)
          const {status} = response
          if(status===200) {
            const {data} = response
            if(typeof data === 'string') { // 判断后端传回的ctx.body是字符串还是object，如果是字符串必为error
              console.log(data)
              this.setState({
                dbEndRoom:{"":""},
                errorMessage:data
              })
            }else{
              this.setState({
                dbEndRoom:data[0], // 取回整个对象，在下面render先转化成数组在用map遍历
                errorMessage:"None error" // 恢复没error状态
              })
            }
          }
      })
      // .catch(error => { // 因为定义了ctx.status = 404;所以直接会走到这里，不执行上面的then
      //     console.log(error)
      //     console.log('1')
      //     this.setState({
      //       dbRegRoom:{"DATA":"Not found"}
      //     })
      // })
  
    }
  
    changeHandler = (e) => {
      this.setState({
        dbTaskId : e.target.value
      })
    }


  render(){
    const{webMessage,backEndNameMessage,backEndBookMessage} = this.state
    // 1. 取回User List
    // const{dbMessage} = this.state
    // const result = Object.entries(dbMessage)// 先把object转化成Array数组，下面才可以map遍历
    // result.shift() // 移除第一个address对象，因为这里面是Object，无法直接打印
    // // console.log(result) // 此时result是移除address后的数组了

    // const{dbAddress} = this.state // address因为有嵌套，放在这里单独打印
    // const address = Object.entries(dbAddress) // 先把object转化成Array数组，下面才可以map遍历
    // // console.log(address)

    // 2. 取回Reg Room List
    const{dbRegRoom} = this.state
    const regRoomList = Object.entries(dbRegRoom)// 先把object转化成Array数组，下面才可以map遍历
    regRoomList.shift() // 现在address第一项是object先删掉
    regRoomList.shift() // 现在address第二项是object先删掉
    console.log(regRoomList)

    // 3. 取回End Leese List
    const{dbEndRoom} = this.state
    const endRoomList = Object.entries(dbEndRoom)// 先把object转化成Array数组，下面才可以map遍历
    endRoomList.shift() // 现在address第一项是object先删掉
    endRoomList.shift() // 现在address第二项是object先删掉
    // console.log(endRoomList)

    // 4.取回error报错
    const {errorMessage} = this.state

    return(
      <>
        <div className="dongyu-page__image-api">
          <h2>1. Get the image from api:</h2>
          {/* <img src={webMessage} alt="dog" /> */}
          {webMessage}
        </div>

        <div className="dongyu-page__backend-message">
          <h2>2. Get the message from back-end:</h2>
          <br />
          <span>
            Message1:
            {backEndNameMessage}
          </span>
          <br />
          <span>
            Message2:
            {backEndBookMessage[0]}
            ,
            {backEndBookMessage[1]}
            ,
            {backEndBookMessage[2]}
          </span>
        </div>

        {/* <div className="dongyu-page__backend-message">
          <h2>3.Get User List Table By User Id (From MongoDB):</h2>
          <ul>
            {result.map((item)=>(
              // Keys do not have to be unique globally. 
              // They just need to be unique across sibling elements.
              <li key={item[0]}> 
                {item[0]} 
                {' : '}
                {item[1]}
              </li>
            ))}
          </ul>

          <ul>
            {address.map((item)=>(
              <li key={item[0]}>
                {item[0]}
                {' : '}
                {item[1]}
              </li>
            ))}
          </ul>
        </div> */}

        <div className="dongyu-page__backend-message get-reg-list">
          <h2>4.Get Reg of Lease Order List Table By Task Id (From MongoDB):</h2>
          <ul>
            {regRoomList.map((item)=>(
              <li key={item[0]}>
                {item[0]}
                {' : '}
                {item[1]}
              </li>
            ))}
          </ul>
        </div>

        <div className="dongyu-page__backend-message get-end-list">
          <h2>5.1 Get End of lease Order List Table By Task Id (From MongoDB):</h2>
          <ul>
            {endRoomList.map((item)=>(
              <li key={item[0]}>
                {item[0]}
                {' : '}
                {item[1]}
              </li>
            ))}
          </ul>
          <h3>
            Error? 
            {' '}
            {errorMessage}
          </h3>
        </div>
      
        <div className="dongyu-page__backend-message send-post">
          <h2>5.2 Search End of lease list by input id:</h2>

          <form onSubmit={this.submitHandler}>
            <p>Insert your Search task id:</p>
            <input
              type="number"
              name="dbTaskId"
              // value={dbTaskId}
              onChange={this.changeHandler}
            />
            <button type="submit">Submit</button>
          </form>
        </div> 
      </>
    )
  }
}

export default Message

