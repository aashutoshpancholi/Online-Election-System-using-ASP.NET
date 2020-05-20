<%@ Page Title="" Language="VB" MasterPageFile="~/MasterPage.master" AutoEventWireup="false" CodeFile="add new result.aspx.vb" Inherits="add_new_result" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
<table>
    <tr><td> E id</td><td> <asp:TextBox ID="eid" runat="server"></asp:TextBox>
        <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" 
            ErrorMessage="ENTER ELECTION ID" ControlToValidate="eid"></asp:RequiredFieldValidator>
        </td> </tr> 
    <tr><td> totle votes </td> <td><asp:TextBox ID="votes" runat="server"></asp:TextBox>
        <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" 
            ErrorMessage="ENTER TOTLE VOTES" ControlToValidate="votes"></asp:RequiredFieldValidator>
        <asp:RangeValidator ID="RangeValidator1" runat="server" 
            ControlToValidate="votes" ErrorMessage="ENTER VALID TOTLE" MaximumValue="5000" 
            MinimumValue="0"></asp:RangeValidator>
        </td> </tr> 
    <tr><td></td><td><asp:Button ID="ok" runat="server" Text="submit"></asp:Button></td> </tr>  
</table>
</asp:Content>

