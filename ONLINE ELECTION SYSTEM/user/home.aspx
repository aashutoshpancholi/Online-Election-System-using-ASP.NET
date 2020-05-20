<%@ Page Title="" Language="VB" MasterPageFile="~/user/user.master" AutoEventWireup="false" CodeFile="home.aspx.vb" Inherits="user_home" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
<div class="banner">
		<div class="container">
				<section class="slider">
					<div class="flexslider">
						<ul class="slides">
							<li>
								<div class="banner-info">
									<div class="dummy_text">
										<h1>Welcome to </h1>
										</h1>
									</div>
								</div>
							</li>
							<li>
								<div class="banner-info">
									<div class="dummy_text">
										<h1>Online Election 
										</h1>
									</div>
								</div>
							</li>
							<li>
								<div class="banner-info">
									<div class="dummy_text">
										<h1>System
										</h1>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</section>
			</div>
			<!-- FlexSlider -->
				<script defer src="js/jquery.flexslider.js"></script>
				<script type="text/javascript">
				    $(window).load(function () {
				        $('.flexslider').flexslider({
				            animation: "slide",
				            start: function (slider) {
				                $('body').removeClass('loading');
				            }
				        });
				    });
									  </script>
			<!-- //FlexSlider -->
	</div>
</asp:Content>

