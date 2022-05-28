<template>
    <div id="login" class="min-w-screen min-h-screen bg-sky-100 overflow-hidden">
        <div class="text-5xl text-center relative top-28">
            舒雅星系后台
        </div>
        <div class="login-box">
            <div class="mt-10 login-title text-333-20">登录</div>
            <el-form :model="ruleForm" :rules="rules" ref="ruleFormRef" label-width="100px" class="mt-10"
                hide-required-asterisk>
                <el-form-item label="账号：" prop="userName">
                    <el-input v-model="ruleForm.userName" placeholder="请输入账号"></el-input>
                </el-form-item>
                <el-form-item label="密码：" prop="password">
                    <el-input type="password" v-model="ruleForm.password" placeholder="请输入密码" @keydown.enter="onLogin(ruleFormRef)"></el-input>
                </el-form-item>
                <div class="foot-btn">
                    <el-button type="primary" @click="onLogin(ruleFormRef)">登录</el-button>
                    <!-- <router-link to="/register">
                        <el-button>注册</el-button>
                    </router-link> -->
                </div>
            </el-form>
        </div>
    </div>
</template>

<script lang='ts' setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import type { FormInstance, FormRules } from 'element-plus'
import { login } from '@/api/user/login'

const router = useRouter()
const store = useStore()
const ruleFormRef = ref<FormInstance>()
let ruleForm = reactive({
    userName: '',
    password: '',
});

let rules = {
    userName: [
        { required: true, message: '请输入账号', trigger: 'blur' },
        { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' },
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 4, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' },
    ],
};
let onLogin = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            store.dispatch('user/login', ruleForm).then((res: any) => {
                router.push('/')
            }).catch((error: any) => {
                console.log(error);
            })
        } else {
            console.log('error submit!', fields)
        }
    })
};

</script>

<style lang='scss'>
#login {
    // background-image: url("../../assets/login/login_bg.jpeg");
    background-color:azure;
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