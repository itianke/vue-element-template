<template>
    <!-- :collapse="sidebar.opened" -->
    <el-menu
        mode="vertical"
        unique-opened
        :default-active="$route.path"
        :collapse="sidebar.opened"
        background-color="#fff"
        text-color="#333"
        active-text-color="#FBBE35">
        <sidebar-item :routes="routes"></sidebar-item>
    </el-menu>
</template>

<style src="./sidebar.scss" lang="scss" scoped></style>
