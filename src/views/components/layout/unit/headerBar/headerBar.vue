<template>
    <el-row class="header-bar" type="flex" align="middle">
        <el-col :span="12" align="left">
            <!-- <icon name="logo" width="77" color="#fff"/> -->
        </el-col>
        <el-col class="user-info" :span="12" align="right">
            <span class="user-photo"></span>
            <span>欢迎，{{ user.name || '' }}</span>
            <span class="handle-btns">
                <el-button @click="userLogout" type="text" class="text-normal">退出</el-button>
            </span>
        </el-col>
    </el-row>
</template>

<style src="./headerBar.scss" lang="scss" scoped></style>
