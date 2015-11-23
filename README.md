# fastdate
js开发的一个日期开源项目，文件短小、功能齐全、简便好用
    //实化对象，参数true表示输出日志
    var date = new FastDate(true);
    
    //获取当前日期，可以指定日期格式
    document.write("自定义格式获取当前日期：" + date.formatCurrentDate('yyyy-MM-dd HH:mm:ss') + "</br>");
    document.write("=======================================================" + "</br>");
    
    
    //默认为yyyy-MM-dd HH:mm:ss格式
    document.write("无参数获取当前日期：" + date.formatCurrentDate() + "</br>");
    document.write("=======================================================" + "</br>");
    
    //另外一种方式，CurentTime返回的是yyyy-MM-dd HH:mm:ss
    document.write("CurentTime方法获取当前日期：" + date.formatCurrentDate() + "</br>");
    document.write("=======================================================" + "</br>");
    //获取当前年份，可以指定格式
    document.write("当前年份：" + date.getCurrentYear() + "</br>");
    document.write("当前年份指定格式：" + date.getCurrentYear('yy') + "</br>");
    document.write("=======================================================" + "</br>");
    
    //获取当前月份，可以指定格式
    document.write("当前月份：" + date.getCurrentMonth() + "</br>");
    document.write("当前月份指定格式：" + date.getCurrentMonth('MM') + "</br>");
    document.write("=======================================================" + "</br>");
    
    
    //获取当前天，可以指定格式
    document.write("当前天：" + date.getCurrentDay() + "</br>");
    document.write("当前天指定格式：" + date.getCurrentDay('dd') + "</br>");
    document.write("=======================================================" + "</br>");
    //获取当前小时，可以指定格式
    document.write("当前小时：" + date.getCurrentHour() + "</br>");
    document.write("当前小时指定格式：" + date.getCurrentHour('HH') + "</br>");
    document.write("=======================================================" + "</br>");
    //获取当前分钟，可以指定格式
    document.write("当前分钟：" + date.getCurrentMinute() + "</br>");
    document.write("当前分钟指定格式：" + date.getCurrentMinute('mm') + "</br>");
    document.write("=======================================================" + "</br>");
    //获取当前秒，可以指定格式
    document.write("当前秒：" + date.getCurrentSecond() + "</br>");
    document.write("当前秒指定格式：" + date.getCurrentSecond('ss') + "</br>");
    document.write("=======================================================" + "</br>");
    //获取当前是星期几
    document.write("今天是星期：" + date.getCurrentWeek() + "</br>");
    ////////////////////////////////////////////////////////////////////////////////////////////////////
    //获取当前日期在当前年第几周函数封装，例如2013-08-15 是当前年的第32周
    ////////////////////////////////////////////////////////////////////////////////////////////////////
    document.write("=======================================================" + "</br>");
    //获取当前日期在当前年第几周
    document.write("获取当前日期在当前年第几周：" + date.WeekNumOfYear() + "</br>");
    /**
     * 获取本月的最大天数
     * @param  {[type]} year  [description]
     * @param  {[type]} month [description]
     * @return {[type]}       [description]
     */
    document.write("=======================================================" + "</br>");
    //获取本月的最大天数
    document.write("获取本月的最大天数：" + date.getMaxDayInMonth(2015, 2) + "</br>");
    /**
     * 获取本月的第一天
     * @param  {[type]} year  [description]
     * @param  {[type]} month [description]
     * @return {[type]}       [description]
     */
    document.write("=======================================================" + "</br>");
    //获取本月的第一天
    document.write("获取本月的第一天:" + date.getFirstDayInMonth(2015, 2) + "</br>");
    //+---------------------------------------------------
    //| 取得日期数据信息
    //| 参数 interval 表示数据类型
    //| y 年 m月 d日 w星期 ww周 h时 n分 s秒
    //+---------------------------------------------------
    //
    document.write("=======================================================" + "</br>");
    //取得日期数据信息
    document.write("取得日期数据信息:" + date.DatePart('y') + "</br>");
    document.write("取得日期数据信息:" + date.DatePart('m') + "</br>");
    document.write("取得日期数据信息:" + date.DatePart('d') + "</br>");
    document.write("取得日期数据信息:" + date.DatePart('w') + "</br>");
    document.write("=======================================================" + "</br>");
    document.write("检测日期是否有效:" + date.CheckDateTime('2015-02-12 12:12:12') + "</br>");
    /**
     * 获取当前日期的前后N天日期的方法
     * @param {[type]} AddDayCount [description]
     * @param {[type]} targetFormat [结构格式，默认:yyyy-MM-dd HH:mm:ss]
     */
    document.write("=======================================================" + "</br>");
    //取得日期数据信息
    document.write("获取当前日期的前后N天日期的方法:" + date.getDayDiff(2) + "</br>");
    /**
     * 获取当前日志的前后N月的方法
     * @param  {[type]} addMonth     [description]
     * @param  {[type]} targetFormat [description]
     * @return {[type]}              [description]
     */
     document.write("=======================================================" + "</br>");
    //取得日期数据信息
    document.write("获取当前日志的前后N月的方法:" + date.getMonthDiff(2) + "</br>");
