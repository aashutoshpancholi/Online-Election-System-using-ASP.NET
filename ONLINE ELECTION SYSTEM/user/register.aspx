<%@ Page Language="VB" AutoEventWireup="false" CodeFile="register.aspx.vb" Inherits="user_register" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <title>Welcome Login Form Flat Responsive Widget Template :: w3layouts</title>
<!-- for-mobile-apps -->
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="keywords" content="Welcome Login Form Responsive web template, Bootstrap Web Templates, Flat Web Templates, Android Compatible web template, 
Smartphone Compatible web template, free webdesigns for Nokia, Samsung, LG, SonyEricsson, Motorola web design" />
<script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false);
		function hideURLbar(){ window.scrollTo(0,1); } </script>
<!-- //for-mobile-apps -->
<link href="css/styleL.css" rel="stylesheet" type="text/css" media="all" />
<link href='//fonts.googleapis.com/css?family=Cabin:400,400italic,500,500italic,600,700,600italic,700italic' rel='stylesheet' type='text/css'>
<link href='//fonts.googleapis.com/css?family=Syncopate:400,700' rel='stylesheet' type='text/css'>
</head>
<body>
    <form id="form1" runat="server">
    <div>
    <div class="main">
			<h1>Register Form</h1>
			<form>
            <br />Username
            <asp:TextBox ID="username" runat="server"></asp:TextBox>
            <br /><br />Address
            <asp:TextBox ID="Add"  runat="server"></asp:TextBox>
            <br /><br />Age
            <asp:TextBox ID="age" runat="server"></asp:TextBox>
            <br /><br />Gender
            <asp:RadioButton ID="gender" GroupName="gen" Text="Male" runat="server" /><asp:RadioButton ID="gender1"  GroupName="gen"  Text="female" runat="server" /><br />
            <br />Email-id
            <asp:TextBox ID="email" runat="server"></asp:TextBox><br />
            <br />Contect no
            <asp:TextBox ID="contect" runat="server"></asp:TextBox><br />
            <br />Password
            <asp:TextBox ID="password"  runat="server"></asp:TextBox>
            <br />
            <br />
            <asp:Button ID="submit" runat="server" Text="register" />
			</form>
		</div>
    
		<div class="footer">
			<p>&copy 2017 Welcome Login Form. All rights reserved |</p>
		</div>
    </div>
    </form>
</body>
</html>

