# 项目编译与打包   

1. cd JDFinance
2. yarn （npm install）
3. yarn run dev
4. yarn run build（压缩打包）   

## CSS模块化   
1. 设计原则   
    a.可复用、继承、完整
    b.周期性迭代  
    
2. 设计方法
    a.先整体后部分再颗粒化
    b.先抽象再具体
   
## JS组件化
1. 设计原则   
    a.高内聚低耦合 
    b.周期性迭代  
    
2. 设计方法
    a.先整体后部分再颗粒化
    b.尽可能抽象
   
## 自适应   
1. 基本概念
    a.CSS像素、设备像素(物理像素)、逻辑像素、设备像素比   
    ```    
        CSS像素=逻辑像素
        设备像素：硬件上的物理像素点，即1个像素在硬件上到底是多少
        设备像素比：物理像素  /  CSS像素
    ```   
    b.viewport
    c.rem
2. 工作原理  
    a.利用viewport和设备像素比调整基准像素
    b.利用px2rem自动转换css单位