<%@ Page Title="" Language="VB" MasterPageFile="~/user/user.master" AutoEventWireup="false" CodeFile="candidate.aspx.vb" Inherits="user_candidate" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
<br /><br /><br /><br /><div><center>
<h2>Candiadte info</h2>
<%Response.Write(s)%>
 select candidate for vote:
    <asp:DropDownList ID="DropDownList1" runat="server" DataSourceID="SqlDataSource1" 
            DataTextField="C_name" DataValueField="C_name" Width="80px">
    </asp:DropDownList>
        <asp:SqlDataSource ID="SqlDataSource1" runat="server" 
            ConnectionString="<%$ ConnectionStrings:ConnectionString %>" 
            SelectCommand="SELECT [C_name] FROM [Candidate_info]"></asp:SqlDataSource>
            <asp:Button ID="Button1" runat="server" Text="Give Vote" />
</center></div>
    
</asp:Content>

