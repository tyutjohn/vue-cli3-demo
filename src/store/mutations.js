/*
 * @Author: johnwang
 * @since: 2019-11-02 16:21:52
 * @lastTime: 2019-11-02 16:28:44
 * @LastAuthor: Do not edit
 * @Github: https://github.com/tyutjohn
 */
export const userStatus=(state,user)=>{
    if(user){
        state.currentUser=user
        state.isLogin=true
    }else if(user==null){
        sessionStorage.setItem("userName",null);
        sessionStorage.setItem("userToken","");
        state.currentUser=null;
        state.isLogin=false;
        state.token="";
    }
}