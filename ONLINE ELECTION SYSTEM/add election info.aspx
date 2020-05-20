<%@ Page Title="" Language="VB" MasterPageFile="~/MasterPage.master" AutoEventWireup="false" CodeFile="add election info.aspx.vb" Inherits="add_election_info" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
<table>
    <tr><td>E type</td><td>   <asp:TextBox ID="etype" runat="server"></asp:TextBox>
        <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" 
            ControlToValidate="etype" ErrorMessage="ENTER ELECTION TYPE"></asp:RequiredFieldValidator>
        </td> </tr> 
    <tr><td>E date & time</td> <td>  <asp:TextBox ID="edatetime" runat="server"></asp:TextBox>
        <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" 
            ControlToValidate="edatetime" ErrorMessage="ENTER ELECTION DATE AND TIME"></asp:RequiredFieldValidator>
        </td> </tr> 
    <tr><td>city</td><td> <asp:TextBox ID="city" runat="server"></asp:TextBox>
        <asp:RequiredFieldValidator ID="RequiredFieldValidator3" runat="server" 
            ControlToValidate="city" ErrorMessage="ENTER CITY"></asp:RequiredFieldValidator>
        </td> </tr> 
    <tr><td></td><td><asp:Button ID="ok" runat="server" Text="submit"></asp:Button></td> </tr>  
</table>
</asp:Content>

