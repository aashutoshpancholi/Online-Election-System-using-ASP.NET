<%@ Page Language="VB" AutoEventWireup="false" CodeFile="Login.aspx.vb" Inherits="Login1" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>LOGIN </title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="keywords" content="Trendy Tab Login Form template Responsive, Login form web template,Flat Pricing tables,Flat Drop downs  Sign up Web Templates, Flat Web Templates, Login sign up Responsive web template, SmartPhone Compatible web template, free WebDesigns for Nokia, Samsung, LG, SonyEricsson, Motorola web design" />
<script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>
<!-- Custom Theme files -->
<link href="css/style1.css" rel="stylesheet" type="text/css" media="all" />
<!-- //Custom Theme files -->
<!-- web font -->
<link href='//fonts.googleapis.com/css?family=Open+Sans:400,300,600,700,800' rel='stylesheet' type='text/css'><!--web font-->
<!-- //web font -->
<!-- js -->
<script src="js/jquery.min.js"></script>
<script src="js/easyResponsiveTabs.js" type="text/javascript"></script>
<!-- //js -->
</head>
<body>
    <form id="form1" runat="server">
   <div class="main">
		<h1>LOGIN</h1>
		<div class="login-form">
			<div class="sap_tabs w3ls-tabs">
				<div id="horizontalTab" style="display: block; width: 100%; margin: 0px;">
					<ul class="resp-tabs-list">
						<li class="resp-tab-item" aria-controls="tab_item-0" role="tab"><span>Login</span></li> 
		
					</ul>	
					<div class="clear"> </div>
					<div class="resp-tabs-container">
						<div class="tab-1 resp-tab-content" aria-labelledby="tab_item-0">
							<div class="login-agileits-top"> 
								<form action="#" method="post">
									<p>User Name </p>
									<asp:TextBox ID="Username" runat="server"></asp:TextBox>
									<p>Password</p>
									<asp:TextBox ID="Password" TextMode="Password"  runat="server"></asp:TextBox>	 
                                    <p></p>
								
                                <asp:Button ID="Button1" runat="server" Text="Login" />
								</form>  
							</div>
							<div class="login-agileits-bottom"> 
								<p><a href="#">Forgot password?</a></p>
							</div> 
						</div> 
					
					</div>							
				</div>	 
			</div> 
			<!-- ResponsiveTabs js -->
			<script type="text/javascript">
			    $(document).ready(function () {
			        $('#horizontalTab').easyResponsiveTabs({
			            type: 'default', //Types: default, vertical, accordion           
			            width: 'auto', //auto or any width like 600px
			            fit: true   // 100% fit in a container
			        });
			    });
			</script>
			<!-- //ResponsiveTabs js -->
		</div>	
	</div>
    </form>
</body>
</html>
