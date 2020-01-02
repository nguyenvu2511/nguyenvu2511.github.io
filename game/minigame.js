function validateForm()
{
    // Bước 1: Lấy giá trị của kết quả
    var name = document.getElementById("name").value;
 	// Bước 2: Kiểm tra dữ liệu hợp lệ hay không
    if (name == ""){
     document.getElementById("z-name").innerHTML = ("Bạn chưa nhập kết quả");
    }
    else if (name == "fish")
    {
        document.getElementById("z-name").innerHTML = ("Chính xác :)");
    }
    else{
        document.getElementById("z-name").innerHTML = ("Sai rồi :(");
    }
 
    return false;
}
function validateForm1()
{
    // Bước 1: Lấy giá trị của kết quả
    var name = document.getElementById("name1").value;
 	// Bước 2: Kiểm tra dữ liệu hợp lệ hay không
    if (name == ""){
     document.getElementById("z-name1").innerHTML = ("Bạn chưa nhập kết quả");
    }
    else if (name == "bird")
    {
        document.getElementById("z-name1").innerHTML = ("Chính xác :)");
    }
    else{
        document.getElementById("z-name1").innerHTML = ("Sai rồi :(");
    }
 
    return false;
}
function validateForm2()
{
    // Bước 1: Lấy giá trị của kết quả
    var name = document.getElementById("name2").value;
 	// Bước 2: Kiểm tra dữ liệu hợp lệ hay không
    if (name == ""){
     document.getElementById("z-name2").innerHTML = ("Bạn chưa nhập kết quả");
    }
    else if (name == "car")
    {
        document.getElementById("z-name2").innerHTML = ("Chính xác :)");
    }
    else{
        document.getElementById("z-name2").innerHTML = ("Sai rồi :(");
    }
 
    return false;
}
function validateForm3()
{
    // Bước 1: Lấy giá trị của kết quả
    var name = document.getElementById("name3").value;
 	// Bước 2: Kiểm tra dữ liệu hợp lệ hay không
    if (name == ""){
     document.getElementById("z-name3").innerHTML = ("Bạn chưa nhập kết quả");
    }
    else if (name == "motorbike")
    {
        document.getElementById("z-name3").innerHTML = ("Chính xác :)");
    }
    else{
        document.getElementById("z-name3").innerHTML = ("Sai rồi :(");
    }
 
    return false;
}
function validateForm4()
{
    // Bước 1: Lấy giá trị của kết quả
    var name = document.getElementById("name4").value;
 	// Bước 2: Kiểm tra dữ liệu hợp lệ hay không
    if (name == ""){
     document.getElementById("z-name4").innerHTML = ("Bạn chưa nhập kết quả");
    }
    else if (name == "tokuda")
    {
        document.getElementById("z-name4").innerHTML = ("Chính xác :)");
    }
    else{
        document.getElementById("z-name4").innerHTML = ("Sai rồi :(");
    }
 
    return false;
}
function changeText(id) {
  id.innerHTML = "THÍCH THÌ BÁN";	
}
