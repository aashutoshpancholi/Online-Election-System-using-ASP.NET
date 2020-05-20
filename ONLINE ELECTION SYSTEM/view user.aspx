<%@ Page Title="" Language="VB" MasterPageFile="~/MasterPage.master" AutoEventWireup="false" CodeFile="view user.aspx.vb" Inherits="view_confirm_user" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
<asp:GridView ID="GridView1" runat="server" DataSourceID="SqlDataSource2" 
        AutoGenerateColumns="False" DataKeyNames="Register_id">
    <Columns>
        <asp:CommandField ShowDeleteButton="True" ShowEditButton="True" />
        <asp:BoundField DataField="Register_id" HeaderText="Register_id" 
            InsertVisible="False" ReadOnly="True" SortExpression="Register_id" />
        <asp:BoundField DataField="Name" HeaderText="Name" SortExpression="Name" />
        <asp:BoundField DataField="Address" HeaderText="Address" 
            SortExpression="Address" />
        <asp:BoundField DataField="Contact" HeaderText="Contact" 
            SortExpression="Contact" />
        <asp:BoundField DataField="Email_id" HeaderText="Email_id" 
            SortExpression="Email_id" />
        <asp:BoundField DataField="Age" HeaderText="Age" SortExpression="Age" />
        <asp:BoundField DataField="Gender" HeaderText="Gender" 
            SortExpression="Gender" />
    </Columns>
    </asp:GridView>
    <asp:SqlDataSource ID="SqlDataSource2" runat="server" 
        ConflictDetection="CompareAllValues" 
        ConnectionString="<%$ ConnectionStrings:ConnectionString %>" 
        DeleteCommand="DELETE FROM [Registraion_master] WHERE [Register_id] = @original_Register_id AND (([Name] = @original_Name) OR ([Name] IS NULL AND @original_Name IS NULL)) AND (([Address] = @original_Address) OR ([Address] IS NULL AND @original_Address IS NULL)) AND (([Contact] = @original_Contact) OR ([Contact] IS NULL AND @original_Contact IS NULL)) AND (([Email_id] = @original_Email_id) OR ([Email_id] IS NULL AND @original_Email_id IS NULL)) AND (([Age] = @original_Age) OR ([Age] IS NULL AND @original_Age IS NULL)) AND (([Gender] = @original_Gender) OR ([Gender] IS NULL AND @original_Gender IS NULL))" 
        InsertCommand="INSERT INTO [Registraion_master] ([Name], [Address], [Contact], [Email_id], [Age], [Gender]) VALUES (@Name, @Address, @Contact, @Email_id, @Age, @Gender)" 
        OldValuesParameterFormatString="original_{0}" 
        SelectCommand="SELECT * FROM [Registraion_master]" 
        UpdateCommand="UPDATE [Registraion_master] SET [Name] = @Name, [Address] = @Address, [Contact] = @Contact, [Email_id] = @Email_id, [Age] = @Age, [Gender] = @Gender WHERE [Register_id] = @original_Register_id AND (([Name] = @original_Name) OR ([Name] IS NULL AND @original_Name IS NULL)) AND (([Address] = @original_Address) OR ([Address] IS NULL AND @original_Address IS NULL)) AND (([Contact] = @original_Contact) OR ([Contact] IS NULL AND @original_Contact IS NULL)) AND (([Email_id] = @original_Email_id) OR ([Email_id] IS NULL AND @original_Email_id IS NULL)) AND (([Age] = @original_Age) OR ([Age] IS NULL AND @original_Age IS NULL)) AND (([Gender] = @original_Gender) OR ([Gender] IS NULL AND @original_Gender IS NULL))">
        <DeleteParameters>
            <asp:Parameter Name="original_Register_id" Type="Decimal" />
            <asp:Parameter Name="original_Name" Type="String" />
            <asp:Parameter Name="original_Address" Type="String" />
            <asp:Parameter Name="original_Contact" Type="Decimal" />
            <asp:Parameter Name="original_Email_id" Type="String" />
            <asp:Parameter Name="original_Age" Type="Decimal" />
            <asp:Parameter Name="original_Gender" Type="String" />
        </DeleteParameters>
        <InsertParameters>
            <asp:Parameter Name="Name" Type="String" />
            <asp:Parameter Name="Address" Type="String" />
            <asp:Parameter Name="Contact" Type="Decimal" />
            <asp:Parameter Name="Email_id" Type="String" />
            <asp:Parameter Name="Age" Type="Decimal" />
            <asp:Parameter Name="Gender" Type="String" />
        </InsertParameters>
        <UpdateParameters>
            <asp:Parameter Name="Name" Type="String" />
            <asp:Parameter Name="Address" Type="String" />
            <asp:Parameter Name="Contact" Type="Decimal" />
            <asp:Parameter Name="Email_id" Type="String" />
            <asp:Parameter Name="Age" Type="Decimal" />
            <asp:Parameter Name="Gender" Type="String" />
            <asp:Parameter Name="original_Register_id" Type="Decimal" />
            <asp:Parameter Name="original_Name" Type="String" />
            <asp:Parameter Name="original_Address" Type="String" />
            <asp:Parameter Name="original_Contact" Type="Decimal" />
            <asp:Parameter Name="original_Email_id" Type="String" />
            <asp:Parameter Name="original_Age" Type="Decimal" />
            <asp:Parameter Name="original_Gender" Type="String" />
        </UpdateParameters>
    </asp:SqlDataSource>
    <asp:SqlDataSource ID="SqlDataSource1" runat="server"></asp:SqlDataSource>
</asp:Content>

