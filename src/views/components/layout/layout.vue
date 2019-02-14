<template>
    <el-container>
        <el-header>
            <nav-bar></nav-bar>
            <header-bar></header-bar>
        </el-header>
        <el-container class="app-wrapper">
            <el-aside class="sidebar-container" :class="{ 'hide-sidebar':sidebar.opened }">
                <sidebar></sidebar>
            </el-aside>
            <el-main>
                <main-content></main-content>
            </el-main>
        </el-container>
    </el-container>
</template>

<style src="./layout.scss" lang="scss" scoped></style>
