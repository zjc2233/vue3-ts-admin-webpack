<template>
    <div
        id="login"
        class="min-w-screen min-h-screen bg-sky-100 overflow-hidden"
    >
        <div class="login-box">
            <div class="mt-10 login-title text-333-20">登录</div>
            <el-form
                :model="ruleForm"
                :rules="rules"
                ref="ruleForm"
                label-width="100px"
                class="mt-10"
                hide-required-asterisk
            >
                <el-form-item label="账号：" prop="name">
                    <el-input
                        v-model="ruleForm.name"
                        placeholder="请输入账号"
                    ></el-input>
                </el-form-item>
                <el-form-item label="密码：" prop="password">
                    <el-input
                        type="password"
                        v-model="ruleForm.password"
                        placeholder="请输入密码"
                    ></el-input>
                </el-form-item>
                <div class="foot-btn">
                    <el-button type="primary" @click="login">登录</el-button>
                    <router-link to="/register">
                        <el-button>注册</el-button>
                    </router-link>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script lang='ts' setup>
import { useRouter } from 'vue-router'
const router = useRouter()
let ruleForm = {
    name: '',
    password: '',
};

let rules = {
    name: [
        { required: true, message: '请输入账号', trigger: 'blur' },
        { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' },
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' },
    ],
};
let login = (e: MouseEvent) => {
    router.push('/')
};
</script>

<style lang='scss'>
#login {
    background-image: url("../../assets/login/login_bg.jpeg");
    background-size: cover;
    position: relative;
    .login-box {
        position: absolute;
        top: 50%;
        left: 75%;
        transform: translate(-50%, -50%);
        width: 400px;
        height: 300px;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: darkgrey 3px 3px 3px 3px;
        .login-title {
            text-align: center;
        }
        .el-input {
            width: 85%;
        }
        .foot-btn {
            display: flex;
            justify-content: space-around;
            padding: 0 80px;
        }
    }
}
</style>