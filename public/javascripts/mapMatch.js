/**
 * Created by Cici-t on 8/7/16.
 */
function show(city) {
//    var city = prompt("Keyword Search", "food/city/momentShare");
//    var img = document.createElement('img');
    var name = document.createElement('title');
    name.innerHTML = city;
    document.getElementById('popup').style.display='block';
    switch (city){
        case 'Xinjiang':
            document.getElementById('pic').src = "/images/xinjiang.png";
            break;
        case 'Tibet':
            document.getElementById('pic').src = "/images/tibet.png";
            break;
        case 'Yunnan':
            document.getElementById('pic').src = "/images/yunnan.png";
            break;
        case 'InnerMongolia':
            document.getElementById('pic').src = "/images/innerMongolia.png";
            break;
        case 'Qinghai':
            document.getElementById('pic').src = "/images/qinghai.png";
            break;
        case 'Gansu':
            document.getElementById('pic').src = "/images/gansu.png";
            break;
        case 'Heilongjiang':
            document.getElementById('pic').src = "/images/heilongjiang.png";
            break;
        case 'Jilin':
            document.getElementById('pic').src = "/images/jilin.png";
            break;
        case 'Liaoning':
            document.getElementById('pic').src = "/images/liaoning.png";
            break;
        case 'Beijing':
            document.getElementById('pic').src = "/images/beijing.png";
            break;
        case 'Tianjin':
            document.getElementById('pic').src = "/images/tianjin.png";
            break;
        case 'Hebei':
            document.getElementById('pic').src = "/images/hebei.png";
            break;
        case 'Shandong':
            document.getElementById('pic').src = "/images/shandong.png";
            break;
        case 'Jiangsu':
            document.getElementById('pic').src = "/images/jiangsu.png";
            break;
        case 'Shanghai':
            document.getElementById('pic').src = "/images/shanghai.png";
            break;
        case 'Anhui':
            document.getElementById('pic').src = "/images/anhui.png";
            break;
        case 'Zhejiang':
            document.getElementById('pic').src = "/images/zhejiang.png";
            break;
        case 'Fujian':
            document.getElementById('pic').src = "/images/fujian.png";
            break;
        case 'Canton':
            document.getElementById('pic').src = "/images/canton.png";
            break;
        case 'Hongkong':
            document.getElementById('pic').src = "/images/hongkong.png";
            break;
        case 'Guangxi':
            document.getElementById('pic').src = "/images/guangxi.png";
            break;
        case 'Guizhou':
            document.getElementById('pic').src = "/images/guizhou.png";
            break;
        case 'Hunan':
            document.getElementById('pic').src = "/images/hunan.png";
            break;
        case 'Hubei':
            document.getElementById('pic').src = "/images/hubei.png";
            break;
        case 'Henan':
            document.getElementById('pic').src = "/images/henan.png";
            break;
        case 'Shanxi3':
            document.getElementById('pic').src = "/images/shanxi.png";
            break;
        case 'shanxi1':
            document.getElementById('pic').src = "/images/shan_xi.png";
            break;
        case 'Hainan':
            document.getElementById('pic').src = "/images/hainan.png";
            break;
        case 'Chongqing':
            document.getElementById('pic').src = "/images/chongqing.png";
            break;
        case 'Szechuan':
            document.getElementById('pic').src = "/images/szechuan.png";
            break;
        case 'Ningxia':
            document.getElementById('pic').src = "/images/ningxia.png";
            break;
        case'Jiangxi':
            document.getElementById('pic').src = "/images/jiangxi.png";
            break;
        case 'Taiwan':
            document.getElementById('pic').src = "/images/taiwan.png";
            break;
     
        default: break;

    }
    document.getElementById('close').style.display='block';

    // function print the map
    // print();
}
function showClose() {
    document.getElementById('popup').style.display='none';
    document.getElementById('close').style.display='none';

}