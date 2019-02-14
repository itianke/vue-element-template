<template>
    <div class="login-view">
        <div class="login">

            <div class="title">
            </div>

            <div class="login-content" v-loading="isLoading">
                <el-form
                    label-position="right"
                    label-width="0px"
                    :model="form"
                    :rules="rules"
                    :ref="formName">

                    <el-form-item
                        class="icon-item"
                        prop="username">
                        <el-input
                            v-model.trim="form.username"
                            maxlength="24"
                            placeholder="请输入登录账号"
                            @keyup.enter.native="submit">
                        </el-input>
                    </el-form-item>

                    <el-form-item
                        class="icon-item mt-40"
                        prop="password">
                        <el-input
                            v-model.trim="form.password"
                            type="password"
                            maxlength="24"
                            @keyup.enter.native="submit"
                            placeholder="请输入密码">
                        </el-input>
                    </el-form-item>
                </el-form>
                <el-button type="primary" @click="submit" class="btn-login mt-20">登&nbsp;&nbsp;录</el-button>
            </div>
            <div class="support">技术支持：智慧建设科技有限公司</div>
        </div>
    </div>
</template>

<style src="./login.scss" lang="scss" scoped></style>
