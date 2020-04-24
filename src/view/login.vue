<template>
  <div class="login">
    <div class="loginForm">
        <h3>华夏天信-AI智能摄像头系统</h3>
        <el-form >
          <el-form-item label="用户名" label-width="60px" >
            <el-input style="width:220px" ></el-input>
          </el-form-item>
          <el-form-item label="密码"  label-width="60px" >
            <el-input style="width:220px"  ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          </el-form-item>
        </el-form>

    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.login{
  width: 100%;
  height: 100%;
  background-image:url("../assets/images/login-bg.jpg") ;
  display: flex;
  justify-content: center;
  align-items: center;
  .loginForm{
    width: 23%;
    height: 28%;
    box-sizing: border-box;
    padding: 2%;
    background-color: #fefefe;
    border-radius: 3px;
 }
}
</style>