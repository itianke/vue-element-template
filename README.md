## 本工程使用Yarn替代Npm，执行之前须先确认已安装Yarn
### 检测本机是否有安装
```
yarn -version
```
### 未安装执行
```
cnpm install yarn -g
```

### 其他语法跟npm基本一致
## [部署项目]
```
yarn install
```

```
yarn run dev
```

# svg用法
## 把新的svg放在asserts/svg目录下，再执行以下命令
```
yarn svg
```
## 使用方式
```
<icon icon="svgName" width="100" color="color">
```