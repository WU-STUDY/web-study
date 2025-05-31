// alert('table.js');检查js文件是否引入成功

//新增数据函数
function addRow(){
    //先获取表格标签的节点
    var table = document.getElementById('table');
    // console.log(table);//利用工作台，检查是否获取成功

    //先获取当前表格的长度--获取插入的位置
    var length = table.rows.length;
    // console.log(length);

    //插入行节点
    var newRow = table.insertRow(length);
    // console.log(newRow);

    //插入列节点对象
    var namecol = newRow.insertCell(0);
    var phonecol = newRow.insertCell(1);
    var actioncol = newRow.insertCell(2);
    // console.log(newRow);

    //修改节点文本内容
    namecol.innerHTML = '未命名';
    phonecol.innerHTML = '无联系方式';
    actioncol.innerHTML = '<button onclick="editRow(this)">编辑</button><button onclick="deleteRow(this)">删除</button>';

} 

///删除数据函数
function deleteRow(button){
    // console.log(button);
    var row = button.parentNode.parentNode;
    // console.log(row);
    row.parentNode.removeChild(row);
}

// 编辑数据函数
function editRow(button){
    // console.log(button);
    var row = button.parentNode.parentNode;
    var name = row.cells[0];
    var phone = row.cells[1];

    //通过弹窗,获取用户的输入数据
    var inputName = prompt("请输入名字：");
    var inputPhone = prompt("请输入联系方式：");

    //赋值
    name.innerHTML = inputName;
    phone.innerHTML = inputPhone;


}