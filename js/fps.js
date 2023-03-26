if (window.localStorage.getItem("fpson") == undefined || window.localStorage.getItem("fpson") == "1") {
    var rAF = function () {
        return (
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 1000 / 60);
            }
        );
    }();
    var frame = 0;
    var allFrameCount = 0;
    var lastTime = Date.now();
    var lastFameTime = Date.now();
    var loop = function () {
        var now = Date.now();
        var fs = (now - lastFameTime);
        var fps = Math.round(1000 / fs);

        lastFameTime = now;
        // ���� 0���ڶ����Ŀ�ͷ����β��¼��ֵ�Ĳ�ֵ��� FPS
        allFrameCount++;
        frame++;

        if (now > 1000 + lastTime) {
            var fps = Math.round((frame * 1000) / (now - lastTime));
            if (fps <= 5) {
                var kd = `<span style="color:#bd0000">����ppt??</span>`
            } else if (fps <= 15) {
                var kd = `<span style="color:red">�羺��֡��??</span>`
            } else if (fps <= 25) {
                var kd = `<span style="color:orange">�е�����??</span>`
            } else if (fps < 35) {
                var kd = `<span style="color:#9338e6">��̫����??</span>`
            } else if (fps <= 45) {
                var kd = `<span style="color:#08b7e4">������Ŷ??</span>`
            } else {
                var kd = `<span style="color:#39c5bb">ʮ������??</span>`
            }
            document.getElementById("fps").innerHTML = `FPS:${fps} ${kd}`;
            frame = 0;
            lastTime = now;
        };

        rAF(loop);
    }

    loop();
} else {
    document.getElementById("fps").style = "display:none!important"
}