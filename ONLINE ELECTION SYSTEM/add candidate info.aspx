<%@ Page Title="" Language="VB" MasterPageFile="~/MasterPage.master" AutoEventWireup="false" CodeFile="add candidate info.aspx.vb" Inherits="add_candidate_info" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
    <style type="text/css">
        .style1
        {
            height: 27px;
        }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
<table>
    <tr><td>candidate name</td> <td> <asp:TextBox ID="Cname" runat="server" ></asp:TextBox>
        <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" 
            ControlToValidate="Cname" ErrorMessage="ENTER CANDIDATE NAME"></asp:RequiredFieldValidator>
        </td> </tr> 
    <tr><td>candidate party</td>  <td> <asp:TextBox ID="cparty" runat="server"></asp:TextBox>
        <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" 
            ControlToValidate="cparty" ErrorMessage="ENTER CANDIDATE PARTY"></asp:RequiredFieldValidator>
        </td> </tr> 
    <tr><td>party symbol</td><td>  
        <asp:FileUpload ID="FileUpload1" runat="server" />
        <asp:RequiredFieldValidator ID="RequiredFieldValidator3" runat="server" 
            ControlToValidate="FileUpload1" ErrorMessage="SELSECT PARTY SYMBOL"></asp:RequiredFieldValidator>
        </td> </tr> 
    <tr><td>address</td>  <td> <asp:TextBox ID="address" runat="server"></asp:TextBox>
        <asp:RequiredFieldValidator ID="RequiredFieldValidator4" runat="server" 
            ControlToValidate="address" ErrorMessage="ENTER ADDRESS"></asp:RequiredFieldValidator>
        </td> </tr> 
    <tr><td>gender</td><td>   <asp:TextBox ID="gender" runat="server"></asp:TextBox>
        <asp:RequiredFieldValidator ID="RequiredFieldValidator5" runat="server" 
            ControlToValidate="gender" ErrorMessage="ENTER CANDIDATS GENDER"></asp:RequiredFieldValidator>
        </td> </tr> 
    <tr><td class="style1">age</td> <td class="style1">  <asp:TextBox ID="ag" runat="server"></asp:TextBox>
        <asp:RequiredFieldValidator ID="RequiredFieldValidator6" runat="server" 
            ControlToValidate="ag" ErrorMessage="ENTER CANDIDATS AGE"></asp:RequiredFieldValidator>
        <asp:RangeValidator ID="RangeValidator1" runat="server" ControlToValidate="ag" 
            ErrorMessage="ENTER VALID AGE" MaximumValue="65" MinimumValue="21"></asp:RangeValidator>
        </td> </tr> 
    <tr><td>criminal record</td><td> <asp:TextBox ID="criminalrecord" runat="server"></asp:TextBox>
        <asp:RequiredFieldValidator ID="RequiredFieldValidator7" runat="server" 
            ErrorMessage="ENTER CANDIDATES CRIMINAL RECORD " 
            ControlToValidate="criminalrecord"></asp:RequiredFieldValidator>
        </td> </tr> 
    <tr><td></td><td><asp:Button ID="ok" runat="server" Text="submit"></asp:Button></td> </tr>  
</table>
</asp:Content>

