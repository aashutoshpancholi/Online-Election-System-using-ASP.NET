<%@ Page Title="" Language="VB" MasterPageFile="~/user/user.master" AutoEventWireup="false" CodeFile="feedback.aspx.vb" Inherits="user_feedback" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
<br /><br /><br /><br /><div><center>
<h3>Feedback</h3>
<br />
    <asp:Label ID="Label1" runat="server" Text="Subject"></asp:Label><br />
    <asp:TextBox ID="subject" runat="server"></asp:TextBox><br />
    <asp:Label ID="Label2" runat="server" Text="message"></asp:Label><br />
    <asp:TextBox ID="message" TextMode="MultiLine" Columns="25" Rows="3" runat="server"></asp:TextBox><br /><br />
    <asp:Button ID="Button1" runat="server" Text="submit" />

</center></div>
<br />
</asp:Content>

