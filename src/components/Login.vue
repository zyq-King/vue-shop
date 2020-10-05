//<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像区 -->
      <div class="avatar_box">
        <img src="../assets/logo.png" alt="" srcset="" />
      </div>
      <!-- 登录表单区 -->
      <!-- ref获取到表单的引用对象  this.$refs.loginFormRef进行使用 -->
      <el-form
        ref="loginFormRef"
        :model="loginForm"
        :rules="loginFormrules"
        label-width="0px"
        class="login_form"
      >
        <!-- 用户信息 -->
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            prefix-icon="iconfont icon-user"
          ></el-input>
        </el-form-item>
        <!-- 用户密码 -->
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            prefix-icon="iconfont icon-3702mima"
            type="password"
          ></el-input>
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="resetLoginFrom">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: "admin",
        password: "123456",
      },
      // 登录验证规则
      loginFormrules: {
        username: [
          { required: true, message: "请输入登录名称", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入用户密码", trigger: "blur" },
          {
            min: 6,
            max: 15,
            message: "长度在 6 到 15 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    // 重置按钮
    resetLoginFrom() {
      // console.log(this)
      // 拿到this里面的$refs里的定义好的loginFormRef再调用resetFields方法
      this.$refs.loginFormRef.resetFields();
    },
    login() {
      // 表单验证，validate回调一个参数boolean类型
      this.$refs.loginFormRef.validate(async (valid) => {
        // console.log(valid)
        // 先验证，不通过就阻止请求
        if (!valid) return;
        // 将返回值直接解析成{data : res}
        const { data: res } = await this.$http.post("login", this.loginForm);
        // console.log(res)
        if (res.meta.status !== 200) return this.$message.error("登录失败");
        this.$message.success("登录成功");
        // console.log(res)
        // 1.将token 保存到客户端的sessionStorage中，token为登录的合格证每次访问时都要有
        window.sessionStorage.setItem("token", res.data.token);
        // 2.跳转
        this.$router.push("/home");
      });
    },
  },
};
</script>

<style lang="less" scoped>
.login_container {
  background-color: #2b4b6b;
  height: 100%;
}
.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  .avatar_box {
    height: 130px;
    width: 130px;
    border: 1px solid #eeeeee;
    border-radius: 50%;
    padding: 10px;
    // 加阴影
    box-shadow: 0 0 10px #dddddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    img {
      height: 100%;
      width: 100%;
      border-radius: 50%;
      background-color: #eeeeee;
    }
  }
}
.login_form {
  position: absolute;
  width: 100%;
  bottom: 0;
  padding: 0 20px;
  box-sizing: border-box;
}
.btns {
  display: flex;
  justify-content: flex-end;
}
</style>
