<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>乐淘 - 后台管理</title>
    <?php include "./common/css.html"?>
</head>
<body>
    
    <!-- 侧边栏 -->
    <?php include "./common/aside.html"?>
    <!-- 主体 -->
    <div class="main">
        <div class="container-fluid">
            <!-- 头部 -->
            <?php include "./common/header.html"?>
            <div class="body user">
                <!-- 面包屑 -->
                <ol class="breadcrumb">
                    <li><a href="javascript:;">用户管理</a></li>
                    <li class="active">用户添加</li>
                </ol>
                <div class="user-add">
                    <form action="" class="form-horizontal col-xs-offset-2">
                        <div class="form-group">
                            <label for="" class="col-xs-3 control-label">姓名</label>
                            <div class="col-xs-4">
                                <input type="text" class="form-control input-sm" placeholder="用户名称">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="" class="col-xs-3 control-label">密码</label>
                            <div class="col-xs-4">
                                <input type="password" class="form-control input-sm">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="" class="col-xs-3 control-label">入职时间</label>
                            <div class="col-xs-4">
                                <input type="text" class="form-control input-sm">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="" class="col-xs-3 control-label">类型</label>
                            <div class="col-xs-2">
                                <select name="" class="form-control input-sm">
                                    <option value="">普通</option>
                                    <option value="">管理员</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="" class="col-xs-3 control-label">性别</label>
                            <div class="col-xs-4">
                                <label class="radio-inline">
                                    <input type="radio" checked> 男
                                </label>
                                <label class="radio-inline">
                                    <input type="radio"> 女
                                </label>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-xs-7">
                                <a href="javascript:;" class="btn btn-success btn-sm pull-right"> 添 加 </a>
                            </div>                          
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <?php include "./common/script.html"?>
</body>
</html>